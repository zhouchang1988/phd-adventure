'use client';

import { cn } from '@/lib/utils';
import { tokens, type Chapter } from '@/lib/tokens';
import { type Attributes } from '@/types/game';

interface StatusBarProps {
  chapter: Chapter;
  attributes: Attributes;
  onChapterClick?: () => void;
  onRestart?: () => void;
}

function getChapterName(chapter: Chapter): string {
  const names: Record<Chapter, string> = {
    prologue: '序章：海边的石头',
    chapter1: '第一章：这不科学',
    chapter2: '第二章：入道',
    chapter3: '第三章：双重生活',
    chapter4: '第四章：灵气复苏',
    chapter5: '第五章：踏天之路',
    epilogue: '终章：共振',
  };
  return names[chapter] || '';
}

export function StatusBar({ chapter, attributes, onChapterClick, onRestart }: StatusBarProps) {
  const chapterColor = tokens.chapters[chapter];

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between px-6 py-3 bg-bg-primary/80 backdrop-blur-sm">
        <button
          onClick={onChapterClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: chapterColor }}
          />
          <span className="text-text-secondary text-sm">
            {getChapterName(chapter)}
          </span>
        </button>

        <button
          onClick={onRestart}
          className="text-text-secondary hover:text-text-primary text-sm transition-colors"
          title="重生"
        >
          🔄
        </button>
      </div>
    </div>
  );
}
