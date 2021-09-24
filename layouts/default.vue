<template>
  <div class="font-sans">
    <div>
      <div>
        <AppSidenav />
        <main>
          <AppHeader />
          <nuxt />
          <AppFooter class="sticky"/>
        </main>
      </div>
    </div>
    <!-- <div class="fixed right-0 top-auto flex flex-col w-10 bg-black h-60">工具条</div> -->
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
