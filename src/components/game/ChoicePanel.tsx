'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { type Choice } from '@/types/game';

interface ChoicePanelProps {
  choices: Choice[];
  onSelect: (choice: Choice) => void;
  disabled?: boolean;
}

const styleIcons: Record<string, string> = {
  rational: '🧠',
  casual: '💬',
  academic: '📚',
  danger: '⚠️',
};

export function ChoicePanel({ choices, onSelect, disabled = false }: ChoicePanelProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = useCallback((choice: Choice) => {
    setSelectedId(choice.id);
    setTimeout(() => {
      setSelectedId(null);
      onSelect(choice);
    }, 500);
  }, [onSelect]);

  return (
    <div className="w-full space-y-2.5">
      <div className="text-center mb-3">
        <span className="text-[#4a5568] text-xs tracking-widest uppercase">做出选择</span>
      </div>
      {choices.map((choice, index) => {
        const styleColor = tokens.choices[choice.style];
        const icon = styleIcons[choice.style] || '▸';
        const isSelected = selectedId === choice.id;

        return (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice)}
            disabled={disabled || selectedId !== null}
            className={cn(
              'w-full text-left',
              'rounded-xl px-5 py-3.5',
              'transition-all duration-200',
              'hover:scale-[1.01] hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]',
              'active:scale-[0.99]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'group',
              'animate-slideUp',
              isSelected 
                ? 'bg-[#1e3a5f] border-2 border-[#4a90d9] shadow-[0_0_20px_rgba(74,144,217,0.3)]'
                : 'bg-[#0f1f3d] hover:bg-[#162544] border border-[#1e3354] hover:border-[#2a4a70]'
            )}
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                style={{ backgroundColor: `${styleColor}20`, color: styleColor }}
              >
                {icon}
              </span>
              <span className={cn(
                'transition-colors text-[15px]',
                isSelected ? 'text-white' : 'text-[#c8d6e5] group-hover:text-white'
              )}>
                {choice.text}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}