<template>
  <div class="w-full">
    <!-- 轮播图功能区域定位 -->
    <div class="absolute z-10 flex flex-row w-full h-64 top-28">
      <div class="w-1/3"></div>
      <!-- 轮播图功能区域 -->
      <div class="container h-full mx-auto">
        <!-- 菜单 -->
        <div class="menu-box"  @mouseleave="closeMenu()">
          <!-- 菜单左侧 -->
          <div class="menu-box-left">
            <!-- 菜单区域 -->
            <div class="menu-item group" @mouseover="openMenu(1)">
              <div class="menu-item-left">
                <div class="menu-item-left-content">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">区域</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- 菜单商圈 -->
            <div class="menu-item group" @mouseover="openMenu(2)">
              <div class="menu-item-left">
                <div class="flex flex-row items-center transition-all group-hover:pl-4">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">商圈</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
            <!-- 菜单地铁 -->
            <div class="menu-item group" @mouseover="openMenu(3)">
              <div class="menu-item-left">
                <div class="flex flex-row items-center transition-all group-hover:pl-4">
                  <span class="">
                    <svg t="1630750851703" class="w-6 h-6 pr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17555" width="128" height="128"><path d="M738.304 852.8896H309.1968a134.1952 134.1952 0 0 1-134.0928-134.0928V218.2144a134.1952 134.1952 0 0 1 134.0928-134.0928h429.1072a134.1952 134.1952 0 0 1 134.0928 134.0928v500.5824a134.1952 134.1952 0 0 1-134.0928 134.0928zM309.1968 137.728a80.5376 80.5376 0 0 0-80.4352 80.4864v500.5824a80.5376 80.5376 0 0 0 80.4352 80.4864h429.1072a80.5888 80.5888 0 0 0 80.4864-80.4864V218.2144A80.5888 80.5888 0 0 0 738.304 137.728z" fill="#ffffff" p-id="17556" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M200.2432 546.6112h647.0656v53.6576H200.2432zM316.0064 938.496a26.8288 26.8288 0 0 1-19.0464-45.7728l75.8784-75.8784a26.8288 26.8288 0 0 1 37.9904 38.1952l-75.8784 75.5712a26.5728 26.5728 0 0 1-18.944 7.8848zM731.5456 938.496a26.5728 26.5728 0 0 1-18.944-7.8848L636.7232 855.04a26.8288 26.8288 0 0 1 37.9392-37.9392l75.8784 75.8784a26.8288 26.8288 0 0 1-18.9952 45.7728z" fill="#ffffff" p-id="17557" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path><path d="M398.592 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17558" data-spm-anchor-id="a313x.7781069.0.i10" class="selected"></path><path d="M648.9088 703.8976m-35.7376 0a35.7376 35.7376 0 1 0 71.4752 0 35.7376 35.7376 0 1 0-71.4752 0Z" fill="#ffffff" p-id="17559" data-spm-anchor-id="a313x.7781069.0.i9" class="selected"></path></svg>
                  </span>
                  <span class="text-lg text-white">地铁</span>
                </div>
                <svg
                  class="w-5 h-5 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 菜单右侧menu-right -->
          <div v-show="menuShow.isShow" class="w-3/5 h-full ml-4 transition-all bg-black bg-opacity-80 rounded-2xl">
            <!-- 区域 -->
            <div v-show="menuShow.flag === 1" class="grid grid-flow-row grid-cols-5 gap-4 m-8 text-center text-white">
              <a v-for="area in areas" :key="area.id" class="overflow-hidden text-base border-blue-500 rounded-xl whitespace-nowrap opacity-60 hover:opacity-100" :href="`/house/list?areaId=${area.id}`" target="_blank">{{ area.name }}</a>
            </div>
            <!-- 商圈 -->
            <div v-show="menuShow.flag === 2" class="flex flex-row w-full h-full py-4 ml-4 text-lg text-white">
              <div class="flex flex-col w-1/5 h-full space-y-2 overflow-auto">
                <div v-for="area in areas" :key="area.id" @click="getTradings(area.id)" class="flex flex-row justify-between w-full text-sm opacity-60 hover:opacity-100">
                  <span>{{ area.name }}</span>
                  <svg
                  class="w-3 h-3 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
                </div>
              </div>
              <div v-show="!showTrading" class="w-2/3 h-full ml-2">
                <div class="grid w-full grid-flow-row grid-cols-3 gap-2 overflow-auto text-center text-white">
                  <a v-for="trading in tradings" :key="trading.id" class="h-6 overflow-hidden text-xs border-blue-500 rounded-xl whitespace-nowrap opacity-60 hover:opacity-100" :href="`/house/list?tradingId=${trading.id}`" target="_blank">{{ trading.name }}</a>
                </div>
                <AppLoading ref="loadingTrading" :box-class="'w-1/4 h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
              </div>
            </div>
            <!-- 地铁 -->
            <div v-show="menuShow.flag === 3" class="flex flex-row w-full h-full py-4 ml-4 text-lg text-white">
              <div class="flex flex-col w-1/5 h-full space-y-2 overflow-auto">
                <div v-for="metroLine in metroLines" :key="metroLine.id" class="flex flex-row justify-between w-full text-sm opacity-60 hover:opacity-100" @click="getMetroStations(metroLine.id)">
                  <span>{{ metroLine.name }}</span>
                  <svg
                  class="w-3 h-3 opacity-50"
                  t="1630750146834"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2040"
                  width="128"
                  height="128"
                >
                  <path
                    d="M671.5392 512L332.1344 172.544a32 32 0 0 1 45.2608-45.2096l358.4 358.4a37.12 37.12 0 0 1 0 52.5312l-358.4 358.4a32 32 0 0 1-45.2608-45.2608L671.5904 512z"
                    fill="#ffffff"
                    p-id="2041"
                    data-spm-anchor-id="a313x.7781069.0.i0"
                    class="selected"
                  ></path>
                </svg>
                </div>
              </div>
              <div v-show="!showMetroStation" class="w-2/3 h-full ml-2">
                <div class="grid w-full grid-flow-row grid-cols-3 gap-2 overflow-auto text-center text-white">
                  <a v-for="metroStation in metroStations" :key="metroStation.id" class="overflow-hidden text-xs border-blue-500 rounded-xl whitespace-nowrap opacity-60 hover:opacity-100" :href="`/house/list?metroStationId=${metroStation.id}`" target="_blank">{{ metroStation.name }}</a>
                </div>
                <AppLoading ref="loadingMetroStation" :box-class="'w-1/4 h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3"></div>
    </div>
    <!-- banner 轮播图 -->
    <a-carousel class="w-full" dot-position="right" effect="fade" autoplay>
      <img
        v-for="item in banners"
        :key="item.id"
        :src="item.address"
        :title="item.title"
        :alt="item.description"
      />
    </a-carousel>
    <!-- 推荐楼盘 -->
    <div class="container mx-auto mt-12">
      <!-- 标题 -->
      <div class="flex flex-row items-center w-full ml-4 h-9">
        <!-- 竖线 -->
        <div class="w-4 h-full bg-black"></div>
        <!-- 标题内容 -->
        <div class="ml-2 text-xl font-bold">推荐楼盘</div>
      </div>
      <!-- 图片盒子 -->
      <div class="flex flex-row w-[full-8] mx-4 mt-8 h-96 overflow-hidden">
        <a v-for="item in recommendProjects" :key="item.id" :href="`/house/${item.id}.html`" :class="selectRecommendKey === item.id ? 'select-recommend' : '' " class="relative block h-full transition-all duration-500 ease-in-out bg-black w-1/10">
          <img :src="item.firstImg.address" :alt="item.name" width="10%" class="object-cover w-full h-full" height="100%" @mouseover="selectRecommendKey = item.id">
          <div v-show="selectRecommendKey === item.id" class="absolute bottom-0 flex flex-row justify-between w-full px-4 py-4 text-2xl font-bold text-white bg-black whitespace-nowrap bg-opacity-30">
            <span>{{ item.name }}</span>
            <div>
              <span class="text-fjRed-100">{{ item.price }}</span>
              <span>元/㎡</span>
            </div>
          </div>
        </a>
          <!-- <img v-for="item in recommendProjects" :key="item.id" :src="item.firstImg.address" :alt="item.name" width="10%" :class="selectRecommendKey === item.id ? 'select-recommend' : '' " class="object-cover h-full transition-all duration-500 ease-in-out w-1/10" height="100%" @mouseover="selectRecommendKey = item.id">
          <div v-for="item in recommendProjects" v-show="selectRecommendKey === item.id" :key="item.id"  class="">{{ item.name }}</div> -->
      </div>
    </div>
    <!-- 热销楼盘 -->
    <div class="container mx-auto mt-12">
      <!-- 标题 -->
      <div class="flex flex-row items-center w-full ml-4 h-9">
        <!-- 竖线 -->
        <div class="w-4 h-full bg-black"></div>
        <!-- 标题内容 -->
        <div class="ml-2 text-xl font-bold">热销楼盘</div>
      </div>
      <!-- 图片盒子 -->
      <div class="grid grid-cols-4 grid-rows-1 gap-2 w-[full-8] mx-4 h-112 overflow-hidden">
        <a v-for="item in hotProjects" :key="item.id" href="" class="block w-[96%] h-[96%] mx-[2%] my-[2%] bg-white shadow-md">
            <div class="w-full h-7/10">
              <img :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
            </div>
            <div class="w-full px-4 mt-2 bg-white h-3/10">
              <div class="font-bold">
                <span class="text-2xl text-black py-0.5">{{ item.name }}</span>
                <span v-if="item.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
                <span v-if="item.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
                <span v-if="item.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
                <span v-if="item.type === '1'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">住宅</span>
                <span v-if="item.type === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">公寓</span>
                <span v-if="item.type === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">商铺</span>
                <span v-if="item.type === '4'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">写字楼</span>
                <span v-if="item.type === '5'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">仓库</span>
                <span v-if="item.type === '6'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">其它</span>
              </div>
              <div class="flex flex-row items-center">
                <svg
                  class="w-4 h-4 text-gray-400 icon"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2536"
                  width="128"
                  height="128">
                  <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                    p-id="2537"
                    data-spm-anchor-id="a313x.7781069.0.i2"
                    class="selected"></path>
                </svg>
                <span class="overflow-hidden text-gray-400" :title="item.address">{{ item.address }}</span>
              </div>
              <div class="flex flex-row items-center">
                <svg
                  class="w-4 h-4 text-gray-400 icon"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2536"
                  width="128"
                  height="128">
                  <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                    p-id="2537"
                    data-spm-anchor-id="a313x.7781069.0.i2"
                    class="selected"></path>
                </svg>
                <span class="overflow-hidden text-gray-400" :title="getRooms(item.hLayoutsById)">{{ getRooms(item.hLayoutsById) }}</span>
                <span class="ml-2 overflow-hidden text-gray-400" :title="getRoomArea(item.hLayoutsById)">{{ getRoomArea(item.hLayoutsById) }}</span>
              </div>
              <div class="flex flex-row items-end justify-between bg-black h-9">
                <div class="flex flex-row items-end space-x-2 ">
                  <span v-for="label in getRoomLabels(item.labels)" :key="label.id" class="px-1 text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm" :title="label.value">{{ label.value }}</span>
                </div>
                <div>
                  <span class="text-white align-text-bottom">AAAAA</span>
                </div>
              </div>
            </div>
        </a>
      </div>
    </div>
    <!-- 资讯 -->
    <div></div>
    <!-- 置业顾问 -->
    <div></div>
    <!-- 购房流程 -->
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex';
import { Api as AreaApi, AreaByCondition, AreaModel } from '@/api/model/areaModel'
import { Api as TradingAreaApi, TradingAreaByCondition, TradingAreaModel } from '@/api/model/tradingAreaModel';
import { Api as DictApi } from '@/api/model/dictModel';
import { Api as BannerApi, BannerByCondition, BannerModel } from '@/api/model/bannerModel';
import { Api as MetroLineApi, MetroLineByCondition, MetroStationByCondition, MetroStationModel, MetroLineModel } from '@/api/model/metroLineModel';
import { Api as ProjectApi, RecommendProjectByCondition } from '@/api/model/houseModel';
import { BaseListResult, BasePageResult } from '@/api/model/baseModel';
import { getListResult } from '@/utils/response/util';

