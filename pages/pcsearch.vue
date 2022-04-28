<template>
<!-- sm:hidden -->
  <div class="w-full h-full pb-20">
    <div class="h-10"></div>
    <div class="flex flex-row items-center justify-center w-full py-16 bg-fjBlue-100 bg-opacity-10">
      <div class="w-[900px]">
        <div class="flex flex-row items-center justify-between px-6">
          <span class="text-[22px]" :class="type === '1' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('1')">全网搜索</span>
          <span class="text-[22px]" :class="type === '2' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('2')">新房</span>
          <span class="text-[22px]" :class="type === '3' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('3')">二手房</span>
          <span class="text-[22px]" :class="type === '4' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('4')">资讯</span>
          <span class="text-[22px]" :class="type === '5' ? 'text-[#015EEA]' : 'text-[#333333]'" @click="changeType('5')">视频</span>
          <span class="text-[14px] text-[#333333]">大家都在搜:
            <a v-for="(item, index) in getHotProject" v-show="index < 2" :key="item.id" :href="`/house/${item.id}.html`" class="mx-2 border-b text-fjBlue-100 border-b-fjBlue-100">{{ item.name }}</a>
          </span>
        </div>
        <div class="h-[66px] w-full mt-6 rounded relative flex items-center">
          <input v-model="search" class="rounded-l-[4px] w-4/5 h-full border shadow border-fjBlue-100 text-[24px] px-4" type="text">
          <button class="rounded ml-[-6px] w-1/5 h-full text-white border border-fjBlue-100 bg-fjBlue-100 text-[20px]" @click="clickSearch">搜索</button>
          <div v-show="type === '1'" class="bg-fjBlue-100 w-4 h-4 rotate-45 absolute top-[-8px] z-[-1] left-[56px]"></div>
          <div v-show="type === '2'" class="bg-fjBlue-100 w-4 h-4 rotate-45 absolute top-[-8px] z-[-1] left-[198px]"></div>
          <div v-show="type === '3'" class="bg-fjBlue-100 w-4 h-4 rotate-45 absolute top-[-8px] z-[-1] left-[308px]"></div>
          <div v-show="type === '4'" class="bg-fjBlue-100 w-4 h-4 rotate-45 absolute top-[-8px] z-[-1] left-[436px]"></div>
          <div v-show="type === '5'" class="bg-fjBlue-100 w-4 h-4 rotate-45 absolute top-[-8px] z-[-1] left-[542px]"></div>
        </div>
      </div>
    </div>
    <div class="container mx-auto pt-14">
      <span class="text-[#666666] text-[18px]">为您找到<span class="tracking-wide text-fjRed-100">{{length}}</span>条搜索结果</span>
      <div v-if="length" class="flex flex-row mt-12">
        <div class="w-2/3 mr-4">
          <!-- 相关楼盘 -->
          <div v-if="houses && houses.length > 0" class="pb-[30px] border-b border-b-[#DDDDDD] mb-[50px]">
          <div v-for="item in houses" :key="item.id" class="">
            <div class="lg:p-4 lg:mb-6 hover:bg-gray-100">
              <a :href="`/house/${item.id}.html`" target="_blank" class="w-full lg:h-[200px] flex flex-row">
                <!-- 左边图片 -->
                <div class="static w-2/5 lg:h-full">
                  <img :src="getImg(item)" class="object-cover w-full h-full" :alt="item.name" />
                </div>
                <!-- 右边内容 -->
                <div class="w-3/5 h-full lg:pl-6">
                  
                  <div class="flex flex-row items-center justify-between lg:h-11">
                    <div class="flex flex-row items-center">
                    <!-- title -->
                    <h3 class="h-full mb-0 lg:text-[20px] font-bold text-black hover:text-fjBlue-100">{{ item.name }}</h3>
                    <div class="h-full lg:text-[12px] lg:ml-4">
                      <div v-if="item.saleState === '1'" class="text-white rounded-sm bg-fjYellow-100">在售</div>
                      <div v-if="item.saleState === '2'" class="text-white rounded-sm bg-fjBlue-100">待售</div>
                      <div v-if="item.saleState === '3'" class="text-white rounded-sm bg-fjRed-100">售罄</div>
                    </div>
                    </div>
                    <div class="text-right">
                      <!-- <img v-if="isFavorite && isFavorite.includes(item.id)" src="~/assets/img/list/red.png" alt="" @click.stop="deleteFav(item)"> -->
                      <!-- <img v-else src="~/assets/img/list/white.png" alt="" @click.stop="addFav(item)"> -->
                      <img src="~/assets/img/list/white.png" alt="">
                    </div>
                  </div>
                  <div class="lg:text-[14px] flex flex-row text-[#999999]">
                    <!-- 类型 -->
                    <HouseTypeLabel :sort="item.type" :class-name="'text-gray-400'" />
                    <!-- 面积 -->
                    <span v-if="item.hLayoutsById && item.hLayoutsById.length > 0" class="ml-2 text-gray-400">|</span>
                    <span v-if="getRoomArea(item.hLayoutsById)" class="ml-2 text-gray-400">{{ getRoomArea(item.hLayoutsById) }}</span>
                    <!-- 开盘时间 -->
                    <span v-if="item.openTime" class="ml-2 text-gray-400">|</span>
                    <span class="ml-2 text-gray-400" :title="getOpenTime(item.openTime)">{{ getOpenTime(item.openTime) }}</span>
                  </div>
                  <!-- 右中内容 -->
                  <div class="flex flex-row w-full lg:mt-5 text-[#999999]">
                    <div class=" lg:w-3/5 h-full text-[14px]">
                      <div class="flex flex-row items-center">
                        <svg version="1.1" class="mr-1 text-gray-400 lg:w-4 lg:h-4 icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
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
                        <span class="flex-shrink-0 overflow-hidden whitespace-nowrap lg:mr-4" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]<span class="overflow-hidden whitespace-nowrap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span></span>
                      </div>
                      <div class="flex flex-row items-center lg:mt-2">
                        <svg version="1.1" class="mr-1 text-gray-400 lg:w-4 lg:h-4 icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
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
                      <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="lg:mt-4">
                        <span v-for="(item1, index) in item.sysDictDetailBeans" :key="index" class="text-[12px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                      </div>
                    </div>
                    <div class="lg:w-2/5 text-[14px] text-right">
                      <div class="w-full">
                        <span v-if="item.price" class="text-[#DA1111] text-[36px] font-bold">{{ item.price }}</span>
                        <span v-if="item.price">元/㎡起</span>
                        <span v-if="!item.price">暂无数据</span>
                      </div>
                      <div class="w-full">
                        <span class="text-xs">价格更新日期：</span>
                        <span v-if="item.updatePriceTime" class="text-xs">{{ item.updatePriceTime.split('T')[0] }}</span>
                        <span v-else class="text-xs">暂无数据</span>
                      </div>
                      <div class="w-full">
                        <span v-if="item.priceDays" class="text-xs">价格有效期：{{ item.priceDays }}天</span>
                        <span v-else class="text-xs">暂无数据</span>
                      </div>
                      <!-- <div class="w-full mt-4">
                      </div> -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          </div>
          <!-- 二手小区 -->
          <div v-if="ohouse && ohouse.length > 0" class="pb-[30px]">
            <div class="text-[#333333] text-[26px] font-medium mb-4">“{{ searchText }}”相关二手小区</div>
            <div v-for="item in ohouse" :key="item.id" class="lg:p-4 lg:mb-6 hover:bg-gray-100 border-b border-b-[#DDDDDD]">
              <a :href="`/ohouse/${item.id}/p1.html`" target="_blank" class="w-full lg:h-[160px] flex flex-row  pb-[30px]">
                <!-- 左边图片 -->
                <div class="static w-2/5 lg:h-full">
                  <img v-if="item.firstImg" :src="item.firstImg" class="object-cover w-full h-full" :alt="item.name" />
                </div>
                <!-- 右边内容 -->
                <div class="w-3/5 h-full lg:pl-6">
                  <div class="flex flex-row items-center justify-between lg:h-11">
                    <div class="flex flex-row items-center">
                    <!-- title -->
                    <h3 class="h-full mb-0 lg:text-[20px] font-bold text-black hover:text-fjBlue-100">{{ item.name }}</h3>
                    </div>
                    <div class="text-right">
                      <!-- <img src="~/assets/img/list/white.png" alt=""> -->
                    </div>
                  </div>
                  <div class="lg:text-[14px] flex flex-row text-[#999999]">
                    <span v-if="item.payTime" class="text-gray-400 ">{{ item.payTime.split('T')[0] }}交房</span>
                    <!-- 开盘时间 -->
                    <span v-if="item.property" class="mx-2 text-gray-400">|</span>
                    <span v-if="item.property" class="text-gray-400">{{ item.property }}年</span>
                  </div>
                  <!-- 右中内容 -->
                  <div class="flex flex-row w-full lg:mt-4 text-[#999999]">
                    <div class=" lg:w-3/5 h-full text-[14px]">
                      <div class="flex flex-row items-center text-[#999999]">
                        <span class="flex-shrink-0 overflow-hidden whitespace-nowrap lg:mr-4" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]<span class="overflow-hidden whitespace-nowrap" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span></span>
                      </div>
                      <div v-if="item.beansByLabels && item.beansByLabels.length > 0" class="lg:mt-4">
                        <span v-for="(item1, index) in item.beansByLabels" :key="index" class="text-[12px] rounded px-2 py-1 mr-4 text-[#015EEA] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                      </div>
                    </div>
                    <div class="lg:w-2/5 text-[14px] text-right">
                      <div class=" float-right text-center text-white rounded-full bg-fjBlue-100 py-1 w-[120px]">查看所有房源</div>
                    </div>
                  </div>
                </div>
              </a>
              <div class="flex flex-row justify-center w-full text-fjBlue-100" @click="clickBottom(item.id)"><span  v-if="isMore" class="mr-2">展开</span><span  v-else class="mr-2">合并</span><img src="~/assets/img/down.png" :class="isMore? '' :'rotate-180'" width="20" alt=""></div>
               <!-- 二手房源 -->
              <div v-if="onumber && onumber.length > 0 && onumber[0].projectId === item.id" class="">
                <div v-for="item in onumber" :key="item.id" class="lg:py-4 lg:mb-6 hover:bg-gray-100 border-t border-t-[#DDDDDD] mt-4">
                  <a :href="`/ohouse/onumber/${item.id}.html`" target="_blank" class="w-full lg:h-[200px] flex flex-row">
                    <!-- 左边图片 -->
                    <div class="static w-2/5 lg:h-full">
                      <div v-if="item.resources">
                        <div v-for="item1 in item.resources" :key="item1">
                          <img v-if="item1.sort === '1'" :src="item1.address" class="object-cover w-full h-[200px]" :alt="item1.title" />
                        </div>
                      </div>
                    </div>
                    <!-- 右边内容 -->
                    <div class="w-3/5 h-full lg:pl-6">
                      <div class="flex flex-row items-center justify-between lg:h-11">
                        <div class="flex flex-row items-center">
                        <!-- title -->
                        <h3 class="h-full mb-0 lg:text-[20px] font-bold text-black hover:text-fjBlue-100">{{ item.title }}</h3>
                        </div>
                        <div class="text-right" @click.stop="stopA">
                          <img src="~/assets/img/list/white.png" alt="" @click="addFav(item.id)">
                        </div>
                      </div>
                      <div class="lg:text-[14px] flex flex-row text-[#999999] lg:mt-3 items-center">
                        <a-icon type="home" theme="twoTone" class="mr-2" />
                        <!-- 小区名 -->
                        <span>{{ item.name }}</span>
                        <!-- 类型 -->
                        <HouseTypeLabel :sort="item.type" :class-name="''" />
                        <!-- 面积 -->
                        <span v-if="item.area" class="mx-2 ">|</span>
                        <span class="">{{ item.area }}</span><span v-if="item.area">㎡</span>
                        <!-- 朝向 -->
                        <span v-if="item.orientation" class="mx-2 ">|</span>
                        <span v-if="item.orientation === '1'">南</span>
                        <span v-if="item.orientation === '2'">北</span>
                        <span v-if="item.orientation === '3'">东</span>
                        <span v-if="item.orientation === '4'">西</span>
                        <!-- 装修 -->
                        <span v-if="item.renovation" class="mx-2 ">|</span>
                        <span v-if="item.renovation === '1'">毛坯</span>
                        <span v-if="item.renovation === '2'">普通装修</span>
                        <span v-if="item.renovation === '3'">精装</span>
                        <span v-if="item.renovation === '4'">豪装</span>
                      </div>
                      <div v-if="item.floorType" class=" lg:mt-4 flex flex-row items-center text-[#999999]">
                        <svg t="1650695164653" class="mr-2 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2407" width="16" height="16"><path d="M23.489939 979.006061v-149.969455h236.140606V678.94303h236.264728v-149.752242h236.978424V379.810909h236.606061v599.257212z" p-id="2408" fill="#3485FF"></path><path d="M40.773818 979.006061v-131.537455-18.525091l-17.283879 17.283879h236.140606c9.340121 0 17.283879-7.974788 17.283879-17.283879V697.250909v-18.556121l-17.252848 17.283879h236.233697c9.340121 0 17.283879-7.943758 17.283879-17.283879v-131.10303-18.649213l-17.283879 17.283879h236.854303c9.309091 0 17.283879-7.943758 17.283879-17.283879v-130.761697-18.52509l-17.283879 17.283878H969.355636l-17.283878-17.283878V954.492121c0 7.726545-0.465455 15.670303 0 23.396849v1.024l17.283878-17.283879H61.967515c-12.194909 0-24.513939-0.217212-36.739879 0H23.614061c-8.998788 0-17.749333 7.943758-17.283879 17.283879 0.465455 9.309091 7.602424 17.283879 17.283879 17.283878H931.002182c12.194909 0 24.513939 0.217212 36.739879 0h1.613575c9.309091 0 17.283879-7.943758 17.283879-17.283878v-60.012606-142.832485-173.149091-149.628121c0-24.203636 0.682667-48.407273 0-72.579879v-1.024c0-9.340121-7.943758-17.283879-17.283879-17.283879H732.749576c-9.309091 0-17.283879 7.943758-17.283879 17.283879v149.286788l17.283879-17.283879H495.864242c-9.309091 0-17.252848 7.943758-17.252848 17.283879V678.725818l17.252848-17.283879H259.661576c-9.340121 0-17.283879 7.943758-17.283879 17.283879v150.217697c5.740606-5.771636 11.481212-11.543273 17.283879-17.283879H23.52097c-9.340121 0-17.314909 7.943758-17.314909 17.283879v150.093576c0 8.998788 7.974788 17.749333 17.283878 17.283879 9.464242-0.465455 17.283879-7.602424 17.283879-17.283879zM832.387879 3.227152c-8.285091 5.182061-16.446061 10.488242-24.762182 15.670303-22.341818 14.056727-44.590545 28.237576-66.932364 42.263272l-97.900606 61.967515-117.977212 74.65891-126.913939 80.275393c-41.580606 26.375758-83.192242 52.658424-124.89697 79.034182-37.205333 23.614061-74.410667 47.104-111.616 70.749091l-87.443394 55.26497c-17.37697 11.077818-34.753939 22.031515-52.161939 33.078303-3.10303 1.954909-6.361212 3.909818-9.340121 5.988848-1.024 0.682667-1.396364 1.024-2.792728 2.079031-7.447273 5.740606-9.060848 13.808485-9.060848 22.55903v55.544242c0 12.101818 10.581333 23.58303 23.024485 23.024485 12.412121-0.589576 23.024485-10.146909 23.024484-23.024485v-59.888484l-11.388121 19.890424 21.876364-13.808485c19.952485-12.567273 39.749818-25.227636 59.671273-37.794909 29.385697-18.649212 58.864485-37.205333 88.250181-55.854546 35.933091-22.683152 71.773091-45.490424 107.675152-68.204606l117.977212-74.627878 119.125333-75.341576 111.026425-70.283637 93.897697-59.42303c22.465939-14.273939 45.02497-28.454788 67.490909-42.759757 10.612364-6.671515 21.410909-13.34303 31.930182-20.262788a8.595394 8.595394 0 0 1 1.365333-0.806788c10.146909-6.454303 15.204848-20.852364 8.316121-31.557818-6.454303-10.24-20.51103-15.204848-31.464727-8.409212z" p-id="2409" fill="#3485FF"></path><path d="M111.709091 472.653576v356.38303c0 12.101818 10.612364 23.614061 23.055515 23.055515 12.443152-0.589576 23.055515-10.146909 23.055515-23.055515v-121.049212-191.45697-43.876848c0-12.101818-10.612364-23.614061-23.055515-23.055515-12.536242 0.589576-23.024485 10.146909-23.024485 23.055515zM347.756606 322.52897V678.94303c0 12.101818 10.612364 23.614061 23.055515 23.055515 12.412121-0.589576 23.024485-10.146909 23.024485-23.055515V557.924848v-191.456969-43.907879c0-12.101818-10.581333-23.58303-23.024485-23.024485-12.443152 0.465455-23.055515 10.022788-23.055515 23.024485zM584.021333 172.776727V529.190788c0 12.101818 10.612364 23.614061 23.055515 23.055515 12.412121-0.589576 23.024485-10.146909 23.024485-23.055515v-121.049212-191.45697-43.907879c0-12.101818-10.581333-23.58303-23.024485-23.024485-12.443152 0.465455-23.055515 10.022788-23.055515 23.024485zM867.048727 379.810909V258.699636v-191.456969V23.396848l-23.024485 23.024485h125.331394c12.101818 0 23.614061-10.581333 23.024485-23.024485-0.558545-12.443152-10.115879-23.055515-23.024485-23.055515H844.024242c-12.412121 0-23.024485 10.612364-23.024484 23.055515v356.383031c0 12.101818 10.581333 23.614061 23.024484 23.055515 12.412121-0.589576 23.024485-10.146909 23.024485-23.055515z" p-id="2410" fill="#3485FF"></path></svg>
                        <span v-if="item.floorType === '1'">低层</span>
                        <span v-if="item.floorType === '2'">中层</span>
                        <span v-if="item.floorType === '3'">高层</span>
                        <span v-if="item.floor">({{ item.floor }})</span>
                      </div>
                      <!-- 右中内容 -->
                      <div class="flex flex-row w-full text-[#999999]">
                        <div class=" lg:w-3/5 h-full text-[14px]">
                          <div class="text-[14px] lg:mt-3 flex flex-row items-center">
                            <a-icon type="clock-circle" theme="twoTone" class="mr-2" />
                            <span>{{ item.createTime.split('.000+08:00')[0].split('T').toString() }}</span>
                          </div>
                          <div v-if="item.beansByLabels && item.beansByLabels.length > 0" class="lg:mt-4">
                            <span v-for="(item1, index) in item.beansByLabels" :key="index" class="text-[14px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                          </div>
                        </div>
                        <div class="lg:w-2/5 text-[14px] text-right">
                          <div class="w-full">
                            <span class="text-[24px] text-fjRed-100 font-semibold">{{ item.price }}</span>
                            <span v-if="item.price">万元</span>
                          </div>
                          <div v-if="item.downPayments" class="w-full text-[14px]">
                            <span>首付：</span>
                            <span>{{ item.downPayments }}万元</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="flex flex-row items-center justify-center text-center text-fjBlue-100" @click="canMore"><div class="rotate-90">&lt;&lt;</div><span>收起</span></div>
              </div>
            </div>
          </div>
          
          <!-- 资讯 -->
          <div v-if="news && news.length > 0" class="border-b border-b-[#DDDDDD] pb-12 mb-12">
            <div class="text-[#333333] text-[26px] font-medium mb-4">“{{ searchText }}”相关资讯</div>
            <div v-for="item in news" :key="item.id" class="lg:h-[234px] bg-[#f5f5f5] flex flex-row flex-shrink-0 my-4">
              <div class="w-2/5 h-full">
                <img :src="item.img" :title="item.title" :alt="item.title" class="object-cover w-full h-full" />
              </div>
              <!-- news item info -->
              <div class="w-3/5 lg:pl-[27px] py-2 relative">
                <!-- look times -->
                <div class="flex flex-row items-center justify-end w-full text-right">
                  <div class="w-4 h-4 mr-2 bg-cover bg-looks-gray"></div>
                  <span class="mr-2 text-[#999999] text-[14px]">{{ item.lookTimes }}</span>
                </div>
                <a :href="`/info/${item.id}.html`" target="_blank" :title="item.title" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;" class="overflow-hidden text-[#333333] lg:text-[26px] font-bold hover:text-fjBlue-100">{{ item.title }}</a>
                <div class="mt-7 mr-[37px] lg:h-[76px] text-[18px] text-[#999999]" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 3;word-break: break-all;-webkit-box-orient: vertical;">
                  {{ item.description }}
                </div>
                <!-- tiem -->
                <div v-if="item.createTime" class="text-[16px] absolute text-right right-2 bottom-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
              </div>
            </div>
          </div>
          <!-- 视频 -->
          <div v-if="videos && videos.length > 0" href="" class="">
            <div class="text-[#333333] text-[26px] font-medium">“{{ searchText }}”相关视频</div>
            <div class="grid items-center justify-between grid-cols-3">
              <a v-for="(item, index) in videos" v-show="index != 1" :key="index" :href="`/video/${item.id}.html`" class="mt-5">
                <div class="relative group">
                  <div class="absolute bottom-0 flex flex-col justify-center object-cover w-[270px] h-10 px-2 text-white transition-all bg-black lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 bg-opacity-40 lg:group-hover:h-full">
                    <h3 class="text-[18px] text-white" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.title }}</h3>
                    <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
                  </div>
                  <img class="absolute w-10 h-10 -mt-5 -ml-5 top-1/2 left-1/2 group-hover:hidden" src="~/assets/img/video/play.png"/>
                  <img :src="item.photoAddress" alt="" class="bg-fjBlue-100 h-[158px] w-[270px]">
                </div>
              </a>
            </div>
            <div v-if="videos[0].updateTime" class="text-[#999999] text-[18px] mt-5 pb-5 border-b border-b-[#DDDDDD]">{{ videos[0].updateTime.split('T')[0]}}</div>
            <div v-else class="text-[#999999] text-[18px] mt-5 pb-5 border-b border-b-[#DDDDDD]">{{ videos[0].createTime.split('T')[0]}}</div>
          </div>
        </div>
        <div class="w-1/3 bg-coolGray-100 pt-[24px] px-8 pb-10 ml-4">
          <!-- 品牌商 -->
          <div v-if="brands && brands.length > 0" class="">
            <div class="w-full border-b border-b-[#999999]">
              <div class="w-[100px] text-left py-2 text-[#333333] text-[24px] border-b-4 border-b-fjBlue-100">品牌馆</div>
            </div>
            <div class="pt-8 pb-4">
              <img v-for="item in brands" :key="item.id" :src="item.photoAddress" alt="" class="w-full h-[194px] mb-4" @click="clickBrand(item.id)">
            </div>
          </div>
          <!-- 第一个视频 -->
          <div v-if="videos[0]" class="mb-8">
            <div class="w-full border-b border-b-[#999999]">
              <div class="w-[100px] text-left py-2 text-[#333333] text-[24px] border-b-4 border-b-fjBlue-100">视频推荐</div>
            </div>
            <a :href="`/video/${videos[0].id}.html`" class="">
              <!--  :href="`/video/project/${house.id}.html`" -->
              <div class="relative mt-8">
                <img class="absolute w-10 h-10 -mt-5 -ml-5 top-1/2 left-1/2" src="~/assets/img/video/play.png"/>
                <img :src="videos[0].photoAddress" alt="" class="h-[178px] w-full">
              </div>
              <div>
                <div class="text-[#333333] text-[16px] mt-2 font-medium">{{ videos[0].title }}</div>
                <div class="text-[#999999] text-[14px] mt-2">{{ videos[0].description }}</div>
              </div>
            </a>
          </div>
          <!-- 热门搜索 -->
          <div>
            <div class="w-full border-b border-b-[#999999]">
              <div class="w-[100px] text-left py-2 text-[#333333] text-[24px] border-b-4 border-b-fjBlue-100">热门搜索</div>
            </div>
            <div class="mt-6 break-normal">
                <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" class="mr-11 text-[#666666] text-[16px] float-left">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppLoading ref="loading" :box-class="'w-full h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { message } from 'ant-design-vue';
import { SearchApi } from '~/api/search/searchApi'
import { phoneNum } from '~/api/model/houseModel'
export default Vue.extend({
    name: 'PcSearch',
    asyncData({ store }) {
      const accessToken = store.state.app.accessToken;
      const tokenType = store.state.app.tokenType
      const isMobile = store.state.app.isMobile;
      const cityId = store.state.app.cityId;
      return {
        type: '1',
        cityId,
        search: '',
        isMobile,
        accessToken,
        tokenType,
      }
    },
    data() {
      let isMobile: any;
      return {
        tokenType: '',
        accessToken: '',
        isMobile,
        type: '1',
        length: 0,
        search: '',
        cityId: '',
        brands: [],
        houses: [],
        ohouse: [],
        videos: [],
        news: [],
        phoneNum,
        searchText: '',
        onumber: [],
        isMore: true,
      }
    },
    computed:{
      getHotProject() {
        const hotProject = this.$store.state.app.hotProject;
        return hotProject;
      }
    },
    methods: {
      async addFav(id: string) {
        if (this.tokenType && this.accessToken) {
            this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          }
        const param = {
          data: {
            houseId: id,
          }
        }
        const result = await this.$axios.$post(SearchApi.AddFavorite, param);
        if (result.code === 200) {
          message.success('关注成功', 3);
        } else {
          message.error('关注失败', 3);
        }
        this.$axios.setHeader('Authorization', '')
      },
      async delFav(id: string) {
        if (this.tokenType && this.accessToken) {
            this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          }
        const param = {
          data: {
            houseId: id,
          }
        }
        const result = await this.$axios.$post(SearchApi.DeleteFavorite, param);
        if (result.code === 200) {
          message.success('已成功取消关注', 3);
        } else {
          message.error('取消失败', 3);
        }
        this.$axios.setHeader('Authorization', '')
      },
      canMore() {
        this.onumber.splice(0);
        this.isMore = true;
      },
      async clickBottom (id: string) {
        this.$nuxt.$loading.start()
        if (this.isMore) {
          this.isMore = false;
          const oparam = {
            data: {
              projectId: id
            },
            page: {
              pageNum: 0,
              pageSize: 5
            }
          }
          if (this.tokenType && this.accessToken) {
            this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          }
          const numberResult = await this.$axios.$post(SearchApi.oNumber, oparam)
          if (numberResult?.code === 200) {
            this.onumber = numberResult.data?.content;
          }
          this.$axios.setHeader('Authorization', '');
        } else {
          this.onumber.splice(0);
          this.isMore = true;
        }
        
        this.$nuxt.$loading.finish();
      },
      stopA() {
        // 阻止冒泡
        const evt =  window.event;
        if (evt && evt.preventDefault) {
          evt.preventDefault();
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
        }
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
      getImg(item: any) {
        if (item?.firstImg?.address) {
          return item?.firstImg?.address;
        }
        return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3d%2Fa5%2F42%2F3da542de95a5ab09941a42ff4256951d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634269587&t=80f0f68d94ff94c2c11f9ec12456637c';
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
      changeType(type: string) {
        this.type = type;
      },
      async clickSearch() {
        if (!this.search) {
          return;
        }
        this.searchText = this.search;
        this.$nuxt.$loading.start()
        let result;
        const param = {
          data: {
            cityId: this.cityId,
            search: this.search
          },
          page: {
            pageNum: 0,
            pageSize: 10
          }
        }
        if (this.type === '2') {
          result = await this.$axios.$post(SearchApi.Nhouse, param)
          if (result?.code === 200) {
            this.length = result.data?.page.totalElements; 
            this.houses = result.data?.content;
            this.brands.splice(0);
            this.videos.splice(0);
            this.news.splice(0);
            this.ohouse.splice(0);
            this.onumber.splice(0);
          }
        } else if (this.type === '3') {
          result = await this.$axios.$post(SearchApi.Ohouse, param)
          if (result?.code === 200) {
            this.ohouse = result.data?.content;
            this.brands.splice(0);
            this.houses.splice(0);
            this.videos.splice(0);
            this.news.splice(0);
          }
          this.length = result?.data?.page.totalElements;
        } else if (this.type === '4') {
          result = await this.$axios.$post(SearchApi.News, param)
          if (result?.code === 200) {
            this.length = result.data?.page.totalElements; 
            this.news = result.data?.content;
            this.brands.splice(0);
            this.houses.splice(0);
            this.videos.splice(0);
            this.ohouse.splice(0);
          }
        } else if (this.type === '5') {
          result = await this.$axios.$post(SearchApi.Videos, param)
          if (result?.code === 200) {
            this.length = result.data?.page.totalElements; 
            this.videos = result.data?.content;
            this.brands.splice(0);
            this.houses.splice(0);
            this.news.splice(0);
            this.ohouse.splice(0);
          }
        } else {
          result = await this.$axios.$post(SearchApi.All, param)
          if (result?.code === 200) {
            const b = result.data?.brands?.content?.length || 0
            this.length = b + result.data?.houses1.page.totalElements + result.data?.news.page.totalElements + result.data?.videos.page.totalElements + result.data?.house2.page.totalElements; 
            this.brands = result.data?.brands.content;
            this.houses = result.data?.houses1.content;
            this.news = result.data?.news.content;
            this.videos = result.data?.videos.content;
            this.ohouse = result.data?.house2.content;
            console.log('ohouse:', this.ohouse)
          }
        }
        this.$nuxt.$loading.finish();
      },
      clickBrand(id: string) {
        this.$router.push('/brand?redirect=' + id)
      }
    }
})
</script>