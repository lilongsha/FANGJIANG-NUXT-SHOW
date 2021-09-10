<template>
  <div :class="getIsHome? 'bg-index-menu': ''" class="fixed z-50 flex flex-row w-full h-20">
    <div class="">
      <sidenav-left />
    </div>
    <div class="container mx-auto text-center">
      <sidenav-center />
    </div>
    <div class="">
      <sidenav-right />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidenavCenter from './components/SidenavCenter.vue'
import SidenavLeft from './components/SidenavLeft.vue'
import SidenavRight from './components/SidenavRight.vue'

export default Vue.extend({
  name: 'AppSidenav',
  components: { SidenavRight, SidenavLeft, SidenavCenter },
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