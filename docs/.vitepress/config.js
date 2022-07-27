export default {
    title: '坤坤小百科',
    description: '带你更了解我们可爱的小坤坤',
    base: '/KunPedia/',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    themeConfig: {
        siteTitle: '坤坤小百科',
        logo: 'https://raw.githubusercontent.com/vanhstp/KunPedia/master/docs/.vitepress/public/KunPedia-02.png',
        footer: {
            message: 'v0.0.2 (2022.7.25)',
            copyright: 'TinyPedia by vanhstp ｜ Powered by VitePress'
        },
        nav: [
            { text: '首页', link: '/' },
            { text: '快速了解', link: '/guide/' },
            { text: '经历', link: '/life/' },
            { text: 'iKun', link: '/ikun/' },
            { text: '篮球事件和梗', link: '/nba/' },
            {
                text: '作品',
                items: [
                    { text: '音乐', link: '/works/music/' },
                ],
            },
            {
                text: '关于',
                items: [
                    { text: '关于', link: '/about/' },
                    { text: '贡献者', link: '/about/contributor.md' },
                    { text: '其他小百科', link: 'https://vanhstp.github.io/TinyPedia/' },

                ],
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vanhstp/KunPedia' },
        ],
        sidebar: {
            '/nba/': [
                {
                    text: '篮球事件',
                    items: [
                        { text: '简介', link: '/nba/' },
                        { text: '背景', link: '/nba/背景.md' },
                        { text: '律师函', link: '/nba/律师函.md' },
                    ]
                },
                {
                    text: '相关视频',
                    items: [
                        { text: '偶像练习生', link: '/nba/video.md' },
                    ],
                },
            ],
            '/works/music/': [
                {
                    text: '音乐作品',
                    items: [
                        { text: '最新发布', link: '/works/music/' },
                        { text: '个人', link: '/works/music/solo/' },
                    ],
                },
            ],
            '/guide/': [
                {
                    items: [
                        { text: '个人账号', link: '/guide/account' },
                        { text: '工作室帐号', link: '/guide/studio' },
                        { text: '音乐主页', link: '/guide/music' },

                    ]
                }
            ],
        }
    },
}
