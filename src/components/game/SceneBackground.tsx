'use client';

import { cn } from '@/lib/utils';
import { type Chapter } from '@/lib/tokens';
import { getScene } from '@/lib/scenes';

interface SceneBackgroundProps {
  sceneId: string;
  chapter: Chapter;
  children?: React.ReactNode;
}

export function SceneBackground({ sceneId, chapter, children }: SceneBackgroundProps) {
  const scene = getScene(sceneId);

  return (
    <div
      className={cn(
        'relative w-full h-screen overflow-hidden',
        'bg-gradient-to-b',
        scene.gradient
      )}
    >
      {scene.elements.map((element, index) => (
        <div
          key={index}
          className={cn(
            'absolute',
            element.position.x,
            element.position.y,
            element.size.width,
            element.size.height,
            element.style,
            element.animation
          )}
        />
      ))}

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
