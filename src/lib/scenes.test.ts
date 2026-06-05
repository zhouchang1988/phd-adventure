import { scenes, getScene, type Scene, type SceneElement } from './scenes';

describe('scenes', () => {
  describe('scenes对象', () => {
    it('应该包含所有场景', () => {
      expect(scenes.beach_night).toBeDefined();
      expect(scenes.dormitory_day).toBeDefined();
      expect(scenes.professor_home).toBeDefined();
    });

    it('海边夜晚场景应该有正确的属性', () => {
      const beach = scenes.beach_night;
      expect(beach.id).toBe('beach_night');
      expect(beach.name).toBe('海边夜晚');
      expect(beach.chapter).toBe('prologue');
      expect(beach.gradient).toBe('from-[#0f172a] to-[#1e3a5f]');
      expect(beach.atmosphere).toBe('孤独、迷茫');
    });

    it('海边夜晚场景应该有正确的元素', () => {
      const beach = scenes.beach_night;
      expect(beach.elements).toHaveLength(3);

      // 月亮
      const moon = beach.elements[0];
      expect(moon.type).toBe('circle');
      expect(moon.position.x).toBe('right-[20%]');
      expect(moon.position.y).toBe('top-[10%]');
      expect(moon.size.width).toBe('w-20');
      expect(moon.size.height).toBe('h-20');
      expect(moon.style).toContain('bg-[#f5f5f5]');
      expect(moon.style).toContain('rounded-full');

      // 海面
      const sea = beach.elements[1];
      expect(sea.type).toBe('rectangle');
      expect(sea.position.x).toBe('left-0');
      expect(sea.position.y).toBe('bottom-[30%]');
      expect(sea.size.width).toBe('w-full');
      expect(sea.size.height).toBe('h-1');
      expect(sea.style).toContain('bg-[#0ea5e9]/30');
      expect(sea.animation).toContain('animate-[wave_3s_ease-in-out_infinite]');

      // 沙滩
      const sand = beach.elements[2];
      expect(sand.type).toBe('rectangle');
      expect(sand.position.x).toBe('left-0');
      expect(sand.position.y).toBe('bottom-0');
      expect(sand.size.width).toBe('w-full');
      expect(sand.size.height).toBe('h-[30%]');
      expect(sand.style).toContain('bg-[#d4a574]');
    });

    it('出租屋场景应该有正确的属性', () => {
      const dormitory = scenes.dormitory_day;
      expect(dormitory.id).toBe('dormitory_day');
      expect(dormitory.name).toBe('出租屋白天');
      expect(dormitory.chapter).toBe('prologue');
      expect(dormitory.gradient).toBe('from-[#1a1a1a] to-[#252525]');
      expect(dormitory.atmosphere).toBe('温馨、窘迫');
    });

    it('张教授家场景应该有正确的属性', () => {
      const professorHome = scenes.professor_home;
      expect(professorHome.id).toBe('professor_home');
      expect(professorHome.name).toBe('张教授家');
      expect(professorHome.chapter).toBe('chapter1');
      expect(professorHome.gradient).toBe('from-[#1a2e1a] to-[#253525]');
      expect(professorHome.atmosphere).toBe('学术、安宁');
    });
  });

  describe('getScene', () => {
    it('应该返回正确的场景', () => {
      expect(getScene('beach_night')).toBe(scenes.beach_night);
      expect(getScene('dormitory_day')).toBe(scenes.dormitory_day);
      expect(getScene('professor_home')).toBe(scenes.professor_home);
    });

    it('对于未知场景应该返回海边夜晚', () => {
      expect(getScene('unknown')).toBe(scenes.beach_night);
    });

    it('对于空字符串应该返回海边夜晚', () => {
      expect(getScene('')).toBe(scenes.beach_night);
    });
  });

  describe('Scene接口', () => {
    it('应该符合Scene接口定义', () => {
      const scene: Scene = scenes.beach_night;
      expect(typeof scene.id).toBe('string');
      expect(typeof scene.name).toBe('string');
      expect(typeof scene.chapter).toBe('string');
      expect(typeof scene.gradient).toBe('string');
      expect(Array.isArray(scene.elements)).toBe(true);
      expect(typeof scene.atmosphere).toBe('string');
    });
  });

  describe('SceneElement接口', () => {
    it('应该符合SceneElement接口定义', () => {
      const element: SceneElement = scenes.beach_night.elements[0];
      expect(typeof element.type).toBe('string');
      expect(typeof element.position).toBe('object');
      expect(typeof element.position.x).toBe('string');
      expect(typeof element.position.y).toBe('string');
      expect(typeof element.size).toBe('object');
      expect(typeof element.size.width).toBe('string');
      expect(typeof element.size.height).toBe('string');
      expect(typeof element.style).toBe('string');
    });

    it('动画应该是可选的', () => {
      const elementWithAnimation = scenes.beach_night.elements[1];
      const elementWithoutAnimation = scenes.beach_night.elements[0];

      expect(elementWithAnimation.animation).toBeDefined();
      expect(elementWithoutAnimation.animation).toBeUndefined();
    });
  });
});
