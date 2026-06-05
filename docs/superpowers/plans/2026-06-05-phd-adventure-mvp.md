# 谢凡的奇幻冒险2.0 - MVP实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

> **⚠️ 必读：** 执行本计划前，请先阅读 [开发规范](../CONTRIBUTING.md)。核心原则：
> 1. **文档先行**：任何改动必须先改文档，再改代码
> 2. **测试护航**：重要代码必须有单元测试
> 3. **三者一致**：文档、代码、测试必须保持同步
> 4. **验证闭环**：代码改动后必须运行测试，失败则修复

**Goal:** 实现游戏序章+第一章的完整可玩版本，包含对话系统、抉择系统、场景渲染和基础UI

**Architecture:** 基于Next.js + Tailwind CSS v4 + Shadcn/ui构建，使用设计令牌系统管理主题，组件化架构实现游戏核心功能

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v4, Shadcn/ui, Framer Motion, localStorage

---

## 文件结构

```
src/
├── app/
│   ├── layout.tsx              # 根布局：主题Provider、全局样式
│   ├── page.tsx                # 主页面：游戏容器
│   └── globals.css             # Tailwind导入、CSS变量
├── components/
│   ├── ui/                     # Shadcn/ui组件
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   └── progress.tsx
│   ├── game/
│   │   ├── GameContainer.tsx   # 游戏主容器：状态管理、场景切换
│   │   ├── DialogueBox.tsx     # 对话框：角色名、对话内容、打字机效果
│   │   ├── ChoicePanel.tsx     # 选项面板：选项按钮、抉择统计
│   │   ├── SceneBackground.tsx # 场景背景：渐变、场景元素
│   │   ├── CharacterSprite.tsx # 角色立绘：CSS绘制、表情切换
│   │   ├── StatusBar.tsx       # 状态栏：章节、属性、存档按钮
│   │   └── AttributePanel.tsx  # 属性面板：灵力、神识、悟性
│   └── effects/
│       ├── Typewriter.tsx      # 打字机效果组件
│       └── ScreenShake.tsx     # 屏幕震动效果
├── lib/
│   ├── tokens.ts               # 设计令牌：颜色、间距、字体
│   ├── theme.ts                # 主题配置：章节主题、深色/浅色
│   ├── characters.ts           # 角色数据：名称、表情、颜色
│   ├── scenes.ts               # 场景数据：背景、元素、氛围
│   ├── story.ts                # 剧情数据：序章+第一章节点
│   └── utils.ts                # 工具函数：cn()、formatTime()
├── hooks/
│   ├── useGameEngine.ts        # 游戏引擎：状态管理、节点切换
│   ├── useDialogue.ts          # 对话系统：打字机、自动播放
│   ├── useSaveSystem.ts        # 存档系统：保存、读取、导出
│   └── useTheme.ts             # 主题Hook：章节主题切换
└── types/
    └── game.ts                 # 类型定义：GameState、StoryNode、Choice
```

---

## Task 1: 项目初始化与配置

**Files:**
- Create: `package.json`
- Create: `tailwind.config.ts`
- Create: `src/app/globals.css`
- Create: `src/lib/tokens.ts`
- Create: `src/lib/utils.ts`

- [ ] **Step 1: 初始化Next.js项目**

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-git --import-alias "@/*"
```

Expected: 项目初始化完成，生成基础文件结构

- [ ] **Step 2: 安装依赖**

```bash
npm install framer-motion clsx tailwind-merge
npx shadcn@latest init
npx shadcn@latest add button dialog progress
```

Expected: 依赖安装完成，Shadcn/ui组件就绪

- [ ] **Step 3: 创建设计令牌**

```typescript
// src/lib/tokens.ts
export const tokens = {
  background: {
    primary: '#0f0f0f',
    secondary: '#1a1a1a',
    card: '#252525',
    highlight: '#2a2a2a',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a0a0a0',
    muted: '#666666',
    disabled: '#444444',
  },
  accent: {
    primary: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#8b5cf6',
  },
  chapters: {
    prologue: '#0ea5e9',
    chapter1: '#8b5cf6',
    chapter2: '#6366f1',
    chapter3: '#f59e0b',
    chapter4: '#ef4444',
    chapter5: '#10b981',
    epilogue: '#ffffff',
  },
  choices: {
    rational: '#3b82f6',
    casual: '#10b981',
    academic: '#8b5cf6',
    danger: '#ef4444',
  },
} as const;

export type Chapter = keyof typeof tokens.chapters;
export type ChoiceStyle = keyof typeof tokens.choices;
```

- [ ] **Step 4: 创建工具函数**

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 5: 配置Tailwind**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tokens } from './src/lib/tokens';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: tokens.background,
        text: tokens.text,
        accent: tokens.accent,
        chapter: tokens.chapters,
        choice: tokens.choices,
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(40) forwards',
        blink: 'blink 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.2s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 6: 更新globals.css**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --chapter-primary: #0ea5e9;
  }
  
  .dark {
    color-scheme: dark;
  }
}

@layer components {
  .dialogue-enter {
    @apply animate-fadeIn;
  }
  
  .choice-enter {
    @apply animate-slideUp;
  }
}
```

