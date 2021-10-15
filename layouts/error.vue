<template>
  <div class="container w-full mx-auto bg-white">
    <div class="w-full h-24"></div>
    <div>
      <img class="mx-auto" src="~/assets/img/error/404.jpg" alt="房匠网-404页面">
      <div class="relative w-full text-center bottom-36">
        <span>您的页面已偏离地球，去火星看看吧</span>
        <div class="w-24 mx-auto mt-4 shadow-md bg-fjBlue-100"><a href="/" rel="nofollow" class="text-white hover:text-white">返回首页</a></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Error',
  data () {
    return {
    }
  },
  methods: {

  }
})
</script>
