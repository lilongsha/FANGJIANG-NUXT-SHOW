<template>
  <div class="w-full mx-auto sm:pb-4 lg:container">
    <div class="sm:hidden lg:h-24"></div>
    <div class="w-full lg:pt-2 sm:hidden">
      <!-- name and saleState -->
      <div class="flex flex-row items-end w-full">
        <span class="text-[#333333] text-[34px] font-bold">{{ house.name }}</span>
        <HouseStateLabel :state="house.saleState" :class-name="'px-1 my-auto font-normal text-white rounded-sm ml-7'" />
      </div>
      <span class="mt-5 text-[#999999] text-[18px]">{{ house.aliasName }}</span>
    </div>
    <!-- house menu -->
    <div ref="menu" class="menu sticky z-[20] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 sm:mt-0 lg:mt-6 sm:top-0 lg:top-20 text-white">
      <div v-for="(item, index) in houseMenu" :key="index" :class="{ 'menu-sub' : topFlag == item.value }" class="sm:w-1/5 lg:w-32 h-full sm:leading-10 lg:leading-[64px] text-center align-middle sm:text-sm lg:text-xl transition-all">
        <!--  @click="go(item.value)" -->
        <a :href="'/house/' + house.id + '.html?topFlag=' + item.value">{{ item.title }}</a>
        
      </div>
      <a class="sm:hidden" :href="`tel:${phoneNum},${house.number}%23`">
        <div class="sm:hidden absolute right-0 h-full text-lg text-white font-bold leading-[64px] align-middle pr-4 flex flex-row items-center">
          <img src="~/assets/img/index/phone.png" alt="" class="w-[24px] h-[28px] mr-2 sm:hidden">
          {{ phoneNum }} 转 {{ house.number }}
        </div>
      </a>
    </div>
    <div class="mx-auto lg:flex lg:flex-row lg:container lg:mt-2 sm:px-4">
      <div class="lg:w-[70%]">
        <div class="sm:h-60 lg:h-[580px]">
          <video class="w-full h-full" :src="videoItem.videoAddress" :poster="videoItem.photoAddress" controls></video>
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
        <div v-if="lastData.length > 0" class="box">
          <div class="title">
            <span>其他视频</span>
            <a :href="'/video/list/p1,sort-' + videoItem.sort">查看更多</a>
          </div>
          <div class="content">
            <div v-for="item in lastData" :key="item.id" class="item group">
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
      <div class="lg:w-[30%] lg:pl-6">
        <div v-if="house" class="shadow p-2 bg-[#F5F5F5]">
          <span class="text-2xl font-bold text-[#333]">相关楼盘</span>
          <a :href="`/house/${house.id}.html`" class="block w-full h-full">
            <div class="flex flex-row w-full mt-2 h-28">
              <div class="w-1/2 h-full">
                <img v-if="house.firstImg.address" :src="house.firstImg.address" :alt="house.title" class="object-cover w-full h-full">
              </div>
              <div class="w-1/2 h-full pl-2">
                <div class="flex flex-row items-end">
                  <div class="text-[16px] font-bold">{{ house.name }}</div>
                  <HouseStateDiv :state="house.saleState" :class-name="'px-0.5 ml-2 mb-0.5 text-[12px] text-center text-white'" />
                </div>
                <div>
                  <div class="flex flex-row items-center mt-2">
                    <svg version="1.1" class="w-4 h-4 mr-1 text-gray-400 icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
                    RQflCgoAJiq3NZKmAAAEB0lEQVRYw6XXW4hWVRQH8J/mjSQvE6b5ohRMOuKDouaAhWSoiRqZkkJK
                    grUxRUEfDKXUHrKhTBCKdj4YmlRgRmMoAwqSQk0OSKRmgrcHE4McJQLv9fAdx/Od73y3XC/nnL3W
                    //9fe+191j6n279qsdDNGKM1GoCrTvvVsVgTtFv1qDDZayYblhm+4JDP46EHFAgzrPFshYAftMR9
                    /1Mg9BQt7nq85aRj/kFfYzTp2eXZLsRbdQuEEb41InlotcOP8Y+Ud6hmi8xOHk95KZ6qSyBMdFgP
                    8I318USZJEbZ6GVw2zPxp5oFwuPO6wXeiNtUtPC6z8BNw+OlUn/3XFRbQj+9Gj1xm+mgl7Y8f45A
                    2GI0mBbb1GCxzTQwOmypoUShyYnaipNbqFHxZLUZbAUH6qEnbnMghS4vEBpNAYvqoU8hpoTG4uEe
                    mbBlYHfefgijzDUOHXaXbtx4Kew2F8usrFSieeDTHPotjttgppk2OJ63nAlqXvFg0SKHkU7iSny0
                    hP67rrf2nrXGF0ui/tKApvhbuRlMBO0lwHtN4ah11jkKZofSdWpPseSuQaH3dJQAW8BXcQF4L3xp
                    PlrsyMR1eKGLJXcGhZ5/NpN/syG4mNAjLnARQ0JzRuBsiiVX4GFwJwMbBY4UjR1Jee7bnRRLrkAh
                    4G4Gdhv0KRrrk/Lct7ulCRYLXAGDMrDCok4OfbuK1tfklOe+DUqx5Ar8AjKVjSecQn+toR+Eflr1
                    x6mS1605xZJY8S4qHBmTZG2VfXjO6dCGaQYno1mblGLJncExlzE0TMjMYb9NYLBFFiX0m+L+4qgw
                    wVBcdqysQLyV9MSF2dTiWitTtb1iZVxbkn8BdaD4AyBzHoRZWnEtDiiBC/3N8RR+tydey/Ff1R+z
                    495KAg/p9AgWxi/UZeFVO/G3gbHCNhXv2AXero++C7ErZl7T0hPtQ9AYZtSV/wyNKXQlgXjGQfBB
                    XfkXog/GM1UFsAI0hTk15z9HUwpZZPkfXnvNxBWD421VLfRwWQO+j7NKvfkfXoVTtSE5B6pZi4YU
                    qpYZED72JngynlXRwhMKdf8kLsvzdy+DW+0G+Lpq/oWIG1bnu8sIxOuWgnFhecX8lxsHlsbr+RGV
                    fkDaFZre8HihTMQw58HP8elyLOVKBPOT656yEXsykfUJxHNJmcaGzbn5bzY2Kc+58izVfgIPJN+q
                    Jc0vaW4cjM9XYqhUIpihE+wM44voxyf0nar0rCoC8aapye3hMLKLfqTDye3UePOBBIgdloDe2sMY
                    CGO06w2WxI5q+Br+9AkbrE9u38G7yf3GuKE6tiYBwvvWZIZa4lu1IGsUIKyS3qyr40e14WoWILxi
                    q8fwpxWxeo+qX4Aw0GJsj521Y/4DSPcta79rLVoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTAt
                    MDlUMTY6Mzg6NDIrMDg6MDDCFhjIAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEwLTA5VDE2OjM4
                    OjQyKzA4OjAws0ugdAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2d
                    AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6
                    OkhlaWdodAA0OIdghy0AAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDh/z0egAAAAGXRFWHRU
                    aHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MzM3Njg3
                    MjIz7prBAAAAEnRFWHRUaHVtYjo6U2l6ZQAyMTI1QkLGHJgzAAAARnRFWHRUaHVtYjo6VVJJAGZp
                    bGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYzMTc1NzUyNjc1MjE3NjJfODRfWzBd
                    eTPfkgAAAABJRU5ErkJggg==" ></image>
                    </svg>
                    <span v-if="house.address" class="text-gray-400" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;" :title="house.address">{{ house.address }}</span>
                  </div>
                  <div class="flex flex-row items-center">
                    <svg version="1.1" class="w-4 h-4 mr-1 text-gray-400 icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElN
                    RQflCgoAJiRQjb+hAAACXUlEQVRYw+2YMWgTURjHf5cciUmhIhYFQwsdLFIUBKGDHURcpItQ3dT5
                    6WA6SOMm6qYubvIG6SZUEBSDCCqCgw4i0kF0EkQipCiI2l6b9HIO6TPX3CX33l0iGfwv9967777f
                    9733cu/LWR5KYo7j5HGJVhqHRbmgYYnVBAiLMjM6D/h0V57WB8xxC4Dn/GCDVJcnXGwmmQTglLwf
                    BbA3rxeANWbkC73gRYnrQJFIgIq1ANzRdQ/yBq+BXdGWCrAOPNZ1D8ACMCJyugAb+GoE+Azkuq7W
                    FkA8NfCiTBTAM4ZpWifLwBBgDR7Ak6smgBjhBbepaAvT9rXNMxhiSbhtQaZFnadck9+CAHNZ7A0d
                    38dJMSFXkgNqSNZ8PhrYjDIL7OEyl5JN0TKwIovBG+IED4AzQYCmxEF24jAFZMUxHPJ8kJXWfflQ
                    3GSeHc1enAwkU5utPM8AuMqVLRZPmKfebMbZpsOBkXxb/yeQjp9BiVFqvn6Ol20W9VYzBkA+ijRJ
                    t5r/9GXn9BuQ7QdArUENuCe+d4BYwKz8mATgAmOMdbEcSZZBGnhPlW0dM6gmA2SAs/JdPCc6AAXR
                    lsiyHYffMqKu8FcVRgCO8ImlDlMaAjBXhiHG+1l4bQC/9AsvGMiyxRDQF/3PYLAyiNzT2mqEA3qX
                    jW+y47+Lumm4lYUCpIDpngGOtjwrwDJwUUwYOKkAjbA/IOIAJf4eUOo8KFMkxxsh+YKlsRrr7Ady
                    osSq70xxSTHOObJAuTmkvlXs5i2Fnk0RVDgkqz4AiAK3OUzGYLN6hP04LWq84ryqt/8AjaKFO12a
                    KAsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTAtMDlUMTY6Mzg6MzYrMDg6MDA8nDXCAAAAJXRF
                    WHRkYXRlOm1vZGlmeQAyMDIxLTEwLTA5VDE2OjM4OjM2KzA4OjAwTcGNfgAAACB0RVh0c29mdHdh
                    cmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBh
                    Z2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0OIdghy0AAAAWdEVYdFRodW1i
                    OjpJbWFnZTo6V2lkdGgANDh/z0egAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JW
                    TgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MzM3Njg3MTYfrg0bAAAAEnRFWHRUaHVtYjo6U2l6ZQAx
                    NjgyQkKYWsBsAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3Zp
                    ZXcyXzlfMTYzMTU5MjMzNzY3ODc4MzRfNzlfWzBdjI0y0QAAAABJRU5ErkJggg==" ></image>
                    </svg>
                    <span class="overflow-hidden text-gray-400" :title="house.rooms">{{ house.rooms }}</span>
                    <span class="ml-2 overflow-hidden text-gray-400" :title="house.roomAreas">{{ house.roomAreas }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-end justify-between px-2 h-9">
              <div v-if="house.labels" class="flex flex-row items-end space-x-2">
                <span v-for="(label, index) in (house.labels.split(','))" v-show="index < 2" :key="index" class="px-1 overflow-hidden text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm whitespace-nowrap" :title="label">{{ label }}</span>
              </div>
              <div>
                <div>
                  <span class="text-2xl font-bold text-fjRed-100">{{ house.price }}</span>
                  <span class="text-xs text-gray-400">元/㎡</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-3 shadow p-2 bg-[#F5F5F5]">
          <span class="text-2xl font-bold text-[#333]">相关视频</span>
          <div v-for="item in videoList" :key="item.id" class="mt-5 ">
            <a :href="`/video/${item.id}`" class="block">
              <div class="flex flex-row">
                <div class="w-1/2">
                  <img :src="item.photoAddress" :alt="item.title" class="w-full h-28" />
                </div>
                <div class="w-1/2 pl-2 text-[#333] relative">
                  <div class="text-[16px] font-bold" style="overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;-ms-text-overflow: ellipsis;text-overflow: ellipsis;">{{ item.title }}{{ item.title }}{{ item.title }}{{ item.title }}</div>
                  <div class="absolute bottom-0">
                    <span class="opacity-50">{{ item.createTime.split('T')[0] }}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="news" class="mt-3 shadow p-2 bg-[#F5F5F5]">
          <span class="text-2xl font-bold text-[#333]">热门资讯</span>
          <div class="w-full h-[270px]">
            <div v-if="newsTop.length > 3" class="w-full h-1/2 pb-[2px]">
              <a v-if="newsTop[3]" :href="`/info/${newsTop[3].id}.html`" class="block w-full h-full">
                <div class="flex flex-col w-full h-full overflow-hidden border-b-2 border-[#DDDDDD]">
                  <span class="text-black text-[18px] mt-5 inline-block">{{ newsTop[3].title }}</span>
                  <div class="text-[#999999] text-[12px] mt-2">{{ newsTop[3].description }}</div>
                </div>
              </a>
            </div>
            <div v-if="newsTop.length > 4" class="w-full h-1/2 pb-[2px]">
              <a v-if="newsTop[4]" :href="`/info/${newsTop[4].id}.html`" class="block w-full h-full">
                <div class="flex flex-col w-full h-full overflow-hidden">
                  <span class="text-black text-[18px] mt-5 inline-block">{{ newsTop[4].title }}</span>
                  <div class="text-[#999999] text-[12px] mt-2">{{ newsTop[4].description }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="sm:hidden mt-3 shadow bg-[#F5F5F5] rounded-md">
          <img src="~/assets/img/clue/busAd.png" alt="广告" class="w-full h-full" @click="openClue('4')">
        </div>
        <div class="lg:hidden">
          <div class="mt-2 w-full h-[80px] bg-cover rounded-md bg-rightbg pl-[20px] pt-[6px]">
            <div class="text-[20px] font-bold text-white">看房专车免费接送</div>
            <button class="bg-white rounded-3xl font-bold h-[32px] w-[130px] text-fjBlue-100 text-[14px] mt-[8px]" @click="openClue('4')">立即预约</button>
          </div>
        </div>
      </div>
    </div>
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="house.sysCityByCityId.id" :look="house.lookTime"  :project-id="house.id" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as VideoApi } from '@/api/model/videoModel'
import { Api as HouseApi, houseMenu, phoneNum } from '~/api/model/houseModel';
import { getDataResult } from '~/utils/response/util';
import { Api } from '~/api/model/newsModel';
export default Vue.extend({
  name: "VideoDetail",
  async asyncData({ $axios, params, store }) {
    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    const topFlag: string = 'video';

    // 修改初始数据
    const getRooms = (rooms: any[]) => {
      // 是否放到asyncData
      const roomObj: any = {};
      if (rooms && rooms.length > 0) {
        rooms.forEach((item) => {
          const room = item.room;
          roomObj[room] = room;
        })
      }
      const roomArray = Object.keys(roomObj)
      const result: string = roomArray.toString().replace(',', '室/')
      if (result) {
        return result + '室'
      }
      return '暂无数据'
    }
    const getRoomArea = (rooms: any[]) => {
      // 是否放到asyncData
      const areaObj: any = {};
      if (rooms && rooms.length > 0) {
        rooms.forEach((item) => {
          const area = item.area;
          areaObj[area] = area;
        })
      }
      const areaArray = Object.keys(areaObj)
      if (areaArray.length > 0) {
        return '建面约' + areaArray[0] + '-' + areaArray[areaArray.length - 1] + '㎡'
      }
      return '暂无数据'
    }

    const param: any = {
      data: {
        id,
      }
    }
    let house: any;
    const result:any = await $axios.$post(VideoApi.Detail, param);
    let videoItem:any;
    let videoList:any;
    if (result.code === 200) {
      videoItem = result.data.detail.content;
      videoList = result.data.list.content;
      if (videoItem.projectId) {
        const paramH: any = {
          data: {
            id: videoItem.projectId,
          }
        }
        const houseResult = await $axios.$post(HouseApi.GetProject, paramH);
        house = getDataResult(houseResult);
        house.rooms = getRooms(house.hLayoutsById);
        house.roomAreas = getRoomArea(house.hLayoutsById);
      }
    }
    // 热门资讯
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
    let newsTop: any[] = [];
    const topResult = await $axios.$post(Api.GetNewsByCity, newsParam);
    if (topResult.code === 200) {
      newsTop = getDataResult(topResult);
    }

    // 按照当前视频类型，获取视频
    const cityId = store.state.app.cityId;
    const sort = videoItem.sort;

    const videoParam: any = {
      data: {
        cityId,
        sort,
      },
      page: {
        pageNum: 0,
        pageSize: 9,
      },
    }
    const videoResult:any = await $axios.$post(VideoApi.ByPage, videoParam);
    let lastData:any;
    if (videoResult.code === 200) {
     lastData = getDataResult(videoResult)
    }
    return { videoItem, videoList, house, houseMenu, phoneNum, topFlag, newsTop, lastData }
  },
  data() {
    const topFlag: string = 'video';
    let videoItem:any;
    let videoList:any;
    let house: any;
    let lastData:any;
    let projectData:any;
    let roomData:any;
    let compareData:any;
    let policyData:any;
    return {
      videoItem,
      videoList,
      house,
      topFlag,
      newsTop: [],
      clueType: '4',
      opening: false,
      lastData,
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
    const keyword: string = this.videoItem.keyword;
    const title: string = this.videoItem.title;
    const description: string = this.videoItem.description;
    const pubTime: string = this.videoItem.createTime.split('.')[0];
    let upTime: string = this.videoItem.updateTime || this.videoItem.createTime;
    upTime = upTime.split('.')[0];
    return {
      title: `${title}-房匠网`,
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
      script: [
        {
          innerHTML: `{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"https://www.fangjiang.com","appid":"1713124212115293","title":"${title}-房匠网","images":[""],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`,
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    };
  },
  methods: {
    openClue(type: string) {
      this.clueType = type;
      this.opening = true;
    },
    isOpen() {
      this.opening = false;
    },
  }
})
</script>
<style scoped>
.box {
  @apply flex sm:w-full sm:px-0 lg:container flex-col lg:h-[260px] mx-auto sm:mt-4 sm:mb-2 lg:mt-14;
}

.box .title {
  @apply h-8 flex flex-row justify-between items-center w-full;
}

.box .title span {
  @apply text-2xl font-bold text-[#333];
}

.box .title a {
  @apply text-[#999] block sm:text-[12px];
}

.content {
  @apply flex sm:flex-col sm:px-0 lg:flex-row sm:space-y-4 mt-4 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-4;
}

.content .item {
  @apply sm:w-full sm:h-48 lg:w-56 lg:h-full;
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
