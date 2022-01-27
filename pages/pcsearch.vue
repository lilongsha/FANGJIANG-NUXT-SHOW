<template>
  <div class="w-full h-full sm:hidden">
    <div class="flex flex-row items-center justify-center w-full py-16 bg-fjBlue-100 bg-opacity-10">
      <div class="w-[900px]">
        <div class="flex flex-row items-center justify-between px-6">
          <span class="text-[22px]" :class="type === '1' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('1')">全网搜索</span>
          <span class="text-[22px]" :class="type === '2' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('2')">新房</span>
          <span class="text-[22px]" :class="type === '3' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('3')">二手房</span>
          <span class="text-[22px]" :class="type === '4' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('4')">资讯</span>
          <span class="text-[22px]" :class="type === '5' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('5')">视频</span>
          <span class="text-[14px] text-[#333333]">大家都在搜:
            <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" class="mx-2 border-b text-fjBlue-100 border-b-fjBlue-100">{{ item.name }}</a>
          </span>
          
        </div>
        <div class="h-[66px] w-full mt-6 rounded relative flex items-center">
          <input class="rounded-l-[4px] w-2/3 h-full border shadow border-fjBlue-100 text-[24px] px-4" type="text">
          <button class="rounded ml-[-6px] w-[140px] h-full text-white border border-fjBlue-100 bg-fjBlue-100 text-[20px]">搜索</button>
          <button class="rounded ml-[10px] w-[140px] h-full bg-[#F0F0F0] text=[#666666] text-[16px]">返回搜索页面</button>
          <div class="bg-fjBlue-100 w-4 h-4 rotate-45 absolute top-[-8px] z-[-1]" :class="`left-[${left}px]`"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto pt-14">
      <span class="text-[#666666] text-[18px]">为您找到<span class="tracking-wide text-fjRed-100">0</span>条搜索结果</span>
      <div class="flex flex-row mt-16">
        <div class="w-2/3"></div>
        <div class="w-1/3 bg-coolGray-200 pt-[34px] px-8 pb-10"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'PcSearch',
    asyncData() {
      return {
        type: '1'
      }
    },
    data() {
      return {
        type: '1',
        left: 56
      }
    },
    computed:{
      getHotProject() {
        const hotProject = this.$store.state.app.hotProject;
        return hotProject.slice(0, 2);
      }
    },
    watch: {
      type() {
        if (this.type === '1') {
          this.left = 56;
        } else if (this.type === '2') {
          this.left = 192;
        } else if (this.type === '3') {
          this.left = 300;
        } else if (this.type === '4') {
          this.left = 420;
        } else if (this.type === '5') {
          this.left = 532;
        }
      }
    },
    methods: {
      changeType(type: string) {
        this.type = type;
      }
    }
})
</script>