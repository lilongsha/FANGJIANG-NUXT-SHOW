<template>
  <div class="w-full h-full p-4">
    <div class="flex flex-row items-center justify-between">
      <div class="w-[10px] h-[17px]" @click="clickBack"><img src="~/assets/img/userInfo/back.png" alt=""></div>
      <div class="font-bold text-[20px] text-[#333333]">我的收藏</div>
      <div class="flex flex-row space-x-3"><img src="~/assets/img/userInfo/message.png" alt="" class="w-[19px] h-[17px]"></div>
    </div>
    <div class="mt-6">
      <div v-if="projectList && projectList.length > 0" class="w-full lg:mt-8 sm:mt-4">
        <a v-for="item in projectList" :key="item.id" :href="`/house/${item.id}.html`" class="w-full lg:py-7 sm:py-2 border-b border-b-[#DDDDDD] flex flex-row">
          <div class="w-1/3">
            <img v-if="item.firstImg" :src="item.firstImg.address" alt="" class="w-full lg:h-[176px] sm:w-full sm:h-24">
          </div>
          <div class="relative w-2/3 lg:ml-4 sm:ml-2">
            <div class="flex flex-row items-center w-full">
              <div class="text-[#000000] lg:text-[20px] font-bold">{{ item.name }}</div>
              <div class="lg:ml-3 sm:ml-2">
                <div v-if="item.saleState === '1'" class="text-white rounded-sm bg-fjYellow-100">在售</div>
                <div v-if="item.saleState === '2'" class="text-white rounded-sm bg-fjBlue-100">待售</div>
                <div v-if="item.saleState === '3'" class="text-white rounded-sm bg-fjRed-100">售罄</div>
              </div>
            </div>
            <div class="flex flex-row items-center text-[#999999] text-[12px]">
              <!-- 类型 -->
              <HouseTypeLabel :sort="item.type" :class-name="'text-gray-400'" />
              <!-- 面积 -->
              <span v-if="item.hLayoutsById && item.hLayoutsById.length > 0" class="text-gray-400">|</span>
              <span v-if="getRoomArea(item.hLayoutsById)" class="text-gray-400">{{ getRoomArea(item.hLayoutsById) }}</span>
              <!-- 开盘时间 -->
              <span v-if="item.openTime" class="text-gray-400 ">|</span>
              <span class="text-gray-400" :title="getOpenTime(item.openTime)">{{ getOpenTime(item.openTime) }}</span>
            </div>
            <div class="lg:mt-6 text-[#999999] text-[12px] lg:flex lg:flex-row">
              <div class="h-full  lg:w-3/5">
                <div class="flex flex-row items-center">
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
                  <span class="overflow-hidden whitespace-nowrap lg:mr-4" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]<span class="overflow-hidden whitespace-nowrap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span></span>
                </div>
                <div class="flex flex-row items-center lg:mt-2">
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
                  <span class="whitespace-nowrap">户型：</span>
                  <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" >{{getRoomList(item)}}</span>
                </div>
                <!-- sm:hidden -->
                <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0 && !isMobile" class="lg:mt-4 ">
                  <span v-for="(item1, index) in item.sysDictDetailBeans" :key="index" class="text-[12px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                </div>
              </div>
              <div class="lg:w-2/5 h-full text-[#999999] text-[12px] lg:text-right sm:flex sm:flex-row">
                <div class="w-full ">
                  <span v-if="item.price" class="text-[#DA1111] text-[32px] sm:text-[16px] font-bold">{{ item.price }}</span>
                  <span v-if="item.price">元/㎡起</span>
                  <span v-if="!item.price">暂无数据</span>
                </div>
                <div class="w-full">
                  <span>价格更新日期：</span>
                  <span v-if="item.updatePriceTime">{{ item.updatePriceTime.split('T')[0] }}</span>
                  <span v-else>暂无数据</span>
                </div>
                <!--  sm:hidden -->
                <div v-if="!isMobile" class="w-full">
                  <span v-if="item.priceDays">价格有效期：{{ item.priceDays }}天</span>
                  <span v-else>暂无数据</span>
                </div>
              </div>
              
            </div>
            <!-- lg:hidden -->
            <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0 && isMobile" class="">
              <span v-for="(item1, index) in item.sysDictDetailBeans" :key="index" class="text-[12px] rounded mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { CurrentApi } from '~/api/user/userApi';
