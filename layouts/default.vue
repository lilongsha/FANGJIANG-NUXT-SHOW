<template>
  <div class="wrapper">
    <div class="content">
      <div class="columns">
        <AppSidenav />
        <main>
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
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {

  }
})
</script>