- [ ] **Step 7: 验证配置**

```bash
npm run dev
```

Expected: 开发服务器启动成功，页面可访问

- [ ] **Step 8: 提交**

```bash
git add .
git commit -m "feat: initialize project with Tailwind CSS v4 and Shadcn/ui"
```

---

## Task 2: 类型定义与数据结构

**Files:**
- Create: `src/types/game.ts`
- Create: `src/lib/characters.ts`
- Create: `src/lib/scenes.ts`

- [ ] **Step 1: 创建游戏类型定义**

```typescript
// src/types/game.ts
import { type Chapter, type ChoiceStyle } from '@/lib/tokens';

// 游戏状态
export interface GameState {
  currentNode: string;
  chapter: Chapter;
  attributes: Attributes;
  relationships: Record<string, number>;
  flags: Record<string, boolean>;
  achievements: string[];
  playTime: number;
}

// 属性
export interface Attributes {
  spirit: number;      // 灵力
  sense: number;       // 神识
  wisdom: number;      // 悟性
  science: number;     // 科理值
  money: number;       // 金钱
}

// 剧情节点
export interface StoryNode {
  id: string;
  chapter: Chapter;
  title: string;
  background: string;
  dialogues: Dialogue[];
  choices?: Choice[];
  autoNext?: string;
  autoDelay?: number;
  effects?: NodeEffects;
}

// 对话
export interface Dialogue {
  speaker: string;
  text: string;
  emotion?: string;
}

// 选项
export interface Choice {
  id: string;
  text: string;
  style: ChoiceStyle;
  nextNode: string;
  effects?: ChoiceEffects;
  condition?: (state: GameState) => boolean;
}

// 选项效果
export interface ChoiceEffects {
  attributes?: Partial<Attributes>;
  flags?: Record<string, boolean>;
  relationships?: Record<string, number>;
  achievements?: string[];
}

// 节点效果
export interface NodeEffects {
  shake?: boolean;
  flash?: boolean;
  fadeIn?: boolean;
  typewriter?: boolean;
}

// 存档数据
export interface SaveData {
  state: GameState;
  timestamp: number;
  version: string;
}
```

- [ ] **Step 2: 创建角色数据**

```typescript
// src/lib/characters.ts
export interface Character {
  id: string;
  name: string;
  title: string;
  emoji: string;
  colors: {
    hair?: string;
    skin?: string;
    outfit?: string;
  };
  expressions: Record<string, string>;
}

export const characters: Record<string, Character> = {
  xiefan: {
    id: 'xiefan',
    name: '谢凡',
    title: '理论物理学博士',
    emoji: '👨',
    colors: {
      hair: '#2d2d2d',
      skin: '#f5d0a9',
      outfit: '#3b82f6',
    },
    expressions: {
      normal: '😐',
      confused: '😕',
      thinking: '🤔',
      happy: '😄',
      surprised: '😮',
    },
  },
  professor_zhang: {
    id: 'professor_zhang',
    name: '张教授',
    title: '守夜人/退休物理学教授',
    emoji: '👴',
    colors: {
      hair: '#ffffff',
      outfit: '#f5f5f5',
    },
    expressions: {
      normal: '😐',
      smile: '😏',
      serious: '😑',
      pleased: '😊',
    },
  },
  zhao_xue: {
    id: 'zhao_xue',
    name: '赵雪',
    title: '修仙界年轻修士',
    emoji: '👩',
    colors: {
      hair: '#1a1a1a',
      outfit: '#f5f5f5',
    },
    expressions: {
      normal: '😐',
      curious: '🧐',
      surprised: '😮',
      happy: '😄',
    },
  },
  narrator: {
    id: 'narrator',
    name: '旁白',
    title: '',
    emoji: '📖',
    colors: {},
    expressions: {},
  },
  system: {
    id: 'system',
    name: '系统',
    title: '',
    emoji: '⚙️',
    colors: {},
    expressions: {},
  },
};

export function getCharacter(id: string): Character {
  return characters[id] || characters.narrator;
}
```

- [ ] **Step 3: 创建场景数据**

