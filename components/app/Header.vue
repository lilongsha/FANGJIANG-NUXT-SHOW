<template>
  <div class="container mx-auto">
    <a-breadcrumb separator=">" class="flex flex-row items-center">
      <a-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path" class="flex flex-row items-center">
        <div class="flex flex-row items-center" @click="go(item)">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{ item.title }}</span>
        </div>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Breadcrumb } from '@/types/app';

export default Vue.extend({
  name: 'AppHeader',
  components: {
  },
  data () {
    return {}
  },
  computed: {
    breadcrumbItems () {
      return this.$store.state.app.breadcrumbItems;
    }
  },
  methods: {
    go(item: Breadcrumb) {
      const param = item.param;
      this.$router.push({ path: item.href, query: { ...param } })
    }
  },
})
</script>