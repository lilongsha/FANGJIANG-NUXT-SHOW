<template>
  <div class="fixed flex flex-row w-full h-16 bg-blue-600">
    <div class="w-1/3 bg-gray-600">
      <sidenav-left />
    </div>
    <div class="container text-center">
      <sidenav-center />
    </div>
    <div class="w-1/3 bg-gray-600">
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