/* ============================================
   谢凡的奇幻冒险2.0 - 存档系统
   ============================================ */

class SaveSystem {
    constructor() {
        this.savePrefix = 'phd_save_';
        this.memoryKey = 'phd_memory';
    }

    // 保存游戏
    save(slot = 'auto', gameState) {
        const saveData = {
            state: gameState,
            timestamp: Date.now(),
            version: '2.0',
            preview: this.generatePreview(gameState)
        };
        
        try {
            localStorage.setItem(this.savePrefix + slot, JSON.stringify(saveData));
            return true;
        } catch (e) {
            console.error('存档失败:', e);
            return false;
        }
    }

    // 读取存档
    load(slot = 'auto') {
        try {
            const data = localStorage.getItem(this.savePrefix + slot);
            if (!data) return null;
            
            const saveData = JSON.parse(data);
            return saveData.state;
        } catch (e) {
            console.error('读档失败:', e);
            return null;
        }
    }

    // 删除存档
    delete(slot = 'auto') {
        localStorage.removeItem(this.savePrefix + slot);
    }

    // 获取所有存档
    getAllSaves() {
        const saves = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(this.savePrefix)) {
                try {
                    const data = JSON.parse(localStorage.getItem(key));
                    saves.push({
                        slot: key.replace(this.savePrefix, ''),
                        timestamp: data.timestamp,
                        preview: data.preview,
                        chapter: data.state?.chapter || 0
                    });
                } catch (e) {
                    // 忽略损坏的存档
                }
            }
        }
        return saves.sort((a, b) => b.timestamp - a.timestamp);
    }

    // 生成存档预览
    generatePreview(gameState) {
        const node = storyNodes[gameState.currentNode];
        if (!node) return '未知位置';
        
        return `第${node.chapter}章 - ${node.title}`;
    }

    // 导出存档
    exportSave(slot = 'auto') {
        const data = localStorage.getItem(this.savePrefix + slot);
        if (!data) return null;
        
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `phd_adventure_save_${Date.now()}.json`;
        a.click();
        
        URL.revokeObjectURL(url);
    }

    // 导入存档
    importSave(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const saveData = JSON.parse(e.target.result);
                    localStorage.setItem(this.savePrefix + 'import', JSON.stringify(saveData));
                    resolve(saveData.state);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    // 记忆系统
    recordChoice(sceneId, choiceId, choiceText) {
        const memory = this.loadMemory();
        memory.choices.push({
            scene: sceneId,
            choice: choiceId,
            text: choiceText,
            timestamp: Date.now()
        });
        this.saveMemory(memory);
    }

    recordNPCInteraction(npcId, interactionType, details) {
        const memory = this.loadMemory();
        if (!memory.npcInteractions[npcId]) {
            memory.npcInteractions[npcId] = [];
        }
        memory.npcInteractions[npcId].push({
            type: interactionType,
            details: details,
            timestamp: Date.now()
        });
        this.saveMemory(memory);
    }

    loadMemory() {
        try {
            const data = localStorage.getItem(this.memoryKey);
            return data ? JSON.parse(data) : {
                choices: [],
                npcInteractions: {},
                visitedScenes: [],
                playerPatterns: {},
                timestamps: {}
            };
        } catch (e) {
            return {
                choices: [],
                npcInteractions: {},
                visitedScenes: [],
                playerPatterns: {},
                timestamps: {}
            };
        }
    }

    saveMemory(memory) {
        localStorage.setItem(this.memoryKey, JSON.stringify(memory));
    }

    // 检查玩家行为模式
    checkPattern(patternType) {
        const memory = this.loadMemory();
        
        switch (patternType) {
            case 'rational':
                return memory.choices.filter(c => 
                    c.text.includes('科学') || c.text.includes('物理')
                ).length > memory.choices.length * 0.6;
            case 'casual':
                return memory.choices.filter(c => 
                    c.style === 'casual'
                ).length > memory.choices.length * 0.6;
            default:
                return false;
        }
    }
}

// 全局存档系统实例
const saveSystem = new SaveSystem();
