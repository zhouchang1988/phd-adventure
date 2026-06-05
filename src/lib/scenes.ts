import { type Chapter } from './tokens';

export interface Scene {
  id: string;
  name: string;
  chapter: Chapter;
  gradient: string;
  elements: SceneElement[];
  atmosphere: string;
}

export interface SceneElement {
  type: 'circle' | 'rectangle';
  position: { x: string; y: string };
  size: { width: string; height: string };
  style: string;
  animation?: string;
}

export const scenes: Record<string, Scene> = {
  beach_night: {
    id: 'beach_night',
    name: '海边夜晚',
    chapter: 'prologue',
    gradient: 'from-[#0f172a] to-[#1e3a5f]',
    elements: [
      {
        type: 'circle',
        position: { x: 'right-[20%]', y: 'top-[10%]' },
        size: { width: 'w-20', height: 'h-20' },
        style: 'bg-[#f5f5f5] rounded-full shadow-[0_0_30px_rgba(245,245,245,0.3)]',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-[30%]' },
        size: { width: 'w-full', height: 'h-1' },
        style: 'bg-[#0ea5e9]/30',
        animation: 'animate-[wave_3s_ease-in-out_infinite]',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-0' },
        size: { width: 'w-full', height: 'h-[30%]' },
        style: 'bg-[#d4a574]',
      },
    ],
    atmosphere: '孤独、迷茫',
  },
  dormitory_day: {
    id: 'dormitory_day',
    name: '出租屋白天',
    chapter: 'prologue',
    gradient: 'from-[#1a1a1a] to-[#252525]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'right-[20%]', y: 'top-[20%]' },
        size: { width: 'w-24', height: 'h-32' },
        style: 'bg-[#0ea5e9]/20 border-2 border-[#6b7280] rounded',
      },
      {
        type: 'rectangle',
        position: { x: 'left-[10%]', y: 'bottom-[10%]' },
        size: { width: 'w-40', height: 'h-24' },
        style: 'bg-[#374151] rounded',
      },
    ],
    atmosphere: '温馨、窘迫',
  },
  professor_home: {
    id: 'professor_home',
    name: '张教授家',
    chapter: 'chapter1',
    gradient: 'from-[#1a2e1a] to-[#253525]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'left-[10%]', y: 'top-[10%]' },
        size: { width: 'w-32', height: 'h-48' },
        style: 'bg-[#8b5e3c] rounded',
      },
      {
        type: 'circle',
        position: { x: 'right-[15%]', y: 'bottom-[20%]' },
        size: { width: 'w-16', height: 'h-24' },
        style: 'bg-[#10b981] rounded-full',
      },
    ],
    atmosphere: '学术、安宁',
  },
};

export function getScene(id: string): Scene {
  return scenes[id] || scenes.beach_night;
}
