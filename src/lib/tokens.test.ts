import { tokens, type Chapter, type ChoiceStyle } from './tokens';

describe('tokens', () => {
  describe('background', () => {
    it('应该有主背景色', () => {
      expect(tokens.background.primary).toBe('#0f0f0f');
    });

    it('应该有次背景色', () => {
      expect(tokens.background.secondary).toBe('#1a1a1a');
    });

    it('应该有卡片背景色', () => {
      expect(tokens.background.card).toBe('#252525');
    });

    it('应该有高亮背景色', () => {
      expect(tokens.background.highlight).toBe('#2a2a2a');
    });
  });

  describe('text', () => {
    it('应该有主文字色', () => {
      expect(tokens.text.primary).toBe('#ffffff');
    });

    it('应该有次文字色', () => {
      expect(tokens.text.secondary).toBe('#a0a0a0');
    });

    it('应该有弱文字色', () => {
      expect(tokens.text.muted).toBe('#666666');
    });

    it('应该有禁用文字色', () => {
      expect(tokens.text.disabled).toBe('#444444');
    });
  });

  describe('accent', () => {
    it('应该有主强调色', () => {
      expect(tokens.accent.primary).toBe('#3b82f6');
    });

    it('应该有成功色', () => {
      expect(tokens.accent.success).toBe('#10b981');
    });

    it('应该有警告色', () => {
      expect(tokens.accent.warning).toBe('#f59e0b');
    });

    it('应该有危险色', () => {
      expect(tokens.accent.danger).toBe('#ef4444');
    });

    it('应该有信息色', () => {
      expect(tokens.accent.info).toBe('#8b5cf6');
    });
  });

  describe('chapters', () => {
    it('应该有所有章节颜色', () => {
      const chapters: Chapter[] = [
        'prologue',
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
        'epilogue',
      ];

      chapters.forEach((chapter) => {
        expect(tokens.chapters[chapter]).toBeDefined();
        expect(typeof tokens.chapters[chapter]).toBe('string');
        expect(tokens.chapters[chapter]).toMatch(/^#[0-9a-f]{6}$/);
      });
    });

    it('序章应该是天蓝色', () => {
      expect(tokens.chapters.prologue).toBe('#0ea5e9');
    });

    it('第一章应该是紫色', () => {
      expect(tokens.chapters.chapter1).toBe('#8b5cf6');
    });

    it('终章应该是纯白', () => {
      expect(tokens.chapters.epilogue).toBe('#ffffff');
    });
  });

  describe('choices', () => {
    it('应该有所有选项风格颜色', () => {
      const styles: ChoiceStyle[] = ['rational', 'casual', 'academic', 'danger'];

      styles.forEach((style) => {
        expect(tokens.choices[style]).toBeDefined();
        expect(typeof tokens.choices[style]).toBe('string');
        expect(tokens.choices[style]).toMatch(/^#[0-9a-f]{6}$/);
      });
    });

    it('理性选项应该是蓝色', () => {
      expect(tokens.choices.rational).toBe('#3b82f6');
    });

    it('随性选项应该是绿色', () => {
      expect(tokens.choices.casual).toBe('#10b981');
    });

    it('学术选项应该是紫色', () => {
      expect(tokens.choices.academic).toBe('#8b5cf6');
    });

    it('危险选项应该是红色', () => {
      expect(tokens.choices.danger).toBe('#ef4444');
    });
  });

  describe('characters', () => {
    it('应该有谢凡的颜色配置', () => {
      expect(tokens.characters.xiefan).toBeDefined();
      expect(tokens.characters.xiefan.hair).toBe('#2d2d2d');
      expect(tokens.characters.xiefan.skin).toBe('#f5d0a9');
      expect(tokens.characters.xiefan.glasses).toBe('#1a1a1a');
      expect(tokens.characters.xiefan.hoodie).toBe('#3b82f6');
    });

    it('应该有张教授的颜色配置', () => {
      expect(tokens.characters.professorZhang).toBeDefined();
      expect(tokens.characters.professorZhang.hair).toBe('#ffffff');
      expect(tokens.characters.professorZhang.shirt).toBe('#f5f5f5');
      expect(tokens.characters.professorZhang.slippers).toBe('#6b7280');
    });

    it('应该有赵雪的颜色配置', () => {
      expect(tokens.characters.zhaoXue).toBeDefined();
      expect(tokens.characters.zhaoXue.hair).toBe('#1a1a1a');
      expect(tokens.characters.zhaoXue.coat).toBe('#f5f5f5');
      expect(tokens.characters.zhaoXue.tshirt).toBe('#6366f1');
    });
  });

  describe('spacing', () => {
    it('应该有间距系统', () => {
      expect(tokens.spacing.xs).toBe('4px');
      expect(tokens.spacing.sm).toBe('8px');
      expect(tokens.spacing.md).toBe('16px');
      expect(tokens.spacing.lg).toBe('24px');
      expect(tokens.spacing.xl).toBe('32px');
    });
  });

  describe('radius', () => {
    it('应该有圆角系统', () => {
      expect(tokens.radius.sm).toBe('4px');
      expect(tokens.radius.md).toBe('8px');
      expect(tokens.radius.lg).toBe('12px');
      expect(tokens.radius.xl).toBe('16px');
    });
  });

  describe('gradients', () => {
    it('应该有渐变色', () => {
      expect(tokens.gradients.spiritBlue).toBe('linear-gradient(135deg, #3b82f6, #8b5cf6)');
      expect(tokens.gradients.breakthroughGold).toBe('linear-gradient(135deg, #f59e0b, #ef4444)');
      expect(tokens.gradients.dreamPurple).toBe('linear-gradient(135deg, #8b5cf6, #ec4899)');
    });
  });

  describe('类型定义', () => {
    it('Tokens类型应该与tokens对象匹配', () => {
      const testTokens: typeof tokens = tokens;
      expect(testTokens).toBeDefined();
    });

    it('Chapter类型应该包含所有章节', () => {
      const chapters: Chapter[] = [
        'prologue',
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
        'epilogue',
      ];

      chapters.forEach((chapter) => {
        expect(tokens.chapters[chapter]).toBeDefined();
      });
    });

    it('ChoiceStyle类型应该包含所有选项风格', () => {
      const styles: ChoiceStyle[] = ['rational', 'casual', 'academic', 'danger'];

      styles.forEach((style) => {
        expect(tokens.choices[style]).toBeDefined();
      });
    });
  });
});
