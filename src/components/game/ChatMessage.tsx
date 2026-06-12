'use client';

import { } from 'react';
import { cn } from '@/lib/utils';
import { tokens, type Chapter } from '@/lib/tokens';
import { getCharacter } from '@/lib/characters';
import { type Dialogue } from '@/types/game';

interface ChatMessageProps {
  dialogue: Dialogue;
  chapter: Chapter;
  isLatest: boolean;
}

export function ChatMessage({
  dialogue,
  chapter,
  isLatest,
}: ChatMessageProps) {
  const character = getCharacter(dialogue.speaker);
  const chapterColor = tokens.chapters[chapter];

  const isNarrator = dialogue.speaker === 'narrator';
  const isSystem = dialogue.speaker === 'system';
  const isPlayer = dialogue.speaker === 'xiefan';

  if (isSystem) {
    return (
      <div className="flex justify-center my-6">
        <div
          className={cn(
            'px-5 py-2.5 rounded-full',
            'bg-accent-info/15 text-accent-info',
            'border border-accent-info/30',
            'text-sm font-medium tracking-wide',
            'animate-fadeIn'
          )}
        >
          {dialogue.text}
          {isLatest && (
            <span className="ml-2 opacity-50 animate-pulse">▼</span>
          )}
        </div>
      </div>
    );
  }

  if (isNarrator) {
    return (
      <div
        className={cn(
          'my-6 mx-4 animate-fadeIn',
          'block w-[calc(100%-3rem)] text-left'
        )}
      >
        <div className={cn(
          'relative px-5 py-4 rounded-lg',
          'bg-[#0c1a35] border border-[#1a2d50]',
          'shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
        )}>
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
            style={{ backgroundColor: chapterColor }}
          />
          <p className="leading-relaxed text-[#c8d6e5] pl-2 text-[15px]">
            {dialogue.text}
          </p>
          {isLatest && (
            <div className="text-right mt-2">
              <span className="text-[#4a5568] text-xs animate-pulse">▼ 点击继续</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex gap-2.5 my-4 px-4 animate-fadeIn w-full text-left',
        isPlayer ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      <div
        className={cn(
          'w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-base',
          isPlayer
            ? 'bg-accent-primary/20 ring-2 ring-accent-primary/40'
            : 'bg-[#1a2d50] ring-2 ring-[#2a4060]'
        )}
      >
        {character.emoji}
      </div>

      <div
        className={cn(
          'max-w-[75%] rounded-2xl px-4 py-3',
          isPlayer
            ? 'bg-accent-primary text-white rounded-br-md'
            : 'bg-[#162544] text-[#e2e8f0] rounded-bl-md border border-[#1e3354]'
        )}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className={cn(
            'font-semibold text-xs',
            isPlayer ? 'text-white/80' : 'text-[#7eb8da]'
          )}>
            {character.name}
          </span>
          {dialogue.emotion && (
            <span className="text-xs opacity-60">
              {character.expressions[dialogue.emotion] || ''}
            </span>
          )}
        </div>

        <p className="leading-relaxed text-[15px]">
          {dialogue.text}
        </p>

        {isLatest && (
          <div className={cn(
            'mt-1.5',
            isPlayer ? 'text-right' : 'text-left'
          )}>
            <span className="text-[10px] opacity-40 animate-pulse">▼</span>
          </div>
        )}
      </div>
    </div>
  );
}
