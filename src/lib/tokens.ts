export const tokens = {
  background: {
    primary: '#0a1628',
    secondary: '#0f1f3d',
    card: '#162544',
    highlight: '#1d3058',
  },

  text: {
    primary: '#e2e8f0',
    secondary: '#94a3b8',
    muted: '#64748b',
    disabled: '#475569',
  },

  accent: {
    primary: '#38bdf8',
    success: '#34d399',
    warning: '#fbbf24',
    danger: '#f87171',
    info: '#a78bfa',
  },

  chapters: {
    prologue: '#38bdf8',
    chapter1: '#a78bfa',
    chapter2: '#818cf8',
    chapter3: '#fbbf24',
    chapter4: '#f87171',
    chapter5: '#34d399',
    epilogue: '#e2e8f0',
  },

  choices: {
    rational: '#38bdf8',
    casual: '#34d399',
    academic: '#a78bfa',
    danger: '#f87171',
  },

  characters: {
    xiefan: {
      hair: '#2d2d2d',
      skin: '#f5d0a9',
      glasses: '#1a1a1a',
      hoodie: '#38bdf8',
    },
    professorZhang: {
      hair: '#e2e8f0',
      shirt: '#cbd5e1',
      slippers: '#64748b',
    },
    zhaoXue: {
      hair: '#1e293b',
      coat: '#cbd5e1',
      tshirt: '#818cf8',
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },

  gradients: {
    spiritBlue: 'linear-gradient(135deg, #38bdf8, #a78bfa)',
    breakthroughGold: 'linear-gradient(135deg, #fbbf24, #f87171)',
    dreamPurple: 'linear-gradient(135deg, #a78bfa, #f472b6)',
  },
} as const;

export type Tokens = typeof tokens;
export type Chapter = keyof typeof tokens.chapters;
export type ChoiceStyle = keyof typeof tokens.choices;

// 章节顺序（从前往后）
export const CHAPTER_ORDER: Chapter[] = [
  'prologue',
  'chapter1',
  'chapter2',
  'chapter3',
  'chapter4',
  'chapter5',
  'epilogue',
];