```typescript
// src/lib/scenes.ts
import { type Chapter } from './tokens';

export interface Scene {
  id: string;
  name: string;
  chapter: Chapter;
  gradient: string;
  elements: SceneElement[];
  atmosphere: string;
}

export interface SceneElement {
  type: 'circle' | 'rectangle' | 'line' | 'text';
  position: { x: string; y: string };
  size: { width: string; height: string };
  style: string;
  animation?: string;
}

export const scenes: Record<string, Scene> = {
  beach_night: {
    id: 'beach_night',
    name: '海边夜晚',
    chapter: 'prologue',
    gradient: 'from-[#0f172a] to-[#1e3a5f]',
    elements: [
      {
        type: 'circle',
        position: { x: 'right-[20%]', y: 'top-[10%]' },
        size: { width: 'w-20', height: 'h-20' },
        style: 'bg-[#f5f5f5] shadow-[0_0_30px_rgba(245,245,245,0.3)]',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-[30%]' },
        size: { width: 'w-full', height: 'h-1' },
        style: 'bg-[#0ea5e9]/30',
        animation: 'animate-wave',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-0' },
        size: { width: 'w-full', height: 'h-[30%]' },
        style: 'bg-[#d4a574]',
      },
    ],
    atmosphere: '孤独、迷茫',
  },
  dormitory_day: {
    id: 'dormitory_day',
    name: '出租屋白天',
    chapter: 'prologue',
    gradient: 'from-[#1a1a1a] to-[#252525]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'right-[20%]', y: 'top-[20%]' },
        size: { width: 'w-24', height: 'height-32' },
        style: 'bg-[#0ea5e9]/20 border-2 border-[#6b7280] rounded',
      },
    ],
    atmosphere: '温馨、窘迫',
  },
  professor_home: {
    id: 'professor_home',
    name: '张教授家',
    chapter: 'chapter1',
    gradient: 'from-[#1a2e1a] to-[#253525]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'left-[10%]', y: 'top-[10%]' },
        size: { width: 'w-32', height: 'h-48' },
        style: 'bg-[#8b5e3c] rounded',
      },
      {
        type: 'circle',
        position: { x: 'right-[15%]', y: 'bottom-[20%]' },
        size: { width: 'w-16', height: 'h-24' },
        style: 'bg-[#10b981] rounded-full',
      },
    ],
    atmosphere: '学术、安宁',
  },
};

export function getScene(id: string): Scene {
  return scenes[id] || scenes.beach_night;
}
```

- [ ] **Step 4: 验证类型定义**

```bash
npx tsc --noEmit
```

Expected: 无类型错误

- [ ] **Step 5: 提交**

```bash
git add src/types src/lib/characters.ts src/lib/scenes.ts
git commit -m "feat: add type definitions and data structures"
```

---

## Task 3: 游戏引擎Hook

**Files:**
- Create: `src/hooks/useGameEngine.ts`
- Create: `src/hooks/useSaveSystem.ts`

- [ ] **Step 1: 创建存档系统Hook**

```typescript
// src/hooks/useSaveSystem.ts
'use client';

import { useCallback } from 'react';
import { type GameState, type SaveData } from '@/types/game';

const SAVE_PREFIX = 'phd_save_';
const CURRENT_VERSION = '2.0';

export function useSaveSystem() {
  const save = useCallback((state: GameState, slot: string = 'auto') => {
    const saveData: SaveData = {
      state,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    };
    localStorage.setItem(`${SAVE_PREFIX}${slot}`, JSON.stringify(saveData));
  }, []);

  const load = useCallback((slot: string = 'auto'): GameState | null => {
    const data = localStorage.getItem(`${SAVE_PREFIX}${slot}`);
    if (!data) return null;

    try {
      const saveData: SaveData = JSON.parse(data);
      return saveData.state;
    } catch {
      return null;
    }
  }, []);

  const deleteSave = useCallback((slot: string = 'auto') => {
    localStorage.removeItem(`${SAVE_PREFIX}${slot}`);
  }, []);

  const getAllSaves = useCallback((): Array<{ slot: string; timestamp: number; chapter: string }> => {
    const saves: Array<{ slot: string; timestamp: number; chapter: string }> = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(SAVE_PREFIX)) {
        const slot = key.replace(SAVE_PREFIX, '');
        try {
          const data: SaveData = JSON.parse(localStorage.getItem(key)!);
          saves.push({
            slot,
            timestamp: data.timestamp,
            chapter: data.state.chapter,
          });
        } catch {
          // 忽略损坏的存档
        }
      }
    }

    return saves.sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  const exportSave = useCallback((slot: string = 'auto') => {
    const data = localStorage.getItem(`${SAVE_PREFIX}${slot}`);
    if (!data) return;

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `phd_save_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const importSave = useCallback(async (file: File): Promise<GameState | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const saveData: SaveData = JSON.parse(e.target?.result as string);
          resolve(saveData.state);
        } catch {
          resolve(null);
        }
      };
      reader.readAsText(file);
    });
  }, []);

  return { save, load, deleteSave, getAllSaves, exportSave, importSave };
}
```

- [ ] **Step 2: 创建游戏引擎Hook**

```typescript
// src/hooks/useGameEngine.ts
'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { type GameState, type StoryNode, type Choice, type Attributes } from '@/types/game';
import { type Chapter } from '@/lib/tokens';
import { useSaveSystem } from './useSaveSystem';

const INITIAL_STATE: GameState = {
  currentNode: 'prologue_1',
  chapter: 'prologue',
  attributes: {
    spirit: 0,
    sense: 15,
    wisdom: 85,
    science: 99,
    money: 5000,
  },
  relationships: {},
  flags: {},
  achievements: [],
  playTime: 0,
};

