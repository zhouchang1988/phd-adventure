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
