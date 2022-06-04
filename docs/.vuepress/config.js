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
                    title: '介绍',
                    path: '/nba/',
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
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ]
    }
}