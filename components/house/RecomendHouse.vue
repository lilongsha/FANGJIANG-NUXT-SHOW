<template>
<div>
  <div class="mx-auto sm:w-full sm:px-2 lg:container lg:mt-12 sm:hidden">
    <!-- 标题 -->
    <div class="flex flex-row items-center w-full ml-4 h-9">
      <!-- 竖线 -->
      <div class="w-4 h-full bg-black"></div>
      <!-- 标题内容 -->
      <div class="ml-2 text-xl font-bold">推荐楼盘</div>
    </div>
    <!-- 图片盒子 -->
    <div class="grid grid-cols-4 grid-rows-1 gap-2 w-[full-8] p-2 mx-4 mt-8 h-112 overflow-hidden">
      <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" class="block w-full h-full mx-[2%] my-[2%] shadow">
        <div class="w-full h-7/10">
          <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
        </div>
        <div class="w-full px-4 mt-2 bg-white h-3/10">
          <div class="font-bold">
            <span class="text-2xl text-black py-0.5">{{ item.name }}</span>
            <span v-if="item.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
            <span v-if="item.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
            <span v-if="item.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
            <type-label :sort="item.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></type-label>
          </div>
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
            <span v-if="item.address" class="overflow-hidden text-gray-400 whitespace-nowrap" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;" :title="item.address">{{ item.address }}</span>
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
            <span class="overflow-hidden text-gray-400" :title="item.rooms">{{ item.rooms }}</span>
            <span class="ml-2 overflow-hidden text-gray-400" :title="item.roomAreas">{{ item.roomAreas }}</span>
          </div>
          <div class="flex flex-row items-end justify-between px-2 h-9">
            <div v-if="item.labels" class="flex flex-row items-end space-x-2">
              <span v-for="(label, index) in (item.labels.split(','))" v-show="index < 2" :key="index" class="px-1 overflow-hidden text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm whitespace-nowrap" :title="label">{{ label }}</span>
            </div>
            <div>
              <div>
                <span class="text-lg text-fjRed-100">{{ item.price }}</span>
                <span class="text-xs text-gray-400">元/㎡</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="w-full px-2 mx-auto mt-2 lg:hidden">
    <!-- 标题 -->
    <div class="flex flex-row items-center w-full sm:h-6 lg:ml-4 lg:h-9">
      <!-- 竖线 -->
      <div class="h-full bg-black sm:w-2 lg:w-4"></div>
      <!-- 标题内容 -->
      <div class="ml-2 font-bold text-black sm:text-lg lg:text-xl">推荐楼盘</div>
    </div>
    <!-- 图片盒子 -->
    <div class="sm:mt-4 flex lg:flex-row sm:flex-col lg:w-[full-8] lg:mx-4 lg:mt-8 lg:h-96 lg:overflow-hidden">
      <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" target="_blank" class="flex flex-row overflow-hidden sm:w-full lg:w-1/10 lg:h-full sm:mb-4 sm:h-24 lg:ease-in-out lg:transition-all lg:duration-500 lg:relative">
        <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" class="object-cover h-full sm:w-2/5 lg:w-full">
        <div class="bottom-0 flex flex-row justify-between w-full px-4 py-4 text-2xl font-bold text-white bg-black lg:absolute sm:hidden whitespace-nowrap bg-opacity-30">
          <span>{{ item.name }}</span>
          <div>
            <span class="text-fjRed-100 ">{{ item.price }}</span>
            <span class="text-sm">元/㎡</span>
          </div>
        </div>
        <div class="w-3/5 h-full p-2 lg:hidden">
          <!-- 标题 -->
          <div class="flex flex-row w-full h-6">
            <h1 class="mb-0 overflow-hidden text-base font-bold">{{ item.name }}</h1>
            <div v-if="item.saleState === '1'" class="mx-1 pt-0.5 h-6 text-xs leading-5 align-middle rounded-sm text-center px-0.5 text-white bg-fjYellow-100">在售</div>
            <div v-if="item.saleState === '2'" class="mx-1 pt-0.5 h-6 text-xs leading-5 align-middle rounded-sm text-center px-0.5 text-white bg-fjBlue-100">待售</div>
            <div v-if="item.saleState === '3'" class="mx-1 pt-0.5 h-6 text-xs leading-5 align-middle rounded-sm text-center px-0.5 text-white bg-fjRed-100">售罄</div>
            <type-label :sort="item.type" :class-name="'h-6 pt-0.5 text-xs leading-5 align-middle rounded-sm text-center px-0.5 text-white bg-fjBlue-100'"></type-label>
          </div>
          <!-- 信息 -->
          <div class="flex flex-row w-full h-6 text-sm">
            <h1 v-if="item.sysAreaByAreaId" class="w-24">[{{ item.sysAreaByAreaId.name }}]</h1>
            <h1 class="w-full" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.address }}</h1>
          </div>
          <div class="flex flex-row justify-between w-full h-4 mb-1">
            <!-- 价格 -->
            <span v-if="item.price" class="text-fjRed-100">{{ item.price }}元/平</span>
            <span v-else>暂无价格</span>
            <!-- 建面 -->
            <span class="text-gray-400">{{ item.roomAreas }}</span>
          </div>
          <!-- 标签 -->
          <div class="flex flex-row w-full h-6 space-x-2 flex-nowrap">
            <h1 v-for="(label, index) in item.sysDictDetailBeans" v-show="index < 3" :key="index" class="px-1 pt-0.5 overflow-hidden text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm whitespace-nowrap">{{ label.value }}</h1>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import TypeLabel from '~/components/house/TypeLabel.vue';
export default Vue.extend({
  name: 'RecomendHouse',
  components: {
    TypeLabel
  },
  computed: {
    getHotProject() {
      const that = this;
      const store = that.$store;
      const hotProject = store.state.app.hotProject;
      return hotProject.slice(0, 4);
    }
  },
})
</script>