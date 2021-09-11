<template>
  <div class="relative flex flex-row justify-center w-full h-full">
    <!-- 位置信息 -->
    <div class="absolute left-0 flex flex-row items-center justify-center h-full">
      <div class="flex items-center h-full">
        <img v-show="getIsHome" class="object-cover w-16 h-16" src="~/assets/svg/logo.png" />
        <img v-show="!getIsHome" class="object-cover w-16 h-16" src="~/assets/svg/logo_blue.png" />
      </div>
      <span class="text-lg ml-11" :class="getIsHome? 'text-white': 'text-black'">
        {{ getLocation }}
      </span>
      <svg
        class="w-5 h-5"
         :class="getIsHome? 'text-white': 'text-black'"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1821"
        width="128"
        height="128"
      >
        <path
          d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
          p-id="1822"
          data-spm-anchor-id="a313x.7781069.0.i0"
          class="selected"
        ></path>
      </svg>
    </div>
    <div class="flex flex-row items-center pl-4 space-x-6 text-xl" :class="getIsHome? 'text-white': 'text-black'">
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/" target="_blank">首页</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/house/list" target="_blank">新房</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/info/list" target="_blank">资讯</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/map" target="_blank">地图</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/about/company" target="_blank">关于</a>
    </div>
    <!-- 搜索 -->
    <div :class="getIsHome? 'text-white': 'text-black'" class="flex items-center ml-8 text-lg">
      <span>搜索</span>
    </div>
    <div class="absolute right-0 flex flex-row items-center justify-center h-full text-lg" :class="getIsHome? 'text-white': 'text-black'">
      <span class="text-base">登录/注册</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SidenavCenter',
  components: {},
  asyncData() {
  },
  data() {
    return {}
  },
  computed: {
    getLocation() {
      return this.$store.state.app.city;
    },
    getIsHome() {
      return this.$route.path === '/'
    }
  },
  methods: {}
})
</script>
<style scoped>
a {
  @apply text-white hover:text-white;
};

.fj-href- {
  @apply text-black hover:text-black;
}

.fj-href {
  @apply flex flex-row items-center h-full hover:border-b-2;
}
</style>