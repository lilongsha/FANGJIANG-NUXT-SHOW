<template>
  <div class="">
    <div>Header.vue</div>
    <div>{{item}}</div>
    <div @click="remove"></div>
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
    item () {
      return this.$store.state.breadcrumbItems
    }
  },
  methods: {
    remove() {
      this.$store.commit('removeBreadcrumb', '/info/list')
    }
  },
})
</script>