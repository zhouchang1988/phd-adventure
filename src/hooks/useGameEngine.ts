'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { type GameState, type StoryNode, type Choice, type Attributes } from '@/types/game';
import { type Chapter, CHAPTER_ORDER } from '@/lib/tokens';
import { getStoryNode } from '@/lib/story';
import { useSaveSystem } from './useSaveSystem';

const INITIAL_STATE: GameState = {
  currentNode: 'prologue_1',
  chapter: 'prologue',
  attributes: {
    spirit: 0,
    sense: 15,
    wisdom: 85,
    science: 99,
    money: 5000,
  },
  relationships: {},
  flags: {},
  achievements: [],
  playTime: 0,
  visitedChapters: ['prologue'],
};

export function useGameEngine() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const playTimeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { save, load } = useSaveSystem();

  // 自动存档：状态变化时保存到localStorage（防抖500ms）
  useEffect(() => {
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }
    saveTimerRef.current = setTimeout(() => {
      save(state, 'auto');
    }, 500);

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [state, save]);

  useEffect(() => {
    playTimeTimerRef.current = setInterval(() => {
      setState(prev => ({ ...prev, playTime: prev.playTime + 1 }));
    }, 1000);

    return () => {
      if (playTimeTimerRef.current) {
        clearInterval(playTimeTimerRef.current);
      }
    };
  }, []);

  const loadNode = useCallback((nodeId: string, node: StoryNode) => {
    setState(prev => {
      if (prev.visitedChapters.includes(node.chapter)) {
        return {
          ...prev,
          currentNode: nodeId,
          chapter: node.chapter,
        };
      }

      const chapterIndex = CHAPTER_ORDER.indexOf(node.chapter);
      const allPreviousChapters = CHAPTER_ORDER.slice(0, chapterIndex + 1);
      const visitedChapters = [...new Set([...prev.visitedChapters, ...allPreviousChapters])];
      
      return {
        ...prev,
        currentNode: nodeId,
        chapter: node.chapter,
        visitedChapters,
      };
    });
  }, []);

  const makeChoice = useCallback((choice: Choice) => {
    setState(prev => {
      const newState = { ...prev };

      if (choice.effects?.attributes) {
        const newAttributes = { ...newState.attributes };
        Object.entries(choice.effects.attributes).forEach(([key, value]) => {
          if (value !== undefined) {
            (newAttributes as Record<string, number>)[key] += value;
          }
        });
        newState.attributes = newAttributes;
      }

      if (choice.effects?.flags) {
        newState.flags = { ...newState.flags, ...choice.effects.flags };
      }

      if (choice.effects?.relationships) {
        Object.entries(choice.effects.relationships).forEach(([key, value]) => {
          newState.relationships = {
            ...newState.relationships,
            [key]: (newState.relationships[key] || 0) + value,
          };
        });
      }

      if (choice.effects?.achievements) {
        newState.achievements = [
          ...new Set([...newState.achievements, ...choice.effects.achievements]),
        ];
      }

      return newState;
    });
  }, []);

  const startAutoPlay = useCallback((delay: number, callback: () => void) => {
    setIsAutoPlaying(true);
    autoPlayTimerRef.current = setTimeout(() => {
      callback();
      setIsAutoPlaying(false);
    }, delay);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    setIsAutoPlaying(false);
  }, []);

  const jumpToChapter = useCallback((chapter: Chapter) => {
    const nodeId = `${chapter}_1`;
    const node = getStoryNode(nodeId);
    if (node) {
      setState(prev => ({
        ...prev,
        currentNode: nodeId,
        chapter: chapter,
      }));
    }
  }, []);

  const loadGame = useCallback((slot: string = 'auto') => {
    const loadedState = load(slot);
    if (loadedState) {
      const currentChapter = loadedState.chapter || 'prologue';
      const chapterIndex = CHAPTER_ORDER.indexOf(currentChapter);
      const allPreviousChapters = CHAPTER_ORDER.slice(0, chapterIndex + 1);
      
      const visitedChapters = loadedState.visitedChapters 
        ? [...new Set([...loadedState.visitedChapters, ...allPreviousChapters])]
        : allPreviousChapters;

      const stateWithDefaults = {
        ...INITIAL_STATE,
        ...loadedState,
        visitedChapters,
      };
      setState(stateWithDefaults);
      return true;
    }
    return false;
  }, [load]);

  const restart = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  return {
    state,
    isAutoPlaying,
    loadNode,
    makeChoice,
    startAutoPlay,
    stopAutoPlay,
    loadGame,
    jumpToChapter,
    restart,
  };
}
