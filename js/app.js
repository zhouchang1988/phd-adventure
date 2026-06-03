/* ============================================
   谢凡的奇幻冒险2.0 - 主逻辑
   ============================================ */

// 应用入口
(function() {
    'use strict';

    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', () => {
        console.log('谢凡的奇幻冒险2.0 - 启动');
        
        // 设置事件监听
        setupEventListeners();
    });

    // 设置事件监听
    function setupEventListeners() {
        // 设置面板
        const textSpeed = document.getElementById('text-speed');
        const volume = document.getElementById('volume');
        
        if (textSpeed) {
            textSpeed.addEventListener('input', (e) => {
                engine.state.settings.textSpeed = parseInt(e.target.value);
            });
        }
        
        if (volume) {
            volume.addEventListener('input', (e) => {
                engine.state.settings.volume = parseInt(e.target.value);
            });
        }
    }

    // 全局工具函数
    window.gameUtils = {
        // 格式化时间
        formatTime(ms) {
            const seconds = Math.floor(ms / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            
            if (hours > 0) {
                return `${hours}小时${minutes % 60}分钟`;
            } else if (minutes > 0) {
                return `${minutes}分钟`;
            } else {
                return `${seconds}秒`;
            }
        },

        // 随机数
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        // 延迟
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    };

})();
