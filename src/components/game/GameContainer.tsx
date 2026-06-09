'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useGameEngine } from '@/hooks/useGameEngine';
import { getStoryNode } from '@/lib/story';
import { ChatContainer } from './ChatContainer';
import { StatusBar } from './StatusBar';
import { ChapterList } from './ChapterList';
import { type Choice } from '@/types/game';

export function GameContainer() {
  const {
    state,
    isAutoPlaying,
    loadNode,
    makeChoice,
    startAutoPlay,
    stopAutoPlay,
    loadGame,
    jumpToChapter,
    restart,
  } = useGameEngine();

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);
  const autoPlayCallbackRef = useRef<(() => void) | null>(null);
  const dialogueIndexRef = useRef(0);
  const stateRef = useRef(state);

  // 页面加载时自动加载存档
  useEffect(() => {
    loadGame('auto');
  }, [loadGame]);

  const currentNode = getStoryNode(state.currentNode);
  dialogueIndexRef.current = currentDialogueIndex;
  stateRef.current = state;

  useEffect(() => {
    setCurrentDialogueIndex(0);
    setShowChoices(false);
  }, [state.currentNode]);

  const handleDialogueContinue = useCallback(() => {
    const node = getStoryNode(stateRef.current.currentNode);
    if (!node) return;

    const nextIndex = dialogueIndexRef.current + 1;

    if (nextIndex < node.dialogues.length) {
      setCurrentDialogueIndex(nextIndex);
    } else if (node.choices) {
      setShowChoices(true);
    } else if (node.autoNext) {
      const nextNode = getStoryNode(node.autoNext);
      if (nextNode) {
        const callback = () => {
          loadNode(node.autoNext!, nextNode);
          autoPlayCallbackRef.current = null;
        };
        autoPlayCallbackRef.current = callback;
        startAutoPlay(node.autoDelay || 2000, callback);
      }
    }
  }, [loadNode, startAutoPlay]);

  const handleSkip = useCallback(() => {
    if (autoPlayCallbackRef.current) {
      autoPlayCallbackRef.current();
    }
    stopAutoPlay();
  }, [stopAutoPlay]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (autoPlayCallbackRef.current) {
          autoPlayCallbackRef.current();
          stopAutoPlay();
        } else {
          handleDialogueContinue();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDialogueContinue, stopAutoPlay]);

  const handleChoiceSelect = useCallback((choice: Choice) => {
    makeChoice(choice);
    const nextNode = getStoryNode(choice.nextNode);
    if (nextNode) {
      loadNode(choice.nextNode, nextNode);
    }
  }, [makeChoice, loadNode]);

  const handleRestart = useCallback(() => {
    if (confirm('确定要重生吗？这将回到游戏开始。')) {
      restart();
    }
  }, [restart]);



  if (!currentNode) {
    return <div className="text-white">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-[420px] h-screen flex flex-col bg-bg-primary relative">
        <StatusBar
          chapter={state.chapter}
          attributes={state.attributes}
          onChapterClick={() => setShowChapterList(true)}
          onRestart={handleRestart}
        />

        <div className="flex-1 pt-16 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-hidden">
            <ChatContainer
              dialogues={currentNode.dialogues}
              currentDialogueIndex={currentDialogueIndex}
              chapter={state.chapter}
              choices={currentNode.choices}
              showChoices={showChoices}
              isAutoPlaying={isAutoPlaying}
              onContinue={handleDialogueContinue}
              onChoiceSelect={handleChoiceSelect}
            />
          </div>

          {isAutoPlaying && (
            <div className="flex justify-center py-3 bg-bg-primary/80">
              <button
                onClick={handleSkip}
                className="text-text-secondary text-sm hover:text-text-primary bg-bg-card px-4 py-2 rounded-full"
              >
                点击跳过 / 按空格继续
              </button>
            </div>
          )}
        </div>

        <ChapterList
          isOpen={showChapterList}
          onClose={() => setShowChapterList(false)}
          visitedChapters={state.visitedChapters}
          currentChapter={state.chapter}
          onChapterSelect={jumpToChapter}
        />

      </div>
    </div>
  );
}
