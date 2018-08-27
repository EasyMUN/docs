module.exports = {
  title: 'EasyDocs',
  description: 'Documentations for EasyMUN products',

  themeConfig: {
    nav: [
      { text: 'Console Lite', link: '/console-lite' },
      { text: 'LimeGlass', link: '/limeglass' },
      { text: 'DocFMT', link: '/docfmt' },
      { text: 'Contributing', link: '/contributing', },
      { text: 'GitHub', link: 'https://github.com/EasyMUN', },
    ],

    sidebar: {
      '/console-lite/': [
        {
          title: 'Console Lite',
          collapsable: false,
          children: [
            ['', '简介'],
            'takeoff',
            'operation',
            'advanced',
            'cheatsheet',
            'developer',
          ],
        },
      ],
    },

    lastUpdated: '最近更新',
    docsRepo: 'EasyMUN/docs',
    editLinks: true,
    editLinkText: '请帮我们完善文档！',
  },

  serviceWorker: true,
  evergreen: true,
}
