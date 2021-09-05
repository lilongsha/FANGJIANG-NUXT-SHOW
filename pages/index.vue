<template>
  <div class="w-full">
    <!-- 轮播图功能区域定位 -->
    <div class="absolute z-10 flex flex-row w-full h-64 top-28">
      <div class="w-1/3"></div>
      <!-- 轮播图功能区域 -->
      <div class="container h-full mx-auto">
        <!-- 菜单 -->
        <div class="menu-box">
          <!-- 菜单左侧 -->
          <div class="menu-box-left">
            <!-- 菜单区域 -->
            <div class="menu-item group" @mouseover="openMenu(1)" @mouseleave="closeMenu()">
              <div class="menu-item-left">
                <div class="menu-item-left-content">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">区域</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- 菜单商圈 -->
            <div class="menu-item group" @mouseover="openMenu(2)" @mouseleave="closeMenu()">
              <div class="menu-item-left">
                <div class="flex flex-row items-center transition-all group-hover:pl-4">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">商圈</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- 菜单地铁 -->
            <div class="menu-item group" @mouseover="openMenu(3)" @mouseleave="closeMenu()">
              <div class="menu-item-left">
                <div class="flex flex-row items-center transition-all group-hover:pl-4">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">地铁</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 菜单右侧menu-right -->
          <div v-show="menuShow.isShow" class="w-3/5 h-full ml-4 transition-all bg-black bg-opacity-80 rounded-2xl">
            <span v-show="menuShow.flag === 1" class="text-lg text-white">A</span>
            <span v-show="menuShow.flag === 2" class="text-lg text-white">B</span>
            <span v-show="menuShow.flag === 3" class="text-lg text-white">C</span>
          </div>
        </div>
      </div>
      <div class="w-1/3"></div>
    </div>
    <!-- banner 轮播图 -->
    <a-carousel class="w-full" dot-position="right" effect="fade" autoplay>
      <img
        v-for="item in banners"
        :key="item.id"
        :src="item.address"
        :title="item.title"
        :alt="item.description"
      />
    </a-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BannerModel } from '@/api/banner/model/bannerModel'

export default Vue.extend({
  name: 'Home',
  asyncData() {
    const imgUrl =
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201504%2F20%2F124615c17nv1nzix0ft1nv.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633334166&t=65e7c2147b9d88247ee46ab3cb3ad7a0'
    const imgUrl1 =
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170331%2F2b0152b7ce7f4fc28b6f89a10167a66e_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633339467&t=8ecfc535d03840ae4ff1c9175633bcd9'
    const banners: BannerModel[] = [
      { address: imgUrl1, title: '标题1', description: '描述一' },
      { address: imgUrl1, title: '标题1', description: '描述一' },
      { address: imgUrl, title: '标题1', description: '描述一' },
      { address: imgUrl, title: '标题1', description: '描述一' },
    ]
    return {
      banners,
    }
  },
  data() {
    return {
      menuShow: {
        isShow: false,
        flag: 0,
      },
      areas: [], // 区域
      metro: [], // 地铁
      trading: [], // 商圈
      banners: [], // banner
      hotHouses: [], // 热销楼盘
      recommendHouses: [], // 推荐楼盘
      newsList: [], // 资讯
      newsType: 0, // 资讯分类 0 1 2 3
    }
  },
  mounted() {
    this.$store.commit('reset')
  },
  methods: {
    openMenu(flag: number) {
      this.menuShow.isShow = true;
      this.menuShow.flag = flag;
    },
    closeMenu() {
      this.menuShow.isShow = false;
      this.menuShow.flag = 0;
    },
  },
})
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 420px;
  line-height: 420px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.menu-box {
  /* 菜单最大盒子 */
  @apply flex flex-row w-full h-full;
}

.menu-box-left {
  /* 菜单盒子左侧 */
  @apply flex flex-col justify-center w-1/5 h-full space-y-4 bg-black bg-opacity-80 rounded-2xl;
}

.menu-item {
  /* 菜单盒子左侧下列表 */
  @apply z-10;
}
.menu-item-left {
  /* 菜单盒子左侧下列表左侧 */
  @apply flex flex-row items-center justify-between py-1 mx-2 transition-all group-hover:bg-white group-hover:bg-opacity-30 group-hover:rounded-md;
}
.menu-item-left-content {
  /* 菜单盒子左侧下列表左侧内容 */
  @apply flex flex-row items-center transition-all group-hover:pl-4;
}

.menu-right {
  /* 菜单盒子右侧 */
  @apply w-3/5 h-full ml-4 bg-blue-500;
}
</style>