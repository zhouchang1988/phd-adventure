# 谢凡的奇幻冒险 2.0

一个关于"用科学打开修仙"的轻松喜剧文字冒险游戏——当一个较真的物理学博士遇上修仙世界，会发生多少令人啼笑皆非的"学术事故"？

## 游戏简介

- **游戏类型**：纯文字聊天游戏（选择驱动型）
- **核心玩法**：剧情驱动 + 抉择系统 + 轻度养成
- **目标平台**：PC浏览器、移动端H5

**游戏定位**：
- ✅ 轻松幽默的互动小说、有深度的选择驱动剧情
- ❌ 硬核修仙模拟器、战斗策略游戏

## 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端框架 | Next.js 16 (App Router) | React框架，SSR/SSG支持 |
| 语言 | TypeScript | 类型安全 |
| UI框架 | Tailwind CSS v4 | 实用优先的CSS框架 |
| 组件库 | Shadcn/ui | 可复制粘贴的组件 |
| 动画 | Framer Motion | 声明式动画 |
| 存储 | localStorage | 本地存档 |
| 部署 | Vercel | 零配置部署 |

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000 开始游戏。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
phd-adventure/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React组件
│   │   ├── ui/                 # Shadcn/ui组件
│   │   ├── game/               # 游戏核心组件
│   │   └── effects/            # 特效组件
│   ├── lib/                    # 工具函数和数据
│   │   ├── story/              # 剧情数据
│   │   └── ...                 # 设计令牌、主题等
│   ├── hooks/                  # 自定义Hooks
│   └── types/                  # TypeScript类型定义
├── docs/                       # 设计文档
└── public/                     # 静态资源
```

## 核心特性

- 💬 **聊天界面**：沉浸式对话体验
- 🔀 **选择驱动**：每个选择都会影响剧情走向
- 📊 **属性系统**：灵力、神识、悟性三维养成
- 💾 **存档系统**：本地存档，支持导出
- 🎨 **章节主题**：不同章节自动切换视觉风格
- ✨ **动画效果**：流畅的过渡和特效

## 开发命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run lint         # 运行ESLint
npm test             # 运行测试
npm run test:watch   # 监听模式运行测试
npm run test:coverage # 生成测试覆盖率报告
```

## 许可证

Private
