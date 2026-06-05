'use client';

import { useState, useCallback, useEffect } from 'react';
import { useGameEngine } from '@/hooks/useGameEngine';
import { getStoryNode } from '@/lib/story';
import { DialogueBox } from './DialogueBox';
import { ChoicePanel } from './ChoicePanel';
import { SceneBackground } from './SceneBackground';
import { StatusBar } from './StatusBar';
import { AttributePanel } from './AttributePanel';
import { type Choice } from '@/types/game';

export function GameContainer() {
  const {
    state,
    isAutoPlaying,
    loadNode,
    makeChoice,
    startAutoPlay,
    stopAutoPlay,
    saveGame,
    loadGame,
    restart,
  } = useGameEngine();

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [showAttributes, setShowAttributes] = useState(false);

  const currentNode = getStoryNode(state.currentNode);

  useEffect(() => {
    setCurrentDialogueIndex(0);
    setShowChoices(false);
    setIsTyping(true);
  }, [state.currentNode]);

  const handleDialogueContinue = useCallback(() => {
    if (!currentNode) return;

    const nextIndex = currentDialogueIndex + 1;

    if (nextIndex < currentNode.dialogues.length) {
      setCurrentDialogueIndex(nextIndex);
      setIsTyping(true);
    } else if (currentNode.choices) {
      setShowChoices(true);
    } else if (currentNode.autoNext) {
      const nextNode = getStoryNode(currentNode.autoNext);
      if (nextNode) {
        startAutoPlay(currentNode.autoDelay || 2000, () => {
          loadNode(currentNode.autoNext!, nextNode);
        });
      }
    }
  }, [currentNode, currentDialogueIndex, loadNode, startAutoPlay]);

  const handleTypingComplete = useCallback(() => {
    setIsTyping(false);
  }, []);

  const handleChoiceSelect = useCallback((choice: Choice) => {
    makeChoice(choice);
    const nextNode = getStoryNode(choice.nextNode);
    if (nextNode) {
      loadNode(choice.nextNode, nextNode);
    }
  }, [makeChoice, loadNode]);

  const handleSave = useCallback(() => {
    saveGame();
    alert('存档成功！');
  }, [saveGame]);

  if (!currentNode) {
    return <div className="text-white">加载中...</div>;
  }

  const currentDialogue = currentNode.dialogues[currentDialogueIndex];

  return (
    <SceneBackground sceneId={currentNode.background} chapter={state.chapter}>
      <StatusBar
        chapter={state.chapter}
        attributes={state.attributes}
        onSave={handleSave}
        onSettings={() => setShowAttributes(true)}
      />

      <div className="flex flex-col justify-end h-full pb-8 px-4">
        {!showChoices && currentDialogue && (
          <DialogueBox
            dialogue={currentDialogue}
            chapter={state.chapter}
            isTyping={isTyping}
            onTypingComplete={handleTypingComplete}
            onContinue={handleDialogueContinue}
          />
        )}

        {showChoices && currentNode.choices && (
          <ChoicePanel
            choices={currentNode.choices}
            onSelect={handleChoiceSelect}
          />
        )}
      </div>

      {isAutoPlaying && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <button
            onClick={stopAutoPlay}
            className="text-text-secondary text-sm hover:text-text-primary"
          >
            点击跳过
          </button>
        </div>
      )}

      <AttributePanel
        attributes={state.attributes}
        isOpen={showAttributes}
        onClose={() => setShowAttributes(false)}
      />
    </SceneBackground>
  );
}
