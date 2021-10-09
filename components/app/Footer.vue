<template>
  <div v-if="!getIsMap" class="block mt-20">
    <div class="flex flex-col items-center justify-center w-full mx-auto">
      <div class="object-cover w-full h-[282px] bg-bottom-lou">
        <div class="container h-full mx-auto">
          <!-- 底部菜单 -->
          <div class="flex flex-row w-full text-base text-white mt-14">
            <span :class="type === '0' ? 'border-b-2 border-blue-500' : ''" class="mr-16 transition duration-500 ease-linear" @mouseover="type = '0'">热销楼盘</span>
            <span :class="type === '1' ? 'border-b-2 border-blue-500' : ''" class="mr-16 transition duration-500 ease-linear" @mouseover="type = '1'">友情链接</span>
            <a href="/map" target="_blank" class="mr-16 text-white">地图找房</a>
            <a href="/info/list" target="_blank" class="mr-16 text-white">楼市咨询</a>
          </div>
          <!-- 菜单主体 -->
          <div class="flex flex-row w-full mt-11">
            <div v-show="type === '0'" class="">
              <a v-for="item in getHotProject" :key="item.id" class="inline-block mb-8 mr-20 text-white" target="_blank" :href="`/house/${item.id}.html`">{{ item.name }}</a>
            </div>
            <div v-show="type === '1'">
              <a v-for="item in getLink" :key="item.id" target="_blank" class="inline-block mb-8 mr-20 text-white" :href="item.address">{{ item.title }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-[300px] bg-black">
        <div class="container w-full h-full mx-auto">
          <div class="flex flex-row items-center justify-center pt-8 space-x-4 text-white">
            <a href="/about" class="text-white" target="_blank">关于房匠</a>
            <span>|</span>
            <a href="/" class="text-white" target="_blank">联系我们</a>
            <span>|</span>
            <a href="/" class="text-white" target="_blank">招商加盟</a>
            <span>|</span>
            <a href="/" class="text-white" target="_blank">诚聘英才</a>
          </div>
          <div class="flex flex-row items-center justify-center pt-4 space-x-4 text-white">
            <a href="https://beian.miit.gov.cn/" class="text-white" target="_blank">冀ICP备19024434号</a>
            <!-- <a href="http://www.beian.gov.cn/" class="text-white" target="_blank">冀公网安备000000001号</a> -->
          </div>
          <div class="flex flex-row items-center justify-center pt-4 space-x-4 text-white">
            <span>房匠房产、产品用户服务、产品咨询购买、技术支持客服服务热线：新房、二手房：400-960-9889</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter',
  data () {
    return {
      hotProjects: [],
      type: '0', // 0 热销楼盘 1 友情连接
    }
  },
  computed: {
    getIsMap() {
      return this.$route.path === '/map'
    },
    getHotProject() {
      return this.$store.state.app.hotProject;
    },
    getLink() {
      return this.$store.state.app.link;
    }
  },
  methods: {

  }
})
</script>

