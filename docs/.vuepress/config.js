module.exports = {
    title: '坤坤小百科',
    description: '带你更了解我们可爱的小坤坤',
    base: '/KunPedia/',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    themeConfig: {
        sidebar: {
            '/nba/': [
                {
                    title: '篮球事件',
                    path: '/nba/',
                    collapsable: false,
                    children: [
                        { title: "背景", path: "/nba/背景.md" },
                        { title: "律师函", path: "/nba/律师函.md" },

                    ]
                },
                {
                    title: '相关视频',
                    path: '/nba/video'
                }
            ]
        },
        logo: '/images/KunPedia-02.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '快速了解', link: '/guide/' },
            { text: '经历', link: '/life/' },
            { text: 'iKun', link: '/ikun/' },
            { text: '篮球事件', link: '/nba/' },
            { text: '作品', link: '/works/' },
            { 
                text: '关于', link: '/about/',
                items: [
                    { text: 'Repo', link: 'https://github.com/vanhstp/KunPedia' },
                ]
            }
        ]
    }
}