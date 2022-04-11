<template>
  <div class="mx-auto sm:w-screen sm:overflow-hidden sm:px-2 lg:container">
    <div class="w-full sm:h-16 lg:h-32"></div>
    <h1 class="mb-4 sm:text-xl lg:text-4xl font-bold text-[#333]">{{ news.title }}</h1>
    <!-- 副标题 -->
    <div class="sm:w-full lg:w-2/3 text-[#999999]">
      <span>来源：</span>
      <span v-if="news.source">{{ news.source }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>发布时间：</span>
      <span v-if="news.createTime">{{ news.createTime.split('T')[0] }}</span>
    </div>
    <!-- 右侧推荐楼盘 -->
    <!--  sm:hidden -->
    <div v-if="!isMobile" class="sticky flex flex-col float-right w-1/3 top-32">
      <div class="w-full mb-2 text-lg font-bold border-b border-fjBlue-100">推荐楼盘</div>
      <div v-for="item in getHotProject" :key="item.id" class="flex flex-row w-full mb-4">
        <!-- 图片 -->
        <div class="w-1/3 mr-2 h-28">
          <a target="_blank" :href="`/house/${item.id}.html`">
            <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
          </a>
        </div>
        <div class="w-2/3 h-28">
          <a target="_blank" :href="`/house/${item.id}.html`">
            <div class="flex flex-row items-center w-full">
              <span class="text-lg font-bold text-black py-0.5"><a target="_blank" :href="`/house/${item.id}.html`" class="text-black hover:text-fjBlue-100">{{ item.name }}</a></span>
              <HouseStateLabel :state="item.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm'" class="mx-1" />
              <HouseTypeLabel :sort="item.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></HouseTypeLabel>
            </div>
            <div class="flex flex-row items-center">
              <svg
                class="w-4 h-4 text-gray-400 icon"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2536"
                width="128"
                height="128">
                <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                  p-id="2537"
                  data-spm-anchor-id="a313x.7781069.0.i2"
                  class="selected"></path>
              </svg>
              <span v-if="item.address" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" class="overflow-hidden text-gray-400" :title="item.address">{{ item.address }}</span>
            </div>
            <div class="flex flex-row items-center">
              <svg
                class="w-4 h-4 text-gray-400 icon"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2536"
                width="128"
                height="128">
                <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                  p-id="2537"
                  data-spm-anchor-id="a313x.7781069.0.i2"
                  class="selected"></path>
              </svg>
              <span class="overflow-hidden text-gray-400" :title="item.rooms">{{ item.rooms }}</span>
              <span class="ml-2 overflow-hidden text-gray-400" :title="item.roomAreas">{{ item.roomAreas }}</span>
            </div>
            <div class="flex flex-row items-end justify-between px-2 h-9">
              <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="flex flex-row items-end space-x-2">
                <span v-for="(label, index) in (item.sysDictDetailBeans)" v-show="index < 2" :key="index" class="px-1 overflow-hidden text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm whitespace-nowrap" :title="label.value">{{ label.value }}</span>
              </div>
              <div>
                <div v-if="item.price">
                  <span class="text-2xl font-bold text-fjRed-100">{{ item.price }}</span>
                  <span class="text-xs text-gray-400">元/㎡</span>
                </div>
                <div v-else class="text-xs text-gray-400">暂无价格</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 lg:pr-8 sm:w-full lg:w-2/3 content-css" v-html="news.content"></div>
    <div class="lg:w-[821px] lg:pr-8 sm:w-full">
      <house-content :context="projects" />
    </div>
    <div class="lg:w-[821px] h-[1px] bg-[#dddddd] my-8"></div>
    <!-- 其它资讯 -->
    <div class="lg:w-[821px] pb-[6px] border-b border-fjBlue-100">
      <span class="border-b-8 border-fjBlue-100">热门资讯</span>
    </div>
    <div class="flex sm:flex-col lg:flex-row lg:w-[821px] mt-4 break-normal flex-wrap">
      <div v-for="item in newsTop" :key="item.id" class="flex-shrink-0 float-left mr-10 font-medium"><a target="_blank" :href="`/info/${item.id}.html`">{{ item.title }}</a></div>
    </div>
    <!-- 底部推荐楼盘 -->
    <!--  lg:hidden -->
    <div v-if="isMobile" class="flex flex-col">
      <div class="w-full mt-6 mb-2 text-lg font-bold border-b border-fjBlue-100">推荐楼盘</div>
      <div v-for="item in getHotProject" :key="item.id" class="flex flex-row w-full mb-4">
        <!-- 图片 -->
        <div class="w-1/3 h-24 mr-2">
          <a target="_blank" :href="`/house/${item.id}.html`">
            <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
          </a>
        </div>
        <div class="w-2/3 h-28">
          <a target="_blank" :href="`/house/${item.id}.html`">
            <div class="flex flex-row items-center w-full">
              <span class="text-lg font-bold text-black py-0.5"><a target="_blank" :href="`/house/${item.id}.html`" class="text-black hover:text-fjBlue-100">{{ item.name }}</a></span>
              <HouseStateLabel :state="item.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm text-[13px]'" class="mx-1" />
              <HouseTypeLabel :sort="item.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100 text-[13px]'"></HouseTypeLabel>
            </div>
            <div class="flex flex-row items-center">
              <svg
                class="w-4 h-4 text-gray-400 icon"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2536"
                width="128"
                height="128">
                <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                  p-id="2537"
                  data-spm-anchor-id="a313x.7781069.0.i2"
                  class="selected"></path>
              </svg>
              <span v-if="item.address" class="overflow-hidden text-gray-400 " style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span>
            </div>
            <div class="flex flex-row items-center">
              <svg
                class="w-4 h-4 text-gray-400 icon"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2536"
                width="128"
                height="128">
                <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                  p-id="2537"
                  data-spm-anchor-id="a313x.7781069.0.i2"
                  class="selected"></path>
              </svg>
              <span class="overflow-hidden text-gray-400" :title="item.rooms">{{ item.rooms }}</span>
              <span class="ml-2 overflow-hidden text-gray-400" :title="item.roomAreas">{{ item.roomAreas }}</span>
            </div>
            <div class="flex flex-row items-end justify-between h-9">
              <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="flex flex-row items-center">
                <span v-for="(label, index) in (item.sysDictDetailBeans)" v-show="index < 2" :key="index" class="px-0.5 mr-0.5 overflow-hidden text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm whitespace-nowrap" :title="label.value">{{ label.value }}</span>
              </div>
              <div>
                <div v-if="item.price">
                  <span class="text-lg font-bold text-fjRed-100">{{ item.price }}</span>
                  <span class="text-xs text-gray-400">元/㎡</span>
                </div>
                <div v-else class="text-xs text-gray-400">暂无数据</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as NewsApi } from '~/api/model/newsModel';
