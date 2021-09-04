<template>
  <div class="container mx-auto">
    <!-- <a-breadcrumb :routes="routes"> -->
      <!-- <a-breadcrumb-item class="flex flex-row items-center h-6" v-for="item in breadcrumbItems" :key="item.title" :href="item.href">
        <a-icon v-if="item.icon" :type="item.icon" @click="remove(item.title)" />
        <span @click="remove(item.href)">{{ item.title }}</span>
      </a-breadcrumb-item> -->
      <!-- <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
        <span>{{route}}</span>
      </template>
    </a-breadcrumb> -->
    <span>{{ route }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
  },
  data () {
    return {
      routes: [
        {
          path: '/',
          title: '首页',
          icon: 'home',
        },
        {
          path: '/house',
          title: '新房',
          icon: 'house',
        },
        {
          path: '/info',
          title: '资讯',
          icon: 'info',
        },
        {
          path: '/map',
          title: '地图',
          icon: 'map',
        },
        {
          path: '/about',
          title: '关于',
          icon: 'about',
        },
      ]
    }
  },
  computed: {
    route () {
      return this.$route;
    }
    // breadcrumbItems () {
    //   return this.$store.state.breadcrumbItems
    // }
  },
  methods: {
    remove(url: string) {
      if (url) {
        this.$store.commit('removeBreadcrumb', url)
        this.$router.push(url);
      }
      
    },
  },
})
</script>