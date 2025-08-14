import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "工作记录-随身笔记",
  description: "日常工作中记录一下",
  base: "/vitepress-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '站点构建及部署', link: '/project-build' },
      { text: "工作", link: "" },
      { text: "日常", link: "" }
    ],

    sidebar: [
      {
        text: '站点构建及部署',
        link: "/project-build"
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown文档编写示例', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'baidu', link: 'https://www.baidu.com/'},
      { icon: "bilibili", link: "https://www.bilibili.com/" },
      { icon: 'github', link: 'https://github.com/wenyang95/' },
      { icon: 'gitee', link: 'https://gitee.com/wenyang95/' },
      { icon: 'vitepress', link: 'https://vitejs.cn/vitepress/' },
      { icon: 'vite', link: 'https://vitejs.cn/' },
      { icon: 'javascript', link: '' },
      { icon: 'css', link: '' },
      { icon: 'html5', link: '' },
      { icon: 'react', link: '' },
      { icon: "tesla", link: "" },
      // { icon: 'webpack', link: '' },
      // { icon: 'twitter', link: '' },
      // { icon: 'gitlab', link: '' },
      // { icon: 'tiktok', link: '' },
      // { icon: 'x', link: '' },
      // { icon: 'youtube', link: '' },
      // { icon: 'taobao', link: '' },
      // { icon: 'amazon', link: '' },
      // { icon: 'markdown', link: '' },
      // { icon: 'go', link: '' },
      // { icon: 'python', link: '' },
      // { icon: "apple", link: "" },
      // { icon: "nvidia", link: "" },
      // { icon: "amd", link: "" },
      // { icon: "wechat", link: "" },
      // { icon: "alipay", link: "" },
      // { icon: "hsbc", link: "" },
      // { icon: "safari", link: "" },
      // { icon: "qq", link: "" }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: "",
      copyright: ""
    }
  }
})
