<template>
  <div class="flex flex-row w-full h-16 bg-blue-600">
    <div class="bg-gray-600 w-1/4">
      <sidenav-left></sidenav-left>
    </div>
    <div class="container bg-red-400 text-center"></div>
    <div class="bg-gray-600 w-1/4"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidenavLeft from './SidenavLeft.vue'

export default Vue.extend({
  components: { SidenavLeft },
  name: 'AppSidenav',
  data () {
    return {
    }
  },
  methods: {

  }
})
</script>