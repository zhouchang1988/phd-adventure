'use client';

import { useEffect, useRef } from 'react';
import { type Chapter } from '@/lib/tokens';
import { type Dialogue, type Choice } from '@/types/game';
import { ChatMessage } from './ChatMessage';
import { ChoicePanel } from './ChoicePanel';

interface ChatContainerProps {
  dialogues: Dialogue[];
  currentDialogueIndex: number;
  chapter: Chapter;
  choices?: Choice[];
  showChoices: boolean;
  onContinue: () => void;
  onChoiceSelect: (choice: Choice) => void;
}

export function ChatContainer({
  dialogues,
  currentDialogueIndex,
  chapter,
  choices,
  showChoices,
  onContinue,
  onChoiceSelect,
}: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentDialogueIndex, showChoices]);

  const visibleDialogues = dialogues.slice(0, currentDialogueIndex + 1);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {visibleDialogues.map((dialogue, index) => (
          <ChatMessage
            key={index}
            dialogue={dialogue}
            chapter={chapter}
            isLatest={index === currentDialogueIndex}
            onContinue={onContinue}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {showChoices && choices && (
        <div className="px-4 pb-4">
          <ChoicePanel
            choices={choices}
            onSelect={onChoiceSelect}
          />
        </div>
      )}
    </div>
  );
}