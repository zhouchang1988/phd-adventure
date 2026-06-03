# 谢凡的奇幻冒险2.0

一个基于纯CSS动画的互动叙事网页游戏。

## 简介

《谢凡的奇幻冒险2.0》是一款故事驱动的网页游戏，玩家跟随主角谢凡展开一段奇幻冒险。游戏采用章节式叙事结构，通过精美的CSS动画呈现视觉效果，无需任何JavaScript动画库依赖。

## 特性

- 📖 **章节式叙事** - 多章节故事线，沉浸式剧情体验
- 🎨 **纯CSS动画** - 无外部依赖，轻量级视觉表现
- 💾 **存档系统** - 支持多存档槽位，随时保存/读取进度
- 📱 **响应式设计** - 适配不同屏幕尺寸

## 技术栈

- HTML5
- CSS3 (动画/过渡/变量)
- 原生JavaScript

## 项目结构

```
phd-adventure/
├── index.html          # 游戏入口
├── css/                # 样式文件
│   ├── main.css        # 主样式
│   ├── animations.css  # 动画定义
│   ├── scenes.css      # 场景样式
│   ├── characters.css  # 角色样式
│   └── effects.css     # 特效样式
├── js/                 # 脚本文件
├── assets/             # 资源文件
├── docs/               # 设计文档
└── tests/              # 测试文件
```

## 快速开始

```bash
# 克隆项目
git clone https://github.com/zhouchang1988/phd-adventure.git

# 进入项目目录
cd phd-adventure

# 直接在浏览器中打开
open index.html
# 或者使用本地服务器
npx serve .
```

## 设计文档

项目包含完整的设计文档：

- [游戏策划大纲](docs/谢凡的奇幻冒险2.0-游戏策划大纲.md)
- [关卡详细设计](docs/关卡详细设计.md)
- [技术设计文档](docs/技术设计文档.md)
- [美术风格指南](docs/美术风格指南.md)
- [纯CSS实现方案](docs/纯CSS实现方案.md)

## 许可证

私有项目，未经授权不得使用或分发。
