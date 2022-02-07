<template>
  <div class="mt-4">
    <div v-for="item in context" :key="item.id">
      <a :href="`/house/${item.id}.html`" target="_blank">
        <div class="flex flex-row w-full lg:h-60 lg:p-4 hover:bg-gray-100">
          <!-- 图片 -->
          <div class="h-full sm:w-[120px] lg:w-[260px] flex-shrink-0">
            <img :src="getImg(item)" class="object-cover w-full h-full" :alt="item.name">
          </div>
          <!-- 内容 -->
          <div class="flex-shrink w-full h-full sm:pl-1 lg:pl-2">
            <div class="flex flex-row items-center">
              <h3 class="h-full mb-0 sm:pb-0 sm:text-[16px] lg:text-[22px] font-bold text-black hover:text-fjBlue-100">{{ item.name }}</h3>
              <div class="h-full sm:pt-1 sm:text-[12px] sm:ml-2  lg:text-[14px] lg:ml-4">
                <h3 v-if="item.saleState === '1'" class="px-1 text-white rounded-sm bg-fjYellow-100">在售</h3>
                <h3 v-if="item.saleState === '2'" class="px-1 text-white rounded-sm bg-fjBlue-100">待售</h3>
                <h3 v-if="item.saleState === '3'" class="px-1 text-white rounded-sm bg-fjRed-100">售罄</h3>
              </div>
              <div class="h-full sm:pt-1 sm:text-[12px] sm:ml-2  lg:text-[14px] lg:ml-4">
                <type-label :sort="item.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></type-label>
              </div>
            </div>
            <div class="flex flex-row items-center sm:flex-shrink-0">
              <svg version="1.1" class="flex-shrink-0 mr-1 text-gray-400 sm:w-3 sm:h-3 lg:w-4 lg:h-4 icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
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
              <span class="sm:w-[84px] flex-shrink-0 whitespace-nowrap sm:mr-1 lg:mr-4" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]</span>
              <span class="sm:w-auto" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;" :title="item.address">{{ item.address }}</span>
            </div>
            <div class="flex flex-row items-center lg:mt-2">
              <svg version="1.1" class="flex-shrink-0 mr-1 text-gray-400 sm:w-3 sm:h-3 lg:w-4 lg:h-4 icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
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
              <span>{{getRoomList(item)}}</span>
            </div>
            <div class="flex flex-row items-center lg:justify-between lg:mt-2">
              <div class="">
                <span v-if="item.price" class="text-[#DA1111] lg:text-[22px] font-bold">{{ item.price }}</span>
                <span v-if="item.price" class="text-[14px]">元/㎡</span>
                <span v-if="!item.price">暂无数据</span>
              </div>
              <div class="sm:hidden">
                <span class="text-[14px]">更新日期：</span>
                <span v-if="item.updatePriceTime" class="text-[14px]">{{ item.updatePriceTime.split('T')[0] }}</span>
                <span v-else class="text-[14px]">暂无数据</span>
              </div>
            </div>
            <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="flex flex-row items-center space-x-2 lg:mt-2">
              <span v-for="(item1, index) in item.sysDictDetailBeans" :key="index" class="text-[12px] rounded px-1 lg:py-1 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
            </div>
            <div class="lg:mt-2">
              <a :href="`tel:${phoneNum},${item.number}%23`">
                <span></span>
                <span class="font-bold sm:text-sm lg:text-2xl text-fjRed-100">{{ phoneNum }}&nbsp;&nbsp;转&nbsp;&nbsp;{{ item.number }}</span>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TypeLabel from '~/components/house/TypeLabel.vue';
import { phoneNum } from '~/api/model/houseModel';

export default Vue.extend({
  name: 'HouseContent',
  components: {
    TypeLabel
  },
  props: {
    context: {
      type: Array,
      require: true,
      default: () => []
    },
    name: {
      type: String,
      require: true,
      default: ''
    },
    image: {
      type: String,
      require: true,
      default: ''
    },
    houseId: {
      type: String,
      require: true,
      default: ''
    },
    price: {
      type: String,
      require: true,
      default: ''
    },
    area: {
      type: String,
      require: true,
      default: ''
    },
    address: {
      type: String,
      require: true,
      default: ''
    },
    layout: {
      type: String,
      require: true,
      default: ''
    },
    buildArea: {
      type: String,
      require: true,
      default: ''
    },
    labels: {
      type: Array,
      require: true,
      default: () => []
    },
    number: {
      type: String,
      require: true,
      default: '',
    }
  },
  data () {
    return {phoneNum};
  },
  mounted () {
    
  },
  methods: {
    getImg(item) {
      if (item?.firstImg?.address) {
        return item?.firstImg?.address;
      }
      return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3d%2Fa5%2F42%2F3da542de95a5ab09941a42ff4256951d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634269587&t=80f0f68d94ff94c2c11f9ec12456637c';
    },
    getRoomArea(rooms) {
      // 是否放到asyncData
      const areaObj = {};
      rooms.forEach((item) => {
        const area = item.area;
        areaObj[area] = area;
      })
      const areaArray = Object.keys(areaObj)
      if (areaArray.length > 0) {
        return '建面约' + areaArray[0] + '-' + areaArray[areaArray.length - 1] + '㎡'
      }
      return ''
    },
    getOpenTime(openTime) {
      if (!openTime) {
        return ''
      }
      const o = new Date(openTime)
      return o.getFullYear() + '年' + (o.getMonth() + 1) + '月' + ' 开盘'
    },
    getAreaAndTrading(item) {
      let result = '';
      if (item?.sysAreaByAreaId?.name) {
        result = result + item?.sysAreaByAreaId?.name;
      }
      if (item?.sysTradingAreasById[0] && item?.sysTradingAreasById[0].name) {
        result = result + ' - ' + item?.sysTradingAreasById[0].name;
      }
      return result;
    },
    getRoomList(room) {
      const flagObj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      }
      if (room?.hLayoutsById) {
        room.hLayoutsById.forEach((item) => {
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
      let result = '';
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
  }
});
</script>