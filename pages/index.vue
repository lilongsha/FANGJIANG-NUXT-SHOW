<template>
  <div>
    <span>首页</span>
    <span>获取数据</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      areas: [], // 区域
      metro: [], // 地铁
      trading: [], // 商圈
      banners: [], // banner
      hotHouses: [], // 热销楼盘
      recommendHouses: [], // 推荐楼盘
      newsList: [], // 资讯
      newsType: 0 // 资讯分类 0 1 2 3
    }
  },
  methods: {

  }
})
</script>
