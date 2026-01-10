import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基础配置
  title: '科研笔记',
  description: '记录科研经历、过程感悟、方向学习笔记',
  lang: 'zh-CN',

  // 主题配置
  appearance: 'dark', // 默认深色主题

  // Markdown 配置
  markdown: {
    // 数学公式
    math: true,

    // 代码行号
    lineNumbers: true,

    // 自定义容器标签 (中文)
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },

    // 配置 anchor 链接
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    }
  },

  // 主题定制
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '研究方法论', link: '/EXP/' },
      { text: '工具流', link: '/Workflow/' },
      { text: '方向', link: '/LLM/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/EXP/': [
        {
          text: '研究方法论',
          items: [
            { text: '概述', link: '/EXP/' },
            { text: '预备知识', link: '/EXP/01-Preliminaries' },
            { text: '文献阅读', link: '/EXP/02-Reading' },
            { text: '思维培养', link: '/EXP/03-mind' },
            { text: '学术交流', link: '/EXP/04-communication' },
            { text: '实验设计', link: '/EXP/05-experiment' },
            { text: '论文写作', link: '/EXP/06-writing' },
            { text: 'Rebuttal', link: '/EXP/07-rebuttal' },
            { text: '演讲展示', link: '/EXP/08-presentation' }
          ]
        }
      ],

      '/Workflow/': [
        {
          text: '工具与工作流',
          items: [
            { text: '概述', link: '/Workflow/' },
            { text: 'Zotero 文献管理', link: '/Workflow/zotero' },
            { text: '写作工具', link: '/Workflow/writing-tools' },
            { text: 'AI 辅助工具', link: '/Workflow/ai-tools' }
          ]
        }
      ],

      '/LLM/': [
        {
          text: '方向',
          items: [
            { text: '概述', link: '/LLM/' },
            {
              text: '研究方向',
              collapsible: false,
              items: [
                { text: '🤖 LLM', link: '/LLM/Safety/' },
                { text: '🤖 VLA', link: '/VLA/' },
                { text: '🤖 Agents', link: '/Agents/' }
              ]
            }
          ]
        }
      ],

      '/VLA/': [
        {
          text: 'VLA / 机器人学习',
          items: [
            { text: '概述', link: '/VLA/' }
          ]
        }
      ],

      '/Agents/': [
        {
          text: 'Agents',
          items: [
            { text: '概述', link: '/Agents/' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phil-fan' }
    ],

    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-Present'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/phil-fan/Research/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    }
  },

  // 构建优化
  srcExclude: ['**/thesis_reading.xmind', '**/*.xmind'],

  // Head 配置 (添加数学公式 CSS 和自定义样式)
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: '/custom.css' }]
  ]
})
