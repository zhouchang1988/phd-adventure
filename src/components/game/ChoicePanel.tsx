'use client';

import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { type Choice } from '@/types/game';

interface ChoicePanelProps {
  choices: Choice[];
  onSelect: (choice: Choice) => void;
  disabled?: boolean;
}

export function ChoicePanel({ choices, onSelect, disabled = false }: ChoicePanelProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {choices.map((choice, index) => {
        const styleColor = tokens.choices[choice.style];

        return (
          <button
            key={choice.id}
            onClick={() => onSelect(choice)}
            disabled={disabled}
            className={cn(
              'w-full text-left',
              'bg-bg-card hover:bg-bg-highlight',
              'rounded-lg px-6 py-4',
              'border-l-4',
              'transition-all duration-200',
              'hover:scale-[1.02] hover:shadow-lg',
              'active:scale-[0.98]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'group',
              'animate-slideUp'
            )}
            style={{
              borderLeftColor: styleColor,
              animationDelay: `${index * 100}ms`,
            }}
          >
            <span className="text-text-primary group-hover:text-white transition-colors">
              {choice.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}
