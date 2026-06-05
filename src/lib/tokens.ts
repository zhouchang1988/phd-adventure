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