export function useGameEngine() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const playTimeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { save, load } = useSaveSystem();

  // 游戏时间计时器
  useEffect(() => {
    playTimeTimerRef.current = setInterval(() => {
      setState(prev => ({ ...prev, playTime: prev.playTime + 1 }));
    }, 1000);

    return () => {
      if (playTimeTimerRef.current) {
        clearInterval(playTimeTimerRef.current);
      }
    };
  }, []);

  // 加载节点
  const loadNode = useCallback((nodeId: string, node: StoryNode) => {
    setState(prev => ({
      ...prev,
      currentNode: nodeId,
      chapter: node.chapter,
    }));
  }, []);

  // 处理选择
  const makeChoice = useCallback((choice: Choice) => {
    setState(prev => {
      const newState = { ...prev };

      // 应用属性变化
      if (choice.effects?.attributes) {
        const newAttributes = { ...newState.attributes };
        Object.entries(choice.effects.attributes).forEach(([key, value]) => {
          if (value !== undefined) {
            (newAttributes as any)[key] += value;
          }
        });
        newState.attributes = newAttributes;
      }

      // 应用标记
      if (choice.effects?.flags) {
        newState.flags = { ...newState.flags, ...choice.effects.flags };
      }

      // 应用关系变化
      if (choice.effects?.relationships) {
        Object.entries(choice.effects.relationships).forEach(([key, value]) => {
          newState.relationships = {
            ...newState.relationships,
            [key]: (newState.relationships[key] || 0) + value,
          };
        });
      }

      // 解锁成就
      if (choice.effects?.achievements) {
        newState.achievements = [
          ...new Set([...newState.achievements, ...choice.effects.achievements]),
        ];
      }

      return newState;
    });
  }, []);

  // 自动播放
  const startAutoPlay = useCallback((delay: number, callback: () => void) => {
    setIsAutoPlaying(true);
    autoPlayTimerRef.current = setTimeout(() => {
      callback();
      setIsAutoPlaying(false);
    }, delay);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    setIsAutoPlaying(false);
  }, []);

  // 存档
  const saveGame = useCallback((slot: string = 'auto') => {
    save(state, slot);
  }, [state, save]);

  // 读档
  const loadGame = useCallback((slot: string = 'auto') => {
    const loadedState = load(slot);
    if (loadedState) {
      setState(loadedState);
      return true;
    }
    return false;
  }, [load]);

  // 重新开始
  const restart = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  return {
    state,
    isAutoPlaying,
    loadNode,
    makeChoice,
    startAutoPlay,
    stopAutoPlay,
    saveGame,
    loadGame,
    restart,
  };
}
```

- [ ] **Step 3: 验证Hook**

```bash
npx tsc --noEmit
```

Expected: 无类型错误

- [ ] **Step 4: 提交**

```bash
git add src/hooks
git commit -m "feat: add game engine and save system hooks"
```

---

## Task 4: 核心UI组件

**Files:**
- Create: `src/components/game/DialogueBox.tsx`
- Create: `src/components/game/ChoicePanel.tsx`
- Create: `src/components/game/SceneBackground.tsx`
- Create: `src/components/game/StatusBar.tsx`

- [ ] **Step 1: 创建对话框组件**

```tsx
// src/components/game/DialogueBox.tsx
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { getCharacter } from '@/lib/characters';
import { type Chapter, type Dialogue } from '@/types/game';

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
      {/* 角色名 */}
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

      {/* 对话内容 */}
      <div className="min-h-[60px]">
        <p className="text-text-primary leading-relaxed">
          {displayedText}
        </p>
      </div>

      {/* 继续提示 */}
      {isComplete && (
        <div className="absolute bottom-3 right-4 animate-blink">
          <span className="text-text-secondary text-sm">▼</span>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: 创建选项面板组件**

```tsx
// src/components/game/ChoicePanel.tsx
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
```

- [ ] **Step 3: 创建场景背景组件**

```tsx
// src/components/game/SceneBackground.tsx
'use client';

import { cn } from '@/lib/utils';
import { type Chapter } from '@/lib/tokens';
import { getScene } from '@/lib/scenes';

interface SceneBackgroundProps {
  sceneId: string;
  chapter: Chapter;
  children?: React.ReactNode;
}

export function SceneBackground({ sceneId, chapter, children }: SceneBackgroundProps) {
  const scene = getScene(sceneId);

  return (
    <div
      className={cn(
        'relative w-full h-screen overflow-hidden',
        'bg-gradient-to-b',
        scene.gradient
      )}
    >
      {/* 场景元素 */}
      {scene.elements.map((element, index) => (
        <div
          key={index}
          className={cn(
            'absolute',
            element.position.x,
            element.position.y,
            element.size.width,
            element.size.height,
            element.style,
            element.animation
          )}
        />
      ))}

      {/* 内容层 */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: 创建状态栏组件**

```tsx
// src/components/game/StatusBar.tsx
'use client';

import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import { type Chapter, type Attributes } from '@/types/game';

interface StatusBarProps {
  chapter: Chapter;
  attributes: Attributes;
  onSave?: () => void;
  onSettings?: () => void;
}

export function StatusBar({ chapter, attributes, onSave, onSettings }: StatusBarProps) {
  const chapterColor = tokens.chapters[chapter];

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between px-6 py-3 bg-bg-primary/80 backdrop-blur-sm">
        {/* 左侧：章节信息 */}
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: chapterColor }}
          />
          <span className="text-text-secondary text-sm">
            {getChapterName(chapter)}
          </span>
        </div>

        {/* 右侧：操作按钮 */}
        <div className="flex items-center gap-4">
          <button
            onClick={onSave}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            💾
          </button>
          <button
            onClick={onSettings}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            ⚙️
          </button>
        </div>
      </div>
    </div>
  );
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
```

- [ ] **Step 5: 验证组件**

```bash
npx tsc --noEmit
```

Expected: 无类型错误

- [ ] **Step 6: 提交**

```bash
git add src/components/game
git commit -m "feat: add core game UI components"
```

---

## Task 5: 剧情数据

**Files:**
- Create: `src/lib/story/prologue.ts`
- Create: `src/lib/story/chapter1.ts`
- Create: `src/lib/story/index.ts`

- [ ] **Step 1: 创建序章剧情数据**

```typescript
// src/lib/story/prologue.ts
import { type StoryNode } from '@/types/game';