export default Vue.extend({
  name: 'Home',
  async asyncData({ $axios, store }) {
    // banner
    const bannerData: BannerByCondition = {
      cityId: store.state.app.cityId,
    };
    const bannerParam: any = {
      data: bannerData
    };
    const bannerResult:BaseListResult<BannerModel> = await $axios.$post(BannerApi.GetBanners, bannerParam)
    let banners: BannerModel[] = [];
    if (bannerResult.code === 200) {
      banners = getListResult(bannerResult);
    }

    // 区域参数
    const areaData: AreaByCondition = {
      id: store.state.app.cityId,
      state: '1',
    };
    const areaParam: any = {
      data: areaData
    };
    const areaResult:BaseListResult<AreaModel> = await $axios.$post(AreaApi.GetAllAreas, areaParam)
    let areas: any[] = [];
    if (areaResult.code === 200) {
      areas = getListResult(areaResult);
    }

    // metro line
    const metroLineData: MetroLineByCondition = {
      cityId: store.state.app.cityId,
    };
    const metroLineParam: any = {
      data: metroLineData
    };
    const metroLineResult:BaseListResult<MetroLineModel> = await $axios.$post(MetroLineApi.GetAllLines, metroLineParam)
    let metroLines: MetroLineModel[] = [];
    if (metroLineResult.code === 200) {
      metroLines = getListResult(metroLineResult);
    }

    // 获取推荐楼盘
    const recommendProject: RecommendProjectByCondition = {
      cityId: store.state.app.cityId,
    };
    const recommendProjectParam: any = {
      data: recommendProject
    }
    const recommendProjectResult:BaseListResult<any> = await $axios.$post(ProjectApi.GetRecommendByCityId, recommendProjectParam);
    let recommendProjects: any[] = []
    if (recommendProjectResult.code === 200) {
      recommendProjects = getListResult(recommendProjectResult);
    }
    const selectRecommendKey = recommendProjects[0].id;

    // 获取热销楼盘
    const hotProjectParam: any = {
      data: {
        cityId: store.state.app.cityId
      },
      page: {
        pageNum: 0,
        pageSize: 4,
      },
      sort: {
        desc: ['orderNum'],
      },
    }
    const hotProjectResult:BasePageResult<any> = await $axios.$post(ProjectApi.GetByCityIdAndOrder, hotProjectParam);
    let hotProjects: any[] = []
    if (hotProjectResult.code === 200) {
      hotProjects = getListResult(hotProjectResult);
    }
    const labelIdsObj: any = {};
    hotProjects.forEach((item) => {
      if (item.labels) {
        item.labels.split(',').forEach((label: string) => {
          labelIdsObj[label] = label;
        })
      }
    });
    const labelIds = Object.keys(labelIdsObj);
    const labelParam: any = {
      data: {
        ids: labelIds
      }
    }
    const labelsResult:BaseListResult<any> = await $axios.$post(DictApi.GetLabelsByArray, labelParam);
    let labels: any[] = [];
    if (labelsResult.code === 200) {
      labels = getListResult(labelsResult);
    }

    return {
      banners,
      areas,
      metroLines,
      recommendProjects,
      selectRecommendKey,
      hotProjects,
      labels
    }
  },
  data() {
    return {
      menuShow: {
        isShow: false,
        flag: 0,
      },
      showTrading: false,
      showMetroStation: false,
      tradings: [],
      metroStations: [],
      newsType: 0, // 资讯分类 0 1 2 3
      labels: [],
    }
  },
  computed: {
    getTest() {
      return this.$store.state.app.test;
    }
  },
  mounted() {
    this.BREADCRUMB_RE_SET();
  },
  methods: {
    getRooms(rooms: any[]) {
      // 是否放到asyncData
      const roomObj: any = {};
      rooms.forEach((item) => {
        const room = item.room;
        roomObj[room] = room;
      })
      const roomArray = Object.keys(roomObj)
      const result: string = roomArray.toString().replaceAll(',', '室/')
      if (result) {
        return result + '室'
      }
      return '暂无数据'
    },
    getRoomArea(rooms: any[]) {
      // 是否放到asyncData
      const areaObj: any = {};
      rooms.forEach((item) => {
        const area = item.area;
        areaObj[area] = area;
      })
      const areaArray = Object.keys(areaObj)
      if (areaArray.length > 0) {
        return '建面约' + areaArray[0] + '-' + areaArray[areaArray.length - 1] + '㎡'
      }
      return '暂无数据'
    },
    getRoomLabels(roomLabelsStr: string) {
      const result: any[] = [];
      const labelArray: string[] = roomLabelsStr.split(',');
      this.labels.forEach((item: any) => {
        if (labelArray.includes(item.id)) {
          result.push(item)
        }
      })
      return result;
    },
    async getTradings(areaId: string) {
      (this.$refs.loadingTrading as any).start();
      try {
        const data: TradingAreaByCondition = {
          provinceId: this.$store.state.app.provinceId,
          cityId: this.$store.state.app.cityId,
          areaId,
          state: '1',
        };

        const param: any = {
          data
        };
        const result:BaseListResult<TradingAreaModel>  = await this.$axios.$post(TradingAreaApi.GetAllTradingAreas, param);
        if (result.code === 200) {
          this.tradings = getListResult(result);
        }
      } catch(e) {}
      finally {
        (this.$refs.loadingTrading as any).finish();
      }
    },
    async getMetroStations(metroLineId: string) {
      (this.$refs.loadingMetroStation as any).start();
      try {
        const data: MetroStationByCondition = {
          lineId: metroLineId,
          state: '1',
        };
        const param: any = {
          data
        };
        const result:BaseListResult<MetroStationModel>  = await this.$axios.$post(MetroLineApi.GetStations, param);
        if (result.code === 200) {
          this.metroStations = getListResult(result);
        }
      } catch(e) {}
      finally {
        (this.$refs.loadingMetroStation as any).finish();
      }
    },
    openMenu(flag: number) {
      this.menuShow.isShow = true;
      this.menuShow.flag = flag;
    },
    closeMenu() {
      this.menuShow.isShow = false;
      this.menuShow.flag = 0;
    },
    ...mapMutations('app', ['BREADCRUMB_RE_SET']),
  },
})
</script>
<style scoped>
a {
  @apply text-white hover:text-white;
}

/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 420px;
  line-height: 420px;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.menu-box {
  /* 菜单最大盒子 */
  @apply flex flex-row w-full h-full;
}

.menu-box-left {
  /* 菜单盒子左侧 */
  @apply flex flex-col justify-center w-1/5 h-full space-y-4 bg-black bg-opacity-80 rounded-2xl;
}

.menu-item {
  /* 菜单盒子左侧下列表 */
  @apply z-10;
}
.menu-item-left {
  /* 菜单盒子左侧下列表左侧 */
  @apply flex flex-row items-center justify-between py-1 mx-2 transition-all group-hover:bg-white group-hover:bg-opacity-30 group-hover:rounded-md;
}
.menu-item-left-content {
  /* 菜单盒子左侧下列表左侧内容 */
  @apply flex flex-row items-center transition-all group-hover:pl-4;
}

.menu-right {
  /* 菜单盒子右侧 */
  @apply w-3/5 h-full ml-4 bg-blue-500;
}

.select-recommend {
  @apply w-2/3;
}
</style>