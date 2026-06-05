import { type GameState, type SaveData } from '@/types/game';

const SAVE_PREFIX = 'phd_save_';
const CURRENT_VERSION = '2.0';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: jest.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const mockGameState: GameState = {
  currentNode: 'prologue_1',
  chapter: 'prologue',
  attributes: {
    spirit: 0,
    sense: 15,
    wisdom: 85,
    science: 99,
    money: 5000,
  },
  relationships: { professor_zhang: 10 },
  flags: { chose_rational: true },
  achievements: ['good_citizen'],
  playTime: 120,
};

function saveToSlot(state: GameState, slot: string = 'auto') {
  const saveData: SaveData = {
    state,
    timestamp: Date.now(),
    version: CURRENT_VERSION,
  };
  localStorage.setItem(`${SAVE_PREFIX}${slot}`, JSON.stringify(saveData));
}

function loadFromSlot(slot: string = 'auto'): GameState | null {
  const data = localStorage.getItem(`${SAVE_PREFIX}${slot}`);
  if (!data) return null;

  try {
    const saveData: SaveData = JSON.parse(data);
    return saveData.state;
  } catch {
    return null;
  }
}

function deleteSlot(slot: string = 'auto') {
  localStorage.removeItem(`${SAVE_PREFIX}${slot}`);
}

function getAllSaves(): Array<{ slot: string; timestamp: number; chapter: string }> {
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
        // skip corrupted saves
      }
    }
  }

  return saves.sort((a, b) => b.timestamp - a.timestamp);
}

describe('useSaveSystem logic', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  describe('save', () => {
    it('应该保存游戏状态到localStorage', () => {
      saveToSlot(mockGameState);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'phd_save_auto',
        expect.any(String)
      );

      const savedData = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
      expect(savedData.state).toEqual(mockGameState);
      expect(savedData.version).toBe('2.0');
      expect(typeof savedData.timestamp).toBe('number');
    });

    it('应该保存到指定的存档槽', () => {
      saveToSlot(mockGameState, 'slot1');

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'phd_save_slot1',
        expect.any(String)
      );
    });
  });

  describe('load', () => {
    it('应该从localStorage加载游戏状态', () => {
      const saveData: SaveData = {
        state: mockGameState,
        timestamp: Date.now(),
        version: '2.0',
      };
      localStorageMock.setItem('phd_save_auto', JSON.stringify(saveData));

      const loadedState = loadFromSlot();
      expect(loadedState).toEqual(mockGameState);
    });

    it('应该从指定的存档槽加载', () => {
      const saveData: SaveData = {
        state: mockGameState,
        timestamp: Date.now(),
        version: '2.0',
      };
      localStorageMock.setItem('phd_save_slot1', JSON.stringify(saveData));

      const loadedState = loadFromSlot('slot1');
      expect(loadedState).toEqual(mockGameState);
    });

    it('当存档不存在时应该返回null', () => {
      const loadedState = loadFromSlot();
      expect(loadedState).toBeNull();
    });

    it('当存档数据损坏时应该返回null', () => {
      localStorageMock.setItem('phd_save_auto', 'invalid json');

      const loadedState = loadFromSlot();
      expect(loadedState).toBeNull();
    });
  });

  describe('deleteSave', () => {
    it('应该删除指定的存档', () => {
      localStorageMock.setItem('phd_save_auto', 'test');

      deleteSlot();

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('phd_save_auto');
    });

    it('应该删除指定槽的存档', () => {
      localStorageMock.setItem('phd_save_slot1', 'test');

      deleteSlot('slot1');

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('phd_save_slot1');
    });
  });

  describe('getAllSaves', () => {
    it('应该返回所有存档列表', () => {
      const saveData1: SaveData = {
        state: { ...mockGameState, chapter: 'prologue' },
        timestamp: 1000,
        version: '2.0',
      };
      const saveData2: SaveData = {
        state: { ...mockGameState, chapter: 'chapter1' },
        timestamp: 2000,
        version: '2.0',
      };

      localStorageMock.setItem('phd_save_auto', JSON.stringify(saveData1));
      localStorageMock.setItem('phd_save_slot1', JSON.stringify(saveData2));

      const saves = getAllSaves();

      expect(saves).toHaveLength(2);
      expect(saves[0]).toEqual({
        slot: 'slot1',
        timestamp: 2000,
        chapter: 'chapter1',
      });
      expect(saves[1]).toEqual({
        slot: 'auto',
        timestamp: 1000,
        chapter: 'prologue',
      });
    });

    it('应该忽略损坏的存档', () => {
      localStorageMock.setItem('phd_save_auto', 'invalid json');
      localStorageMock.setItem(
        'phd_save_slot1',
        JSON.stringify({
          state: mockGameState,
          timestamp: 1000,
          version: '2.0',
        })
      );

      const saves = getAllSaves();

      expect(saves).toHaveLength(1);
      expect(saves[0].slot).toBe('slot1');
    });

    it('当没有存档时应该返回空数组', () => {
      const saves = getAllSaves();
      expect(saves).toHaveLength(0);
    });
  });
});
