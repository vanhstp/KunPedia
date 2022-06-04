module.exports = {
    title: '坤坤小百科',
    description: 'TypeScript4 最新官方文档翻译',
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
        logo: 'https://tse1-mm.cn.bing.net/th/id/R-C.3fedd4f6b3f53603f6434cf0232bb425?rik=Vf8voEUlfLXANQ&riu=http%3a%2f%2fwx3.sinaimg.cn%2flarge%2f006APoFYly1g2s11fpvx1j30h00hsq8p.jpg&ehk=HNvYw%2f8Viqn0yN1AenqpIjnETHsb1ApAVMMgIQTkDbM%3d&risl=&pid=ImgRaw&r=0',
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