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
  isTyping: boolean;
  onTypingComplete: () => void;
  onContinue: () => void;
  onChoiceSelect: (choice: Choice) => void;
}

export function ChatContainer({
  dialogues,
  currentDialogueIndex,
  chapter,
  choices,
  showChoices,
  isTyping,
  onTypingComplete,
  onContinue,
  onChoiceSelect,
}: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentDialogueIndex, showChoices]);

  // 显示到当前对话为止的所有消息
  const visibleDialogues = dialogues.slice(0, currentDialogueIndex + 1);

  return (
    <div className="flex flex-col h-full">
      {/* 聊天消息区域 */}
      <div
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
      >
        {visibleDialogues.map((dialogue, index) => (
          <ChatMessage
            key={index}
            dialogue={dialogue}
            chapter={chapter}
            isLatest={index === currentDialogueIndex}
            isTyping={isTyping && index === currentDialogueIndex}
            onTypingComplete={onTypingComplete}
            onContinue={onContinue}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 选项区域 */}
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