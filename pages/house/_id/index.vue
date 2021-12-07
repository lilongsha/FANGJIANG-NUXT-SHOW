<template>
  <div class="sm:w-screen">
    <div class="w-full sm:h-4 lg:h-24"></div>
    <!-- house content -->
    <div class="w-full pb-7 bg-[#f6f9fe]">
      <div class="lg:mx-auto sm:w-full lg:container">
        <!-- name and title -->
        <div class="w-full lg:pt-10 sm:hidden">
          <!-- name and saleState -->
          <div class="flex flex-row items-end w-full">
            <span class="text-[#333333] text-[34px] font-bold">{{ house.name }}</span>
            <span v-if="house.saleState === '1'" class="px-1 my-auto text-sm font-normal text-white rounded-sm ml-7 bg-fjYellow-100">在售</span>
            <span v-if="house.saleState === '2'" class="px-1 my-auto font-normal text-white rounded-sm ml-7 bg-fjBlue-100">待售</span>
            <span v-if="house.saleState === '3'" class="px-1 my-auto font-normal text-white rounded-sm ml-7 bg-fjRed-100">售罄</span>
          </div>
          <span class="mt-5 text-[#999999] text-[18px]">{{ house.aliasName }}</span>
        </div>
        <!-- carousel -->
        <div class="flex flex-row sm:w-screen sm:overflow-hidden lg:w-full mt-8 sm:h-80 lg:h-[547px]">
          <!-- Carousel w-1280-567 -->
          <div class="h-full lg:w-[713px] sm:w-full flex flex-col">
            <!-- carousel img -->
            <div class="w-full sm:h-3/4 lg:h-[450px] relative">
              <div class="absolute left-0 sm:top-[90px] lg:top-[193px] z-10 flex flex-row items-center justify-center w-6 h-16 bg-black bg-opacity-60" @click="prev()">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="absolute right-0  sm:top-[90px] lg:top-[193px] z-10 flex flex-row items-center justify-center w-6 h-16 bg-black bg-opacity-60" @click="next()">
                <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <a-carousel ref="carousel" arrows>
                <div v-for="(item, index) in resourceList" :key="index" class="w-full sm:h-[240px] lg:h-[450px]">
                  <img :src="item.address" :alt="item.title" class="object-cover w-full h-full" height="100%" width="100%">
                </div>
              </a-carousel>
            </div>
            <!-- carousel sort -->
            <div class="relative flex flex-row w-full mt-4 overflow-hidden bg-white sm:h-1/4 lg:h-20">
              <div class="absolute left-0 z-10 flex flex-row items-center justify-center w-6 h-full bg-black bg-opacity-40" @click="scrollLeft">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div ref="sortScroll" class="relative h-full space-x-2 text-white transition-all" :style="sortRightString">
                <div v-for="(item, index) in resourceSortList" :key="index" class="static float-left w-24 h-full" @click="getResourceList(item.sort)">
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
          <div class="sm:w-0 sm:h-0 sm:overflow-hidden h-full w-[555px] ml-3">
            <!-- price -->
            <div class="px-6 w-full h-[155px] flex flex-col bg-fjBlue-100 text-white">
              <!-- lookTimes -->
              <div class="flex flex-row items-center justify-end w-full mt-2">
                <div class="w-4 h-4 mr-2 bg-cover bg-looks"></div>
                <span class="pb-[1px]">{{ house.lookTime }}</span>
              </div>
              <!-- price and totalPrice -->
              <div class="flex flex-row justify-between w-full">
                <div>
                  <span class="text-sm">参考单价：</span>
                  <span v-if="house.price" class="text-[22px]">{{ house.price }}<span class="text-sm">元/㎡起</span></span>
                  <span v-else>暂无数据</span>
                </div>
                <div v-if="house.lowTotalPrice">
                  <span class="text-[22px]">{{ house.lowTotalPrice }}<span v-if="house.highTotalPrice">-</span>{{ house.highTotalPrice }}</span>
                  <span v-if="house.highTotalPrice" class="text-sm">（万/套）</span>
                  <span v-else class="text-sm">（万/套）起</span>
                </div>
              </div>
              <!-- 价格更新日期 -->
              <div class="flex flex-row justify-between w-full mt-4 text-sm">
                <span v-if="house.updatePriceTime" class="">价格更新日期：{{ house.updatePriceTime.split('T')[0] }}</span>
                <span v-if="house.priceDays" class="">价格有效期：{{ house.priceDays }}天</span>
              </div>
              <!-- 说明 收藏 -->
              <div class="flex flex-row w-full pt-4 text-sm group">
                <span>价格说明</span>
                <svg t="1632550637139" class="w-5 h-5 ml-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5311" width="128" height="128"><path d="M512 853.333333C323.4816 853.333333 170.666667 700.5184 170.666667 512S323.4816 170.666667 512 170.666667s341.333333 152.814933 341.333333 341.333333-152.814933 341.333333-341.333333 341.333333z m0-51.2a290.133333 290.133333 0 1 0 0-580.266666 290.133333 290.133333 0 0 0 0 580.266666z m25.6-197.051733a25.6 25.6 0 1 1-51.2 0c0-20.343467 9.4208-43.588267 27.409067-71.236267 8.465067-13.038933 17.7152-21.981867 33.8944-34.952533l4.983466-3.9936c21.2992-17.032533 26.794667-24.917333 26.794667-42.564267 0-38.741333-30.378667-69.870933-67.4816-69.870933-38.673067 0-67.4816 28.672-67.4816 69.870933a25.6 25.6 0 0 1-51.2 0c0-69.495467 51.780267-121.070933 118.6816-121.070933 65.706667 0 118.6816 54.340267 118.6816 121.070933 0 36.932267-13.755733 56.763733-46.045867 82.568534l-4.9152 3.925333c-12.219733 9.796267-18.261333 15.6672-22.971733 22.9376-13.073067 20.0704-19.1488 35.054933-19.1488 43.349333zM512 729.224533a31.061333 31.061333 0 1 1 0-62.088533 31.061333 31.061333 0 0 1 0 62.088533z" fill="#ffffff" p-id="5312" data-spm-anchor-id="a313x.7781069.0.i3" class="selected"></path></svg>
                <div class="hidden w-[400px] ml-4 group-hover:block">
                  <span style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{house.priceDescription}}</span>
                  <p class="font-bold">价格仅供参考，不做为最终购房的价格</p>
                </div>
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
              <a class="w-full text-fjBlue-100 border-b-[1px] border-fjBlue-100" :href="`/house/infomation/${house.id}.html`" :title="`${house.name}详情信息`" target="_blank">
                查看更多楼盘详情
              </a>
              <div class="w-full mt-14 h-0.5 bg-[#DDDDDD]"></div>
              <!-- phone -->
              <a :href="`tel:${phoneNum},${house.number}%23`">
                <div class="w-full mt-6 text-2xl font-bold text-fjRed-100">{{ phoneNum }} 转 {{ house.number }}</div>
              </a>
            </div>
          </div>
        </div>
        <!-- m base info -->
        <div class="w-full p-4 mt-4 bg-white lg:hidden">
          <div class="w-full h-6 leading-6 font-bold text-[18px]">
            <span class="">{{ house.name }}</span>
            <span v-if="house.saleState === '1'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjYellow-100">在售</span>
            <span v-if="house.saleState === '2'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
            <span v-if="house.saleState === '3'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
            <!-- <type-label :type="house.type" :class-name="'px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100'"></type-label> -->
            <span v-if="house.type === '1'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">住宅</span>
            <span v-else-if="house.type === '2'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">公寓</span>
            <span v-else-if="house.type === '3'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">商铺</span>
            <span v-else-if="house.type === '4'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">写字楼</span>
            <span v-else-if="house.type === '5'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">仓库</span>
            <span v-else-if="house.type === '6'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">别墅</span>
            <span v-else-if="house.type === '7'" class="px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100">商业类</span>
          </div>
          <div class="w-full space-x-1">
            <span v-for="(item, index) in house.labels.split(',')" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs ">{{ item }}</span>
          </div>
          <div class="w-full mt-2 text-[16px]">
            <span>参考价格：</span>
            <span v-if="house.price" class="text-[18px] font-bold text-fjRed-100">{{ house.price }}<span class="text-[12px] text-fjRed-100">元/㎡</span></span>
            <span v-else class="text-[14px] text-gray-300">暂无数据</span>
          </div>
          <div class="w-full border-t">
            <span class="text-xs text-gray-300 whitespace-pre-wrap">价格仅供参考，不做为最终购房的价格。<span v-if="house.updatePriceTime">价格更新时间：{{ house.updatePriceTime.split('T')[0] }}，价格有效期：{{ house.priceDays }}天</span></span>
          </div>
          <div class="w-full pt-1 border-t">
            <div class="flex flex-row w-full">
              <div class="w-1/2">
                <span>产权年限：</span>
                <span v-if="house.property">{{ house.property }}年</span>
                <span v-else>暂无数据</span>
              </div>
              <div class="w-1/2">
                <span>建筑类型：</span>
                <span v-if="house.buildType">{{ buildType[house.buildType].title }}</span>
                <span v-else>暂无数据</span>
              </div>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-1/2">
                <span>开盘时间：</span>
                <span v-if="house.payTime">{{ house.payTime.split('T')[0] }}</span>
                <span v-else>暂无数据</span>
              </div>
              <div class="w-1/2">
                <span>主力户型：</span>
                <span v-if="layoutLabel">{{ layoutLabel }}</span>
                <span v-else>暂无数据</span>
              </div>
            </div>
            <div class="flex flex-row">
              <div class="w-3/4">
                <span>首付预算：</span>
                <a :href="`tel:${phoneNum},${house.number}%23`">
                  <span>咨询首付及贷款明细</span>
                </a>
              </div>
              <div class="w-1/4 text-right">
                <a :href="`/house/infomation/${house.id}.html`" :title="`${house.name}详情信息`" class="text-gray-400">更多信息></a>
              </div>
            </div>
          </div>
        </div>
        <!-- house menu -->
        <div ref="menu" class="menu sticky z-[20] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-gray-200 sm:mt-4 lg:mt-14 sm:top-[95px] lg:top-28 text-[#333333]">
          <div v-for="(item, index) in houseMenu" :key="index" :class="{ 'menu-sub' : topFlag == item.value }" class="sm:w-1/5 lg:w-32 h-full sm:leading-10 lg:leading-[64px] text-center align-middle sm:text-sm lg:text-xl transition-all" @click="go(item.value)">{{ item.title }}</div>
          <a class="sm:hidden" :href="`tel:${phoneNum},${house.number}%23`">
            <div class="sm:hidden absolute right-0 h-full text-lg text-fjBlue-100 font-bold leading-[64px] align-middle pr-4">{{ phoneNum }} 转 {{ house.number }}</div>
          </a>
        </div>
        <!-- house layout -->
        <div id="layout" ref="layout" class="w-full sm:px-2 lg:h-[532px] m2-8">
          <!-- h-36px -->
          <div class="flex flex-row items-center w-full sm:h-6 lg:h-[36px] border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <div class="sm:text-sm lg:text-xl font-bold sm:border-b-4 lg:border-b-[6px] border-fjBlue-100">{{ house.name }}户型</div>
          </div>
          <!-- content -->
          <div class="w-full lg:h-[496px] sm:mt-2 lg:mt-8">
            <div class="w-full h-12">
              <span :class="'' === showDefaultLayout ? 'bg-fjBlue-100 text-white sm:text-sm' : 'sm:text-xs'" class="w-20 px-2 py-1 mx-2 text-center transition-all rounded-sm" @click="changeLayout('')">全部</span>
              <span v-for="(item,index) in layouts" :key="index" :class="item.rooms === showDefaultLayout ? 'bg-fjBlue-100 text-white sm:text-sm' : 'sm:text-xs'" class="w-20 px-2 py-1 mx-2 text-center transition-all rounded-sm" @click="changeLayout(item.rooms)">{{ item.rooms }}室({{ item.value }})</span>
            </div>
            <div class="relative w-full overflow-hidden sm:h-56 lg:h-112">
              <div class="absolute sm:top-[60px] lg:top-[120px] left-0 z-10 flex flex-row items-center justify-center w-6 h-20 bg-black bg-opacity-40" @click="scrollLayoutLeft">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="absolute sm:top-[60px] lg:top-[120px] right-0 z-10 flex flex-row items-center justify-center w-6 h-20 bg-black bg-opacity-40" @click="scrollLayoutRight">
                <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="w-full h-full overflow-hidden relactive">
                <div ref="layoutScroll" class="relative flex flex-row h-full p-2 text-white transition-all" :style="layoutRightString">
                  <div v-for="(item,index) in house.hLayoutsById" v-show="showDefaultLayout === '' || item.room == showDefaultLayout" :key="index" class="flex-shrink-0 h-full overflow-hidden transition-all shadow sm:mr-4 lg:mr-8 sm:w-48 lg:w-72">
                    <div class="overflow-hidden sm:h-32 lg:h-80">
                      <img v-if="item.hResourceByResourceId" :src="item.hResourceByResourceId.address" :alt="item.hResourceByResourceId.description" class="object-cover w-full h-full overflow-hidden transition-all duration-700 hover:scale-125">
                    </div>
                    <div class="flex flex-col w-full h-24 pt-2 sm:px-1 lg:px-4">
                      <div class="flex font-bold text-black lg:flex-row sm:text-sm lg:text-xl">
                        <div class="-space-x-1">
                          <span v-if="item.room">{{ item.room }}</span>
                          <span v-if="item.room">室</span>
                          <span v-if="item.hall">{{ item.hall }}</span>
                          <span v-if="item.hall">厅</span>
                          <span v-if="item.toilet">{{ item.toilet }}</span>
                          <span v-if="item.toilet">卫</span>
                        </div>
                        <div class="text-xs">
                          <span v-if="item.saleState === '1'" class="sm:px-0.5 lg:px-1 pb-0.5 sm:ml-2 lg:ml-4 font-normal text-white rounded-sm bg-fjYellow-100">在售</span>
                          <span v-if="item.saleState === '2'" class="sm:px-0.5 lg:px-1 pb-0.5 sm:ml-2 lg:ml-4 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
                          <span v-if="item.saleState === '3'" class="sm:px-0.5 lg:px-1 pb-0.5 sm:ml-2 lg:ml-4 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
                        </div>
                      </div>
                      <div class="flex flex-shrink-0 w-full text-gray-700 sm:flex-col lg:flex-row">
                        <span class="sm:w-full lg:w-[98px] whitespace-nowrap">建面约{{ item.area }}㎡</span>
                        <span class="sm:w-full lg:w-[174px] lg:ml-2 overflow-hidden whitespace-nowrap">{{ item.description }}</span>
                      </div>
                      <div v-if="item.labels" class="flex flex-row w-full mt-2 sm:space-x-1 lg:space-x-2">
                        <span v-for="(label, index1) in item.labels.split(',')" v-show="index1 < 3" :key="index1" class="whitespace-nowrap sm:px-1 lg:px-2 py-0.5 rounded text-xs text-center text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">
                          {{ label }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- house news -->
        <div id="news" class="bg-[#f6f9fe] lg:p-2 lg:sticky sm:px-2 lg:z-[60] lg:float-right sm:w-full lg:w-1/4 m2-8 lg:transition-all lg:top-44">
          <!-- title -->
          <div class="flex flex-row items-center justify-between w-full sm:h-6 lg:h-[36px] border-b-[1px] border-fjBlue-100">
            <span class="sm:text-sm lg:text-xl font-bold border-b-[6px] border-fjBlue-100">资讯</span>
          </div>
          <!-- content -->
          <div class="w-full pt-1 space-y-2 sm:px-2">
            <div v-for="(item,index) in newsList" :key="index">
              <a :href="`/info/${item.id}.html`" target="_blank" class="text-black sm:text-sm hover:text-fjBlue-100">{{ item.title }}</a>
            </div>
          </div>
        </div>
        <!-- house advantage -->
        <div class="content sm:px-2">
          <!-- h-36px -->
          <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <div class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}项目分析</div>
          </div>
          <!-- content -->
          <div class="w-full m2-8">
            <!-- 项目优点 -->
            <div v-if="house.advantage" class="flex flex-row w-full h-full">
              <div class="flex-shrink-0 font-bold font">项目优点：</div>
              <div class="w-5/6">{{ house.advantage }}</div>
            </div>
            <!-- 项目缺点 -->
            <div class="flex flex-row w-full h-full">
              <div class="font-bold font">项目缺点：</div>
              <div class="flex flex-row items-center justify-center"><a :href="`tel:${phoneNum},${house.number}%23`">请咨询客服了解<span class="text-fjRed-100">[{{house.name}}]</span>缺点信息</a></div>
            </div>
          </div>
        </div>
        <!-- house dynamic -->
        <div id="dynamic" ref="dynamic" class="content sm:px-2">
          <!-- h-36px -->
          <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <div class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}动态</div>
            <!-- 全部 -->
            <a :href="`/house/dynamic/list/${house.id}.html`" target="_blank">
              <div class="text-sm text-gray-500">更多({{ totalDynamic }})></div>
            </a>
          </div>
          <!-- content -->
          <div class="w-full m2-8">
            <div v-for="(item,index) in dynamicList" :key="index" class="w-full mb-4 border-b border-gray-300 border-dashed">
              <!-- dynamic Title -->
              <div class="w-full mb-4">
                <span class="text-lg text-black hover:border-b border-fjBlue-100">{{ item.title }}</span>
                <span :class="DynamicSort[item.sort].color" class="px-1 py-0.5 ml-4 text-xs text-white">{{ DynamicSort[item.sort].title }}</span>
              </div>
              <!-- dynamic Content -->
              <p class="w-full mb-8 truncate whitespace-pre-wrap max-h-16 first-letter:ml-4">{{ item.description }}</p>
              <!-- dynamic Time -->
              <div v-if="item.updateBy" class="text-sm text-gray-400">{{ item.updateTime.split('T')[0] }}</div>
              <div v-else class="text-sm text-gray-400">{{ item.createTime.split('T')[0] }}</div>
            </div>
          </div>
        </div>
        <!-- house question -->
        <div id="question" ref="question" class="content sm:px-2">
          <!-- h-36px -->
          <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <div class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}问答</div>
            <!-- 全部 -->
            <a :href="`/house/discuss/list/${house.id}.html`" target="_blank">
              <div class="text-sm text-gray-500">更多({{ questionTotal }})></div>
            </a>
          </div>
          <!-- content -->
          <div class="w-full m2-8">
            <div v-for="(item,index) in questionList" :key="index" class="w-full mb-4 border-b border-gray-300 border-dashed">
              <!-- question Title -->
              <div class="w-full mb-4">
                <a :href="`/house/discuss/${item.id}.html`" target="_blank">
                  <span class="text-black sm:text-sm lg:text-lg hover:border-b border-fjBlue-100">{{ item.content }}</span>
                </a>
              </div>
              <!-- question Content -->
              <div v-if="item.answerEntities && item.answerEntities.length > 0">
                <div v-for="(answer, index1) in item.answerEntities" v-show="index1 < 2 || item.id === showMoreId" :key="index1" class="flex flex-row w-full mb-2 transition-all">
                  <div class="overflow-hidden sm:w-3/5 lg:w-3/4">
                    <span class="sm:text-xs">{{ answer.content }}</span>
                  </div>
                  <div class="flex flex-row items-center justify-end sm:w-2/5 lg:w-1/4">
                    <svg t="1632970194001" class="w-3 h-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3415" width="128" height="128"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="3416"></path></svg>
                    <span class="sm:mr-2 lg:mr-6">{{ answer.likeNum }}</span>
                    <span class="sm:text-xs">{{ answer.createTime.split('T')[0] }}</span>
                  </div>
                </div>
                <div v-if="item.answerEntities.length > 2">
                  <div v-if="showMoreId !== item.id" class="w-full text-center sm:text-xs" @click="showMore(item.id)">展开更多({{ item.answerEntities.length }})</div>
                  <div v-else class="w-full text-center sm:text-xs" @click="showMore('')">合并更多({{ item.answerEntities.length }})</div>
                </div>
              </div>
              <!-- question Time -->
              <div v-if="item.updateBy" class="text-gray-400 sm:text-xs lg:text-sm">{{ item.updateTime.split('T')[0] }}</div>
              <div v-else class="text-gray-400 sm:text-xs lg:text-sm">{{ item.createTime.split('T')[0] }}</div>
            </div>
          </div>
        </div>
        <!-- house around -->
        <div id="around" ref="around" class="content-1 sm:px-2">
          <!-- h-36px -->
          <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <div class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}周边</div>
          </div>
          <div id="aroundMap" class="w-full m2-8 sm:h-48 lg:h-112"></div>
        </div>
        <!-- house price -->
        <div id="price" ref="price" class="bg-white content-1 sm:px-2">
          <!-- h-36px -->
          <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <div class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}价格走势</div>
          </div>
          <div class="w-full sm:h-56 lg:h-80">
            <line-echart :option="option" />
          </div>
        </div>
        <!-- house 推荐 -->
        <recomend-house class=""/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi, houseMenu, phoneNum, buildType } from '~/api/model/houseModel';
