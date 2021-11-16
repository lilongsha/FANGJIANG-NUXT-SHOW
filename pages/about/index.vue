<template>
  <div class="container mx-auto">
    <div class="h-20">
    </div>
    <div class="flex flex-col items-center w-full space-y-1">
      <div class="point bg-fjBlue-100 opacity-10"></div>
      <div class="opacity-50 point bg-fjBlue-100"></div>
      <div class="opacity-100 point bg-fjBlue-100"></div>
    </div>
    
    <div class="relative w-full mt-4">
      <div class="abCenter z-9">
        <span class="text-3xl font-bold text-gray-200">ABOUTUS</span>
      </div>
      <div class="z-10 abCenter top-4">
        <span class="text-xl font-bold text-black">关于-企业</span>
      </div>
    </div>
    <div class="grid w-full grid-cols-2 mt-24 justify-items-center">
      <div class="w-full">
        <img src="" class="w-11/12 h-full">
      </div>
      <div>
        <div style="text-indent:28px;">
          <p>河北房匠网络科技有限公司成立于2017年9月5日，我们拥有自主房匠品牌线上APP、公司官网、房匠品牌新媒体账号，随着公司发展预计建设全城线下门店。</p>
          <p>公司主营新建房屋买卖代理服务、新建房屋租赁代理服务、二手卖买卖经纪服务、二手房租赁经纪服务，合作开发商有润江地产、远洋地产、融创地产等各大开发商。</p>
        </div>
        <div class="grid grid-cols-2 mt-10 text-center justify-items-center">
          <div> 
            <span class="text-blue-700 span">使命</span>
            <p class="mt-6 p">公司致力</p>
            <p class="p">优质房源，优质服务</p>
          </div>
          <div>
            <span class="text-blue-700 span">愿景</span>
            <p class="mt-6 p">与时俱进，创造21世纪</p>
            <p class="p">全新房匠品牌</p>
          </div>
          <div class="mt-8 ">
            <span class="text-5xl font-bold text-center text-blue-700 h-9">300+</span>
            <p class="mt-6 p"> 新房源，优质房源</p>
          </div>
          <div class="mt-8 ">
            <span class="text-5xl font-bold text-center text-blue-700 h-9">50+</span>
            <p class="mt-6 p">资深房产咨询师</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[500px] mt-20 bg-gray-300">
      <div class="relative w-full top-8 h-1/5">
        <div class="abCenter z-9">
          <span class="text-3xl font-bold text-gray-200">HONOR</span>
        </div>
        <div class="z-10 abCenter top-4">
          <span class="text-xl font-bold text-black">公司荣誉</span>
        </div>
      </div>
      <div class="relative w-full px-24 h-4/5">
        <div class="absolute left-14 top-[152px]">
          <img src="" alt="" class="w-10 h-24 ">
        </div>
        <div class="absolute top-36 right-14 ">
          <img src="" alt="" class="w-10 h-24">
        </div>
        <div class="w-full h-full px-6 overflow-hidden">
          <div class="relative flex flex-row items-center h-full space-x-8 ">
            <img src="" alt="" class="img">
            <img src="" alt="" class="img">
            <img src="" alt="" class="img">
            <img src="" alt="" class="img">
            <img src="" alt="" class="img">
            <img src="" alt="" class="img">
            <img src="" alt="" class="img">
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-20 bg-fjRed-100">
      <div class="relative w-full mt-4">
        <div class="abCenter z-9">
          <span class="text-3xl font-bold text-gray-200">COURSE</span>
        </div>
        <div class="z-10 abCenter top-4">
          <span class="text-xl font-bold text-black">发展历程</span>
        </div>
      </div>
      <div class="w-full mt-24">
        <div>
          ....
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'InfoList',
  data () {
    return {
    }
  },
  methods: {

  }
})
</script>
<style scoped>
  .point {
    @apply w-2 h-2 rounded-full;
  }
  .span {
    @apply h-8 text-3xl font-bold text-center;
  }
  .p {
    @apply w-full h-5 text-sm font-normal text-center opacity-90;
  }
  .abCenter {
    @apply absolute w-full text-center;
  }
  .img {
    @apply h-32 w-52;
  }
</style>