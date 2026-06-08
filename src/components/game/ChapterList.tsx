'use client';

import { cn } from '@/lib/utils';
import { tokens, type Chapter } from '@/lib/tokens';

interface ChapterListProps {
  isOpen: boolean;
  onClose: () => void;
  visitedChapters: Chapter[];
  currentChapter: Chapter;
  onChapterSelect: (chapter: Chapter) => void;
}

const ALL_CHAPTERS: Chapter[] = [
  'prologue',
  'chapter1',
  'chapter2',
  'chapter3',
  'chapter4',
  'chapter5',
  'epilogue',
];

const CHAPTER_NAMES: Record<Chapter, string> = {
  prologue: '序章：海边的石头',
  chapter1: '第一章：这不科学',
  chapter2: '第二章：入道',
  chapter3: '第三章：双重生活',
  chapter4: '第四章：灵气复苏',
  chapter5: '第五章：踏天之路',
  epilogue: '终章：共振',
};

export function ChapterList({
  isOpen,
  onClose,
  visitedChapters,
  currentChapter,
  onChapterSelect,
}: ChapterListProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md mx-4 animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-text-primary text-xl font-bold">
            章节选择
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2">
          {ALL_CHAPTERS.map((chapter) => {
            const isVisited = visitedChapters.includes(chapter);
            const isCurrent = chapter === currentChapter;
            const chapterColor = tokens.chapters[chapter];

            return (
              <button
                key={chapter}
                onClick={() => {
                  if (isVisited) {
                    onChapterSelect(chapter);
                    onClose();
                  }
                }}
                disabled={!isVisited}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left',
                  isCurrent && 'bg-bg-highlight',
                  isVisited
                    ? 'hover:bg-bg-card cursor-pointer'
                    : 'opacity-40 cursor-not-allowed'
                )}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: chapterColor }}
                />
                <span className={cn(
                  'text-sm',
                  isCurrent ? 'text-text-primary font-medium' : 'text-text-secondary'
                )}>
                  {CHAPTER_NAMES[chapter]}
                </span>
                {isCurrent && (
                  <span className="ml-auto text-xs text-text-muted">
                    当前
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-2 bg-bg-card hover:bg-bg-highlight rounded-lg text-text-primary transition-colors"
        >
          关闭
        </button>
      </div>
    </div>
  );
}
