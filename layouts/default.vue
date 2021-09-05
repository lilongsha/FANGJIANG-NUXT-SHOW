<template>
  <div>
    <div>
      <div>
        <AppSidenav />
        <main>
          <AppHeader />
          <nuxt />
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
