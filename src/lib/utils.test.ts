import { cn } from './utils';

describe('cn', () => {
  it('应该合并单个类名', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('应该合并多个类名', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('应该处理条件类名', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('应该处理undefined和null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('应该处理对象语法', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('应该处理混合语法', () => {
    expect(cn('foo', { bar: true, baz: false }, 'qux')).toBe('foo bar qux');
  });

  it('应该处理数组语法', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('应该处理tailwind-merge冲突', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('应该处理空输入', () => {
    expect(cn()).toBe('');
  });

  it('应该处理空字符串', () => {
    expect(cn('')).toBe('');
  });

  it('应该处理重复类名', () => {
    // tailwind-merge只处理tailwind类的冲突，不会去重自定义类名
    expect(cn('foo', 'foo')).toBe('foo foo');
  });

  it('应该处理复杂的tailwind类', () => {
    expect(cn('bg-red-500 text-white', 'bg-blue-500')).toBe('text-white bg-blue-500');
  });
});
