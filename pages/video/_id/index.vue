<template>
  <div class="w-full">
    <div class="lg:h-24"></div>
    <div class="flex flex-row mx-auto lg:container">
      <div class="w-[70%]">
        <div class="h-[580px]">
          <video class="object-fill w-full h-full" :src="videoItem.videoAddress" :poster="videoItem.photoAddress" controls></video>
        </div>
        <div class="mt-4 w-full bg-[#F5F5F5] pb-10 shadow">
          <div class="px-4">
            <div class="flex flex-row items-center h-10 ">
              <span class="mr-4">信息</span>
              <!-- <span>评论</span> -->
            </div>
            <div class="mx-1 w-full border-b border-dashed border-[#DDD]"></div>
            <div class="mt-2 text-xl font-bold text-[#333]">{{ videoItem.title }}</div>
            <div class="mt-2 text-[#999]">{{ videoItem.description }}</div>
          </div>
        </div>
      </div>
      <div class="w-[30%] pl-6">
        <div v-if="house" class="shadow p-2 bg-[#F5F5F5]">
          <span class="text-2xl font-bold text-[#333]">相关楼盘</span>
          <div class="flex flex-row w-full h-28">
            <div class="w-1/2 h-full">
              <img v-if="house.firstImg.address" :src="house.firstImg.address" :alt="house.title" class="object-cover w-full h-full">
            </div>
            <div class="w-1/2 h-full pl-2">
              <div class="flex flex-row items-end">
                <div class="text-[16px] font-bold">{{ house.name }}</div>
                <div v-if="house.saleState === '1'" class="px-0.5 ml-2 mb-0.5 text-[12px] text-center text-white bg-fjRed-100">在售</div>
                <div v-if="house.saleState === '2'" class="px-0.5 ml-2 mb-0.5 text-[12px] text-center text-white bg-fjBlue-100">待售</div>
                <div v-if="house.saleState === '3'" class="px-0.5 ml-2 mb-0.5 text-[12px] text-center text-white bg-fjYellow-100">售罄</div>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as VideoApi } from '@/api/model/videoModel'
import { Api as HouseApi } from '~/api/model/houseModel';
import { getDataResult } from '~/utils/response/util';
export default Vue.extend({
  name: "VideoDetail",
  async asyncData({ $axios, params }) {
    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    const param: any = {
      data: {
        id,
      }
    }
    let house: any;
    const result:any = await $axios.$post(VideoApi.Detail, param);
    let videoItem:any;
    if (result.code === 200) {
      videoItem = result.data.detail.content;
      if (videoItem.projectId) {
        const paramH: any = {
          data: {
            id: videoItem.projectId,
          }
        }
        const houseResult = await $axios.$post(HouseApi.GetProject, paramH);
        house = getDataResult(houseResult);
      }
    }

    return { videoItem, house }
  },
  data() {
    let videoItem:any;
    let house: any;
    return {
      videoItem,
      house,
    }
  },
  head() {
    let city:string = this.$store.app.city || '石家庄';
    if (city.endsWith('市')) {
      city = city.substring(city.length - 1);
    }
    const keyword: string = this.videoItem.keyword;
    const title: string = this.videoItem.title;
    const description: string = this.videoItem.description;

    return {
      title: `${title}新房视频-房匠网`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${city}新房视频,${keyword}`
        },
        {
          hid: 'description',
          name: 'description',
          content: `${description}`
        },
      ],
    };
  },
  methods: {
  }
})
</script>
