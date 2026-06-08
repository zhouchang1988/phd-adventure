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
  training_room: {
    id: 'training_room',
    name: '修炼室',
    chapter: 'chapter2',
    gradient: 'from-[#0c1a35] to-[#162544]',
    elements: [
      {
        type: 'circle',
        position: { x: 'left-[50%]', y: 'top-[50%]' },
        size: { width: 'w-32', height: 'h-32' },
        style: 'bg-[#38bdf8]/10 rounded-full blur-xl',
        animation: 'animate-pulse',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-0' },
        size: { width: 'w-full', height: 'h-[20%]' },
        style: 'bg-[#1e3a5f]/50',
      },
    ],
    atmosphere: '专注、神秘',
  },
  research_lab: {
    id: 'research_lab',
    name: '研究实验室',
    chapter: 'chapter3',
    gradient: 'from-[#0f172a] to-[#1e293b]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'left-[15%]', y: 'top-[20%]' },
        size: { width: 'w-24', height: 'h-16' },
        style: 'bg-[#38bdf8]/20 border border-[#38bdf8]/30 rounded',
      },
      {
        type: 'rectangle',
        position: { x: 'right-[15%]', y: 'top-[30%]' },
        size: { width: 'w-20', height: 'h-12' },
        style: 'bg-[#a78bfa]/20 border border-[#a78bfa]/30 rounded',
      },
      {
        type: 'circle',
        position: { x: 'left-[40%]', y: 'bottom-[25%]' },
        size: { width: 'w-8', height: 'h-8' },
        style: 'bg-[#34d399]/30 rounded-full',
        animation: 'animate-bounce',
      },
    ],
    atmosphere: '科学、探索',
  },
  meeting_hall: {
    id: 'meeting_hall',
    name: '会议室',
    chapter: 'chapter4',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'left-[20%]', y: 'top-[30%]' },
        size: { width: 'w-[60%]', height: 'h-1' },
        style: 'bg-[#4a5568]',
      },
      {
        type: 'rectangle',
        position: { x: 'left-[10%]', y: 'bottom-[20%]' },
        size: { width: 'w-16', height: 'h-24' },
        style: 'bg-[#2d3748] rounded',
      },
      {
        type: 'rectangle',
        position: { x: 'right-[10%]', y: 'bottom-[20%]' },
        size: { width: 'w-16', height: 'h-24' },
        style: 'bg-[#2d3748] rounded',
      },
    ],
    atmosphere: '严肃、紧张',
  },
  city_day: {
    id: 'city_day',
    name: '城市白天',
    chapter: 'chapter4',
    gradient: 'from-[#1e3a5f] to-[#0ea5e9]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'left-[10%]', y: 'bottom-[40%]' },
        size: { width: 'w-12', height: 'h-32' },
        style: 'bg-[#374151] rounded-t',
      },
      {
        type: 'rectangle',
        position: { x: 'left-[30%]', y: 'bottom-[40%]' },
        size: { width: 'w-16', height: 'h-48' },
        style: 'bg-[#4b5563] rounded-t',
      },
      {
        type: 'rectangle',
        position: { x: 'right-[20%]', y: 'bottom-[40%]' },
        size: { width: 'w-14', height: 'h-40' },
        style: 'bg-[#374151] rounded-t',
      },
      {
        type: 'circle',
        position: { x: 'right-[15%]', y: 'top-[10%]' },
        size: { width: 'w-16', height: 'h-16' },
        style: 'bg-[#fbbf24] rounded-full shadow-[0_0_30px_rgba(251,191,36,0.5)]',
      },
    ],
    atmosphere: '繁华、变化',
  },
  mystical_bridge: {
    id: 'mystical_bridge',
    name: '踏天桥',
    chapter: 'chapter5',
    gradient: 'from-[#0f0f23] to-[#1a1a3e]',
    elements: [
      {
        type: 'rectangle',
        position: { x: 'left-[10%]', y: 'bottom-[30%]' },
        size: { width: 'w-[80%]', height: 'h-2' },
        style: 'bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent',
      },
      {
        type: 'circle',
        position: { x: 'left-[20%]', y: 'top-[20%]' },
        size: { width: 'w-4', height: 'h-4' },
        style: 'bg-[#fbbf24]/50 rounded-full',
        animation: 'animate-pulse',
      },
      {
        type: 'circle',
        position: { x: 'right-[30%]', y: 'top-[15%]' },
        size: { width: 'w-3', height: 'h-3' },
        style: 'bg-[#38bdf8]/50 rounded-full',
        animation: 'animate-pulse',
      },
      {
        type: 'circle',
        position: { x: 'left-[60%]', y: 'top-[25%]' },
        size: { width: 'w-2', height: 'h-2' },
        style: 'bg-[#34d399]/50 rounded-full',
        animation: 'animate-pulse',
      },
    ],
    atmosphere: '神秘、超脱',
  },
  beach_sunrise: {
    id: 'beach_sunrise',
    name: '海边日出',
    chapter: 'epilogue',
    gradient: 'from-[#1e3a5f] to-[#f97316]',
    elements: [
      {
        type: 'circle',
        position: { x: 'left-[50%]', y: 'top-[20%]' },
        size: { width: 'w-24', height: 'h-24' },
        style: 'bg-gradient-to-b from-[#fbbf24] to-[#f97316] rounded-full shadow-[0_0_60px_rgba(251,191,36,0.6)]',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-[25%]' },
        size: { width: 'w-full', height: 'h-1' },
        style: 'bg-[#f97316]/30',
        animation: 'animate-[wave_4s_ease-in-out_infinite]',
      },
      {
        type: 'rectangle',
        position: { x: 'left-0', y: 'bottom-0' },
        size: { width: 'w-full', height: 'h-[25%]' },
        style: 'bg-[#d4a574]',
      },
    ],
    atmosphere: '希望、重生',
  },
};

export function getScene(id: string): Scene {
  return scenes[id] || scenes.beach_night;
}
