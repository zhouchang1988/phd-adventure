# Tailwind CSS v4 + Shadcn/ui 实现架构

## 1. 项目结构

```
phd-adventure/
├── src/
│   ├── app/                    # Next.js App Router (或 pages/)
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 主页面
│   │   └── globals.css         # 全局样式 + Tailwind导入
│   ├── components/
│   │   ├── ui/                 # Shadcn/ui组件（复制粘贴）
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── progress.tsx
│   │   │   └── ...
│   │   ├── game/               # 游戏核心组件
│   │   │   ├── DialogueBox.tsx     # 对话框
│   │   │   ├── ChoiceButton.tsx    # 选项按钮
│   │   │   ├── CharacterSprite.tsx # 角色立绘
│   │   │   ├── SceneBackground.tsx # 场景背景
│   │   │   ├── StatusBar.tsx       # 状态栏
│   │   │   ├── AttributePanel.tsx  # 属性面板
│   │   │   └── AchievementPopup.tsx# 成就弹窗
│   │   └── effects/            # 特效组件
│   │       ├── RuneMark.tsx        # 符文印记
│   │       ├── ParticleSystem.tsx  # 粒子效果
│   │       └── ScreenShake.tsx     # 屏幕震动
│   ├── lib/
│   │   ├── tokens.ts           # 设计令牌定义
│   │   ├── theme.ts            # 主题配置
│   │   ├── characters.ts       # 角色数据
│   │   ├── scenes.ts           # 场景数据
│   │   └── utils.ts            # 工具函数
│   ├── hooks/
│   │   ├── useTheme.ts         # 主题切换Hook
│   │   ├── useGameEngine.ts    # 游戏引擎Hook
│   │   └── useAnimation.ts     # 动画Hook
│   └── styles/
│       └── animations.css      # 自定义动画
├── public/
│   └── assets/                 # 静态资源（可选）
├── tailwind.config.ts          # Tailwind配置
├── components.json             # Shadcn/ui配置
└── package.json
```

---

## 2. 设计令牌系统

**`src/lib/tokens.ts`**

```typescript
// 设计令牌 - 对应美术风格指南中的配色方案
export const tokens = {
  // ===== 背景色系（深色模式）=====
  background: {
    primary: '#0f0f0f',      // 主背景 - 接近纯黑
    secondary: '#1a1a1a',    // 次背景 - 深灰
    card: '#252525',          // 卡片背景 - 中灰
    highlight: '#2a2a2a',     // 高亮背景 - 轻微突出
  },

  // ===== 文字色系 =====
  text: {
    primary: '#ffffff',       // 主文字 - 纯白
    secondary: '#a0a0a0',     // 次文字 - 灰色
    muted: '#666666',         // 弱文字 - 更灰
    disabled: '#444444',      // 禁用文字 - 几乎看不见
  },

  // ===== 功能色 =====
  accent: {
    primary: '#3b82f6',       // 主强调 - 蓝色（科技感、理性）
    success: '#10b981',       // 成功 - 绿色
    warning: '#f59e0b',       // 警告 - 黄色
    danger: '#ef4444',        // 危险 - 红色
    info: '#8b5cf6',          // 信息 - 紫色（修仙元素）
  },

  // ===== 章节主题色 =====
  chapters: {
    prologue: '#0ea5e9',      // 序章-海边 - 天蓝
    chapter1: '#8b5cf6',      // 第一章-觉醒 - 紫色
    chapter2: '#6366f1',      // 第二章-入道 - 靛蓝
    chapter3: '#f59e0b',      // 第三章-双修 - 暖黄
    chapter4: '#ef4444',      // 第四章-论道 - 冲突红
    chapter5: '#10b981',      // 第五章-踏天 - 生命绿
    epilogue: '#ffffff',      // 终章-梦醒 - 纯白
  },

  // ===== 选项风格色 =====
  choices: {
    rational: '#3b82f6',      // 理性选项 - 蓝色
    casual: '#10b981',        // 随性选项 - 绿色
    academic: '#8b5cf6',      // 学术选项 - 紫色
    danger: '#ef4444',        // 危险选项 - 红色
  },

  // ===== 角色色彩 =====
  characters: {
    xiefan: {
      hair: '#2d2d2d',        // 深棕
      skin: '#f5d0a9',        // 亚洲肤色
      glasses: '#1a1a1a',     // 黑框
      hoodie: '#3b82f6',      // 蓝色卫衣
    },
    professorZhang: {
      hair: '#ffffff',        // 白发
      shirt: '#f5f5f5',       // 白色老头衫
      slippers: '#6b7280',    // 灰色拖鞋
    },
    zhaoXue: {
      hair: '#1a1a1a',        // 黑发
      coat: '#f5f5f5',        // 白大褂
      tshirt: '#6366f1',      // 靛蓝T恤
    },
    // ... 其他角色
  },

  // ===== 间距系统 =====
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // ===== 圆角系统 =====
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },

  // ===== 渐变色 =====
  gradients: {
    spiritBlue: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',  // 灵气效果
    breakthroughGold: 'linear-gradient(135deg, #f59e0b, #ef4444)',  // 修炼突破
    dreamPurple: 'linear-gradient(135deg, #8b5cf6, #ec4899)',  // 梦境效果
  },
} as const;

// 类型定义
export type Tokens = typeof tokens;
export type Chapter = keyof typeof tokens.chapters;
export type ChoiceStyle = keyof typeof tokens.choices;
```

