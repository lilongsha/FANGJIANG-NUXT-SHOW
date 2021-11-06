<template>
  <div v-if="breadcrumbItems.length > 0" class="fixed z-50 w-full bg-white sm:w-full sm:overflow-hidden sm:top-14 sm:border-t lg:top-20 sm:px-2">
    <div class="container py-2 lg:mx-auto">
      <a-breadcrumb separator=">" class="flex flex-row items-center">
        <a-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path" class="flex flex-row items-center flex-shrink-0">
          <div class="flex flex-row items-center" @click="go(item)">
            <a-icon v-if="item.icon" :type="item.icon" />
            <span class="border-b border-white hover:border-fjBlue-100">{{ item.title }}</span>
          </div>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
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