module.exports = {
  dest: 'public',
  title: 'Notes',
  globalUIComponents: ['ThemeManager'],
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
  themeConfig: {
    sidebar: {'/pl/': ['', 'ml']},
    displayAllHeaders: true,
  },
};