export const prologueNodes: Record<string, StoryNode> = {
  prologue_1: {
    id: 'prologue_1',
    chapter: 'prologue',
    title: '发现石头',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '深夜，星海市某海滩。你——谢凡，28岁，理论物理学博士，刚收到第47封拒信。',
      },
      {
        speaker: 'narrator',
        text: '海风吹乱了你的头发，手机屏幕的光照亮你疲惫的脸。',
      },
      {
        speaker: 'narrator',
        text: '你漫无目的地踢着沙子，突然脚下一硌……',
      },
      {
        speaker: 'narrator',
        text: '你低头一看，是一块拳头大小的石头，表面有奇异的纹路，在月光下微微发亮。',
      },
    ],
    choices: [
      {
        id: 'choice_rational',
        text: '"这是什么放射性物质？需要报警吗？"',
        style: 'rational',
        nextNode: 'prologue_2',
        effects: {
          attributes: { science: 1 },
          flags: { chose_rational: true },
        },
      },
      {
        id: 'choice_casual',
        text: '"好漂亮的石头，带回去当摆件。"',
        style: 'casual',
        nextNode: 'prologue_2',
        effects: {
          attributes: { wisdom: 1 },
          flags: { chose_casual: true },
        },
      },
      {
        id: 'choice_academic',
        text: '"等等，这个纹路……像是某种分形结构？"',
        style: 'academic',
        nextNode: 'prologue_2',
        effects: {
          attributes: { wisdom: 2 },
          flags: { chose_academic: true },
        },
      },
    ],
  },
  prologue_2: {
    id: 'prologue_2',
    chapter: 'prologue',
    title: '海边偶遇',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你正要离开，发现不远处有个人影。',
      },
      {
        speaker: 'narrator',
        text: '一个穿着老头衫、拖鞋的白发老人正坐在礁石上钓鱼。',
      },
      {
        speaker: 'professor_zhang',
        text: '年轻人，这么晚了还不回家？',
      },
      {
        speaker: 'xiefan',
        text: '睡不着。',
        emotion: 'confused',
      },
      {
        speaker: 'professor_zhang',
        text: '我也是。退休了反而失眠。你是附近的？',
      },
      {
        speaker: 'xiefan',
        text: '不是，我来投简历的。没找到工作。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '老人看了你一眼，目光落在你手里的石头上。',
      },
      {
        speaker: 'professor_zhang',
        text: '那块石头不错。留着吧。',
      },
    ],
    autoNext: 'prologue_3',
    autoDelay: 2000,
  },
  prologue_3: {
    id: 'prologue_3',
    chapter: 'prologue',
    title: '石头发光',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你往回走的路上，石头突然发出柔和的蓝光。',
      },
      {
        speaker: 'xiefan',
        text: '卧槽！真的放射性物质？！',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '光芒中浮现出一行文字：',
      },
      {
        speaker: 'system',
        text: '"凝气石——修仙入门辅助工具，有效期3000年，已过期2999年。"',
      },
      {
        speaker: 'xiefan',
        text: '……这是什么劣质营销短信？',
        emotion: 'confused',
      },
    ],
    autoNext: 'prologue_4',
    autoDelay: 3000,
  },
  prologue_4: {
    id: 'prologue_4',
    chapter: 'prologue',
    title: '第一个抉择',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '石头的光芒渐渐稳定，你感觉到一股奇异的暖流从手心传来。',
      },
      {
        speaker: 'narrator',
        text: '此刻，你会：',
      },
    ],
    choices: [
      {
        id: 'choice_hand_over',
        text: '【理性】把石头交给科研机构',
        style: 'rational',
        nextNode: 'prologue_bad_end',
        effects: {
          flags: { handed_over_stone: true },
          achievements: ['good_citizen'],
        },
      },
      {
        id: 'choice_try',
        text: '【好奇】按照石头上的说明尝试',
        style: 'casual',
        nextNode: 'chapter1_1',
        effects: {
          flags: { tried_cultivation: true },
        },
      },
      {
        id: 'choice_search',
        text: '【社恐】先在网上搜搜有没有人遇到过类似情况',
        style: 'academic',
        nextNode: 'chapter1_1',
        effects: {
          flags: { searched_online: true },
          attributes: { sense: 2 },
        },
      },
    ],
  },
  prologue_bad_end: {
    id: 'prologue_bad_end',
    chapter: 'prologue',
    title: 'BAD END 1：好公民',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '第二天，你把石头送到了市科研所。',
      },
      {
        speaker: 'narrator',
        text: '研究人员对石头进行了全面检测，结论是：一块普通的鹅卵石，表面涂了荧光粉。',
      },
      {
        speaker: 'xiefan',
        text: '所以……是恶作剧？',
        emotion: 'confused',
      },
      {
        speaker: 'narrator',
        text: '你继续投简历，继续被拒。三个月后，你找到了一份高中物理老师的工作。',
      },
      {
        speaker: 'narrator',
        text: '平凡，但稳定。',
      },
      {
        speaker: 'system',
        text: '【成就解锁：好公民】——做出了最安全的选择',
      },
      {
        speaker: 'system',
        text: 'BAD END 1/5 —— 你错过了修仙的机会',
      },
    ],
  },
};
```

- [ ] **Step 2: 创建第一章剧情数据**

```typescript
// src/lib/story/chapter1.ts
import { type StoryNode } from '@/types/game';

