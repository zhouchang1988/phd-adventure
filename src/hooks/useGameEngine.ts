'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { type GameState, type StoryNode, type Choice, type Attributes } from '@/types/game';
import { type Chapter } from '@/lib/tokens';
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
};

export function useGameEngine() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const playTimeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { save, load } = useSaveSystem();

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
    setState(prev => ({
      ...prev,
      currentNode: nodeId,
      chapter: node.chapter,
    }));
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

  const saveGame = useCallback((slot: string = 'auto') => {
    save(state, slot);
  }, [state, save]);

  const loadGame = useCallback((slot: string = 'auto') => {
    const loadedState = load(slot);
    if (loadedState) {
      setState(loadedState);
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
    saveGame,
    loadGame,
    restart,
  };
}
