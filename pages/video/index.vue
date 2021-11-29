<template>
  <div class="w-full">
    <div class="lg:h-24"></div>
    <div class="flex lg:container lg:flex-row lg:h-[580px] mx-auto bg-[#333]">
      <div class="w-[70%] h-full">
        <video class="object-fill w-full h-full" :src="topData[curIndex].videoAddress" :poster="topData[curIndex].photoAddress" controls></video>
      </div>
      <div class="w-[30%] h-full flex lg:flex-col">
        <div v-for="(item, index) in topData" :key="item.id" class="relative w-full p-4 h-1/3" :class="curIndex == index ? 'on' : ''" @click="changeVideo(index)">
          <div></div>
          <img :src="item.photoAddress" class="relative z-10 object-cover w-full h-full rounded">
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span>项目实拍</span>
        <a href="/video/list?sort=1">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in projectData" :key="item.id" class="item">
          <a :href="`/video/${item.id}`">
            <div>{{ item.title }}</div>
            <img src="~/assets/img/video/play.png" class="play"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span>样板间赏析</span>
        <a href="/video/list?sort=2">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in roomData" :key="item.id" class="item">
          <a :href="`/video/${item.id}`">
            <div>{{ item.title }}</div>
            <img src="~/assets/img/video/play.png" class="play"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span>项目对比</span>
        <a href="/video/list?sort=3">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in compareData" :key="item.id" class="item">
          <a :href="`/video/${item.id}`">
            <div>{{ item.title }}</div>
            <img src="~/assets/img/video/play.png" class="play"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <span>楼市政策</span>
        <a href="/video/list?sort=4">查看更多</a>
      </div>
      <div class="content">
        <div v-for="item in policyData" :key="item.id" class="item">
          <a :href="`/video/${item.id}`">
            <div>{{ item.title }}</div>
            <img src="~/assets/img/video/play.png" class="play"/>
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

    return {
      title: `${city}新房视频-房匠网`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频,${city}新房网`
        },
        {
          hid: 'description',
          name: 'description',
          content: `房匠网提供${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频等最新信息.房匠网房源多,信息全,价透明,做您买房路上的自己人.`
        },
      ],
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
  @apply absolute z-0 left-2 top-1/2 -mt-2 w-4 h-4 rotate-45 bg-[#ff0000];
}

.on img {
  @apply border-2 border-[#ff0000];
}

.box {
  @apply flex lg:container lg:flex-col lg:h-[260px] mx-auto mt-14;
}

.box .title {
  @apply h-8 flex flex-row justify-between items-center w-full;
}

.box .title span {
  @apply lg:text-2xl font-bold text-[#333];
}

.box .title a {
  @apply text-[#999] block;
}

.content {
  @apply h-52 flex flex-row justify-between mt-4;
}

.content .item {
  @apply w-72 h-full;
}

.content .item a {
  @apply w-full h-full block relative;
}

.content .item a img {
  @apply w-full h-full object-cover;
}

.content .item a div {
  @apply bg-black absolute bottom-0 w-full h-10 object-cover flex flex-row items-center px-2 bg-opacity-40 text-white;
}

.content .item a .play {
  @apply absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5;
}
</style>