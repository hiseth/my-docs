import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Docs",
  description: "A VitePress Site",
  base: "/fei/", // 部署到github上时访问的根目录
  lastUpdated: true, // 页面上展示最后更新的时间
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux', link: '/linux-home' },
      { text: 'Python', link: '/python-home' }
    ],

    sidebar: [
      {
        text: 'Linux',
        collapsed: true,
      },
      {
        text: 'Linux',
        collapsed: true,
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
