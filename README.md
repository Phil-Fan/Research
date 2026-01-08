# 📚 我的科研打怪经历

> 记录科研经历、过程感悟和方向学习笔记

## 🚀 快速开始

- Node.js >= 18
- pnpm (推荐) / npm / yarn

```bash
pnpm install
```

```bash
pnpm dev
```

访问 <http://localhost:5173> 查看效果

```bash
pnpm build
```

```bash
pnpm preview
```

## 🛠️ 技术栈

- **框架**: [VitePress](https://vitepress.dev/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **数学公式**: [KaTeX](https://katex.org/)
- **包管理**: pnpm
- **代码质量**: Pre-commit hooks
  - markdownlint: Markdown 语法检查
  - autocorrect: 中英文空格自动修复

## 📝 文档规范

### Front Matter 格式

```yaml
---
title: 文档标题
category: 分类
tags:
  - 标签1
  - 标签2
status: completed # draft, in-progress, completed
date: 2025-01-08
---
```

### 自定义容器

```markdown
::: info
信息提示
:::

::: warning
警告
:::

::: tip
提示
:::

::: danger
危险
:::
```

### 数学公式

行内公式：`$E = mc^2$`

块级公式：

```markdown
$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$
```

## 🔧 开发指南

### 添加新内容

1. 在对应目录下创建 Markdown 文件
2. 添加 Front Matter 元数据
3. 遵循文档规范编写内容
4. 更新侧边栏配置（如需要）

### 配置侧边栏

编辑 `docs/.vitepress/config.ts` 中的 `sidebar` 配置：

```typescript
'/LLM/': [
  {
    text: '论文阅读',
    items: [
      { text: '概述', link: '/LLM/' },
      // ... 更多项目
    ]
  }
]
```

### 代码质量检查

```bash
# 运行所有 pre-commit 钩子
pre-commit run --all-files

# 仅检查 Markdown
markdownlint docs/**/*.md

# 自动修复中英文空格
autocorrect -w docs/**/*.md
```

## 📄 License

MIT © 2026-Present

## 🔗 相关链接

- [VitePress 文档](https://vitepress.dev/)
- [KaTeX 文档](https://katex.org/docs/)
- [Markdown 规范](https://commonmark.org/)
