<template>
  <div class="wrapper">
    <div class="content">
      <div class="columns">
        <AppSidenav />
        <main class="pt-16">
          <AppHeader />
          <nuxt class="container" />
          <AppFooter />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Layout',
  components: {
  },
    asyncData() {
    return {
      isHome: false,
    }
  },
  data () {
    return {
    }
  },
  methods: {

  }
})
</script>