export const chapter1Nodes: Record<string, StoryNode> = {
  chapter1_1: {
    id: 'chapter1_1',
    chapter: 'chapter1',
    title: '灵气感应',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你闭上眼睛，调整呼吸。',
      },
      {
        speaker: 'narrator',
        text: '三分钟后——',
      },
      {
        speaker: 'xiefan',
        text: '等等，这个能量波动频率……是6.626×10^-34焦耳·秒？这不是普朗克常数吗？',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '你成功感应到了灵气。物理学博士的执念让你把修仙变成了实验室报告。',
      },
      {
        speaker: 'xiefan',
        text: '我需要更多数据。这个样本量太小了。',
        emotion: 'thinking',
      },
    ],
    autoNext: 'chapter1_2',
    autoDelay: 3000,
  },
  chapter1_2: {
    id: 'chapter1_2',
    chapter: 'chapter1',
    title: '系统激活',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '石头的光芒突然增强，一个半透明的界面出现在你面前：',
      },
      {
        speaker: 'system',
        text: '【修仙系统 v2.0】\n宿主：谢凡\n境界：凡人（未入门）\n灵力：0/100\n神识：15（博士加成+10）\n悟性：85（学霸专属）\n科理值：99（隐藏属性）',
      },
      {
        speaker: 'xiefan',
        text: '这个UI设计……是Material Design还是iOS风格？',
        emotion: 'confused',
      },
      {
        speaker: 'system',
        text: '【系统提示：检测到宿主具有极高的科理值，已解锁"理性修仙"路径】',
      },
      {
        speaker: 'xiefan',
        text: '理性修仙？听起来像是民科。',
        emotion: 'thinking',
      },
    ],
    autoNext: 'chapter1_3',
    autoDelay: 3000,
  },
  chapter1_3: {
    id: 'chapter1_3',
    chapter: 'chapter1',
    title: '第一个任务',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'system',
        text: '【任务发布】\n任务：完成第一次凝气\n奖励：灵力+10，解锁"修炼"功能\n提示：按照石头上的说明调整呼吸',
      },
      {
        speaker: 'xiefan',
        text: '等等，我还没答应要修仙。',
        emotion: 'confused',
      },
      {
        speaker: 'system',
        text: '【系统提示：任务已接受，无法拒绝】',
      },
      {
        speaker: 'xiefan',
        text: '这什么霸王条款？我要投诉！',
        emotion: 'surprised',
      },
      {
        speaker: 'system',
        text: '【系统提示：投诉功能将在v3.0版本上线】',
      },
      {
        speaker: 'xiefan',
        text: '……',
      },
    ],
    choices: [
      {
        id: 'choice_try_now',
        text: '按照说明尝试凝气',
        style: 'casual',
        nextNode: 'chapter1_4',
        effects: {
          attributes: { spirit: 10 },
          flags: { first_cultivation: true },
        },
      },
      {
        id: 'choice_analyze',
        text: '先分析石头上的"说明"是否符合物理学原理',
        style: 'rational',
        nextNode: 'chapter1_4',
        effects: {
          attributes: { spirit: 8, science: 2 },
          flags: { analyzed_first: true },
        },
      },
      {
        id: 'choice_sleep',
        text: '算了，明天再说，先睡一觉',
        style: 'casual',
        nextNode: 'chapter1_4',
        effects: {
          attributes: { wisdom: 1 },
          flags: { slept_first: true },
        },
      },
    ],
  },
  chapter1_4: {
    id: 'chapter1_4',
    chapter: 'chapter1',
    title: '凝气成功',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '经过一番尝试（或者分析，或者睡了一觉后尝试），你终于完成了第一次凝气。',
      },
      {
        speaker: 'system',
        text: '【任务完成】\n奖励：灵力+10\n当前灵力：10/100\n境界：凝气期一层',
      },
      {
        speaker: 'xiefan',
        text: '等等，这就突破了？我还没记录实验数据呢！',
        emotion: 'surprised',
      },
      {
        speaker: 'system',
        text: '【成就解锁：修仙入门】——完成第一次凝气',
      },
      {
        speaker: 'narrator',
        text: '你看着手心的石头，陷入沉思。',
      },
      {
        speaker: 'narrator',
        text: '这一切……是真的吗？',
      },
    ],
    autoNext: 'chapter1_end',
    autoDelay: 3000,
  },
  chapter1_end: {
    id: 'chapter1_end',
    chapter: 'chapter1',
    title: '第一章完',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你决定先回家，好好研究一下这块石头。',
      },
      {
        speaker: 'narrator',
        text: '毕竟，如果修仙是真的……',
      },
      {
        speaker: 'xiefan',
        text: '那我可能找到了比发论文更有意思的事情。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第一章完】\n下一章预告：你遇到了一个奇怪的老头，他说要收你为徒……',
      },
    ],
  },
};
```

- [ ] **Step 3: 创建剧情索引**

```typescript
// src/lib/story/index.ts
import { type StoryNode } from '@/types/game';
import { prologueNodes } from './prologue';
import { chapter1Nodes } from './chapter1';

