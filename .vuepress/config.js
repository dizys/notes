module.exports = {
  dest: 'public',
  title: 'Notes',
  head: [
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
    [
      'link',
      {
        rel: "'stylesheet",
        href: '/styles/website.css',
      },
    ],
  ],
  plugins: [
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@vuepress/medium-zoom'],
  ],
  theme: 'vuepress-theme-succinct',
  globalUIComponents: ['ThemeManager'],
  themeConfig: {
    lastUpdated: true,
    repo: 'https://github.com/dizys/notes',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help me improve this note!',
    sidebar: {
      '/pl/': [
        {
          title: 'Programming Languages',
          collapsable: false,
          children: [
            '',
            '01-overview',
            '02-imperative-languages',
            '03-subprograms',
            '04-functional-programming',
            '06-ml',
          ],
        },
      ],
    },
  },
};