---

## 3. Tailwind配置

**`tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss';
import { tokens } from './src/lib/tokens';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 扩展颜色系统
      colors: {
        // 背景色
        bg: tokens.background,
        // 文字色
        text: tokens.text,
        // 功能色
        accent: tokens.accent,
        // 章节色
        chapter: tokens.chapters,
        // 选项色
        choice: tokens.choices,
      },
      // 扩展间距
      spacing: tokens.spacing,
      // 扩展圆角
      borderRadius: tokens.radius,
      // 自定义动画
      keyframes: {
        // 打字机效果
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        // 文字闪烁
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        // 淡入
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        // 从下滑入
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        // 从上滑入
        slideDown: {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        // 灵气脉冲
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(59, 130, 246, 0)' },
        },
        // 屏幕震动
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        // 海浪效果
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        // 符文呼吸
        runeBreath: {
          '0%, 100%': {
            opacity: '0.6',
            filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))',
          },
          '50%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))',
          },
        },
        // 知识光芒
        knowledgeFlash: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
          '100%': { opacity: '0', transform: 'scale(1.5)' },
        },
      },
      // 动画工具类
      animation: {
        typewriter: 'typewriter 2s steps(40) forwards',
        blink: 'blink 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.2s ease-out',
        slideDown: 'slideDown 0.3s ease-out',
        pulse: 'pulse 2s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
        wave: 'wave 3s ease-in-out infinite',
        runeBreath: 'runeBreath 3s ease-in-out infinite',
        knowledgeFlash: 'knowledgeFlash 0.5s ease-out',
      },
      // 背景图像
      backgroundImage: {
        'gradient-spirit': tokens.gradients.spiritBlue,
        'gradient-breakthrough': tokens.gradients.breakthroughGold,
        'gradient-dream': tokens.gradients.dreamPurple,
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 4. 主题切换系统

**`src/lib/theme.ts`**

```typescript
import { tokens, type Chapter } from './tokens';

// 主题类型
export type Theme = 'dark' | 'light';

// 主题配置
export const themes = {
  dark: {
    background: tokens.background.primary,
    text: tokens.text.primary,
    card: tokens.background.card,
  },
  light: {
    background: '#ffffff',
    text: '#000000',
    card: '#f5f5f5',
  },
} as const;

// 章节主题配置
export const chapterThemes: Record<Chapter, {
  primary: string;
  gradient: string;
  particleColor: string;
}> = {
  prologue: {
    primary: tokens.chapters.prologue,
    gradient: 'from-sky-500 to-blue-600',
    particleColor: '#0ea5e9',
  },
  chapter1: {
    primary: tokens.chapters.chapter1,
    gradient: 'from-purple-500 to-violet-600',
    particleColor: '#8b5cf6',
  },
  chapter2: {
    primary: tokens.chapters.chapter2,
    gradient: 'from-indigo-500 to-blue-600',
    particleColor: '#6366f1',
  },
  chapter3: {
    primary: tokens.chapters.chapter3,
    gradient: 'from-amber-500 to-yellow-600',
    particleColor: '#f59e0b',
  },
  chapter4: {
    primary: tokens.chapters.chapter4,
    gradient: 'from-red-500 to-rose-600',
    particleColor: '#ef4444',
  },
  chapter5: {
    primary: tokens.chapters.chapter5,
    gradient: 'from-emerald-500 to-green-600',
    particleColor: '#10b981',
  },
  epilogue: {
    primary: tokens.chapters.epilogue,
    gradient: 'from-white to-gray-100',
    particleColor: '#ffffff',
  },
};