import { getHouseType } from '~/api/model/houseModel';
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
import HouseContent from '~/components/house/Content.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HouseContent,
  },
  async asyncData({ $axios, route, store }) {
    const isMobile = store.state.app.isMobile;

    const start = new Date().getTime();

    let newsTop: any[] = [];
    const getNewsTop = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
        },
        page: {
          pageNum: 0,
          pageSize: 5,
        },
        sort: {
          desc: ['orderNum', 'createTime'],
        },
      }
      const result = await $axios.$post(NewsApi.GetNewsByCity, newsParam);
      if (result?.code === 200) {
        newsTop = getDataResult(result);
      }
    }

    let news: any = {};
    let projects: any[] = [];
    const params: any = route.params;
    let id: string = params.id;
    const getNews = async () => {
      if (id.endsWith('.html')) {
        id = id.replace('.html', '');
      }
      const param = {
        data: {
          id,
        }
      }
      const result = await $axios.$post(NewsApi.GetNews, param);
      if (result?.code === 200) {
        news = getDataResult(result);
        const breadcrumb: Breadcrumb[] = [];
        breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
        breadcrumb.push({ title: '资讯', href: '/info/list', icon: 'list' })
        breadcrumb.push({ title: news.title, href: '' })
        store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

        projects = news.projects;
        projects.forEach((item: any) => {
          item.layoutStr = getHouseType(item);
        });
      }
    }

    await Promise.all([
      getNewsTop(),
      getNews()
    ])

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("资讯详情调用接口使用时间：", end - start)

    return {
      id,
      news,
      projects,
      newsTop,
      isMobile,
    }
  },
  data() {
    const id: string = '';
    const news: any = {};
    const projects: any[] = [];
    let isMobile: any;
    return {
      isMobile,
      id,
      news,
      projects
    }
  },
  head() {
    const newsCityName: string = this.news.city.name;
    const newsProvinceName: string = this.news.province.name;
    const latLng: string = this.news.latitude + '' + this.news.longitude;
    const title: string = `${this.news.title} - 房匠`;
    const description: string = `${this.news.description}`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const imgUrl: string = this.news.img;
    const pubTime: string = this.news.createTime.split('.')[0];
    let upTime: string = this.news.updateTime || this.news.createTime;
    upTime = upTime.split('.')[0];
    const keyword: string = this.news.keywords;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${title}","images":["${imgUrl}","${imgUrl}", "${imgUrl}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    const location: string = `province=${newsProvinceName};city=${newsCityName};coord=${latLng}`;
    return {
      title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keyword
        },
        {
          hid: 'location',
          name: 'location',
          content: location
        },
      ],
      script: [
        {
          innerHTML: ldJson,
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  computed: {
    getHotProject(): any {
      const that = this;
      const store = that.$store;
      const hotProject: [] = store.state.app.hotProject;
      return hotProject.slice(0, 4);
    }
  },
  methods: {
  }
})
</script>
<style scoped>
/* div .content-css >>> * {
  color: #333;
  font-size: 16px;
  font-family: "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", 微软雅黑, "Segoe UI", Tahoma, 宋体b8b体, SimSun, sans-serif;
} */
</style>