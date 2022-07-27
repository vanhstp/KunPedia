---
title: 最新发布
layout: home

hero:
  name: 最新单曲
  text: Hug Me
  tagline: 2022年7月22日发布
  image: 'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/82/dd/ba/82ddbad2-4e13-e5e9-77b7-dfe748271d92/cover.jpg/3000x3000bb.jpg'
  alt: Hug Me
  actions:
   - theme: brand
     text: 网易云音乐
     link: 'https://music.163.com/#/song?id=1965890511'
   - theme: brand
     text: QQ音乐
     link: 'https://y.qq.com/n/ryqq/songDetail/368304013'
   - theme: alt
     text: 其他作品
     link: '/works/music/solo/'


---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/c0/4e/4d/c04e4dbb-0ea2-71eb-b2c4-e9efb551c8b4/cover.jpg/600x600bb.jpg',
    name: '迷 - LP',
    title: '2021年4月13日发布',
    links: [
      { icon: 'cloudmusic', link: 'https://music.163.com/?from=itab#/album?id=125942359' },
    ],
    desc: '解构关于音乐的未知集合',
  },
  {
    avatar: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/f4/5a/fc/f45afc2e-e19e-b4c5-f078-9da7a6181fb3/cover.jpg/600x600bb.jpg',
    name: '情人 - 单曲',
    title: '2020年5月24日发布',
    links: [
      { icon: 'cloudmusic', link: 'https://music.163.com/?from=itab#/song?id=1450574147' },
    ],
    desc: 'Be my lover…',
  },
  {
    avatar: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/16/6c/4a/166c4a2c-24bc-d348-e02e-1f1bf0ee6db7/cover.jpg/600x600bb.jpg',
    name: 'Home - 单曲',
    title: '2020年4月9日发布',
    links: [
      { icon: 'cloudmusic', link: 'https://music.163.com/?from=itab#/song?id=1438865460' },
    ],
    desc: '希望与爱，从未离开',
  },
]
</script>

<VPTeamMembers size="medium" :members="members" />



<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ace838, #4edff2);
}
</style>