// 应用章节主题到CSS变量
export function applyChapterTheme(chapter: Chapter) {
  const theme = chapterThemes[chapter];
  const root = document.documentElement;
  
  root.style.setProperty('--chapter-primary', theme.primary);
  root.style.setProperty('--chapter-particle', theme.particleColor);
}

// 获取章节渐变类名
export function getChapterGradient(chapter: Chapter): string {
  return chapterThemes[chapter].gradient;
}
```

**`src/hooks/useTheme.ts`**

```typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '@/lib/theme';
import type { Chapter } from '@/lib/tokens';
import { applyChapterTheme } from '@/lib/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentChapter, setCurrentChapter] = useState<Chapter>('prologue');

  // 切换深色/浅色模式
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  // 切换章节主题
  const changeChapter = useCallback((chapter: Chapter) => {
    setCurrentChapter(chapter);
    applyChapterTheme(chapter);
  }, []);

  // 应用主题到DOM
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  // 初始化章节主题
  useEffect(() => {
    applyChapterTheme(currentChapter);
  }, [currentChapter]);

  return {
    theme,
    currentChapter,
    toggleTheme,
    changeChapter,
  };
}
```

---

## 5. 核心游戏组件

**`src/components/game/DialogueBox.tsx`**

```tsx
'use client';

import { cn } from '@/lib/utils';
import { tokens } from '@/lib/tokens';
import type { Chapter } from '@/lib/tokens';

interface DialogueBoxProps {
  speaker: string;
  text: string;
  chapter: Chapter;
  emotion?: string;
  isTyping?: boolean;
  onContinue?: () => void;
}

