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
        logo: '/KunPedia-02.png',
        footer: {
            message: 'v0.0.2',
            copyright: 'Copyright © 2022-present vanhstp'
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
            { text: '关于', link: '/about/' },
            { text: 'GitHub', link: 'https://github.com/vanhstp/KunPedia' },
        ],
    },
}
