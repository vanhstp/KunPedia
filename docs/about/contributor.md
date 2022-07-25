---
layout: page
title: 贡献者
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/vanhstp.png',
    name: 'vanhstp',
    title: '创始人',
    links: [
      { icon: 'github', link: 'https://github.com/vanhstp' },
      { icon: 'instagram', link: 'https://www.instagram.com/vanhstp/' },
      { icon: 'twitter', link: 'https://twitter.com/vanhstp' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      贡献者名单
    </template>
    <template #lead>
      此页列出为本百科做出任何贡献的人，以贡献程度排序
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