export function DialogueBox({
  speaker,
  text,
  chapter,
  emotion,
  isTyping = false,
  onContinue,
}: DialogueBoxProps) {
  const chapterColor = tokens.chapters[chapter];

  return (
    <div
      className={cn(
        'relative w-full max-w-2xl mx-auto',
        'bg-bg-secondary/90 backdrop-blur-sm',
        'rounded-xl p-6',
        'shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
        'border-l-4',
        'animate-fadeIn'
      )}
      style={{ borderLeftColor: chapterColor }}
    >
      {/* 角色名 */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${chapterColor}20` }}
        >
          <span className="text-lg">
            {getSpeakerEmoji(speaker)}
          </span>
        </div>
        <h3 className="text-text-primary font-bold text-lg">
          {speaker}
        </h3>
        {emotion && (
          <span className="text-sm text-text-secondary">
            ({emotion})
          </span>
        )}
      </div>

      {/* 对话内容 */}
      <div className="min-h-[60px]">
        {isTyping ? (
          <p className="text-text-primary leading-relaxed">
            <span className="animate-typewriter overflow-hidden whitespace-nowrap">
              {text}
            </span>
          </p>
        ) : (
          <p className="text-text-primary leading-relaxed">
            {text}
          </p>
        )}
      </div>

      {/* 继续提示 */}
      {!isTyping && onContinue && (
        <button
          onClick={onContinue}
          className={cn(
            'absolute bottom-3 right-4',
            'text-text-secondary text-sm',
            'animate-blink',
            'hover:text-text-primary transition-colors'
          )}
        >
          ▼ 点击继续
        </button>
      )}
    </div>
  );
}

function getSpeakerEmoji(speaker: string): string {
  const emojiMap: Record<string, string> = {
    '谢凡': '👨',       // 28岁男青年
    '张教授': '👴',     // 65岁老者
    '赵雪': '👩',       // 26岁女性
    '王阿姨': '👩‍🍳',   // 女性房东
    '老周': '👨‍💼',     // 男性面试官
    '小雨': '👧',       // 年轻女性
    '小白': '🐱',       // 猫
    '旁白': '📖',
    '系统': '⚙️',
  };
  return emojiMap[speaker] || '👤';
}
```

**`src/components/game/ChoiceButton.tsx`**

```tsx
'use client';

import { cn } from '@/lib/utils';
import { tokens, type ChoiceStyle } from '@/lib/tokens';

interface ChoiceButtonProps {
  id: string;
  text: string;
  style: ChoiceStyle;
  onSelect: (id: string) => void;
  disabled?: boolean;
  showStats?: boolean;
  statsPercentage?: number;
}

export function ChoiceButton({
  id,
  text,
  style: choiceStyle,
  onSelect,
  disabled = false,
  showStats = false,
  statsPercentage,
}: ChoiceButtonProps) {
  const styleColor = tokens.choices[choiceStyle];

  return (
    <div className="relative">
      <button
        onClick={() => onSelect(id)}
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
          'group'
        )}
        style={{ borderLeftColor: styleColor }}
      >
        <span className="text-text-primary group-hover:text-white transition-colors">
          {text}
        </span>
      </button>

      {/* 抉择统计 */}
      {showStats && statsPercentage !== undefined && (
        <div
          className={cn(
            'mt-2 px-4 py-2',
            'bg-accent-primary/10 rounded-lg',
            'border-l-2 border-accent-primary',
            'animate-slideUp'
          )}
        >
          <p className="text-sm text-text-secondary">
            📊 <span className="text-accent-primary font-bold">{statsPercentage}%</span>
            的玩家和你做了相同的选择
          </p>
        </div>
      )}
    </div>
  );
}
```

**`src/components/game/SceneBackground.tsx`**

```tsx
'use client';

import { cn } from '@/lib/utils';
import type { Chapter } from '@/lib/tokens';
import { getChapterGradient } from '@/lib/theme';

interface SceneBackgroundProps {
  scene: string;
  chapter: Chapter;
  children?: React.ReactNode;
}

// 场景配置
const sceneConfigs: Record<string, {
  gradient: string;
  elements: React.ReactNode;
}> = {
  beach_night: {
    gradient: 'from-[#0f172a] to-[#1e3a5f]',
    elements: (
      <>
        {/* 月亮 */}
        <div className="absolute top-[10%] right-[20%] w-20 h-20 rounded-full bg-[#f5f5f5] shadow-[0_0_30px_rgba(245,245,245,0.3)]" />
        {/* 海面 */}
        <div className="absolute bottom-[30%] left-0 right-0 h-1 bg-[#0ea5e9]/30 animate-wave" />
        {/* 沙滩 */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#d4a574]" />
        {/* 石头 */}
        <div className="absolute bottom-[30%] left-[40%] w-16 h-12 bg-[#6b7280] rounded-[30%_40%_50%_20%]" />
      </>
    ),
  },
  dormitory: {
    gradient: 'from-[#1a1a1a] to-[#252525]',
    elements: (
      <>
        {/* 窗户 */}
        <div className="absolute top-[20%] right-[20%] w-24 h-32 bg-[#0ea5e9]/20 border-2 border-[#6b7280] rounded" />
        {/* 床 */}
        <div className="absolute bottom-[10%] left-[10%] w-40 h-24 bg-[#374151] rounded" />
        {/* 电脑桌 */}
        <div className="absolute bottom-[10%] right-[10%] w-32 h-20 bg-[#4b5563] rounded" />
      </>
    ),
  },
  professor_home: {
    gradient: 'from-[#1a2e1a] to-[#253525]',
    elements: (
      <>
        {/* 书架 */}
        <div className="absolute top-[10%] left-[10%] w-32 h-48 bg-[#8b5e3c] rounded" />
        {/* 植物 */}
        <div className="absolute bottom-[20%] right-[15%] w-16 h-24 bg-[#10b981] rounded-full" />
        {/* 旧家具 */}
        <div className="absolute bottom-[10%] left-[30%] w-40 h-16 bg-[#6b7280] rounded" />
      </>
    ),
  },
  // ... 更多场景
};

export function SceneBackground({
  scene,
  chapter,
  children,
}: SceneBackgroundProps) {
  const config = sceneConfigs[scene] || sceneConfigs.beach_night;
  const chapterGradient = getChapterGradient(chapter);

  return (
    <div
      className={cn(
        'relative w-full h-screen overflow-hidden',
        'bg-gradient-to-b',
        config.gradient
      )}
    >
      {/* 场景元素 */}
      {config.elements}

      {/* 章节渐变叠加 */}
      <div
        className={cn(
          'absolute inset-0 opacity-10',
          'bg-gradient-to-br',
          chapterGradient
        )}
      />

      {/* 内容层 */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
```

---

## 6. 游戏引擎Hook

**`src/hooks/useGameEngine.ts`**

```typescript
'use client';

import { useState, useCallback, useRef } from 'react';
import type { Chapter } from '@/lib/tokens';

// 游戏状态接口
interface GameState {
  currentNode: string;
  chapter: Chapter;
  attributes: {
    spirit: number;
    sense: number;
    wisdom: number;
    science: number;
    money: number;
  };
  relationships: Record<string, number>;
  flags: Record<string, boolean>;
  achievements: string[];
}

// 剧情节点接口
interface StoryNode {
  id: string;
  chapter: Chapter;
  title: string;
  dialogues: Array<{
    speaker: string;
    text: string;
    emotion?: string;
  }>;
  choices?: Array<{
    id: string;
    text: string;
    style: 'rational' | 'casual' | 'academic' | 'danger';
    nextNode: string;
    effects?: {
      attributes?: Partial<GameState['attributes']>;
      flags?: Record<string, boolean>;
      relationships?: Record<string, number>;
    };
  }>;
  background: string;
  effects?: {
    shake?: boolean;
    flash?: boolean;
    fadeIn?: boolean;
    typewriter?: boolean;
  };
}

// 初始状态
const initialState: GameState = {
  currentNode: 'node_1_1',
  chapter: 'prologue',
  attributes: {
    spirit: 0,
    sense: 15,
    wisdom: 85,
    science: 99,
    money: 5000,
  },
  relationships: {
    professor_zhang: 0,
    zhao_xue: 0,
    lin_feng: 0,
    landlord_wang: 0,
  },
  flags: {},
  achievements: [],
};

export function useGameEngine() {
  const [state, setState] = useState<GameState>(initialState);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 加载剧情节点
  const loadNode = useCallback((nodeId: string, nodeData: StoryNode) => {
    setState(prev => ({
      ...prev,
      currentNode: nodeId,
      chapter: nodeData.chapter,
    }));
  }, []);

  // 处理选择
  const makeChoice = useCallback((
    choice: NonNullable<StoryNode['choices']>[0]
  ) => {
    setState(prev => {
      const newState = { ...prev };

      // 应用属性变化
      if (choice.effects?.attributes) {
        Object.entries(choice.effects.attributes).forEach(([key, value]) => {
          if (value !== undefined) {
            newState.attributes = {
              ...newState.attributes,
              [key]: newState.attributes[key as keyof typeof newState.attributes] + value,
            };
          }
        });
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

  // 停止自动播放
  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    setIsAutoPlaying(false);
  }, []);

  // 存档
  const saveGame = useCallback((slot: string = 'auto') => {
    const saveData = {
      state,
      timestamp: Date.now(),
      version: '2.0',
    };
    localStorage.setItem(`phd_save_${slot}`, JSON.stringify(saveData));
  }, [state]);

  // 读档
  const loadGame = useCallback((slot: string = 'auto') => {
    const data = localStorage.getItem(`phd_save_${slot}`);
    if (data) {
      const saveData = JSON.parse(data);
      setState(saveData.state);
      return true;
    }
    return false;
  }, []);

  // 解锁成就
  const unlockAchievement = useCallback((achievementId: string) => {
    setState(prev => {
      if (prev.achievements.includes(achievementId)) return prev;
      return {
        ...prev,
        achievements: [...prev.achievements, achievementId],
      };
    });
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
    unlockAchievement,
  };
}
```

---

## 7. 安装和配置步骤

```bash
# 1. 创建Next.js项目
npx create-next-app@latest phd-adventure --typescript --tailwind --app --src-dir

# 2. 进入项目目录
cd phd-adventure

# 3. 初始化Shadcn/ui
npx shadcn@latest init

# 4. 安装Shadcn/ui组件
npx shadcn@latest add button dialog progress badge card

# 5. 安装动画库（可选）
npm install framer-motion

# 6. 启动开发服务器
npm run dev
```

---

## 8. 关键优势总结

| 特性 | 实现方式 | 优势 |
|------|----------|------|
| **主题切换** | CSS变量 + Tailwind配置 | 运行时无缝切换，零JS开销 |
| **章节主题色** | `tokens.chapters` + CSS变量 | 每章独特视觉风格 |
| **选项风格** | `tokens.choices` + 边框颜色 | 语义化颜色，直观区分 |
| **动画系统** | Tailwind `animate-*` | 声明式动画，易维护 |
| **响应式** | Tailwind断点 | 移动端完美适配 |
| **组件复用** | Shadcn/ui | 复制粘贴，完全可控 |

---

**文档版本**：v1.0  
**创建日期**：2026年6月5日  
**说明**：基于美术风格指南，采用Tailwind CSS v4 + Shadcn/ui方案实现
