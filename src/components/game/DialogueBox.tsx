'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { tokens, type Chapter } from '@/lib/tokens';
import { getCharacter } from '@/lib/characters';
import { type Dialogue } from '@/types/game';

interface DialogueBoxProps {
  dialogue: Dialogue;
  chapter: Chapter;
  isTyping?: boolean;
  onTypingComplete?: () => void;
  onContinue?: () => void;
}

export function DialogueBox({
  dialogue,
  chapter,
  isTyping = true,
  onTypingComplete,
  onContinue,
}: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const character = getCharacter(dialogue.speaker);
  const chapterColor = tokens.chapters[chapter];

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText(dialogue.text);
      setIsComplete(true);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let index = 0;

    const timer = setInterval(() => {
      if (index < dialogue.text.length) {
        setDisplayedText(dialogue.text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
        onTypingComplete?.();
      }
    }, 30);

    return () => clearInterval(timer);
  }, [dialogue.text, isTyping, onTypingComplete]);

  const handleClick = () => {
    if (!isComplete) {
      setDisplayedText(dialogue.text);
      setIsComplete(true);
      onTypingComplete?.();
    } else {
      onContinue?.();
    }
  };

  return (
    <div
      className={cn(
        'relative w-full max-w-2xl mx-auto cursor-pointer',
        'bg-bg-secondary/90 backdrop-blur-sm',
        'rounded-xl p-6',
        'shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
        'border-l-4',
        'animate-fadeIn'
      )}
      style={{ borderLeftColor: chapterColor }}
      onClick={handleClick}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${chapterColor}20` }}
        >
          <span className="text-lg">{character.emoji}</span>
        </div>
        <h3 className="text-text-primary font-bold text-lg">
          {character.name}
        </h3>
        {dialogue.emotion && (
          <span className="text-sm text-text-secondary">
            {character.expressions[dialogue.emotion] || ''}
          </span>
        )}
      </div>

      <div className="min-h-[60px]">
        <p className="text-text-primary leading-relaxed">
          {displayedText}
        </p>
      </div>

      {isComplete && (
        <div className="absolute bottom-3 right-4 animate-blink">
          <span className="text-text-secondary text-sm">▼</span>
        </div>
      )}
    </div>
  );
}
