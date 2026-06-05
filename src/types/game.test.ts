import {
  type GameState,
  type Attributes,
  type StoryNode,
  type Dialogue,
  type Choice,
  type ChoiceEffects,
  type NodeEffects,
  type SaveData,
} from './game';
import { type Chapter, type ChoiceStyle } from '@/lib/tokens';

describe('game types', () => {
  describe('GameState', () => {
    it('应该符合GameState接口定义', () => {
      const state: GameState = {
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

      expect(typeof state.currentNode).toBe('string');
      expect(typeof state.chapter).toBe('string');
      expect(typeof state.attributes).toBe('object');
      expect(typeof state.relationships).toBe('object');
      expect(typeof state.flags).toBe('object');
      expect(Array.isArray(state.achievements)).toBe(true);
      expect(typeof state.playTime).toBe('number');
    });
  });

  describe('Attributes', () => {
    it('应该符合Attributes接口定义', () => {
      const attributes: Attributes = {
        spirit: 0,
        sense: 15,
        wisdom: 85,
        science: 99,
        money: 5000,
      };

      expect(typeof attributes.spirit).toBe('number');
      expect(typeof attributes.sense).toBe('number');
      expect(typeof attributes.wisdom).toBe('number');
      expect(typeof attributes.science).toBe('number');
      expect(typeof attributes.money).toBe('number');
    });
  });

  describe('StoryNode', () => {
    it('应该符合StoryNode接口定义', () => {
      const node: StoryNode = {
        id: 'prologue_1',
        chapter: 'prologue',
        title: '发现石头',
        background: 'beach_night',
        dialogues: [
          {
            speaker: 'narrator',
            text: '深夜，星海市某海滩。',
          },
        ],
        choices: [
          {
            id: 'choice_rational',
            text: '"这是什么放射性物质？"',
            style: 'rational',
            nextNode: 'prologue_2',
          },
        ],
        autoNext: 'prologue_2',
        autoDelay: 2000,
        effects: {
          shake: false,
          flash: false,
          fadeIn: true,
          typewriter: true,
        },
      };

      expect(typeof node.id).toBe('string');
      expect(typeof node.chapter).toBe('string');
      expect(typeof node.title).toBe('string');
      expect(typeof node.background).toBe('string');
      expect(Array.isArray(node.dialogues)).toBe(true);
      expect(Array.isArray(node.choices)).toBe(true);
      expect(typeof node.autoNext).toBe('string');
      expect(typeof node.autoDelay).toBe('number');
      expect(typeof node.effects).toBe('object');
    });

    it('应该允许可选字段为空', () => {
      const node: StoryNode = {
        id: 'prologue_1',
        chapter: 'prologue',
        title: '发现石头',
        background: 'beach_night',
        dialogues: [],
      };

      expect(node.choices).toBeUndefined();
      expect(node.autoNext).toBeUndefined();
      expect(node.autoDelay).toBeUndefined();
      expect(node.effects).toBeUndefined();
    });
  });

  describe('Dialogue', () => {
    it('应该符合Dialogue接口定义', () => {
      const dialogue: Dialogue = {
        speaker: 'narrator',
        text: '深夜，星海市某海滩。',
        emotion: 'confused',
      };

      expect(typeof dialogue.speaker).toBe('string');
      expect(typeof dialogue.text).toBe('string');
      expect(typeof dialogue.emotion).toBe('string');
    });

    it('应该允许emotion为空', () => {
      const dialogue: Dialogue = {
        speaker: 'narrator',
        text: '深夜，星海市某海滩。',
      };

      expect(dialogue.emotion).toBeUndefined();
    });
  });

  describe('Choice', () => {
    it('应该符合Choice接口定义', () => {
      const choice: Choice = {
        id: 'choice_rational',
        text: '"这是什么放射性物质？"',
        style: 'rational',
        nextNode: 'prologue_2',
        effects: {
          attributes: { science: 1 },
          flags: { chose_rational: true },
          relationships: { professor_zhang: 10 },
          achievements: ['good_citizen'],
        },
        condition: (state: GameState) => state.attributes.science > 50,
      };

      expect(typeof choice.id).toBe('string');
      expect(typeof choice.text).toBe('string');
      expect(typeof choice.style).toBe('string');
      expect(typeof choice.nextNode).toBe('string');
      expect(typeof choice.effects).toBe('object');
      expect(typeof choice.condition).toBe('function');
    });

    it('应该允许可选字段为空', () => {
      const choice: Choice = {
        id: 'choice_rational',
        text: '"这是什么放射性物质？"',
        style: 'rational',
        nextNode: 'prologue_2',
      };

      expect(choice.effects).toBeUndefined();
      expect(choice.condition).toBeUndefined();
    });
  });

  describe('ChoiceEffects', () => {
    it('应该符合ChoiceEffects接口定义', () => {
      const effects: ChoiceEffects = {
        attributes: { spirit: 10, sense: 5 },
        flags: { chose_rational: true },
        relationships: { professor_zhang: 10 },
        achievements: ['good_citizen'],
      };

      expect(typeof effects.attributes).toBe('object');
      expect(typeof effects.flags).toBe('object');
      expect(typeof effects.relationships).toBe('object');
      expect(Array.isArray(effects.achievements)).toBe(true);
    });

    it('应该允许所有字段为空', () => {
      const effects: ChoiceEffects = {};

      expect(effects.attributes).toBeUndefined();
      expect(effects.flags).toBeUndefined();
      expect(effects.relationships).toBeUndefined();
      expect(effects.achievements).toBeUndefined();
    });
  });

  describe('NodeEffects', () => {
    it('应该符合NodeEffects接口定义', () => {
      const effects: NodeEffects = {
        shake: true,
        flash: false,
        fadeIn: true,
        typewriter: true,
      };

      expect(typeof effects.shake).toBe('boolean');
      expect(typeof effects.flash).toBe('boolean');
      expect(typeof effects.fadeIn).toBe('boolean');
      expect(typeof effects.typewriter).toBe('boolean');
    });

    it('应该允许所有字段为空', () => {
      const effects: NodeEffects = {};

      expect(effects.shake).toBeUndefined();
      expect(effects.flash).toBeUndefined();
      expect(effects.fadeIn).toBeUndefined();
      expect(effects.typewriter).toBeUndefined();
    });
  });

  describe('SaveData', () => {
    it('应该符合SaveData接口定义', () => {
      const saveData: SaveData = {
        state: {
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
        },
        timestamp: Date.now(),
        version: '2.0',
      };

      expect(typeof saveData.state).toBe('object');
      expect(typeof saveData.timestamp).toBe('number');
      expect(typeof saveData.version).toBe('string');
    });
  });
});
