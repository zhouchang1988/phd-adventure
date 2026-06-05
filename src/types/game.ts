import { type Chapter, type ChoiceStyle } from '@/lib/tokens';

export interface GameState {
  currentNode: string;
  chapter: Chapter;
  attributes: Attributes;
  relationships: Record<string, number>;
  flags: Record<string, boolean>;
  achievements: string[];
  playTime: number;
}

export interface Attributes {
  spirit: number;
  sense: number;
  wisdom: number;
  science: number;
  money: number;
}

export interface StoryNode {
  id: string;
  chapter: Chapter;
  title: string;
  background: string;
  dialogues: Dialogue[];
  choices?: Choice[];
  autoNext?: string;
  autoDelay?: number;
  effects?: NodeEffects;
}

export interface Dialogue {
  speaker: string;
  text: string;
  emotion?: string;
}

export interface Choice {
  id: string;
  text: string;
  style: ChoiceStyle;
  nextNode: string;
  effects?: ChoiceEffects;
  condition?: (state: GameState) => boolean;
}

export interface ChoiceEffects {
  attributes?: Partial<Attributes>;
  flags?: Record<string, boolean>;
  relationships?: Record<string, number>;
  achievements?: string[];
}

export interface NodeEffects {
  shake?: boolean;
  flash?: boolean;
  fadeIn?: boolean;
  typewriter?: boolean;
}

export interface SaveData {
  state: GameState;
  timestamp: number;
  version: string;
}
