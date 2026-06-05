import { type StoryNode } from '@/types/game';
import { prologueNodes } from './prologue';
import { chapter1Nodes } from './chapter1';

export const storyNodes: Record<string, StoryNode> = {
  ...prologueNodes,
  ...chapter1Nodes,
};

export function getStoryNode(id: string): StoryNode | null {
  return storyNodes[id] || null;
}