import { Api as ResourceApi, resourceSort } from '~/api/model/resourceModel';
import { Api as DynamicApi, sort as DynamicSort } from '~/api/model/dynamicModel';
import { Api as NewsApi } from '~/api/model/newsModel';
import { getQuestions } from '~/api/model/questionModel';
import { getDataResult, getPageResult } from '~/utils/response/util';
import MapLoader from '~/plugins/loadMap';
import LineEchart from '~/components/echart/LineEchart.vue'
import RecomendHouse from '~/components/house/RecomendHouse.vue'
import { Breadcrumb } from '~/types/app';
const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
export default Vue.extend({
  name: 'HouseInfo',
  components: {
    LineEchart,
    RecomendHouse,
  },
  async asyncData ({ $axios, params, store, req }) {
    const userAgent = req?.headers['user-agent'] || '';

    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    const getHouseInfo = async () => {
      await Promise.all([
        getResourcesList(),
        getDynamicList(),
        getNewsList(),
        getQuestList()
      ])
    }

    // 获取楼盘资讯
    let newsList: any[] = [];
    let totalNews: number = 0;
    const getNewsList = async () => {
      const param: any = {
        data: {
          projectId: id
        },
      }
      const result = await $axios.$post(NewsApi.GetNewsByProject, param)
      if (result.code === 200) {
        const { content, page } = getPageResult(result);
        newsList = content;
        totalNews = page.totalElements;
      }
    }

    // 获取问答列表
    let questionList: any[] = [];
    let questionTotal: number = 0;
    const getQuestList = async () => {
      const result = await getQuestions($axios, id);
      if (result.code === 200) {
        const { content, page } = getPageResult(result);
        questionList = content;
        questionTotal = page.totalElements;
      }
    }

    // 获取资源信息
    let resourceSortList: any[] = [];
    const getResourcesList = async () => {
      const param: any = {
        data: {
          projectId: id
        }
      }
      const result = await $axios.$post(ResourceApi.GetResourcesList, param)
      if (result.code === 200) {
        resourceSortList = getDataResult(result);
        if (resourceSortList && resourceSortList[0]) {
          await getFirstresourceList(resourceSortList[0].sort);
        }
      }
    }
    // 获取动态列表信息
    let dynamicList: any[] = [];
    let totalDynamic: number = 0;
    const getDynamicList = async () => {
      const param: any = {
        data: {
          projectId: id,
        },
        page: {
          pageNum: 0,
          pageSize: 2,
        }
      }
      const result = await $axios.$post(DynamicApi.GetDynamicNews, param)
      if (result.code === 200) {
        const { content, page } = getPageResult(result);
        dynamicList = content;
        totalDynamic = page.totalElements;
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
        resourceList = getDataResult(result);
      }
    }
    // 获取项目价格走势
    const option: any = {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {},
      toolbox: {
        show: false,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value',
        show: true,
        axisLabel: {
          formatter: '{value}元/㎡'
        }
      },
      series: [
        {
          data: [],
          type: 'line',
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
        }
      ]
    };
    const getPrice = (house: any) => {

      if (house.projectPriceLogEntities && house.projectPriceLogEntities.length > 0) {
        house.projectPriceLogEntities.forEach((item: any) => {
          if (item.price) {
            option.xAxis.data.push(item.createTime.split('T')[0]);
            option.series[0].data.push(item.price);
          }
        })
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
      house = getDataResult(result);
      const breadcrumb: Breadcrumb[] = [];
      breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
      breadcrumb.push({ title: '新房', href: '/house/list', icon: 'list' })
      breadcrumb.push({ title: house.sysAreaByAreaId.name, href: '/house/list?areaId=' + house.sysAreaByAreaId.id, icon: 'area' })
      store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
      getPrice(house);
      await getHouseInfo();
    }
    
    let isMobile: any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
        option.yAxis.show = false;
    } else {
      isMobile = false;
    }
    return { id, house, resourceSortList, dynamicList, totalDynamic, newsList, totalNews, resourceList, showSort, questionList, 
questionTotal, option, phoneNum, isMobile }
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
    const dynamicList: any[] = [];
    const totalDynamic: number = 0;
    const newsList: any[] = [];
    const totalNews: number = 0;
    const showMoreId: string = '';
    const map: any = undefined;
    const showNews: boolean = true;
    const option: any = {};
    let isMobile: any;
    return {
      id,
      resourceSort,
      DynamicSort,
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
      dynamicList,
      totalDynamic,
      newsList,
      totalNews,
      showMoreId,
      map,
      showNews,
      colors,
      buildType,
      isMobile,
      option,
    }
  },
  head() {
    const houseName: string = this.house.name;
    const houseCityName: string = this.house.sysCityByCityId.name;
    const houseProvinceName: string = this.house.sysProvinceByProvinceId.name;
    const latLng: string = this.house.latitude + '' + this.house.longitude;
    const title: string = `${this.house.name}项目价格,户型,开盘时间详情 - 房匠`;
    const description: string = `房匠网为您提供${this.house.name}售楼处电话,开盘时间,地理位置,相册图片,楼盘房价,户型图等信息,了解更多${this.house.name}详细信息,请关注房匠网.`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.house.firstImg?.address;
    const sandImgAddress: string = this.house.sandImg?.address;
    const pubTime: string = this.house.updateTime;
    const upTime: string = this.house.updateTime || this.house.createTime;
    const keyword: string = `${houseName},${houseName}怎么样,${houseName}价格,${houseName}售楼处电话,${houseName}户型,${houseName}开盘时间`;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${houseName},${houseCityName}${houseName},${houseCityName}${houseName}价格,${houseCityName}${houseName}价格走势,${houseCityName}${houseName}售楼处${houseCityName}${houseName}售楼处电话,${houseCityName}${houseName}户型 - 房匠","images":["${firstImgAddress}","${sandImgAddress}", "${sandImgAddress}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    let location: string;
    if (this.house.latitude && this.house.longitude) {
      location = `province=${houseProvinceName};city=${houseCityName};coord=${latLng}`;
    } else {
      location = `province=${houseProvinceName};city=${houseCityName};`;
    }
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    MapLoader().then(AMap => {
      this.map = new AMap.Map("aroundMap", {
        zoom: 11,
        center: [this.house.longitude, this.house.latitude],
        scrollWheel:false,
      })
      const that = this;
      AMap.plugin(['AMap.Scale', 'AMap.HawkEye', 'AMap.ToolBar', 'AMap.ControlBar'], function () {// 异步同时加载多个插件
        const scale = new AMap.Scale();
        that.map.addControl(scale);
        const toolbar = new AMap.ToolBar();
        that.map.addControl(toolbar);
        const controlBar = new AMap.ControlBar({
          position: {
            top: '10px',
            right: '10px',
          }
        });
        const marker = new AMap.Marker({
            icon: "https://fangjiang-saas-dev.oss-cn-beijing.aliyuncs.com/app/around/blue-logo.png",
            position: [that.house.longitude, that.house.latitude]
        });
        const content = '<span>' + that.house.name + '</span>'
        marker.setLabel({
            offset: new AMap.Pixel(0, 0),
            content,
            direction: 'bottom'
        });
        that.map.add(marker);
        that.map.addControl(controlBar);
      });
    })
    this.getHouseType();
  },
  methods: {
    showMore(id: string) {
      this.showMoreId = id;
    },
    scrollRight() {
      if ((this as any).$refs.sortScroll.offsetWidth - 713 < this.sortRight) {
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
          this.resourceList = getDataResult(result);
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
        this.layoutLabel = '暂无数据'
        return '暂无数据';
      }
      const flagObj: any = {};
      layouts.forEach((item) => {
        if (item.saleState !== '1' || !item.room || !item.area) {
          return;
        }
        if (flagObj[item.room]) {
          flagObj[item.room] = flagObj[item.room] + 1;
        } else {
          flagObj[item.room] = 1;
        }
      })
      const keys = Object.keys(flagObj);
      if (keys.length < 1) {
        this.layoutLabel = '暂无数据'
        return '暂无数据';
      }
      let result: string = '';
      for(let i = 0; i < keys.length; i++) {
        this.layouts.push({ rooms: keys[i], value: flagObj[keys[i]] });
        if (Object.keys(flagObj).length > 2) {
          continue;
        }
        result = result + keys[i] + '/'
      }
      result = result.substring(0, result.length - 1);
      result = result + '室';
      // this.showDefaultLayout = this.layouts[0].rooms
      this.layoutLabel = result;
    },
    next() {
      (this as any).$refs.carousel.next();
    },
    prev() {
      (this as any).$refs.carousel.prev();
    },
    go(el: string) {
      const anchor:any = this.$el.querySelector('#' + el)
      anchor.scrollIntoView({ behavior: 'smooth' })
    },
    handleScroll() {
      const layoutTop = (this as any).$refs.layout.getBoundingClientRect().top
      const dynamicTop = (this as any).$refs.dynamic.getBoundingClientRect().top
      const questionTop = (this as any).$refs.question.getBoundingClientRect().top;
      const aoroundTop = (this as any).$refs.around.getBoundingClientRect().top;
      const priceTop = (this as any).$refs.price.getBoundingClientRect().top;
      // 150 距离顶部的距离
      let top = 200;
      if(this.isMobile) {
        top = 150;
      }
      if (layoutTop < top ) {
        this.topFlag = 'layout'
      }
      if (dynamicTop < top ) {
        this.topFlag = 'dynamic'
      }
      if (questionTop < top ) {
        this.topFlag = 'question'
      }
      if (aoroundTop < top ) {
        this.topFlag = 'around';
      }
      if (priceTop < top ) {
        this.topFlag = 'price'
      }
    },
    scrollLayoutRight() {
      let times = 288;
      if (this.isMobile) {
        times = 56;
      }
      this.layoutRight = this.layoutRight + times;
      this.layoutRightString = 'right: ' + this.layoutRight + 'px';
    },
    scrollLayoutLeft() {
      let times = 288;
      if (this.isMobile) {
        times = 56;
      }
      if (this.layoutRight - times < 0) {
        return;
      }
      this.layoutRight = this.layoutRight - times;
      this.layoutRightString = 'right: ' + this.layoutRight + 'px';
    },
    changeLayout(layout: string) {
      this.showDefaultLayout = layout;
    }
  }
})
</script>

<style scoped>
.amap-container >>> .amap-logo {
  z-index: 10 !important;
}
.amap-container >>> .amap-copyright {
  z-index: 10 !important;
}
.menu .menu-sub {
  @apply bg-fjBlue-100 text-white;
}

.content {
  @apply lg:pr-4 sm:mt-2 lg:mt-8 sm:w-full lg:w-3/4;
}

.content-1 {
  @apply w-full sm:mt-2 lg:mt-8;
}

.content .h-m, .content-1 .h-m {
  @apply sm:h-6 lg:h-[36px];
}

.h-m .font {
  @apply sm:text-sm lg:text-xl;
}

.m2-8 {
  @apply sm:mt-2 lg:mt-8;
}

</style>