import { Breadcrumb } from '~/types/app';
import { getPageResult } from '~/utils/response/util';
export default Vue.extend({
    name: 'Favourite',
    components: {},
    async asyncData({ $axios, store }) {
      const isMobile = store.state.app.isMobile;

      const breadcrumb: Breadcrumb[] = [];
      breadcrumb.splice(0)
      store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

      const tokenType = store.state.app.tokenType;
      const accessToken = store.state.app.accessToken;
      // 收藏
      let projectList: any[] = [];
      const pageNumProject = 0;
      const pageParamProject = {
        pageSize: 10,
        total: 0,
        pageNumProject,
      }
      try {
        $axios.setHeader('Authorization', tokenType + ' ' + accessToken);
        const param = {
          page: {
            pageNumProject,
            pageSize: 10
          }
        }
        const result = await $axios.$post(CurrentApi.SelectFavorite, param)
        if (result?.code === 200) {
          const { content, page } = getPageResult(result)
          projectList = content;
          pageParamProject.total = page.totalElements
        }
      } catch (error) {
      } finally {
        $axios.setHeader('Authorization', '');
      }

      return {
        projectList,
        pageParamProject,
        isMobile,
      }
    },
    data() {
      let isMobile: any;
      return {
        isMobile,
      }
    },
    methods: {
      clickBack() {
        const fromPath = this.$route.query?.fromPath
        this.$router.push('/PhoneUserInfo?redirect=' + fromPath)
      },
      getRoomList(room: any) {
        const flagObj = {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        }
        if (room?.hLayoutsById) {
          room.hLayoutsById.forEach((item: any) => {
            if (item.room) {
              switch(item.room) {
                case 1:
                  flagObj[1] = flagObj[1] + 1;
                  break;
                case 2:
                  flagObj[2] = flagObj[2] + 1;
                  break;
                case 3:
                  flagObj[3] = flagObj[3] + 1;
                  break;
                case 4:
                  flagObj[4] = flagObj[4] + 1;
                  break;
                case 5:
                  flagObj[5] = flagObj[5] + 1;
                  break;
                default:
                  flagObj[0] = flagObj[0] + 1;
                  break;  
              }
            }
          })
        }
        let result: string = '';
        if (flagObj[1] !== 0) {
          result = result + '1居室（' + flagObj[1] + '）';
        }
        if (flagObj[2] !== 0) {
          result = result + '2居室（' + flagObj[2] + '）';
        }
        if (flagObj[3] !== 0) {
          result = result + '3居室（' + flagObj[3] + '）';
        }
        if (flagObj[4] !== 0) {
          result = result + '4居室（' + flagObj[4] + '）';
        }
        if (flagObj[5] !== 0) {
          result = result + '5居室（' + flagObj[5] + '）';
        }
        if (flagObj[0] !== 0) {
          result = result + '5居室以上（' + flagObj[0] + '）';
        }
        if (result === '') {
          result = '暂无数据'
        }
        return result;
      },
      getAreaAndTrading(item: any) {
        let result: string = '';
        if (item?.sysAreaByAreaId?.name) {
          result = result + item?.sysAreaByAreaId?.name;
        }
        if (item?.sysTradingAreasById && item?.sysTradingAreasById[0] && item?.sysTradingAreasById[0].name) {
          result = result + ' - ' + item?.sysTradingAreasById[0].name;
        }
        return result;
      },
      getOpenTime(openTime: string) {
        if (!openTime) {
          return ''
        }
        const o = new Date(openTime)
        return o.getFullYear() + '年' + (o.getMonth() + 1) + '月' + ' 开盘'
      },
      getRoomArea(rooms: any[]) {
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
        return ''
      },
    }
})
</script>