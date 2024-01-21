import { defineConfig } from 'vitepress'
import cpSidebar from './cp-sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HCI CTP Resources",
  description: "A curated site of resources made by and for the HCI Computing Talent Programme (and IRS/EC^3)",
	srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: {
      '/competitive-programming/': cpSidebar,
		},

		editLink: {
			pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
		},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EC3-Gang/resources' }
    ]
  }
})
