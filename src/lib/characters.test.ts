import { characters, getCharacter, type Character } from './characters';

describe('characters', () => {
  describe('characters对象', () => {
    it('应该包含所有角色', () => {
      expect(characters.xiefan).toBeDefined();
      expect(characters.professor_zhang).toBeDefined();
      expect(characters.zhao_xue).toBeDefined();
      expect(characters.narrator).toBeDefined();
      expect(characters.system).toBeDefined();
    });

    it('谢凡应该有正确的属性', () => {
      const xiefan = characters.xiefan;
      expect(xiefan.id).toBe('xiefan');
      expect(xiefan.name).toBe('谢凡');
      expect(xiefan.title).toBe('理论物理学博士');
      expect(xiefan.emoji).toBe('👨');
      expect(xiefan.colors.hair).toBe('#2d2d2d');
      expect(xiefan.colors.skin).toBe('#f5d0a9');
      expect(xiefan.colors.outfit).toBe('#3b82f6');
    });

    it('谢凡应该有表情映射', () => {
      const xiefan = characters.xiefan;
      expect(xiefan.expressions.normal).toBe('😐');
      expect(xiefan.expressions.confused).toBe('😕');
      expect(xiefan.expressions.thinking).toBe('🤔');
      expect(xiefan.expressions.happy).toBe('😄');
      expect(xiefan.expressions.surprised).toBe('😮');
    });

    it('张教授应该有正确的属性', () => {
      const professor = characters.professor_zhang;
      expect(professor.id).toBe('professor_zhang');
      expect(professor.name).toBe('张教授');
      expect(professor.title).toBe('守夜人/退休物理学教授');
      expect(professor.emoji).toBe('👴');
      expect(professor.colors.hair).toBe('#ffffff');
      expect(professor.colors.outfit).toBe('#f5f5f5');
    });

    it('赵雪应该有正确的属性', () => {
      const zhaoXue = characters.zhao_xue;
      expect(zhaoXue.id).toBe('zhao_xue');
      expect(zhaoXue.name).toBe('赵雪');
      expect(zhaoXue.title).toBe('修仙界年轻修士');
      expect(zhaoXue.emoji).toBe('👩');
      expect(zhaoXue.colors.hair).toBe('#1a1a1a');
      expect(zhaoXue.colors.outfit).toBe('#f5f5f5');
    });

    it('旁白应该有正确的属性', () => {
      const narrator = characters.narrator;
      expect(narrator.id).toBe('narrator');
      expect(narrator.name).toBe('旁白');
      expect(narrator.title).toBe('');
      expect(narrator.emoji).toBe('📖');
      expect(narrator.colors).toEqual({});
      expect(narrator.expressions).toEqual({});
    });

    it('系统应该有正确的属性', () => {
      const system = characters.system;
      expect(system.id).toBe('system');
      expect(system.name).toBe('系统');
      expect(system.title).toBe('');
      expect(system.emoji).toBe('⚙️');
      expect(system.colors).toEqual({});
      expect(system.expressions).toEqual({});
    });
  });

  describe('getCharacter', () => {
    it('应该返回正确的角色', () => {
      expect(getCharacter('xiefan')).toBe(characters.xiefan);
      expect(getCharacter('professor_zhang')).toBe(characters.professor_zhang);
      expect(getCharacter('zhao_xue')).toBe(characters.zhao_xue);
      expect(getCharacter('narrator')).toBe(characters.narrator);
      expect(getCharacter('system')).toBe(characters.system);
    });

    it('对于未知角色应该返回旁白', () => {
      expect(getCharacter('unknown')).toBe(characters.narrator);
    });

    it('对于空字符串应该返回旁白', () => {
      expect(getCharacter('')).toBe(characters.narrator);
    });
  });

  describe('Character接口', () => {
    it('应该符合Character接口定义', () => {
      const character: Character = characters.xiefan;
      expect(typeof character.id).toBe('string');
      expect(typeof character.name).toBe('string');
      expect(typeof character.title).toBe('string');
      expect(typeof character.emoji).toBe('string');
      expect(typeof character.colors).toBe('object');
      expect(typeof character.expressions).toBe('object');
    });
  });
});
