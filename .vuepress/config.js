module.exports = {
  title: 'EasyDocs',
  description: 'Documentations for EasyMUN products',

  themeConfig: {
    nav: [
      { text: 'Console Lite', link: '/console-lite/' },
      { text: 'LimeGlass', link: '/limeglass/' },
      { text: 'DocFMT', link: '/docfmt/' },
      { text: 'Contributing', link: '/contributing/', },
      { text: 'EasyMUN', link: 'https://easymun.com', },
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

    lastUpdated: 'Last Updated',
    docsRepo: 'EasyMUN/docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
  },

  serviceWorker: true,
  evergreen: true,
  ga: 'UA-127071052-1',
}
