/* ============================================
   谢凡的奇幻冒险2.0 - 游戏引擎
   ============================================ */

class GameEngine {
    constructor() {
        // 游戏状态
        this.state = {
            currentNode: 'prologue_start',
            chapter: 0,
            attributes: {
                spirit: 0,
                sense: 15,
                wisdom: 85,
                science: 99,
                money: 5000
            },
            relationships: {
                professor_zhang: 0
            },
            flags: {},
            achievements: [],
            saveTime: null,
            playTime: 0,
            settings: {
                textSpeed: 50,
                volume: 70,
                autoPlayDelay: 3000
            }
        };

        // 当前剧情节点
        this.currentNode = null;
        
        // UI元素
        this.elements = {};
        
        // 状态
        this.isTyping = false;
        this.isAutoPlaying = false;
        this.autoPlayTimer = null;
        this.dialogueQueue = [];
        this.currentDialogueIndex = 0;
        
        // 打字机效果
        this.typewriterTimer = null;
        
        // 初始化
        this.init();
    }

    // 初始化
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadGame();
    }

    // 缓存DOM元素
    cacheElements() {
        this.elements = {
            gameContainer: document.getElementById('game-container'),
            chapterIndicator: document.getElementById('chapter-indicator'),
            locationIndicator: document.getElementById('location-indicator'),
            mainStage: document.getElementById('main-stage'),
            backgroundLayer: document.getElementById('background-layer'),
            characterLayer: document.getElementById('character-layer'),
            effectsLayer: document.getElementById('effects-layer'),
            dialogueBox: document.getElementById('dialogue-box'),
            speakerName: document.getElementById('speaker-name'),
            dialogueText: document.getElementById('dialogue-text'),
            dialogueCursor: document.getElementById('dialogue-cursor'),
            choicesContainer: document.getElementById('choices-container'),
            systemMessage: document.getElementById('system-message'),
            saveModal: document.getElementById('save-modal'),
            settingsModal: document.getElementById('settings-modal'),
            saveSlots: document.getElementById('save-slots'),
            btnSaveManager: document.getElementById('btn-save-manager'),
            btnSettings: document.getElementById('btn-settings'),
            btnNewGame: document.getElementById('btn-new-game'),
            btnSaveCurrent: document.getElementById('btn-save-current'),
            btnLoadMemory: document.getElementById('btn-load-memory'),
            achievementPopup: document.getElementById('achievement-popup')
        };
    }

    // 绑定事件
    bindEvents() {
        // 对话框点击
        this.elements.dialogueBox.addEventListener('click', () => {
            this.handleDialogueClick();
        });

        // 按钮事件
        this.elements.btnSaveManager.addEventListener('click', () => this.showSaveManager());
        this.elements.btnSettings.addEventListener('click', () => this.showSettingsModal());

        this.elements.btnNewGame.addEventListener('click', () => this.startNewGame());
        this.elements.btnSaveCurrent.addEventListener('click', () => this.saveCurrentGame());
        this.elements.btnLoadMemory.addEventListener('click', () => this.showLoadSlots());

        // 弹窗关闭
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        // 点击弹窗背景关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeAllModals();
                }
            });
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this.handleDialogueClick();
            }
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // 加载游戏
    loadGame() {
        const savedState = saveSystem.load();
        if (savedState) {
            this.state = { ...this.state, ...savedState };
            this.render();
        } else {
            this.showTitleScreen();
        }
    }

    // 保存游戏
    saveGame(slot = 'auto') {
        this.state.saveTime = Date.now();
        saveSystem.save(slot, this.state);
    }

    // 显示标题画面
    showTitleScreen() {
        // 隐藏游戏UI
        this.elements.dialogueBox.style.display = 'none';
        this.elements.choicesContainer.innerHTML = '';
        
        // 创建或获取标题画面
        let titleScreen = document.getElementById('title-screen');
        if (!titleScreen) {
            titleScreen = document.createElement('div');
            titleScreen.id = 'title-screen';
            this.elements.gameContainer.appendChild(titleScreen);
        }
        
        titleScreen.innerHTML = `
            <div class="title-content">
                <h1 class="title-name">谢凡的奇幻冒险2.0</h1>
                <p class="title-subtitle">一个关于"用科学打开修仙"的轻松喜剧</p>
                <div class="title-buttons">
                    <button id="btn-start" class="title-btn">开始游戏</button>
                    ${saveSystem.load() ? '<button id="btn-continue" class="title-btn title-btn-secondary">继续游戏</button>' : ''}
                </div>
            </div>
        `;
        titleScreen.style.display = 'flex';

        // 绑定按钮事件
        document.getElementById('btn-start').addEventListener('click', () => {
            titleScreen.style.display = 'none';
            this.newGame();
        });

        const btnContinue = document.getElementById('btn-continue');
        if (btnContinue) {
            btnContinue.addEventListener('click', () => {
                titleScreen.style.display = 'none';
                this.loadNode(this.state.currentNode);
            });
        }
    }

    // 新游戏
    newGame() {
        this.state = {
            currentNode: 'prologue_start',
            chapter: 0,
            attributes: {
                spirit: 0,
                sense: 15,
                wisdom: 85,
                science: 99,
                money: 5000
            },
            relationships: {
                professor_zhang: 0
            },
            flags: {},
            achievements: [],
            saveTime: null,
            playTime: 0,
            settings: this.state.settings
        };
        this.loadNode('prologue_start');
    }

    // 加载剧情节点
    loadNode(nodeId) {
        if (!nodeId) {
            this.showEnding();
            return;
        }

        const node = storyNodes[nodeId];
        if (!node) {
            console.error('找不到节点:', nodeId);
            return;
        }

        // 停止自动播放
        this.stopAutoPlay();
        
        // 停止打字机
        this.stopTypewriter();

        this.currentNode = node;
        this.state.currentNode = nodeId;
        this.state.chapter = node.chapter;
        this.currentDialogueIndex = 0;
        this.dialogueQueue = node.dialogues || [];

        // 更新UI
        this.updateBackground(node.background);
        this.updateChapterIndicator(node.chapter, node.title);
        
        // 应用特效
        if (node.effects) {
            this.applyEffects(node.effects);
        }

        // 自动存档
        this.saveGame('auto');

        // 确保对话框结构正确
        this.ensureDialogueStructure();
        
        // 显示对话框，隐藏选项
        this.elements.dialogueBox.style.display = 'block';
        this.elements.choicesContainer.innerHTML = '';

        // 开始渲染对话
        this.renderNextDialogue();
    }

    // 确保对话框结构正确
    ensureDialogueStructure() {
        // 检查对话框内部结构是否完整
        if (!document.getElementById('speaker-name') || !document.getElementById('dialogue-text')) {
            // 重建对话框结构
            this.elements.dialogueBox.innerHTML = `
                <div id="speaker-name"></div>
                <div id="dialogue-content">
                    <span id="dialogue-text"></span>
                    <span id="dialogue-cursor" class="blink">▼</span>
                </div>
            `;
            // 重新缓存元素
            this.elements.speakerName = document.getElementById('speaker-name');
            this.elements.dialogueText = document.getElementById('dialogue-text');
            this.elements.dialogueCursor = document.getElementById('dialogue-cursor');
        }
    }

    // 渲染下一段对话
    renderNextDialogue() {
        if (this.currentDialogueIndex >= this.dialogueQueue.length) {
            // 对话结束，显示选项或自动跳转
            if (this.currentNode.choices && this.currentNode.choices.length > 0) {
                this.renderChoices(this.currentNode.choices);
            } else if (this.currentNode.autoNext) {
                this.startAutoPlay(this.currentNode.autoNext, this.currentNode.autoDelay);
            }
            return;
        }

        const dialogue = this.dialogueQueue[this.currentDialogueIndex];
        this.renderDialogue(dialogue);
        this.currentDialogueIndex++;
    }

    // 渲染对话
    renderDialogue(dialogue) {
        // 更新说话者
        const character = characters[dialogue.speaker] || characters["旁白"];
        this.elements.speakerName.textContent = dialogue.speaker;
        this.elements.speakerName.style.color = character.color;

        // 清空文本
        this.elements.dialogueText.textContent = '';
        this.elements.dialogueCursor.classList.add('hidden');

        // 显示对话框
        this.elements.dialogueBox.style.display = 'block';

        // 打字机效果
        this.typeText(dialogue.text, () => {
            this.elements.dialogueCursor.classList.remove('hidden');
        });
    }

    // 打字机效果
    typeText(text, callback) {
        this.isTyping = true;
        let index = 0;
        const speed = (110 - this.state.settings.textSpeed) || 30;

        const type = () => {
            if (index < text.length) {
                this.elements.dialogueText.textContent += text.charAt(index);
                index++;
                this.typewriterTimer = setTimeout(type, speed);
            } else {
                this.isTyping = false;
                if (callback) callback();
            }
        };

        type();
    }

    // 停止打字机
    stopTypewriter() {
        if (this.typewriterTimer) {
            clearTimeout(this.typewriterTimer);
            this.typewriterTimer = null;
        }
        this.isTyping = false;
    }

    // 跳过打字机效果
    skipTypewriter() {
        this.stopTypewriter();
        
        if (this.currentDialogueIndex > 0) {
            const dialogue = this.dialogueQueue[this.currentDialogueIndex - 1];
            this.elements.dialogueText.textContent = dialogue.text;
        }
        
        this.elements.dialogueCursor.classList.remove('hidden');
    }

    // 处理对话框点击
    handleDialogueClick() {
        if (this.isTyping) {
            this.skipTypewriter();
        } else if (this.isAutoPlaying) {
            this.stopAutoPlay();
            this.loadNode(this.currentNode.autoNext);
        } else {
            this.renderNextDialogue();
        }
    }

    // 渲染选项
    renderChoices(choices) {
        this.elements.choicesContainer.innerHTML = '';
        this.elements.dialogueBox.style.display = 'none';

        choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn choice-enter';
            btn.dataset.style = choice.style || 'default';
            btn.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + index)}.</span> ${choice.text}`;
            
            btn.addEventListener('click', () => {
                this.makeChoice(choice);
            });

            this.elements.choicesContainer.appendChild(btn);
        });
    }

    // 做出选择
    makeChoice(choice) {
        // 记录选择
        saveSystem.recordChoice(this.state.currentNode, choice.id, choice.text);

        // 应用效果
        if (choice.effects) {
            this.applyEffects(choice.effects);
        }

        // 跳转
        this.loadNode(choice.nextNode);
    }

    // 应用效果
    applyEffects(effects) {
        // 属性变化
        if (effects.attributes) {
            Object.keys(effects.attributes).forEach(attr => {
                if (this.state.attributes[attr] !== undefined) {
                    this.state.attributes[attr] += effects.attributes[attr];
                }
            });
        }

        // 标记
        if (effects.flags) {
            Object.keys(effects.flags).forEach(flag => {
                this.state.flags[flag] = effects.flags[flag];
            });
        }

        // 关系
        if (effects.relationships) {
            Object.keys(effects.relationships).forEach(npc => {
                if (this.state.relationships[npc] !== undefined) {
                    this.state.relationships[npc] += effects.relationships[npc];
                }
            });
        }

        // 特效
        if (effects.shake && this.elements.mainStage) {
            this.elements.mainStage.classList.add('screen-shake');
            setTimeout(() => {
                this.elements.mainStage.classList.remove('screen-shake');
            }, 500);
        }

        if (effects.flash && this.elements.effectsLayer) {
            this.elements.effectsLayer.style.background = 'rgba(255,255,255,0.3)';
            setTimeout(() => {
                this.elements.effectsLayer.style.background = 'none';
            }, 300);
        }
    }

    // 更新背景
    updateBackground(bgId) {
        const bg = backgrounds[bgId];
        if (bg && this.elements.backgroundLayer) {
            this.elements.backgroundLayer.style.background = bg.gradient;
            this.elements.locationIndicator.textContent = bg.name;
        }
    }

    // 更新章节指示器
    updateChapterIndicator(chapter, title) {
        const chapterNames = ['序章', '第一章', '第二章', '第三章', '第四章', '第五章', '终章'];
        if (this.elements.chapterIndicator) {
            this.elements.chapterIndicator.textContent = chapterNames[chapter] || `第${chapter}章`;
        }
    }

    // 开始自动播放
    startAutoPlay(nextNode, delay) {
        this.isAutoPlaying = true;
        this.elements.dialogueCursor.classList.add('hidden');
        this.elements.dialogueText.textContent += '\n\n[点击继续...]';
        
        this.autoPlayTimer = setTimeout(() => {
            if (this.isAutoPlaying) {
                this.isAutoPlaying = false;
                this.loadNode(nextNode);
            }
        }, delay || 3000);
    }

    // 停止自动播放
    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearTimeout(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
        this.isAutoPlaying = false;
    }

    // 显示结局
    showEnding() {
        this.elements.dialogueBox.style.display = 'block';
        this.elements.dialogueBox.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: var(--accent); margin-bottom: 20px;">感谢游玩</h2>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">更多章节正在开发中...</p>
                <button id="btn-restart" class="choice-btn" style="opacity: 1; transform: none; display: inline-block;">
                    返回标题
                </button>
            </div>
        `;
        this.elements.choicesContainer.innerHTML = '';

        document.getElementById('btn-restart').addEventListener('click', () => {
            // 恢复对话框结构
            this.elements.dialogueBox.innerHTML = `
                <div id="speaker-name"></div>
                <div id="dialogue-content">
                    <span id="dialogue-text"></span>
                    <span id="dialogue-cursor" class="blink">▼</span>
                </div>
            `;
            this.cacheElements();
            this.showTitleScreen();
        });
    }

    showSaveManager() {
        this.elements.saveModal.classList.remove('hidden');
        this.elements.saveSlots.innerHTML = '';
        this.elements.saveSlots.style.display = 'none';
    }

    showLoadSlots() {
        this.elements.saveSlots.style.display = 'block';
        this.renderSaveSlots('load');
    }

    saveCurrentGame() {
        this.elements.saveSlots.style.display = 'block';
        this.renderSaveSlots('save');
    }

    startNewGame() {
        this.closeAllModals();
        this.newGame();
    }

    // 渲染存档槽位
    renderSaveSlots(mode) {
        const saves = saveSystem.getAllSaves();
        this.elements.saveSlots.innerHTML = '';

        // 自动存档
        const autoSave = saves.find(s => s.slot === 'auto');
        this.createSaveSlot('auto', autoSave, mode);

        // 手动存档槽位
        for (let i = 1; i <= 5; i++) {
            const save = saves.find(s => s.slot === String(i));
            this.createSaveSlot(String(i), save, mode);
        }
    }

    // 创建存档槽位
    createSaveSlot(slot, saveData, mode) {
        const div = document.createElement('div');
        div.className = 'save-slot';
        
        const slotName = slot === 'auto' ? '自动存档' : `存档 ${slot}`;
        const time = saveData ? new Date(saveData.timestamp).toLocaleString() : '空';
        const preview = saveData?.preview || '';

        div.innerHTML = `
            <div class="save-slot-info">
                <span>${slotName}</span>
                <span>${time}</span>
            </div>
            <div class="save-slot-preview">${preview}</div>
        `;

        div.addEventListener('click', () => {
            if (mode === 'save') {
                this.saveGame(slot);
                this.closeAllModals();
                this.showMessage('存档成功');
            } else {
                const state = saveSystem.load(slot);
                if (state) {
                    this.state = { ...this.state, ...state };
                    this.closeAllModals();
                    this.loadNode(this.state.currentNode);
                } else {
                    this.showMessage('该槽位没有存档');
                }
            }
        });

        this.elements.saveSlots.appendChild(div);
    }

    // 显示设置弹窗
    showSettingsModal() {
        const textSpeed = document.getElementById('text-speed');
        const volume = document.getElementById('volume');
        
        if (textSpeed) textSpeed.value = this.state.settings.textSpeed;
        if (volume) volume.value = this.state.settings.volume;
        
        this.elements.settingsModal.classList.remove('hidden');
    }

    // 关闭所有弹窗
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
    }

    // 显示消息
    showMessage(text, duration = 2000) {
        this.elements.systemMessage.textContent = text;
        this.elements.systemMessage.classList.remove('hidden');
        
        setTimeout(() => {
            this.elements.systemMessage.classList.add('hidden');
        }, duration);
    }

    // 显示成就
    showAchievement(title, description) {
        const popup = this.elements.achievementPopup;
        popup.querySelector('.achievement-title').textContent = title;
        popup.querySelector('.achievement-desc').textContent = description;
        popup.classList.remove('hidden');
        popup.classList.add('achievement-enter');

        setTimeout(() => {
            popup.classList.add('hidden');
            popup.classList.remove('achievement-enter');
        }, 3000);
    }

    // 渲染游戏
    render() {
        if (this.state.currentNode) {
            this.loadNode(this.state.currentNode);
        } else {
            this.showTitleScreen();
        }
    }
}

// 全局游戏引擎实例
const engine = new GameEngine();
