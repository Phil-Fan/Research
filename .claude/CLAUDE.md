# Claude Code 项目配置

## 项目概述

这是一个使用 VitePress 构建的科研笔记网站，用于记录科研经历、过程感悟和方向学习笔记。

## Context7 MCP

已集成 Context7 MCP 服务，可查询最新技术文档：

### 可用库

- **VitePress**: `/vitejs/vitepress`
- **TypeScript**: `/microsoft/TypeScript`
- **Vue**: `/vuejs/core`
- **KaTeX**: `/Khan/KaTeX`

### 使用示例

```
查询 VitePress sidebar 配置方法
查询 VitePress 数学公式配置
```

## 自定义命令

### 内容管理

- `/add`: 智能添加内容
  - 自动识别内容类型（论文/工具/方法论/资源）
  - 自动创建对应 Markdown 文件
  - 自动更新侧边栏配置
  - 支持的触发词：`/add`、`添加`、`新增内容`、`add content`

**使用示例**：
```
/add 论文：Attention Is All You Need
方向：LLM
链接：https://arxiv.org/abs/1706.03762
```

```
/add 推荐工具：Zotero PDF 翻译插件
用途：自动翻译 PDF 论文
```

### 文档相关

- `vitepress-doc`: 查询 VitePress 文档
- `lint-md`: 检查 Markdown 文件
- `fix-md`: 自动修复 Markdown 格式问题

### Git 操作

- 使用 pre-commit 钩子自动检查代码质量

## 项目结构

```
docs/
├── .vitepress/      # VitePress 配置
├── EXP/             # 研究方法论
├── Workflow/        # 工具与工作流
├─�� LLM/             # 大语言模型
│   └── Safety/      # LLM 安全方向
├── RL/              # 强化学习
├── VLA/             # VLA / 机器人学习
└── SYS/             # 系统
```

## 开发工作流

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 代码质量

### Pre-commit 钩子

自动运行以下检查：
- markdownlint: Markdown 语法检查
- autocorrect: 中英文空格自动修复

### 手动运行

```bash
pre-commit run --all-files
```

## 文档规范

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

### Admonition 语法

使用 VitePress 容器语法：

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
