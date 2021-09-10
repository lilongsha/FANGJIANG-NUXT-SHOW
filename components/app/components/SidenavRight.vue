<template>
  <div class="flex flex-row items-center justify-center w-full h-full">
    <span :class="getIsHome? 'text-white': 'text-black'">登录/注册</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  data () {
    return {
    }
  },
  computed: {
    getIsHome() {
      return this.$route.path === '/'
    }
  },
  methods: {

  }
})
</script>