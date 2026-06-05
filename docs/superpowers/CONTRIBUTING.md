# 开发规范

## 核心原则

**文档驱动，测试护航，三者一致。**

```
文档 ──→ 代码 ──→ 测试
  ▲                │
  └────────────────┘
```

---

## 1. 文档先行

### 1.1 改动流程

任何改动必须遵循以下顺序：

```
1. 改文档 → 2. 改代码 → 3. 改测试 → 4. 运行验证
```

**禁止**：先改代码再补文档。

### 1.2 文档类型

| 文档 | 位置 | 何时更新 |
|------|------|----------|
| 技术设计文档 | `docs/origin/技术设计文档.md` | 技术栈变更、架构调整 |
| 实现计划 | `docs/superpowers/plans/*.md` | 任务拆解、实现方案变更 |
| 开发规范 | `docs/superpowers/CONTRIBUTING.md` | 规则变更（本文件） |
| API文档 | `src/**/*.md` | 接口变更 |
| 代码注释 | 源码内 | 逻辑变更 |

**权威文档**：技术设计文档是技术决策的唯一来源，其他文档必须与之保持一致。

### 1.3 文档同步检查清单

提交前必须确认：

- [ ] 设计文档是否反映了最新设计？
- [ ] 实现计划是否需要更新？
- [ ] 代码注释是否与实现一致？
- [ ] README是否需要更新？

---

## 2. 测试要求

### 2.1 测试覆盖范围

**必须测试**：
- 游戏引擎核心逻辑（状态管理、节点切换、属性计算）
- 存档系统（保存、读取、导入、导出）
- 工具函数（纯函数）
- 设计令牌（类型正确性）

**建议测试**：
- UI组件（交互逻辑）
- Hook（自定义Hook的行为）

**可选测试**：
- 样式（视觉回归测试）
- 动画效果

### 2.2 测试文件结构

```
src/
├── hooks/
│   ├── useGameEngine.ts
│   └── useGameEngine.test.ts      # 与源码同目录
├── lib/
│   ├── tokens.ts
│   ├── tokens.test.ts
│   ├── story/
│   │   ├── index.ts
│   │   └── index.test.ts
│   └── utils.ts
│       └── utils.test.ts
└── components/
    └── game/
        ├── DialogueBox.tsx
        └── DialogueBox.test.tsx
```

### 2.3 测试编写规范

```typescript
// 示例：useGameEngine.test.ts
import { renderHook, act } from '@testing-library/react';
import { useGameEngine } from './useGameEngine';

describe('useGameEngine', () => {
  describe('初始状态', () => {
    it('应该以序章开始', () => {
      const { result } = renderHook(() => useGameEngine());
      expect(result.current.state.chapter).toBe('prologue');
    });

    it('应该有正确的初始属性', () => {
      const { result } = renderHook(() => useGameEngine());
      expect(result.current.state.attributes.spirit).toBe(0);
      expect(result.current.state.attributes.wisdom).toBe(85);
    });
  });

  describe('makeChoice', () => {
    it('应该应用属性变化', () => {
      const { result } = renderHook(() => useGameEngine());
      
      act(() => {
        result.current.makeChoice({
          id: 'test',
          text: '测试选项',
          style: 'rational',
          nextNode: 'next',
          effects: { attributes: { spirit: 10 } },
        });
      });

      expect(result.current.state.attributes.spirit).toBe(10);
    });

    it('应该应用标记', () => {
      const { result } = renderHook(() => useGameEngine());
      
      act(() => {
        result.current.makeChoice({
          id: 'test',
          text: '测试选项',
          style: 'rational',
          nextNode: 'next',
          effects: { flags: { tested: true } },
        });
      });

      expect(result.current.state.flags.tested).toBe(true);
    });
  });
});
```

### 2.4 测试命名规范

```
describe('被测模块/函数名', () => {
  describe('场景/条件', () => {
    it('应该[预期行为]', () => {
      // Arrange - 准备
      // Act - 执行
      // Assert - 断言
    });
  });
});
```

---

## 3. 开发工作流

### 3.1 标准流程

```bash
# 1. 更新文档
vim docs/superpowers/plans/current-plan.md

# 2. 编写/修改测试
vim src/hooks/useGameEngine.test.ts

# 3. 运行测试（确认失败）
npm test

# 4. 编写/修改代码
vim src/hooks/useGameEngine.ts

# 5. 运行测试（确认通过）
npm test

# 6. 提交
git add -A
git commit -m "feat: 描述"
```

### 3.2 代码改动后必做

```bash
# 运行所有测试
npm test

# 运行类型检查
npx tsc --noEmit

# 运行lint
npm run lint
```

