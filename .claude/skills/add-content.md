# /add - 智能添加内容

## 触发关键词

- `/add`
- `添加`
- `新增内容`
- `add content`

## 技能描述

根据用户输入的文本内容，智能识别内容类型并自动添加到对应的位置。

支持的内容类型：

- 📄 **论文笔记** - 自动添加到对应研究方向（LLM/RL/VLA/SYS）
- 🛠️ **工具推荐** - 添加到 Workflow 章节
- 📚 **方法论** - 添加到 EXP 章节
- 📊 **排行榜/资源** - 添加到对应章节的资源列表

## 执行逻辑

### 1. 内容识别

根据输入内容的关键词识别类型：

**论文笔记识别词**：

- 论文、paper、arxiv、发布、作者、会议、期刊

**工具推荐识别词**：

- 工具、软件、插件、扩展、app、应用

**方法论识别词**：

- 方法、技巧、经验、建议、指导、流程

**资源/排行榜识别词**：

- 排行榜、leaderboard、评测、资源、链接

### 2. 路由规则

```text
如果包含 LLM/安全/对抗/延迟/攻击相关
  → 添加到 docs/LLM/Safety/

如果包含 RL/强化学习/奖励/策略相关
  → 添加到 docs/RL/

如果包含 VLA/机器人/具身智能/RoboChallenge 相关
  → 添加到 docs/VLA/

如果包含 系统/能耗/性能/优化 相关
  → 添加到 docs/SYS/

如果包含 工具/软件/插件 相关
  → 添加到 docs/Workflow/

如果包含 方法/经验/技巧 相关
  → 添加到 docs/EXP/
```

### 3. 文件生成

根据内容类型生成对应格式的 Markdown 文件：

**论文笔记模板**：

```markdown
---
title: 论文标题
category: 分类
tags:
  - 标签
status: reading # reading, completed, noted
date: {{date}}
arxiv: https://arxiv.org/abs/xxxx.xxxxx
pdf: https://arxiv.org/pdf/xxxx.xxxxx.pdf
---

## 论文信息

**作者**：
**发表**：
**链接**：[arXiv]({{arxiv}}) | [PDF]({{pdf}})

## 核心贡献

-

## 方法

## 实验

## 思考

## 相关工作
```

**工具推荐模板**：

```markdown
---
title: 工具名称
category: 工具
tags:
  - 工具类型
status: completed
date: {{date}}
website: https://example.com
---

## 简介

## 功能特点
```

### 4. 侧边栏更新

自动更新 `docs/.vitepress/config.ts` 中的侧边栏配置（仅在创建新文件时）。

## 使用示例

### 添加论文笔记

```text
/add

论文：Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer
作者：Colin Raffel 等
方向：LLM
链接：<https://arxiv.org/abs/1910.10683>
```

→ 自动创建 `docs/LLM/Safety/T5.md` 并更新配置

### 添加工具

```text
/add
推荐一个 Zotero 插件：ZotFile
用于管理 PDF 附件
官网：<https://github.com/jlegewie/zotfile>
```

→ 自动创建 `docs/Workflow/zotfile.md` 并更新配置

### 添加排行榜资源

```text
/add
发现一个新的 LLM 排行榜：AlpacaEval
链接：<https://alpaca-eval.org/>
```

→ 自动添加到 `docs/LLM/index.md` 的资源列表

## 注意事项

1. **文件命名**：使用英文 kebab-case（如 `t5-paper.md`）
2. **日期格式**：使用 ISO 8601 格式（YYYY-MM-DD）
3. **重复检查**：添加前先检查是否已存在相似内容
4. **配置更新**：仅在创建新文件时更新侧边栏
5. **确认机制**：重要操作前需用户确认

## 实现代码

当调用此技能时，按以下步骤执行：

```typescript
// 1. 解析用户输入，识别内容类型
const contentType = identifyType(userInput)

// 2. 确定目标路径
const targetPath = determinePath(contentType, keywords)

// 3. 生成文件内容
const content = generateTemplate(contentType, userInput)

// 4. 创建文件
createFile(targetPath, content)

// 5. 更新配置（如果需要）
if (isNewFile) {
  updateSidebarConfig(targetPath)
}
```

## 权限要求

- File read & write permission
- Shell command execution permission
- Configuration file modification permission
