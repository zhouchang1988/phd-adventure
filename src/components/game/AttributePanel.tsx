'use client';

import { cn } from '@/lib/utils';
import { type Attributes } from '@/types/game';

interface AttributePanelProps {
  attributes: Attributes;
  isOpen: boolean;
  onClose: () => void;
}

interface AttributeBarProps {
  label: string;
  value: number;
  max: number;
  color: string;
  icon: string;
}

function AttributeBar({ label, value, max, color, icon }: AttributeBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="flex items-center gap-2 text-text-primary">
          <span>{icon}</span>
          <span>{label}</span>
        </span>
        <span className="text-text-secondary font-mono">
          {value}/{max}
        </span>
      </div>
      <div className="h-2 bg-bg-card rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export function AttributePanel({ attributes, isOpen, onClose }: AttributePanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md mx-4 animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-text-primary text-xl font-bold">
            【修仙系统 v2.0】
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <AttributeBar
            label="灵力"
            value={attributes.spirit}
            max={100}
            color="#8b5cf6"
            icon="🔮"
          />
          <AttributeBar
            label="神识"
            value={attributes.sense}
            max={100}
            color="#3b82f6"
            icon="🧠"
          />
          <AttributeBar
            label="悟性"
            value={attributes.wisdom}
            max={100}
            color="#f59e0b"
            icon="💡"
          />
          <AttributeBar
            label="科理值"
            value={attributes.science}
            max={100}
            color="#10b981"
            icon="🔬"
          />
          <div className="flex items-center justify-between text-text-primary">
            <span className="flex items-center gap-2">
              <span>💰</span>
              <span>金钱</span>
            </span>
            <span className="font-mono">{attributes.money}</span>
          </div>
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
