---
title: 工作室账号
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
    avatar: 'https://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/0070JLSwly8gdiz9ix6l3j30u00u0q3n.jpg?KID=imgbed,tva&Expires=1658905969&ssig=dVa04J6iqr',
    name: '微博',
    title: ' ',
    org: '蔡徐坤工作室',
    orgLink: 'https://weibo.com/u/6423838632',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      工作室账号
    </template>
    <template #lead>
      此页列出蔡徐坤个人工作室的官方帐号
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>



