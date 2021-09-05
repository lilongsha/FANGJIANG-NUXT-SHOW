<template>
  <div class="fixed z-10 flex flex-row w-full h-20 bg-index-menu">
    <div class="w-1/3">
      <sidenav-left />
    </div>
    <div class="container text-center">
      <sidenav-center />
    </div>
    <div class="w-1/3">
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
  methods: {

  }
})
</script>