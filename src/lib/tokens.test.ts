import { tokens, type Chapter, type ChoiceStyle, CHAPTER_ORDER } from './tokens';

describe('tokens', () => {
  describe('background', () => {
    it('应该有主背景色', () => {
      expect(tokens.background.primary).toBe('#0a1628');
    });

    it('应该有次背景色', () => {
      expect(tokens.background.secondary).toBe('#0f1f3d');
    });

    it('应该有卡片背景色', () => {
      expect(tokens.background.card).toBe('#162544');
    });

    it('应该有高亮背景色', () => {
      expect(tokens.background.highlight).toBe('#1d3058');
    });
  });

  describe('text', () => {
    it('应该有主文字色', () => {
      expect(tokens.text.primary).toBe('#e2e8f0');
    });

    it('应该有次文字色', () => {
      expect(tokens.text.secondary).toBe('#94a3b8');
    });

    it('应该有弱文字色', () => {
      expect(tokens.text.muted).toBe('#64748b');
    });

    it('应该有禁用文字色', () => {
      expect(tokens.text.disabled).toBe('#475569');
    });
  });

  describe('accent', () => {
    it('应该有主强调色', () => {
      expect(tokens.accent.primary).toBe('#38bdf8');
    });

    it('应该有成功色', () => {
      expect(tokens.accent.success).toBe('#34d399');
    });

    it('应该有警告色', () => {
      expect(tokens.accent.warning).toBe('#fbbf24');
    });

    it('应该有危险色', () => {
      expect(tokens.accent.danger).toBe('#f87171');
    });

    it('应该有信息色', () => {
      expect(tokens.accent.info).toBe('#a78bfa');
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
      expect(tokens.chapters.prologue).toBe('#38bdf8');
    });

    it('第一章应该是紫色', () => {
      expect(tokens.chapters.chapter1).toBe('#a78bfa');
    });

    it('终章应该是纯白', () => {
      expect(tokens.chapters.epilogue).toBe('#e2e8f0');
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
      expect(tokens.choices.rational).toBe('#38bdf8');
    });

    it('随性选项应该是绿色', () => {
      expect(tokens.choices.casual).toBe('#34d399');
    });

    it('学术选项应该是紫色', () => {
      expect(tokens.choices.academic).toBe('#a78bfa');
    });

    it('危险选项应该是红色', () => {
      expect(tokens.choices.danger).toBe('#f87171');
    });
  });

  describe('characters', () => {
    it('应该有谢凡的颜色配置', () => {
      expect(tokens.characters.xiefan).toBeDefined();
      expect(tokens.characters.xiefan.hair).toBe('#2d2d2d');
      expect(tokens.characters.xiefan.skin).toBe('#f5d0a9');
      expect(tokens.characters.xiefan.glasses).toBe('#1a1a1a');
      expect(tokens.characters.xiefan.hoodie).toBe('#38bdf8');
    });

    it('应该有张教授的颜色配置', () => {
      expect(tokens.characters.professorZhang).toBeDefined();
      expect(tokens.characters.professorZhang.hair).toBe('#e2e8f0');
      expect(tokens.characters.professorZhang.shirt).toBe('#cbd5e1');
      expect(tokens.characters.professorZhang.slippers).toBe('#64748b');
    });

    it('应该有赵雪的颜色配置', () => {
      expect(tokens.characters.zhaoXue).toBeDefined();
      expect(tokens.characters.zhaoXue.hair).toBe('#1e293b');
      expect(tokens.characters.zhaoXue.coat).toBe('#cbd5e1');
      expect(tokens.characters.zhaoXue.tshirt).toBe('#818cf8');
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
      expect(tokens.gradients.spiritBlue).toBe('linear-gradient(135deg, #38bdf8, #a78bfa)');
      expect(tokens.gradients.breakthroughGold).toBe('linear-gradient(135deg, #fbbf24, #f87171)');
      expect(tokens.gradients.dreamPurple).toBe('linear-gradient(135deg, #a78bfa, #f472b6)');
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

  describe('CHAPTER_ORDER', () => {
    it('应该包含所有章节', () => {
      expect(CHAPTER_ORDER).toHaveLength(7);
      expect(CHAPTER_ORDER).toEqual([
        'prologue',
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
        'epilogue',
      ]);
    });

    it('应该按正确顺序排列', () => {
      expect(CHAPTER_ORDER[0]).toBe('prologue');
      expect(CHAPTER_ORDER[6]).toBe('epilogue');
    });
  });
});
