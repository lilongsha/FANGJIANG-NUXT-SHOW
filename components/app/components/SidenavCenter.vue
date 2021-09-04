<template>
  <div class="flex flex-row w-full h-full">
    <!-- 位置信息 -->
    <div class="flex flex-row items-center justify-center h-full">
      <span class="text-lg text-white">
        {{ getLocation }}
      </span>
      <svg
        class="w-5 text-white"
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
    <div class="flex flex-row items-center pl-4 space-x-6 text-xl text-white">
      <a href="/" target="_blank">首页</a>
      <a href="/house/list" target="_blank">新房</a>
      <a href="/info/list" target="_blank">资讯</a>
      <a href="/map" target="_blank">地图</a>
      <div class="text-center group">
        <a class="w-auto group" href="/about/company" target="_blank">关于</a>
        <div class="absolute hidden p-2 bg-blue-600 group-hover:block">
          <a href="/about/joinUs" target="_blank" class="text-sm text-white">加入我们</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SidenavCenter',
  components: {},
  data() {
    return {}
  },
  computed: {
    getLocation() {
      return '石家庄'
    },
  },
  methods: {},
})
</script>