export const storyNodes: Record<string, StoryNode> = {
  ...prologueNodes,
  ...chapter1Nodes,
};

export function getStoryNode(id: string): StoryNode | null {
  return storyNodes[id] || null;
}
```

- [ ] **Step 4: 验证剧情数据**

```bash
npx tsc --noEmit
```

Expected: 无类型错误

- [ ] **Step 5: 提交**

```bash
git add src/lib/story
git commit -m "feat: add prologue and chapter 1 story data"
```

---

## Task 6: 游戏主容器

**Files:**
- Create: `src/components/game/GameContainer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: 创建游戏主容器**

```tsx
// src/components/game/GameContainer.tsx
'use client';

import { useState, useCallback, useEffect } from 'react';
import { useGameEngine } from '@/hooks/useGameEngine';
import { getStoryNode } from '@/lib/story';
import { getScene } from '@/lib/scenes';
import { DialogueBox } from './DialogueBox';
import { ChoicePanel } from './ChoicePanel';
import { SceneBackground } from './SceneBackground';
import { StatusBar } from './StatusBar';
import { type Dialogue, type Choice } from '@/types/game';

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

  const currentNode = getStoryNode(state.currentNode);
  const scene = currentNode ? getScene(currentNode.background) : null;

  // 节点变化时重置状态
  useEffect(() => {
    setCurrentDialogueIndex(0);
    setShowChoices(false);
    setIsTyping(true);
  }, [state.currentNode]);

  // 处理对话继续
  const handleDialogueContinue = useCallback(() => {
    if (!currentNode) return;

    const nextIndex = currentDialogueIndex + 1;

    if (nextIndex < currentNode.dialogues.length) {
      // 还有对话
      setCurrentDialogueIndex(nextIndex);
      setIsTyping(true);
    } else if (currentNode.choices) {
      // 显示选项
      setShowChoices(true);
    } else if (currentNode.autoNext) {
      // 自动跳转
      const nextNode = getStoryNode(currentNode.autoNext);
      if (nextNode) {
        startAutoPlay(currentNode.autoDelay || 2000, () => {
          loadNode(currentNode.autoNext!, nextNode);
        });
      }
    }
  }, [currentNode, currentDialogueIndex, loadNode, startAutoPlay]);

  // 处理打字完成
  const handleTypingComplete = useCallback(() => {
    setIsTyping(false);
  }, []);

  // 处理选项选择
  const handleChoiceSelect = useCallback((choice: Choice) => {
    makeChoice(choice);
    const nextNode = getStoryNode(choice.nextNode);
    if (nextNode) {
      loadNode(choice.nextNode, nextNode);
    }
  }, [makeChoice, loadNode]);

  // 处理存档
  const handleSave = useCallback(() => {
    saveGame();
    alert('存档成功！');
  }, [saveGame]);

  if (!currentNode || !scene) {
    return <div className="text-white">加载中...</div>;
  }

  const currentDialogue = currentNode.dialogues[currentDialogueIndex];

  return (
    <SceneBackground sceneId={currentNode.background} chapter={state.chapter}>
      {/* 状态栏 */}
      <StatusBar
        chapter={state.chapter}
        attributes={state.attributes}
        onSave={handleSave}
      />

      {/* 主内容区 */}
      <div className="flex flex-col justify-end h-full pb-8 px-4">
        {/* 对话框 */}
        {!showChoices && currentDialogue && (
          <DialogueBox
            dialogue={currentDialogue}
            chapter={state.chapter}
            isTyping={isTyping}
            onTypingComplete={handleTypingComplete}
            onContinue={handleDialogueContinue}
          />
        )}

        {/* 选项面板 */}
        {showChoices && currentNode.choices && (
          <ChoicePanel
            choices={currentNode.choices}
            onSelect={handleChoiceSelect}
          />
        )}
      </div>

      {/* 自动播放提示 */}
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
    </SceneBackground>
  );
}
```

