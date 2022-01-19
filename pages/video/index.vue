<template>
  <div class="w-full sm:pb-4">
    <div class="lg:h-24"></div>
    <div class="flex sm:flex-col sm:pt-4 sm:w-full sm:px-4 lg:container lg:flex-row lg:h-[580px] mx-auto bg-[#333]">
      <div class="sm:w-full lg:w-[70%] sm:h-52 lg:h-full">
        <video class="w-full h-full" :src="topData[curIndex].videoAddress" :poster="topData[curIndex].photoAddress" controls></video>
      </div>
      <div class="sm:w-full sm:flex-row lg:w-[30%] lg:h-full flex lg:flex-col">
        <div v-for="(item, index) in topData" :key="item.id" class="relative p-4 sm:w-1/3 lg:w-full sm:h-full lg:h-1/3" :class="curIndex == index ? 'on' : ''" @click="changeVideo(index)">
          <div></div>
          <img :src="item.photoAddress" class="relative z-10 object-cover w-full rounded sm:h-16 lg:h-full">
        </div>
      </div>
    </div>
    <div v-if="projectData.length > 0" class="box">
      <div class="title">
        <span>项目实拍</span>
        <a href="/video/list/p1,sort-1.html">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in projectData" :key="item.id" class="item group">
          <a :href="`/video/${item.id}.html`">
            <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
              <p class="text-[18px]">{{ item.title }}</p>
              <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
            </div>
            <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div v-if="roomData.length > 0" class="box">
      <div class="title">
        <span>样板间赏析</span>
        <a href="/video/list/p1,sort-2.html">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in roomData" :key="item.id" class="item group">
          <a :href="`/video/${item.id}.html`">
            <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
              <p class="text-[18px]">{{ item.title }}</p>
              <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
            </div>
            <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div v-if="compareData.length > 0" class="box">
      <div class="title">
        <span>项目对比</span>
        <a href="/video/list/p1,sort-3.html">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in compareData" :key="item.id" class="item group">
          <a :href="`/video/${item.id}.html`">
            <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
              <p class="text-[18px]">{{ item.title }}</p>
              <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
            </div>
            <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div v-if="policyData.length > 0" class="box">
      <div class="title">
        <span>楼市政策</span>
        <a href="/video/list/p1,sort-4.html">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in policyData" :key="item.id" class="item group">
          <a :href="`/video/${item.id}.html`">
            <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
              <p class="text-[18px]">{{ item.title }}</p>
              <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
            </div>
            <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as VideoApi } from '@/api/model/videoModel'
export default Vue.extend({
  name: "Video",
  async asyncData({ $axios, store }) {
    const cityId = store.state.app.cityId;

    const param: any = {
      data: {
        cityId,
      }
    }
    const result:any = await $axios.$post(VideoApi.Index, param);
    let topData:any;
    let projectData:any;
    let roomData:any;
    let compareData:any;
    let policyData:any;
    if (result.code === 200) {
      topData = result.data.TOP.content;
      projectData = result.data.SORT_PROJECT.content;
      roomData = result.data.SORT_ROOM.content;
      compareData = result.data.SORT_COMPARE.content;
      policyData = result.data.SORT_POLICY.content;
    }
    const curIndex = 0;
    return { topData, projectData, roomData, compareData, policyData, curIndex }
  },
  data() {
    let topData:any;
    let projectData:any;
    let roomData:any;
    let compareData:any;
    let policyData:any;
    return {
      curIndex: 0,
      topData,
      projectData,
      roomData,
      compareData,
      policyData,
    }
  },
  head() {
    let city:string = this.$store.app.city || '石家庄';
    if (city.endsWith('市')) {
      city = city.substring(city.length - 1);
    }
    const pubTime: string = this.topData[0].createTime.split('.')[0];
    let upTime: string = this.topData[0].updateTime || this.topData[0].createTime;
    upTime = upTime.split('.')[0];

    return {
      title: `${city}新房视频-房匠`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频,${city}新房`
        },
        {
          hid: 'description',
          name: 'description',
          content: `房匠网提供${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频等最新信息.房匠网房源多,信息全,价透明,做您买房路上的自己人.`
        },
      ],
      script: [
        {
          innerHTML: `{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"https://www.fangjiang.com","appid":"1713124212115293","title":"${city}新房视频-房匠网","images":[""],"description": "房匠网提供${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频等最新信息.房匠网房源多,信息全,价透明,做您买房路上的自己人.","pubDate":"${pubTime}","upDate":"${upTime}"}`,
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    };
  },
  methods: {
    changeVideo(index: number) {
      this.curIndex = index;
    }
  }
})
</script>

<style scoped>
.on div {
  @apply absolute z-0 sm:left-1/2 sm:top-2 sm:-ml-2 lg:left-2 lg:top-1/2 lg:-mt-2 w-4 h-4 rotate-45 bg-[#ff0000];
}

.on img {
  @apply border-2 border-[#ff0000];
}

.box {
  @apply flex sm:w-full sm:px-4 lg:container flex-col lg:h-[260px] mx-auto sm:mt-4 lg:mt-14;
}

.box .title {
  @apply h-8 flex flex-row justify-between items-center w-full;
}

.box .title span {
  @apply lg:text-2xl font-bold text-[#333];
}

.box .title a {
  @apply text-[#999] block sm:text-[12px];
}

.content {
  @apply lg:h-52 flex sm:flex-col sm:px-4 lg:flex-row sm:space-y-4 lg:space-x-11 mt-4;
}

.content .item {
  @apply sm:w-full sm:h-48 lg:w-72 lg:h-full;
}

.content .item a {
  @apply w-full h-full block relative;
}

.content .item a img {
  @apply w-full h-full object-cover;
}

.content .item a div {
  @apply bg-black absolute bottom-0 w-full object-cover flex flex-col px-2 bg-opacity-40 text-white;
}

.content .item a .play {
  @apply absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5;
}
</style>