**任何一项失败，必须修复后才能提交。**

### 3.3 测试失败处理

```
测试失败
    │
    ├─→ 代码有bug → 修复代码 → 重新测试
    │
    ├─→ 测试有bug → 修复测试 → 重新测试
    │
    └─→ 需求变更 → 更新文档 → 更新测试 → 更新代码 → 重新测试
```

**禁止**：删除失败测试、注释失败测试、跳过失败测试。

---

## 4. Git规范

### 4.1 提交信息格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type类型**：
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档变更
- `test`: 测试变更
- `refactor`: 重构
- `chore`: 构建/工具变更

**示例**：
```
feat(engine): add makeChoice with attribute effects

- Implement attribute changes on choice selection
- Add flag support for story progression
- Add unit tests for all effects

Closes #123
```

### 4.2 分支策略

```
main          ← 稳定版本
  │
  └─ develop  ← 开发分支
       │
       ├─ feature/xxx  ← 功能分支
       └─ fix/xxx      ← 修复分支
```

### 4.3 PR检查清单

提交PR前必须确认：

- [ ] 文档已更新
- [ ] 测试已添加/更新
- [ ] 所有测试通过
- [ ] 类型检查通过
- [ ] Lint检查通过
- [ ] 提交信息格式正确

---

## 5. 代码质量

### 5.1 命名规范

- **文件名**：camelCase（`useGameEngine.ts`）、PascalCase（`DialogueBox.tsx`）
- **变量/函数**：camelCase（`makeChoice`、`loadNode`）
- **类型/接口**：PascalCase（`GameState`、`StoryNode`）
- **常量**：UPPER_SNAKE_CASE（`INITIAL_STATE`、`SAVE_PREFIX`）
- **组件**：PascalCase（`DialogueBox`、`SceneBackground`）

### 5.2 注释规范

```typescript
// ✅ 好的注释：解释为什么
// 灵力上限100是基于游戏平衡考虑，避免数值膨胀
const MAX_SPIRIT = 100;

// ❌ 坏的注释：解释是什么
// 灵力最大值
const MAX_SPIRIT = 100;
```

### 5.3 类型安全

```typescript
// ✅ 好：明确类型
function makeChoice(choice: Choice): void { ... }

// ❌ 坏：any类型
function makeChoice(choice: any): void { ... }

// ❌ 坏：类型断言滥用
const state = data as GameState;
```

---

## 6. 工具配置

### 6.1 测试配置

```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 6.2 Pre-commit Hook

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test && npm run lint"
    }
  }
}
```

### 6.3 CI/CD

```yaml
# .github/workflows/test.yml
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run lint
      - run: npx tsc --noEmit
```

---

## 7. 违规处理

### 7.1 常见违规

| 违规行为 | 后果 |
|----------|------|
| 先改代码后改文档 | PR拒绝，要求补充文档 |
| 测试失败仍提交 | PR拒绝，要求修复测试 |
| 删除失败测试 | PR拒绝，要求恢复并修复 |
| 使用`any`类型 | PR拒绝，要求添加正确类型 |
| 提交信息格式错误 | 要求修改提交信息 |

### 7.2 例外情况

以下情况可申请例外：

- 紧急hotfix（24小时内补充文档和测试）
- 实验性代码（标记为`experimental`分支）
- 第三方依赖问题（记录issue跟踪）

---

## 8. 检查清单模板

### 8.1 功能开发检查清单

```markdown
## [功能名称] 开发检查清单

### 文档
- [ ] 设计文档已更新
- [ ] 实现计划已更新
- [ ] API文档已更新

### 代码
- [ ] 代码实现完成
- [ ] 类型定义完整
- [ ] 无`any`类型
- [ ] 代码注释清晰

### 测试
- [ ] 单元测试已编写
- [ ] 测试覆盖核心逻辑
- [ ] 所有测试通过

### 验证
- [ ] 类型检查通过
- [ ] Lint检查通过
- [ ] 本地测试通过
- [ ] 文档与代码一致
```

### 8.2 Bug修复检查清单

```markdown
## [Bug描述] 修复检查清单

### 问题定位
- [ ] Bug已复现
- [ ] 根因已定位
- [ ] 影响范围已评估

### 修复
- [ ] 代码已修复
- [ ] 测试已添加（覆盖该场景）
- [ ] 相关测试仍通过

### 验证
- [ ] Bug已修复
- [ ] 无回归问题
- [ ] 文档已更新（如需要）
```

---

**文档版本**：v1.0  
**创建日期**：2026-06-05  
**维护者**：项目团队