- [ ] **Step 2: 更新主页面**

```tsx
// src/app/page.tsx
import { GameContainer } from '@/components/game/GameContainer';

export default function Home() {
  return (
    <main className="dark">
      <GameContainer />
    </main>
  );
}
```

- [ ] **Step 3: 验证游戏流程**

```bash
npm run dev
```

Expected: 
- 页面加载成功
- 可以看到海边场景
- 对话框正常显示
- 打字机效果工作
- 选项可以点击
- 节点切换正常

- [ ] **Step 4: 提交**

```bash
git add src/components/game/GameContainer.tsx src/app/page.tsx
git commit -m "feat: add game container with full dialogue and choice flow"
```

---

## Task 7: 属性面板

**Files:**
- Create: `src/components/game/AttributePanel.tsx`
- Modify: `src/components/game/GameContainer.tsx`

- [ ] **Step 1: 创建属性面板**

```tsx
// src/components/game/AttributePanel.tsx
'use client';

import { cn } from '@/lib/utils';
import { type Attributes } from '@/types/game';

interface AttributePanelProps {
  attributes: Attributes;
  isOpen: boolean;
  onClose: () => void;
}

export function AttributePanel({ attributes, isOpen, onClose }: AttributePanelProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-bg-secondary rounded-xl p-6 w-full max-w-md mx-4 animate-fadeIn">
        {/* 标题 */}
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

        {/* 属性列表 */}
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

        {/* 关闭按钮 */}
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
```

- [ ] **Step 2: 更新游戏容器**

在 `src/components/game/GameContainer.tsx` 中添加属性面板：

```tsx
// 在 import 部分添加
import { AttributePanel } from './AttributePanel';

// 在 state 部分添加
const [showAttributes, setShowAttributes] = useState(false);

// 在 StatusBar 的 onSettings 中添加
onSettings={() => setShowAttributes(true)}

// 在 return 中添加
<AttributePanel
  attributes={state.attributes}
  isOpen={showAttributes}
  onClose={() => setShowAttributes(false)}
/>
```

- [ ] **Step 3: 验证属性面板**

```bash
npm run dev
```

Expected:
- 点击设置按钮打开属性面板
- 属性显示正确
- 进度条动画流畅
- 关闭按钮工作正常

- [ ] **Step 4: 提交**

```bash
git add src/components/game/AttributePanel.tsx src/components/game/GameContainer.tsx
git commit -m "feat: add attribute panel with progress bars"
```

---

## Task 8: 最终验证与部署准备

**Files:**
- Modify: `package.json`
- Create: `README.md`

- [ ] **Step 1: 运行类型检查**

```bash
npx tsc --noEmit
```

Expected: 无类型错误

- [ ] **Step 2: 运行构建**

```bash
npm run build
```

Expected: 构建成功，无错误

- [ ] **Step 3: 运行lint检查**

```bash
npm run lint
```

Expected: 无lint错误（或只有可忽略的警告）

- [ ] **Step 4: 本地测试完整流程**

```bash
npm run dev
```

测试清单：
- [ ] 序章完整流程可玩
- [ ] 第一章完整流程可玩
- [ ] 对话框打字机效果正常
- [ ] 选项可以点击
- [ ] 属性面板可以打开
- [ ] 存档/读档功能正常
- [ ] 场景切换正常
- [ ] 动画效果流畅

- [ ] **Step 5: 提交最终代码**

```bash
git add .
git commit -m "feat: complete MVP with prologue and chapter 1"
```

- [ ] **Step 6: 创建版本标签**

```bash
git tag -a v0.1.0 -m "MVP: Prologue and Chapter 1"
git push origin v0.1.0
```

---

## 完成检查清单

- [ ] 所有TypeScript类型错误已解决
- [ ] 所有组件正常渲染
- [ ] 对话系统完整可玩
- [ ] 抉择系统正常工作
- [ ] 属性系统正常更新
- [ ] 存档系统正常工作
- [ ] 动画效果流畅
- [ ] 响应式布局正常
- [ ] 代码已提交到Git
- [ ] 版本标签已创建

---

**Plan Version:** v1.0  
**Created:** 2026-06-05  
**Estimated Time:** 4-6 hours  
**Difficulty:** Intermediate
