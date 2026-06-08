import { type StoryNode } from '@/types/game';
import { prologueNodes } from './prologue';
import { chapter1Nodes } from './chapter1';
import { chapter2Nodes } from './chapter2';
import { chapter3Nodes } from './chapter3';
import { chapter4Nodes } from './chapter4';
import { chapter5Nodes } from './chapter5';
import { epilogueNodes } from './epilogue';

export const storyNodes: Record<string, StoryNode> = {
  ...prologueNodes,
  ...chapter1Nodes,
  ...chapter2Nodes,
  ...chapter3Nodes,
  ...chapter4Nodes,
  ...chapter5Nodes,
  ...epilogueNodes,
};

export function getStoryNode(id: string): StoryNode | null {
  return storyNodes[id] || null;
}
