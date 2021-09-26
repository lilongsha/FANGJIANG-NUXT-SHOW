<template>
  <div class="">
    <div class="w-full h-20"></div>
    <!-- house content -->
    <div class="w-full pb-7 bg-[#f6f9fe]">
      <div class="container mx-auto">
        <!-- name and title -->
        <div class="w-full pt-10">
          <!-- name and saleState -->
          <div class="flex flex-row items-end w-full">
            <span class="text-[#333333] text-[34px] font-medium">{{ house.name }}</span>
            <span v-if="house.saleState === '1'" class="px-1 my-auto text-sm font-normal text-white rounded-sm ml-7 bg-fjYellow-100">在售</span>
            <span v-if="house.saleState === '2'" class="px-1 my-auto font-normal text-white rounded-sm ml-7 bg-fjBlue-100">待售</span>
            <span v-if="house.saleState === '3'" class="px-1 my-auto font-normal text-white rounded-sm ml-7 bg-fjRed-100">售罄</span>
          </div>
          <span class="mt-5 text-[#999999] text-[18px]">{{ house.aliasName }}</span>
        </div>
        <!-- Carousel and baseInfo -->
        <div class="flex flex-row w-full mt-8 h-[547px]">
          <!-- Carousel w-1280-567 -->
          <div class="h-full w-[713px] flex flex-col">
            <!-- carousel img -->
            <div class="w-full h-[450px] relative">
              <div class="absolute left-0 top-[193px] z-10 flex flex-row items-center justify-center w-6 h-16 bg-black bg-opacity-60" @click="prev()">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="absolute right-0 top-[193px] z-10 flex flex-row items-center justify-center w-6 h-16 bg-black bg-opacity-60" @click="next()">
                <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <a-carousel ref="carousel" arrows>
                <div v-for="item in resourceList" :key="item.id" class="w-full h-full">
                  <img :src="item.address" :alt="item.title" class="object-cover w-full h-full" height="100%" width="100%">
                </div>
              </a-carousel>
            </div>
            <!-- carousel sort -->
            <div class="relative flex flex-row w-full h-20 mt-4 overflow-hidden bg-white">
              <div class="absolute left-0 z-10 flex flex-row items-center justify-center w-6 h-full bg-black bg-opacity-40" @click="scrollLeft">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div ref="sortScroll" class="relative h-full space-x-2 text-white transition-all" :style="sortRightString">
                <div v-for="item in resourceSortList" :key="item.sort" class="static float-left w-24 h-full" @click="getResourceList(item.sort)">
                  <img :src="item.address" :alt="resourceSort[item.sort].title" width="100%" height="100%" class="object-cover w-full h-full">
                  <span class="absolute bottom-0 w-24 text-center bg-black bg-opacity-60">{{ resourceSort[item.sort].title }}</span>
                </div>
              </div>
              <div class="absolute right-0 z-10 flex flex-row items-center justify-center w-6 h-full bg-black bg-opacity-40" @click="scrollRight">
                <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
            </div>
          </div>
          <!-- BaseInfo w-567px -->
          <div class="h-full w-[555px] ml-3">
            <!-- price -->
            <div class="px-6 w-full h-[155px] flex flex-col bg-fjBlue-100 text-white">
              <!-- lookTimes -->
              <div class="w-full mt-2 text-right">
                {{ house.lookTime }}
              </div>
              <!-- price and totalPrice -->
              <div class="flex flex-row justify-between w-full">
                <div>
                  <span class="text-sm">参数单价：</span>
                  <span class="text-[22px]">{{ house.price }}</span>
                  <span class="text-sm">元/㎡</span>
                </div>
                <div>
                  <span class="text-[22px]">{{ house.lowTotalPrice }}-{{ house.highTotalPrice }}</span>
                  <span class="text-sm">（万/套）</span>
                </div>
              </div>
              <!-- 价格更新日期 -->
              <div class="flex flex-row justify-between w-full mt-4 text-sm">
                <span v-if="house.updatePriceTime" class="">价格更新日期：{{ priceDate }}</span>
                <span v-if="house.priceDays" class="">价格有效期：{{ house.priceDays }}天</span>
              </div>
              <!-- 说明 收藏 -->
              <div class="flex flex-row w-full pt-4 text-sm group">
                <span>价格说明</span>
                <svg t="1632550637139" class="w-5 h-5 ml-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5311" width="128" height="128"><path d="M512 853.333333C323.4816 853.333333 170.666667 700.5184 170.666667 512S323.4816 170.666667 512 170.666667s341.333333 152.814933 341.333333 341.333333-152.814933 341.333333-341.333333 341.333333z m0-51.2a290.133333 290.133333 0 1 0 0-580.266666 290.133333 290.133333 0 0 0 0 580.266666z m25.6-197.051733a25.6 25.6 0 1 1-51.2 0c0-20.343467 9.4208-43.588267 27.409067-71.236267 8.465067-13.038933 17.7152-21.981867 33.8944-34.952533l4.983466-3.9936c21.2992-17.032533 26.794667-24.917333 26.794667-42.564267 0-38.741333-30.378667-69.870933-67.4816-69.870933-38.673067 0-67.4816 28.672-67.4816 69.870933a25.6 25.6 0 0 1-51.2 0c0-69.495467 51.780267-121.070933 118.6816-121.070933 65.706667 0 118.6816 54.340267 118.6816 121.070933 0 36.932267-13.755733 56.763733-46.045867 82.568534l-4.9152 3.925333c-12.219733 9.796267-18.261333 15.6672-22.971733 22.9376-13.073067 20.0704-19.1488 35.054933-19.1488 43.349333zM512 729.224533a31.061333 31.061333 0 1 1 0-62.088533 31.061333 31.061333 0 0 1 0 62.088533z" fill="#ffffff" p-id="5312" data-spm-anchor-id="a313x.7781069.0.i3" class="selected"></path></svg>
                <span class="hidden ml-4 group-hover:block">价格仅供参考，不做为最终购房的价格</span>
              </div>
            </div>
            <div class="px-6 w-full h-[392px] text-[#666666] text-base">
              <!-- address -->
              <div class="w-full pt-4">项目地址：{{ house.address }}</div>
              <!-- house -->
              <div class="w-full pt-4">主力户型：{{ layoutLabel }}</div>
              <!-- 最新开盘 -->
              <div v-if="house.openTime" class="w-full py-4">最新开盘：{{ house.openTime.split('T')[0] }}</div>
              <div v-else class="w-full py-4">最新开盘：暂未开盘</div>
              <!-- 查看更多楼盘详情 -->
              <a class="w-full border-b-[1px] border-fjBlue-100">
                查看更多楼盘详情
              </a>
              <div class="w-full mt-14 h-0.5 bg-[#DDDDDD]"></div>
              <!-- phone -->
              <div class="w-full mt-6 text-xl text-black">400 960 9880 转 {{ house.number }}</div>
            </div>
          </div>
        </div>
        <!-- house menu -->
        <div ref="menu" class="sticky z-20 flex flex-row w-full h-16 bg-gray-200 mt-14 top-20">
          <div v-for="item in houseMenu" :key="item.value" :class="topFlag === item.value ? 'bg-fjBlue-100 text-white' : 'text-[#333333]'" class="w-32 h-full leading-[64px] text-center align-middle text-xl transition-all" @click="go(item.value)">{{ item.title }}</div>
          <div class="absolute right-0 h-full text-lg text-fjBlue-100 font-bold leading-[64px] align-middle pr-4">400 960 9889 转 {{ house.number }}</div>
        </div>
        <!-- house layout -->
        <div id="layout" ref="layout" class="w-full h-[450px] mt-8">
          <!-- h-36px -->
          <div class="flex flex-row items-center w-full h-[36px]">
            <!-- 竖线 -->
            <div class="w-4 h-full bg-black"></div>
            <!-- 标题内容 -->
            <div class="ml-2 text-xl font-bold">户型</div>
          </div>
          <!--  -->
          <div class="w-full h-[414px] mt-8">
            <div class="w-full h-12">
              <span v-for="item in layouts" :key="item.value" :class="item.rooms === showDefaultLayout ? 'bg-fjBlue-100 text-white text-lg' : ''" class="w-20 px-2 py-1 mx-2 text-center transition-all rounded-sm" @click="changeLayout(item.rooms)">{{ item.rooms }}室({{ item.value }})</span>
            </div>
            <div class="relative w-full overflow-hidden h-80">
              <div class="absolute top-[120px] left-0 z-10 flex flex-row items-center justify-center w-6 h-20 bg-black bg-opacity-40" @click="scrollLayoutLeft">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="absolute top-[120px] right-0 z-10 flex flex-row items-center justify-center w-6 h-20 bg-black bg-opacity-40" @click="scrollLayoutRight">
                <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="w-full h-full overflow-hidden relactive">
                <div ref="layoutScroll" class="relative flex flex-row h-full text-white transition-all" :style="layoutRightString">
                  <div v-for="item in house.hLayoutsById" v-show="item.room == showDefaultLayout" :key="item.id" class="relative flex-shrink-0 h-full mr-8 overflow-hidden transition-all w-72 bg-fjBlue-100">
                    <div class="absolute bottom-0 z-20 flex flex-col w-full h-24 px-4">
                      <div class="flex flex-row text-xl font-bold text-black">
                        <div class="-space-x-1 ">
                          <span v-if="item.room">{{ item.room }}</span>
                          <span v-if="item.room">室</span>
                          <span v-if="item.hall">{{ item.hall }}</span>
                          <span v-if="item.hall">厅</span>
                          <span v-if="item.toilet">{{ item.toilet }}</span>
                          <span v-if="item.toilet">卫</span>
                        </div>
                        <div class="">
                          <span v-if="item.state === '1'" class="px-1 pb-0.5 ml-4 text-sm font-normal text-white rounded-sm bg-fjYellow-100">在售</span>
                          <span v-if="item.state === '2'" class="px-1 pb-0.5 ml-4 text-sm font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
                          <span v-if="item.state === '3'" class="px-1 pb-0.5 ml-4 text-sm font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
                        </div>
                      </div>
                      <div class="w-full text-gray-700">
                        <span>建面约{{ item.area }}㎡</span>
                        <span class="ml-4">{{ item.description }}</span>
                      </div>
                      <div v-if="item.labels" class="w-full space-x-2">
                        <span v-for="(label, index) in item.labels.split(',')" :key="index" class="px-2 py-0.5 rounded text-center text-gray-600 bg-gray-400">
                          {{ label }}
                        </span>
                      </div>
                    </div>
                    <img :src="item.hResourceByResourceId.address" :alt="item.hResourceByResourceId.description" class="object-cover w-full h-full transition-all duration-700 hover:scale-125">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- house news -->
        <div id="news" ref="news" class="w-full bg-red-300 h-112"></div>
        <!-- house question -->
        <div id="question" ref="question" class="w-full bg-black h-112"></div>
        <!-- house around -->
        <div id="around" ref="around"></div>
        <!-- house price -->
        <div id="price" ref="price"></div>
        <!-- house 推荐 -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi, houseMenu } from '~/api/model/houseModel';
