'use client';

import { useCallback } from 'react';
import { type GameState, type SaveData } from '@/types/game';

const SAVE_PREFIX = 'phd_save_';
const CURRENT_VERSION = '2.0';

export function useSaveSystem() {
  const save = useCallback((state: GameState, slot: string = 'auto') => {
    const saveData: SaveData = {
      state,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    };
    localStorage.setItem(`${SAVE_PREFIX}${slot}`, JSON.stringify(saveData));
  }, []);

  const load = useCallback((slot: string = 'auto'): GameState | null => {
    const data = localStorage.getItem(`${SAVE_PREFIX}${slot}`);
    if (!data) return null;

    try {
      const saveData: SaveData = JSON.parse(data);
      return saveData.state;
    } catch {
      return null;
    }
  }, []);

  const deleteSave = useCallback((slot: string = 'auto') => {
    localStorage.removeItem(`${SAVE_PREFIX}${slot}`);
  }, []);

  const getAllSaves = useCallback((): Array<{ slot: string; timestamp: number; chapter: string }> => {
    const saves: Array<{ slot: string; timestamp: number; chapter: string }> = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(SAVE_PREFIX)) {
        const slot = key.replace(SAVE_PREFIX, '');
        try {
          const data: SaveData = JSON.parse(localStorage.getItem(key)!);
          saves.push({
            slot,
            timestamp: data.timestamp,
            chapter: data.state.chapter,
          });
        } catch {
          // 忽略损坏的存档
        }
      }
    }

    return saves.sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  const exportSave = useCallback((slot: string = 'auto') => {
    const data = localStorage.getItem(`${SAVE_PREFIX}${slot}`);
    if (!data) return;

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `phd_save_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const importSave = useCallback(async (file: File): Promise<GameState | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const saveData: SaveData = JSON.parse(e.target?.result as string);
          resolve(saveData.state);
        } catch {
          resolve(null);
        }
      };
      reader.readAsText(file);
    });
  }, []);

  return { save, load, deleteSave, getAllSaves, exportSave, importSave };
}
