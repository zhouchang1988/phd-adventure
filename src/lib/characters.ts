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
  staff: {
    id: 'staff',
    name: '工作人员',
    title: '科研所前台',
    emoji: '👩‍🔬',
    colors: {
      hair: '#1a1a1a',
      outfit: '#f5f5f5',
    },
    expressions: {
      normal: '😐',
      serious: '😑',
      surprised: '😮',
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
  traditional_cultivator: {
    id: 'traditional_cultivator',
    name: '传统修仙者',
    title: '守旧派代表',
    emoji: '🧙',
    colors: {
      hair: '#4a5568',
      outfit: '#7c3aed',
    },
    expressions: {
      normal: '😐',
      angry: '😠',
      disdainful: '😤',
      surprised: '😮',
    },
  },
  scientist: {
    id: 'scientist',
    name: '科学家',
    title: '理性派代表',
    emoji: '🔬',
    colors: {
      hair: '#6b7280',
      outfit: '#f5f5f5',
    },
    expressions: {
      normal: '😐',
      thinking: '🤔',
      confident: '😏',
    },
  },
  parallel_xiefan: {
    id: 'parallel_xiefan',
    name: '平行谢凡',
    title: '另一个世界的你',
    emoji: '👤',
    colors: {
      hair: '#2d2d2d',
      skin: '#f5d0a9',
      outfit: '#6b7280',
    },
    expressions: {
      normal: '😐',
      tired: '😫',
      happy: '😄',
      thoughtful: '🤔',
    },
  },
  bridge_guardian: {
    id: 'bridge_guardian',
    name: '守桥人',
    title: '踏天桥守护者',
    emoji: '🌀',
    colors: {
      outfit: '#a78bfa',
    },
    expressions: {
      normal: '😐',
      smile: '😏',
      mysterious: '🤫',
    },
  },
};

export function getCharacter(id: string): Character {
  return characters[id] || characters.narrator;
}