import { Api as ResourceApi, resourceSort } from '~/api/model/resourceModel';
import { getListResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'HouseInfo',
  components: {
  },
  async asyncData ({ $axios, params }) {
    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    const getHouseInfo = async () => {
      await Promise.all([
        getResourcesList(),
      ])
    }

    let resourceSortList: any;
    const getResourcesList = async () => {
      const param: any = {
        data: {
          projectId: id
        }
      }
      const result = await $axios.$post(ResourceApi.GetResourcesList, param)
      if (result.code === 200) {
        resourceSortList = getListResult(result);
        if (resourceSortList && resourceSortList[0]) {
          await getFirstresourceList(resourceSortList[0].sort);
        }
      }
    }

    let resourceList: any;
    let showSort: string = '';
    const getFirstresourceList = async (sort: string) => {
      if (!sort || sort === '') {
        return;
      }
      showSort = sort;
      const param: any = {
        data: {
          projectId: id,
          sort,
        }
      }
      const result = await $axios.$post(ResourceApi.GetResources, param)
      if (result.code === 200) {
        resourceList = getListResult(result);
      }
    }

    // 获取项目信息
    const param: any = {
      data: {
        id,
      }
    }
    const result = await $axios.$post(HouseApi.GetProject, param)
    let house: any;
    if (result.code === 200) {
      house = getListResult(result);
      await getHouseInfo();
    }
    
    return { id, house, resourceSortList, resourceList, showSort }
  },
  data () {
    const id: string = '';
    const house: any = {};
    const sortRight: number = 0;
    const sortRightString: string = '';
    const resourceList: any[] = [];
    const showSort: string = '';
    const resourceSortList: any[] = [];
    const showDefaultLayout: string = '';
    const priceDate: string = '';
    const topFlag: string = 'layout';
    const layouts: any[] = [];
    const layoutLabel: string = '';
    const layoutRight: number = 0;
    const layoutRightString: string = '';
    return {
      id,
      resourceSort,
      house,
      sortRight,
      sortRightString,
      resourceList,
      showSort,
      resourceSortList,
      houseMenu,
      topFlag,
      layouts,
      layoutLabel,
      showDefaultLayout,
      priceDate,
      layoutRight,
      layoutRightString,
    }
  },
  head() {
    const title: string = `${this.house.name} - 房匠`;
    return {
      title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ],
      script: [
        {
          innerHTML: '{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"http://sjz.jiwu.com/loupan/1290152.html","appid":"1575153492583878","title":"石家庄润江云玺房价价格,新房售楼处电话,楼盘怎么样 - 吉屋网","images":["http://img1-build.jiwu.com/album/manual/2020/11/07/145807820623.jpg","http://img4-build.jiwu.com/album/manual/2020/11/07/151240046364.jpg/750x560", "http://img6-build.jiwu.com/album/manual/2020/11/07/151300673270.jpg/750x560"],"description": "石家庄裕华众美商圈润江云玺售楼处电话号码:4007508888转64846,吉屋网为您提供该房产楼盘信息、房价走势等，全面了解润江云玺买房怎么样，是您选购新楼盘一手房的理想网站。","upDate":"2021-09-11T10:51:22"}',
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.getHouseType();
  },
  methods: {
    scrollRight() {
      if (this.$refs.sortScroll.offsetWidth - 713 < this.sortRight) {
        return;
      }
      this.sortRight = this.sortRight + 100;
      this.sortRightString = 'right: ' + this.sortRight + 'px';
    },
    scrollLeft() {
      if (this.sortRight - 100 < 0) {
        return;
      }
      this.sortRight = this.sortRight - 100;
      this.sortRightString = 'right: ' + this.sortRight + 'px';
    },
    async getResourceList(sort: string) {
      if (!sort || sort === '') {
        return;
      }
      this.showSort = sort;
      const param: any = {
        data: {
          projectId: this.id,
          sort,
        }
      }
      this.$nuxt.$loading.start();
      try {
        const result = await this.$axios.$post(ResourceApi.GetResources, param)
        if (result.code === 200) {
          this.resourceList = getListResult(result);
        }
      } catch(e) {}
      finally {
        this.$nuxt.$loading.finish();
      }
    },
    getHouseType() {
      const layouts: any[] = this.house.hLayoutsById;
      // 获取主力户型
      if (!layouts || layouts.length < 1) {
        return '暂无数据';
      }
      const flagObj: any = {};
      layouts.forEach((item) => {
        if (item.saleState !== '1' || !item.room || !item.area) {
          return;
        }
        if (flagObj[item.room + '-' + item.area]) {
          flagObj[item.room + '-' + item.area] = flagObj[item.room + '-' + item.area] + 1;
        } else {
          flagObj[item.room + '-' + item.area] = 1;
        }
      })
      const keys = Object.keys(flagObj);
      if (keys.length < 1) {
        return '暂无数据';
      }
      let result: string = '';
      for(let i = 0; i < keys.length; i++) {
        this.layouts.push({ rooms: keys[i].split('-')[0], value: flagObj[keys[i]] });
        if (Object.keys(flagObj).length > 2) {
          continue;
        }
        result = result + keys[i].split('-')[0] + '室(' + keys[i].split('-')[1] + '㎡)        '
      }
      this.showDefaultLayout = this.layouts[0].rooms
      this.layoutLabel = result;
    },
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
    getPriceDate(time: string) {
      const date = new Date(time);
      const result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      this.priceDate =  result;
    },
    go(el: string) {
      const anchor:any = this.$el.querySelector('#' + el)
      anchor.scrollIntoView({ behavior: 'smooth' })
    },
    handleScroll() {
      const layoutTop = this.$refs.layout.getBoundingClientRect().top
      const newsTop = this.$refs.news.getBoundingClientRect().top;
      const questionTop = this.$refs.question.getBoundingClientRect().top;
      const aoroundTop = this.$refs.around.getBoundingClientRect().top;
      if (layoutTop < 0 ) {
        this.topFlag = 'layout'
      }
      if (newsTop < 0 ) {
        this.topFlag = 'news'
      }
      if (questionTop < 0 ) {
        this.topFlag = 'question'
      }
      if (aoroundTop < 0 ) {
        this.topFlag = 'around'
      }
    },
    scrollLayoutRight() {
      this.layoutRight = this.layoutRight + 288;
      this.layoutRightString = 'right: ' + this.layoutRight + 'px';
    },
    scrollLayoutLeft() {
      if (this.layoutRight - 288 < 0) {
        return;
      }
      this.layoutRight = this.layoutRight - 288;
      this.layoutRightString = 'right: ' + this.layoutRight + 'px';
    },
    changeLayout(layout: string) {
      this.showDefaultLayout = layout;
    }
  }
})
</script>
