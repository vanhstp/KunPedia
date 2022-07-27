---
title: 音乐主页
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
    avatar: 'http://p1.music.126.net/PSrMTUYZD_T1KL0zJvzbhQ==/109951167704048189.jpg?param=180y180',
    name: '网易云音乐',
    title: ' ',
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
    avatar: 'https://y.qq.com/music/photo_new/T001R300x300M000002nXp292LIOGV.jpg?max_age=2592000',
    name: '酷我音乐',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'http://www.kuwo.cn/singer_detail/908596',
  },
  {
    avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/19/0d/0f/190d0f85-2dbe-92e1-6e82-2474674a1b95/pr_source.png/380x380cc.webp',
    name: 'Apple Music',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://music.apple.com/cn/artist/%E8%94%A1%E5%BE%90%E5%9D%A4/1421021751',
  },
  {
    avatar: 'https://i.kfs.io/artist/global/12019183,0v2/fit/300x300.jpg',
    name: 'KKBOX',
    title: ' ',
    org: '蔡徐坤 (KUN)',
    orgLink: 'https://www.kkbox.com/tw/tc/artist/9YinQRZDWhowcLgTPA',
  },
  {
    avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/19/0d/0f/190d0f85-2dbe-92e1-6e82-2474674a1b95/pr_source.png/380x380cc.webp',
    name: 'Spotify',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://www.kkbox.com/tw/tc/artist/9YinQRZDWhowcLgTPA',
  },
  {
    avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/19/0d/0f/190d0f85-2dbe-92e1-6e82-2474674a1b95/pr_source.png/380x380cc.webp',
    name: 'Youtube Music',
    title: ' ',
    org: '蔡徐坤 - 主题',
    orgLink: 'https://www.youtube.com/channel/UCg7M-hDG4VdSHGkBjLhifdA',
  },
  {
    avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/19/0d/0f/190d0f85-2dbe-92e1-6e82-2474674a1b95/pr_source.png/380x380cc.webp',
    name: 'Melon',
    title: ' ',
    org: '蔡徐坤',
    orgLink: 'https://www.melon.com/artist/timeline.htm?artistId=2641153',
  },
  {
    avatar: 'https://test-1259784441.cos.ap-nanjing.myqcloud.com/pictures/kun_genius.jpg',
    name: 'Genius',
    title: ' ',
    org: '蔡徐坤 (Cai Xu Kun)',
    orgLink: 'https://genius.com/artists/Cai-xu-kun',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      音乐主页
    </template>
    <template #lead>
      此页列出蔡徐坤在各大音乐平台的主页
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>



