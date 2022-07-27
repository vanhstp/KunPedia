---
title: 个人账号
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://tvax3.sinaimg.cn/crop.0.0.512.512.180/69e273f8ly8gpytra3g7uj20e80e8dg0.jpg',
    name: '微博',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://weibo.com/caizicaixukun',
  },
  {
    avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/61976b0feb0cbc78770b0928.jpg',
    name: '小红书',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://www.xiaohongshu.com/user/profile/5a5cb940e8ac2b2b7d0e2d70',
  },
  {
    avatar: 'https://test-1259784441.cos.ap-nanjing.myqcloud.com/pictures/kun_ig.jpeg',
    name: 'Instagram',
    title: 'KUN',
    org: 'caixukun',
    orgLink: 'https://www.instagram.com/caixukun/',
  },
  {
    avatar: 'http://p1.music.126.net/PSrMTUYZD_T1KL0zJvzbhQ==/109951167704048189.jpg?param=180y180',
    name: '网易云音乐',
    title: '蔡徐坤',
    org: 'Kunxxx',
    orgLink: 'https://music.163.com/#/artist?id=12932368',
  },
  {
    avatar: 'https://y.qq.com/music/photo_new/T001R300x300M000002nXp292LIOGV.jpg?max_age=2592000',
    name: 'QQ音乐',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://y.qq.com/n/ryqq/singer/002nXp292LIOGV',
  },
  {
    avatar: 'https://y.qq.com/music/photo_new/T001R300x300M000002nXp292LIOGV.jpg?max_age=2592000',
    name: '酷狗音乐',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://www.kugou.com/singer/192980.html',
  },
  {
    avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/19/0d/0f/190d0f85-2dbe-92e1-6e82-2474674a1b95/pr_source.png/380x380cc.webp',
    name: 'Spotify',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://www.kkbox.com/tw/tc/artist/9YinQRZDWhowcLgTPA',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      个人账号
    </template>
    <template #lead>
      此页列出蔡徐坤使用的社交平台以及已入驻的其他平台帐号
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>



