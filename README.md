# HCI CTP Resources

A curated site of resources for the Computing Talent Programme.

## Contributing
You need the following installed:
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

Clone the repository:
```bash
git clone https://github.com/EC3-Gang/resources.git
```

Install dependencies:
```bash
yarn
```

Run the development server:
```bash
yarn docs:dev
```

To add a new page, create a new markdown file in the `docs` folder. The file name will be the URL path. For example, `docs/competitive-programming/index.md` will be accessible at `/competitive-programming/`. You will need to add the following frontmatter to the top of the file:
```yaml
---
title: My Page Title
---
```

You will also need to add the page to the sidebar in `.vitepress/config.mts`. To find which file the sidebar for a certain section is located in, check `themeConfig.sidebar` in `.vitepress/config.mts`. Trace the file path from there. For example, the sidebar for the Competitive Programming section is located in `.vitepress/cp-sidebar.mts`.

Add an object containing the link to the page and the title of the page to the `items` array in the sidebar file. For example, to add a link to `docs/competitive-programming/index.md` in the sidebar, add the following object to the array in `.vitepress/cp-sidebar.mts`:
```js
{
	text: 'My Page Title',
	link: '/competitive-programming/'
}
```

