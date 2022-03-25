<template>
  <div class="sm:w-screen">
    <div class="w-full sm:h-4 lg:h-24"></div>
    <!-- house content -->
    <div v-if="house" class="w-full pb-7 bg-[#f6f9fe]">
      <div class="lg:mx-auto sm:w-full lg:container">
        <!-- name and title -->
        <AppTitle :house="house" :favorite="favorite" />
        <!-- house menu -->
        <AppBar :current="'house'" :house="house" :class-name="'menu sticky z-[45] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 sm:mt-4 lg:mt-6 sm:top-[95px] lg:top-[118px] text-white'" />
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
              <div ref="sortScroll" class="relative grid h-full grid-flow-col space-x-2 text-white transition-all" :style="sortRightString">
                <div v-for="(item, index) in resourceSortList" :key="index" class="static w-24 h-full" @click="getResourceList(item.sort)">
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
                <div v-show="house.saleState != '2'" class="flex items-center justify-center ml-1">
                    <button class=" space-x-1 p-1 object-center border border-white rounded flex flex-row w-[76px] h-[19px] items-center" @click="openClue('2')">
                      <img src="~/assets/img/clue/price.png" alt="" class="w-[13px] h-[12px]">
                      <span class="text-xs font-medium text-white">降价通知</span>
                    </button>
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
              <div class="flex flex-row w-full pt-4" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">项目地址：<h5 class="flex-shrink-0">{{ house.sysAreaByAreaId.name }}-{{ house.address }}</h5> <button class="text-fjBlue-100 font-medium text-[16px] ml-4 flex-shrink-0" @click="openClue('10')">[周边配套信息]</button></div>
              <!-- house -->
              <div class="w-full pt-4">主力户型：{{ layoutLabel }} <button v-show="house.saleState != '2'" class="text-fjBlue-100 font-medium text-[16px] ml-4" @click="openClue('8')">[成交价查询]</button></div>
              <!-- 最新开盘 -->
              <h5 v-if="house.openTime" class="w-full py-4">最新开盘：{{ house.openTime.split('T')[0] }} <button class="text-fjBlue-100 font-medium text-[16px] ml-4" @click="openClue('9')">[开盘提醒我]</button></h5>
              <div v-else class="w-full py-4">最新开盘：暂未开盘 <button class="text-fjBlue-100 font-medium text-[16px] ml-4" @click="openClue('9')">[开盘提醒我]</button></div>
              <!-- 查看更多楼盘详情 -->
              <a class="w-full text-fjBlue-100 border-b-[1px] border-fjBlue-100" :href="`/house/infomation/${house.id}.html`" :title="`${house.name}详情信息`" target="_blank">
                查看更多楼盘详情
              </a>
              <div class="rounded-md  w-[506px] h-[60px]  bg-[#F7DFCF] mt-5 flex flex-row items-center pl-4 overflow-hidden relative">
                <div class="w-[338px] space-x-4 flex flex-row">
                  <img src="~/assets/img/clue/bus.png" alt="" class="w-[42px] h-[24px]">
                  <span class="text-[#EB670C] text-[20px] font-medium">看房专车免费车接车送</span>
                </div>
                <div class=" absolute top-0 -right-7 skew-x-[-36deg] w-[178px] h-full bg-[#EB670C] opacity-60 z-30 "></div>
                <div class="skew-x-[-36deg] bg-[#EB670C] w-[178px] h-full absolute top-0 -right-9 flex flex-row items-center z-40">
                  <button class="skew-x-[36deg] text-white font-[20px] object-center pl-[50px]" @click="openClue('4')">立即报名</button>  
                </div>
              </div>
              <div class="rounded-md  w-[506px] h-[60px]  bg-[#F7DFCF] mt-5 flex flex-row items-center pl-4 overflow-hidden relative">
                <div class="w-[338px] space-x-4 flex flex-row items-center">
                  <img src="~/assets/img/clue/group.png" alt="" class="w-[38px] h-[34px]">
                  <span class="text-[#EB670C] text-[18px] font-medium">正在组团砍价，成团后短信通知您</span>
                </div>
                <div class=" absolute top-0 -right-7 skew-x-[-36deg] w-[178px] h-full bg-[#EB670C] opacity-60 z-30 "></div>
                <div class="skew-x-[-36deg] bg-[#EB670C] w-[178px] h-full absolute top-0 -right-9 flex flex-row items-center z-40">
                  <button class="skew-x-[36deg] text-white font-[20px] object-center pl-[50px]" @click="openClue('5')">立即报名</button>  
                </div>
              </div>
              <div class="w-full mt-5 h-0.5 bg-[#DDDDDD]"></div>
              <!-- phone -->
              <a :href="`tel:${phoneNum},${house.number}%23`">
                <div class="w-full mt-6 ml-2 text-2xl font-bold text-fjRed-100">{{ phoneNum }} 转 {{ house.number }}</div>
              </a>
            </div>
          </div>
        </div>
        <!-- m base info -->
        <div class="w-full p-4 mt-4 bg-white lg:hidden">
          <div class="w-full h-6 leading-6 font-bold text-[18px] flex flex-row items-center">
            <span class="">{{ house.name }}</span>
            <HouseStateLabel :state="house.saleState" :class-name="'px-1 ml-2 text-[12px] font-normal text-white rounded-sm'" />
            <HouseTypeLabel :sort="house.type" :class-name="'px-1 ml-2 text-[12px] font-normal text-white rounded-sm bg-fjBlue-100 h-[15px]'" />
          </div>
          <div v-if="house.sysDictDetailBeans && house.sysDictDetailBeans.length > 0" class="w-full space-x-1">
            <span v-for="(item, index) in house.sysDictDetailBeans" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs ">{{ item.value }}</span>
          </div>
          <div class="flex flex-row items-center w-full mt-2 text-[16px]">
            <span>参考价格：</span>
            <span v-if="house.price" class="text-[18px] font-bold text-fjRed-100">{{ house.price }}<span class="text-[12px] text-fjRed-100">元/㎡</span></span>
            <span v-else class="text-[14px] text-gray-300">暂无数据</span>
            <button class="text-fjBlue-100 font-medium text-[13px] ml-2"  @click="openClue('2')">[降价通知我]</button>
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
              <div class="w-1/2 text-right">
                <span>建筑类型：</span>
                <span v-if="house.buildType">{{ buildType[house.buildType].title }}</span>
                <span v-else>暂无数据</span>
              </div>
            </div>
            <div>
              <span>主力户型：</span>
              <span v-if="layoutLabel">{{ layoutLabel }}</span>
              <span v-else>暂无数据</span>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-full">
                <span>开盘时间：</span>
                <span v-if="house.payTime">{{ house.payTime.split('T')[0] }}</span>
                <span v-else>暂无数据</span>
                <button class="text-fjBlue-100 font-medium text-[13px] ml-2" @click="openClue('9')">[开盘提醒我]</button>
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
        
        <!-- house layout -->
        <div id="layout" ref="layout" class="w-full sm:px-2 m2-8">
          <!-- h-36px -->
          <div class="flex flex-row items-center w-full sm:h-6 lg:h-[36px] border-b-[1px] border-fjBlue-100">
            <!-- 标题内容 -->
            <h2 class="sm:text-sm lg:text-xl font-bold sm:border-b-4 lg:border-b-[6px] border-fjBlue-100">{{ house.name }}户型</h2>
          </div>
          <!-- content -->
          <div class="w-full sm:mt-2 lg:mt-8">
            <div class="w-full h-12">
              <span :class="'' === showDefaultLayout ? 'bg-fjBlue-100 text-white sm:text-sm' : 'sm:text-xs'" class="w-20 px-2 py-1 mx-2 text-center transition-all rounded-sm" @click="changeLayout('')">全部</span>
              <span v-for="(item,index) in layouts" :key="index" :class="item.rooms === showDefaultLayout ? 'bg-fjBlue-100 text-white sm:text-sm' : 'sm:text-xs'" class="w-20 px-2 py-1 mx-2 text-center transition-all rounded-sm" @click="changeLayout(item.rooms)">{{ item.rooms }}室({{ item.value }})</span>
            </div>
            <div class="w-full overflow-hidden sm:h-55">
              <div class="w-full h-full overflow-hidden">
                <div  class="flex flex-row justify-between h-full p-2 text-white lg:flex-wrap sm:overflow-x-scroll " :class="isMore? 'lg:h-auto' : 'lg:h-[440px]'">
                  <div v-for="(item,index) in house.hLayoutsById" v-show="(showDefaultLayout === '' || item.room == showDefaultLayout) && item.saleState === '1'" :key="index" class="h-full mb-4 overflow-hidden transition-all shadow sm:flex-shrink-0 sm:mr-4 sm:w-48 lg:w-72">
                    <div class="overflow-hidden sm:h-32 lg:h-80">
                      <img v-if="item.hResourceByResourceId" :src="item.hResourceByResourceId.address" :alt="item.hResourceByResourceId.description" class="object-cover w-full h-full overflow-hidden transition-all duration-700 hover:scale-125">
                    </div>
                    <div class="flex flex-col w-full h-24 pt-2 sm:px-1 lg:px-4">
                      <div class="flex items-center font-bold text-black lg:flex-row sm:text-sm lg:text-xl">
                        <div class="-space-x-1">
                          <span v-if="item.room">{{ item.room }}</span>
                          <span v-if="item.room">室</span>
                          <span v-if="item.hall">{{ item.hall }}</span>
                          <span v-if="item.hall">厅</span>
                          <span v-if="item.toilet">{{ item.toilet }}</span>
                          <span v-if="item.toilet">卫</span>
                        </div>
                        <div class="text-xs">
                          <HouseStateLabel :state="item.saleState" :class-name="'sm:px-0.5 lg:px-1 pb-0.5 sm:ml-2 lg:ml-4 font-normal text-white rounded-sm'" />
                        </div>
                      </div>
                      <div class="flex flex-shrink-0 w-full text-gray-700 sm:flex-col lg:flex-row">
                        <span class="sm:w-full lg:w-[98px] whitespace-nowrap">建面约{{ item.area }}㎡</span>
                        <span class="sm:w-full lg:w-[174px] lg:ml-2 overflow-hidden whitespace-nowrap" style="overflow: hidden;white-space:nowrap;text-overflow: ellipsis;">{{ item.description }}</span>
                      </div>
                      <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="flex flex-row w-full mt-2 sm:space-x-1 lg:space-x-2">
                        <span v-for="(label, index1) in item.sysDictDetailBeans" v-show="index1 < 3" :key="index1" class="whitespace-nowrap sm:px-1 lg:px-2 py-0.5 rounded text-xs text-center text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">
                          {{ label.value }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button v-show="house.hLayoutsById.length > 0" class="text-[20px] w-full text-center sm:hidden bg-[#f6f9fe]" @click="clickMore">展开更多</button>
              </div>
              <!-- <div class="absolute sm:top-[60px] lg:top-[120px] left-0 z-10 flex flex-row items-center justify-center w-6 h-20 bg-black bg-opacity-40" @click="scrollLayoutLeft">
                <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="absolute sm:top-[60px] lg:top-[120px] right-0 z-10 flex flex-row items-center justify-center w-6 h-20 bg-black bg-opacity-40" @click="scrollLayoutRight">
                <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
              </div>
              <div class="w-full h-full overflow-hidden relactive">
                <div ref="layoutScroll" name="layoutScroll" class="relative flex flex-row h-full p-2 text-white transition-all" :style="layoutRightString" @touchstart="touchstart" @touchend="touchend" @touchmove="touchmove">
                  <div v-for="(item,index) in house.hLayoutsById" v-show="showDefaultLayout === '' || item.room == showDefaultLayout" :key="index" class="flex-shrink-0 h-full overflow-hidden transition-all shadow sm:mr-4 lg:mr-8 sm:w-48 lg:w-72">
                    <div class="overflow-hidden sm:h-32 lg:h-80">
                      <img v-if="item.hResourceByResourceId" :src="item.hResourceByResourceId.address" :alt="item.hResourceByResourceId.description" class="object-cover w-full h-full overflow-hidden transition-all duration-700 hover:scale-125">
                    </div>
                    <div class="flex flex-col w-full h-24 pt-2 sm:px-1 lg:px-4">
                      <div class="flex items-center font-bold text-black lg:flex-row sm:text-sm lg:text-xl">
                        <div class="-space-x-1">
                          <span v-if="item.room">{{ item.room }}</span>
                          <span v-if="item.room">室</span>
                          <span v-if="item.hall">{{ item.hall }}</span>
                          <span v-if="item.hall">厅</span>
                          <span v-if="item.toilet">{{ item.toilet }}</span>
                          <span v-if="item.toilet">卫</span>
                        </div>
                        <div class="text-xs">
                          <HouseStateLabel :state="item.saleState" :class-name="'sm:px-0.5 lg:px-1 pb-0.5 sm:ml-2 lg:ml-4 font-normal text-white rounded-sm'" />
                        </div>
                      </div>
                      <div class="flex flex-shrink-0 w-full text-gray-700 sm:flex-col lg:flex-row">
                        <span class="sm:w-full lg:w-[98px] whitespace-nowrap">建面约{{ item.area }}㎡</span>
                        <span class="sm:w-full lg:w-[174px] lg:ml-2 overflow-hidden whitespace-nowrap" style="overflow: hidden;white-space:nowrap;text-overflow: ellipsis;">{{ item.description }}</span>
                      </div>
                      <div v-if="item.sysDictDetailBeans && item.sysDictDetailBeans.length > 0" class="flex flex-row w-full mt-2 sm:space-x-1 lg:space-x-2">
                        <span v-for="(label, index1) in item.sysDictDetailBeans" v-show="index1 < 3" :key="index1" class="whitespace-nowrap sm:px-1 lg:px-2 py-0.5 rounded text-xs text-center text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">
                          {{ label.value }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="lg:hidden">
            <div class="text-[17px] font-bold text-[#333333]">余房查询</div>
            <div>
              <div class="relative flex flex-col items-center">
                <img src="~/assets/img/clue/surplus.png" alt="余房查询">
                <span class="text-[#EB670C] text-[16px] absolute bottom-[75px] "  @click="openClue('16')">登录查看在售房源</span>
                <button class=" -mt-1 w-full bg-[#EB670C] h-[50px] text-white text-[17px] rounded"  @click="openClue('16')">登录查询</button>
              </div>
            </div>
          </div>
          
        </div>
        <!-- 测试右侧sticky -->
        <div class="lg:flex lg:flex-row">
          <div class="lg:w-3/4">
                <!-- house advantage -->
            <div class="content-1 sm:px-2">
              <!-- h-36px -->
              <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
                <!-- 标题内容 -->
                <h2 class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}项目分析</h2>
              </div>
              <!-- content -->
              <div class="w-full m2-8">
                <!-- 项目优点 -->
                <div v-if="house.advantage" class="flex flex-row w-full h-full">
                  <div class="flex-shrink-0 font-bold font">项目优点：</div>
                  <strong class="w-5/6">{{ house.advantage }}</strong>
                </div>
                <!-- 项目缺点 -->
                <div class="flex flex-row w-full h-full">
                  <div class="font-bold font">项目缺点：</div>
                  <strong class="flex flex-row items-center justify-center"><a :href="`tel:${phoneNum},${house.number}%23`">请咨询客服了解<span class="text-fjRed-100">[{{house.name}}]</span>缺点信息</a></strong>
                </div>
              </div>
            </div>
            <!-- house dynamic -->
            <div id="dynamic" ref="dynamic" class="flex flex-col items-center content-1 sm:px-2">
              <!-- h-36px -->
              <div class="flex flex-row items-end justify-start w-full h-m border-b-[1px] border-fjBlue-100 relative">
                <!-- 标题内容 -->
                <h2 class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}动态 </h2>
                <button class=" sm:hidden object-center ml-2 mb-1 space-x-2 p-1 border border-fjBlue-100 rounded flex flex-row w-[115px] h-[25px] items-center" @click="openClue('7')">
                  <img src="~/assets/img/clue/horn.png" alt="" class="w-[15px] h-[13px]">
                  <span class="text-[13px] font-medium text-fjBlue-100">新动态通知我</span>
                </button>
                <!-- 全部 -->
                <a :href="`/house/dynamic/${house.id}/p1`" target="_blank" class="absolute right-0">
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
              <ClueButtonClue :name="'新动态通知我'" @clickButton="openClue('7')"/>
            </div>
            <!-- house question -->
            <div id="question" ref="question" class="content-1 sm:px-2">
              <!-- h-36px -->
              <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
                <!-- 标题内容 -->
                <h2 class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}问答</h2>
                <!-- 全部 -->
                <a :href="`/house/discuss/${house.id}/p1`" target="_blank">
                  <div class="text-sm text-gray-500">更多({{ questionTotal }})></div>
                </a>
              </div>
              <!-- content -->
              <div class="w-full m2-8">
                <div v-for="(item,index) in questionList" :key="index" class="w-full mb-4">
                  <!-- question Title -->
                  <div class="flex items-center w-full mb-4">
                    <span class="bg-[#DA1111] px-1 py-1 text-[14px] rounded mr-2 text-white">问</span>
                    <a :href="`/house/discuss/${item.id}.html`" target="_blank">
                      <span class="text-black sm:text-sm lg:text-lg hover:border-b border-fjBlue-100">{{ item.content }}</span>
                    </a>
                  </div>
                  <!-- question Content -->
                  <div v-if="item.answerEntities && item.answerEntities.length > 0">
                    <div v-for="(answer, index1) in item.answerEntities" v-show="index1 < 2 || item.id === showMoreId" :key="index1" class="flex flex-row w-full mb-2 transition-all">
                      <div class="w-3/4 overflow-hidden">
                        <div class="flex flex-row items-center lg:space-x-4 sm:space-x-2">
                          <img :src="answer.avatar" alt="" class="flex-shrink-0 lg:w-[60px] lg:h-[60px] sm:w-[30px] sm:h-[30px] rounded-full ">
                          <div class="lg:space-y-3 sm:space-y-1">
                            <div class="sm:text-xs text-[#666666] text-[20px]">{{ answer.author }}</div>
                            <div class="sm:text-xs text-[#666666] text-[18px]">{{ answer.content }}</div>
                            <div class="sm:text-xs text-[#999999]">{{ answer.createTime.split('T')[0] }}</div>
                          </div>
                        </div>
                      </div>

                      <div class="flex flex-row items-end justify-end sm:w-2/5 lg:w-1/4 text-[#999999]">
                        <div class="lg:px-3 sm:px-1 border border-[#DDDDDD] flex flex-row items-center rounded-full space-x-2" @click="clickDiscuss(item.id)">
                          <img src="~/assets/img/answer.png" alt="">
                          <span>{{ item.answerEntities.length }}</span>
                        </div>
                        <div class=" lg:ml-4 sm:ml-2 flex flex-row items-center border border-[#DDDDDD] rounded-full space-x-2 lg:px-3 sm:px-1" @click="agreeAnswer(answer.id)"> 
                          <img v-if="agree.includes(answer.id)" src="~/assets/img/agree.png" alt="">
                          <img v-else src="~/assets/img/disagree.png" alt="">
                          <span v-if="agree.includes(answer.id)">{{ answer.likeNum + 1 }}</span>
                          <span v-else>{{ answer.likeNum }}</span>
                        </div>
                      </div>
                    </div>
                    <div v-if="item.answerEntities.length > 2">
                      <div v-if="showMoreId !== item.id" class="w-full text-center sm:text-xs" @click="showMore(item.id)">展开更多({{ item.answerEntities.length }})</div>
                      <div v-else class="w-full text-center sm:text-xs" @click="showMore('')">合并更多({{ item.answerEntities.length }})</div>
                    </div>
                  </div>
                  <div v-else class="text-right">
                    <button class="px-8 border py-1 border-fjBlue-100 text-fjBlue-100 text-[16px] rounded-full" @click="addAnswer(item.id)">立即回答</button>
                  </div>
                  <!-- question Time -->
                  <!-- <div v-if="item.updateBy" class="text-gray-400 sm:text-xs lg:text-sm">{{ item.updateTime.split('T')[0] }}</div>
                  <div v-else class="text-gray-400 sm:text-xs lg:text-sm">{{ item.createTime.split('T')[0] }}</div> -->
                </div>
              </div>
              <!-- 立即提问 -->
              <div class="w-full rounded-lg border border-[#999999] text-center lg:py-4 sm:py-2" @click="addQuestion">
                <button class="text-[#999999] lg:text-[22px] sm:text-[18px]">立即提问</button>
              </div>
            </div>
            <!-- house around -->
            <div id="around" ref="around" class="flex flex-col items-center content-1 sm:px-2">
              <!-- h-36px -->
              <div class="flex flex-row items-end justify-start w-full h-m border-b-[1px] border-fjBlue-100">
                <!-- 标题内容 -->
                <h2 class="font font-bold border-b-[6px] border-fjBlue-100 flex justify-center items-center">{{ house.name }}周边</h2>
                <button class=" sm:hidden ml-2 mb-1 space-x-2 p-1 object-center border border-fjBlue-100 rounded flex flex-row w-[115px] h-[25px] items-center" @click="openClue('10')">
                    <img src="~/assets/img/clue/horn.png" alt="" class="w-[15px] h-[13px]">
                    <span class="text-[13px] font-medium text-fjBlue-100">了解周边规划</span>
                  </button>
              </div>
              <div id="aroundMap" class="w-full m2-8 sm:h-48 lg:h-112"></div>
              <ClueButtonClue :name="'了解配套'" @clickButton="openClue('10')"/>
            </div>
            <!-- house price -->
            <div id="price" ref="price" class="flex flex-col items-center bg-white content-1 sm:px-2">
              <!-- h-36px -->
              <div class="flex flex-row items-center justify-between w-full h-m border-b-[1px] border-fjBlue-100">
                <!-- 标题内容 -->
                <h2 class="font font-bold border-b-[6px] border-fjBlue-100">{{ house.name }}价格走势</h2>
              </div>
              <div class="w-full sm:h-56 lg:h-80">
                <line-echart :option="option" />
              </div>
               <!-- <div class="lg:hidden mt-4 bg-[#D6E6FF] w-[180px] h-[45px] flex flex-row object-center items-center justify-center rounded-full border border-fjBlue-100"  @click="openClue('2')">
                <img src="~/assets/img/clue/horn.png" alt="" class="w-[15px] h-[13px]">
                <span class="text-[#015EEA] text-[16px] font-medium ml-2">价格波动通知我</span>
              </div> -->
              <ClueButtonClue :name="'价格波动通知我'" @clickButton="openClue('2')"/>
            </div>      
          </div>
          <div class="lg:w-1/4">
            <div id="news" class="bg-[#f6f9fe] lg:p-2 lg:sticky sm:px-2 lg:z-[19] lg:float-right sm:w-full lg:w-full m2-8 lg:transition-all lg:top-44">
                <!-- title -->
              <div class="flex flex-row items-center justify-between w-full sm:h-6 lg:h-[36px] border-b-[1px] border-fjBlue-100">
                <h2 class="sm:text-sm lg:text-xl font-bold border-b-[6px] border-fjBlue-100">资讯</h2>
              </div>
              <!-- content -->
              <div class="w-full pt-1 space-y-2 sm:px-2">
                <div v-for="(item,index) in newsList" :key="index">
                  <a :href="`/info/${item.id}.html`" target="_blank" class="text-black sm:text-sm hover:text-fjBlue-100">{{ item.title }}</a>
                </div>
              </div>
              <!-- ad -->
              <div class="lg:mt-9 sm:hidden">
                <div v-if="activities " class="relative" @click="openActivityClue('15', activities.id)">
                  <img :src="activities.headImg" alt="广告" class="w-[306px] h-[358px]">
                  <span class="absolute lg:top-4 lg:w-full text-center text-white text-[26px] ">{{ activities.title }}</span>
                  <span class="absolute lg:top-[80px] lg:w-full text-center text-white text-[18px] ">{{ activities.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- house 推荐 -->
        <recomend-house class=""/>
      </div>
    </div>
    <ClueLeaveClue v-show="openActivity" class="absolute z-[60] w-full h-full" :city="cityId" :look="lookTime" :project-id="id" :activity-id="activityId" :clue-type="clueType" @isOpen="isOpen" />
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="cityId" :look="lookTime"  :project-id="id" :clue-type="clueType" @isOpen="isOpen" />
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
import { ActivityApi, ActivityModel } from '~/api/clue/activity';
import { AnswerApi } from '~/api/user/userApi';
const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
export default Vue.extend({
  name: 'HouseInfo',
  components: {
    LineEchart,
    RecomendHouse,
  },
  async asyncData ({ $axios, params, store, req, redirect, route }) {
    const start = new Date().getTime();
    const userAgent = req?.headers['user-agent'] || '';

    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }
    let activities;
    const getActivity = async () => {
      // 获取楼盘相关活动
      const activityParam = {
        data: {
          projectId: id
        }
      }
      
      if (activityParam.data.projectId) {
        const activityResult = await $axios.$post(ActivityApi.GetByProjectId, activityParam)
        if (activityResult?.code === 200 && activityResult?.data) {
          const result:ActivityModel = getDataResult(activityResult);
          if (result) {
            activities = result;
          }
        }
      }
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
      if (result?.code === 200) {
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
      if (result?.code === 200) {
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
      if (result?.code === 200) {
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
      if (result?.code === 200) {
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
      if (result?.code === 200) {
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
    const accessToken = store.state.app.accessToken;
    const tokenType = store.state.app.tokenType
    let house: any;
    let favorite;
    let result: any;
    const cityId: string = store.state.app.cityId;
    let lookTime: number = 0;
    const getProject = async () => {
      try {
        if (tokenType && accessToken) {
          $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        }
        
        result = await $axios.$post(HouseApi.GetProject, param)
        if (result?.code === 200) {
          favorite = result.data?.favorite
          house = getDataResult(result);
          lookTime = house?.lookTime
          const breadcrumb: Breadcrumb[] = [];
          breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
          breadcrumb.push({ title: '新房', href: '/house/list', icon: 'list' })
          breadcrumb.push({ title: house.sysAreaByAreaId.name, href: '/house/list?areaId=' + house.sysAreaByAreaId.id, icon: 'area' })
          store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
          getPrice(house);
          await getHouseInfo();
        }
        
      } catch (error) {
        console.log(error);
        console.log(result)
        if (result?.code === 401) {
          // router.push('/login?redirect='+ route.path)
          redirect('/login?redirect='+ route.path)
        }
      } finally {
        $axios.setHeader('Authorization', '')
      }
    }
    
    await Promise.all([
      getActivity(),
      getProject(),
    ])
    
    
    
    let isMobile: any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
        option.yAxis.show = false;
    } else {
      isMobile = false;
    }
    const clueType: string = '';
    const opening: boolean = false;

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("新房详情首页调用接口使用时间：", end - start)

    return { accessToken, tokenType, activities, lookTime, cityId, clueType, opening, id, house, resourceSortList, dynamicList, totalDynamic, newsList, totalNews, resourceList, showSort, questionList, 
questionTotal, option, phoneNum, isMobile, favorite, isMore: false }
  },
  data () {
    const flag: string = 'layout';
    const clueType: string = '';
    const opening: boolean = false;
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
      isMore: false,
      flag,
      activityId: '',
      openActivity: false,
      clueType,
      opening,
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
      favorite: '',
      lookTime: 0,
      tokenType: '',
      accessToken: '',
      agree: [''],
      xStart: 0,
      xEnd: 0,
    }
  },
  head() {
    const houseName: string = this.house?.name;
    const houseAreaName: string = this.house?.sysAreaByAreaId.name || '';
    const houseCityName: string = this.house?.sysCityByCityId.name || '';
    const houseProvinceName: string = this.house?.sysProvinceByProvinceId.name;
    const latLng: string = this.house?.latitude + '' + this.house?.longitude;
    const title: string = `【${houseName}_${houseCityName}${houseName}楼盘详情】售楼处电话_开发商详情-房匠网`;
    const description: string = `房匠网为您提供${houseCityName}${houseAreaName}${houseName}详情、售楼处电话、开盘时间、项目介绍、交房时间、地址、绿化率、物业费等楼盘信息，关注房匠网。`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.house?.firstImg?.address;
    const sandImgAddress: string = this.house?.sandImg?.address;
    const pubTime: string = this.house?.createTime.split('.')[0];
    let upTime: string = this.house?.updateTime || this.house?.createTime || '';
    upTime = upTime.split('.')[0];
    const keyword: string = `${houseName}详情,${houseName}售楼处电话,${houseName}售楼处地址,${houseName}开发商`;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${title}","images":["${firstImgAddress}","${sandImgAddress}", "${sandImgAddress}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    let location: string;
    if (this.house?.latitude && this.house?.longitude) {
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
  watch: {
    // flag() {this.topFlag = this.flag || 'layout'},
    topFlag() {},
  },
  mounted() {
    // if (this.topFlag) {
    //   this.go(this.topFlag);
    // }
    
    
    // window.addEventListener('scroll', this.handleScroll);
    MapLoader().then(AMap => {
      this.map = new AMap.Map("aroundMap", {
        zoom: 11,
        center: [this.house?.longitude, this.house?.latitude],
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
            position: [that.house?.longitude, that.house?.latitude]
        });
        const content = '<span>' + that.house?.name + '</span>'
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
    clickMore() {
      if (this.isMore) {
        this.isMore = false;
      } else {
        this.isMore = true;
      }
    },
    touchend(event: any) {
      const e = event || window.event;
      this.xEnd = e.changedTouches[0].clientX;
      // console.log('end::::::', this.xEnd)
    },
    touchstart(event: any) {
      const e = event || window.event;
      this.xStart = e.touches[0].clientX;
      // console.log('start::::::::', this.xStart);
    },
    touchmove(event: any) {
      const e = event || window.event;
      if (this.house?.hLayoutsById && this.house?.hLayoutsById?.length > 0) {
        if ((this.xStart - e.touches[0].clientX + this.layoutRight) < 0 || (this.xStart - e.touches[0].clientX + this.layoutRight) > this.house?.hLayoutsById.length * 200) {
          return;
        }
        this.layoutRight = this.xStart - e.touches[0].clientX + this.layoutRight
        
        this.layoutRightString = 'right: ' + this.layoutRight + 'px';
        // console.log('move::::', this.xStart - e.touches[0].clientX )
        this.xStart = e.touches[0].clientX;
      }
      
    },
    async agreeAnswer(id: string) {
      if (this.accessToken && this.tokenType) {
        if (this.agree.includes(id)) {
          return
        }
        try {
          this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          const param = {
            data: {
              id,
            }
          }
          const result = await this.$axios.$post(AnswerApi.Agree, param)
          if (result?.code === 200) {
            this.agree.push(id)
          }
        } catch (error) {
          
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    },
    clickDiscuss(id: string) {
      this.$router.push('/house/discuss/' + id + '.html')
    },
    addAnswer(id: string) {
      if (this.accessToken && this.tokenType) {
        this.$router.push('/house/discuss/'+ id + '.html')
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    },
    addQuestion() {
      if (this.accessToken && this.tokenType) {
        this.$router.push('/house/discuss/' + this.id + '/p1')
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    },
    openActivityClue(type: string, id: string) {
      this.activityId = id;
      this.clueType = type;
      this.openActivity = true;
    },
    isOpen() {
      this.opening = false;
      this.openActivity = false;
    },
    openClue(type: string) {
      this.clueType = type;
      this.opening = true;
    },
    showMore(id: string) {
      this.showMoreId = id;
    },
    scrollRight() {
      // if ((this as any).$refs.sortScroll.offsetWidth - 713 < this.sortRight) {
      //   return;
      // }
      let times = 100;
      if (this.isMobile) {
        times = 50;
      }
      this.sortRight = this.sortRight + times;
      this.sortRightString = 'right: ' + this.sortRight + 'px';
    },
    scrollLeft() {
      let times = 100;
      if (this.isMobile) {
        times = 50;
      }
      if (this.sortRight - times < 0) {
        return;
      }
      this.sortRight = this.sortRight - times;
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
        if (result?.code === 200) {
          this.resourceList = getDataResult(result);
        }
      } catch(e) {}
      finally {
        this.$nuxt.$loading.finish();
      }
    },
    getHouseType() {
      const layouts: any[] = this.house?.hLayoutsById;
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
    // handleScroll() {
    //   const layoutTop = (this as any).$refs.layout.getBoundingClientRect().top
    //   const dynamicTop = (this as any).$refs.dynamic.getBoundingClientRect().top
    //   const questionTop = (this as any).$refs.question.getBoundingClientRect().top;
    //   const aoroundTop = (this as any).$refs.around.getBoundingClientRect().top;
    //   const priceTop = (this as any).$refs.price.getBoundingClientRect().top;
    //   // 150 距离顶部的距离
    //   let top = 200;
    //   if(this.isMobile) {
    //     top = 150;
    //   }
    //   if (layoutTop < top ) {
    //     this.topFlag = 'layout'
    //   }
    //   if (dynamicTop < top ) {
    //     this.topFlag = 'dynamic'
    //   }
    //   if (questionTop < top ) {
    //     this.topFlag = 'question'
    //   }
    //   if (aoroundTop < top ) {
    //     this.topFlag = 'around';
    //   }
    //   if (priceTop < top ) {
    //     this.topFlag = 'price'
    //   }
    // },
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
  @apply hover:bg-[#017af0] text-white;
}
.menu .menu-sub-ing {
  @apply bg-[#0033d8] hover:bg-[#0033d8];
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
