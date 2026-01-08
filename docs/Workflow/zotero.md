# Zotero 文献管理

[Zotero](https://www.zotero.org/) 是一款免费、开源的文献管理工具，配合各种插件可以实现强大的自动化工作流。

## 📖 资源链接

- **[Zotero 官网](https://www.zotero.org/)**
- **[Zotero 中文社区](https://zotero-chinese.com/)**
- **[从安装到使用整理全集 - CC98](https://www.cc98.org/topic/5880486)**
- **[文献阅读工作流 - CC98](https://www.cc98.org/topic/4969029)**

## 🔌 推荐插件

### 1. zotero-gpt

**[GitHub](https://github.com/MuiseDestiny/zotero-gpt)**

- 集成 GPT 功能，辅助文献阅读和笔记整理

### 2. zotero-pdf-translate

**[GitHub](https://github.com/windingwind/zotero-pdf-translate)**

- PDF 翻译插件，支持多种翻译 API

::: tip 自定义翻译 Prompt 示例

```text
As an academic expert with specialized knowledge in iron and steel making,
please provide a proficient and precise translation from ${langFrom} to ${langTo}.
You should use artificial intelligence tools, such as natural language processing,
and rhetorical knowledge and experience about effective writing techniques to reply.
Make the reply looks like a native speaker. Some specific terms such as name do not
need to be translated. The text is as follows: ${sourceText}
Please provide the translated result without any additional explanation.
```

:::

### 3. zotero-better-notes

**[GitHub](https://github.com/windingwind/zotero-better-notes)**

强大的笔记插件

- **教程**：[化繁为简，快速提炼 - CC98](https://www.cc98.org/topic/5348707)

**视频教程**：

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=555265521&bvid=BV1Cv4y1M7BY&cid=756880055&p=1&t=3638&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

### 4. Zotero DOI Manager

**[GitHub](https://github.com/bwiernik/zotero-shortdoi)**

- 自动管理文献的 DOI 信息

### 5. zotero-actions-tags

**[GitHub](https://github.com/windingwind/zotero-actions-tags)**

- 自定义标签和工作流

## 📝 Better Notes 模板

基于彭思达的 [如何有效地读论文](https://pengsida.notion.site/d192db870bc64436ae4a4a590b36772a) 设计：

::: details 点击查看模板代码

```html
<h1 style="background-color:#2c3e50; color:white; padding:0.4em 0.6em; border-radius:5px;">
  🌳 ${topItem.getField('title')}
</h1>

// @use-markdown
| Title        | ${topItem.getField("titleTranslation")} |
|--------------|------------------------------------------|
| Journal      | ${topItem.getField('publicationTitle')}  |
| Authors      | ${topItem.getCreators().map((v)=>v.firstName+" "+v.lastName).join("; ")} |
| Pub. date    | ${topItem.getField('date')}              |
| 期刊标签     | ${{ Array.prototype.map.call(Zotero.ZoteroStyle.api.renderCell(topItem, "publicationTags").childNodes, e => { e.innerText = " " + e.innerText + " "; return e.outerHTML }).join(" ") }}$ |
| DOI          | [${topItem.getField('DOI')}](https://doi.org/${topItem.getField('DOI')}) |
| Abstract     | ${topItem.getField("abstractNote")}      |

<h2 style="background-color:#7f2a2a; color:white; padding:0.3em 0.5em; border-radius:4px;">
  📝 Abstract
</h2>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🎯 Task
</h3>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  ⚡ Technical Challenge
</h3>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  💡 Key Insight/Motivation
</h3>

- ✨ 一句话介绍 insight/motivation
- 👍 一句话介绍 insight 的好处

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🛠️ Technical Contribution
</h3>

- 🧩 Contribution 1
  - 📌 一句话介绍
  - ✅ 好处

- 🧩 Contribution 2
  - 📌 一句话介绍
  - ✅ 好处

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  📊 Experiment
</h3>

---

<h2 style="background-color:#7f2a2a; color:white; padding:0.3em 0.5em; border-radius:4px;">
  📖 Introduction
</h2>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🎯 Task And Application
</h3>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  ⚡ Technical Challenge for Previous Problem
</h3>

- 🚧 Challenge 1
  - 📚 Previous method
  - ❌ Failure cases
  - 🔍 Technical reason

- 🚧 Challenge 2

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🛠️ Our Pipeline that Fix
</h3>

- 💡 Key innovation/insight/contribution

- 🧩 Contribution 1
  - 🔨 Specific method
  - ✅ Advantages/insight

- 🧩 Contribution 2
  - 🤔 为了解决什么问题
  - 🔨 具体做法
  - ✅ 讨论 advantage/insight

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🎬 Cool Demos/Applications
</h3>

---

<h2 style="background-color:#7f2a2a; color:white; padding:0.3em 0.5em; border-radius:4px;">
  ⚙️ Method
</h2>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🌐 Overview
</h3>

- 🎯 具体任务：输入 ➡️ 输出
- 🪜 方法：第一步 ➡️ 第二步 ➡️ 第三步

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🔹 Pipeline Module 1
</h3>

- 💡 Motivation
- 🔨 做法
- 🔍 Why Work
- ✅ Technical Advantage

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🔹 Pipeline Module 2
</h3>

---

<h2 style="background-color:#7f2a2a; color:white; padding:0.3em 0.5em; border-radius:4px;">
  🧪 Experiments
</h2>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  📊 Comparison Experiments
</h3>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🔬 Ablation Studies
</h3>

- 🌟 Core contributions
  - 🧱 Core components 对 performance 的影响

- ⚙️ 每一个 pipeline module 中 design choices 对 performance 的影响

---

<h2 style="background-color:#7f2a2a; color:white; padding:0.3em 0.5em; border-radius:4px;">
  🚧 Limitation
</h2>

<h3 style="background-color:#2a4d7f; color:white; padding:0.2em 0.4em; border-radius:3px;">
  🤔 合理解释
</h3>

为什么方法有 limitation
```

:::

## 🔄 同步方案

Zotero 支持多种同步方式：

- **自建 WebDav** - 完全自主可控
- **坚果云** - 国内用户友好
- **OneDrive** - 微软生态集成
- **iCloud** - Apple 生态集成

详见：[Zotero 低成本 + 大容量同步方案 - CC98](https://www.cc98.org/topic/6006315)

## 🎨 样式与引用

- [针对 Word 的 Zotero GB/T-7714 引文样式更新 - CC98](https://www.cc98.org/topic/5533559)
- [Zotero style 显示阅读进度条 + 文章期刊等级/引用 + 自定义评级等等 - CC98](https://www.cc98.org/topic/5833139)
- [zotero style 的安装使用，以及我最近遇到的问题 - CC98](https://www.cc98.org/topic/5940411)
