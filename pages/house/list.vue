<template>
  <div class="container mx-auto">
    <div class="w-full h-20"></div>
    <!-- condition -->
    <div class="w-full px-8 py-10 mt-16 bg-gray-100">
      <!-- 位置 -->
      <div class="w-full">
        <div class="w-full flex flex-row pb-4 border-gray-300 border-b-[1px]">
          <div class="w-1/12 text-xs font-semibold">位置</div>
          <!-- 位置菜单 -->
          <div class="flex flex-row items-center w-11/12 h-full space-x-8 text-xs">
            <!-- 区域 -->
            <div :class="select.areaId.length > 0 ? 'text-fjBlue-100' : ''" class="flex flex-row items-center" @click="locationType = '1'">
              <span>区域</span>
              <div v-show="select.areaId.length > 0" class="flex flex-row items-center" @click.stop="select['areaId'] = []">
                <span>({{ select.areaId.length }})</span>
                <svg
                  t="1631524675623"
                  class="w-2 h-2 transition-all text-fjBlue-100"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4701"
                  width="128"
                  height="128">
                  <path d="M512.000006 0a511.943117 511.943117 0 1 0 0.056883 1024A511.943117 511.943117 0 0 0 512.000006 0z m213.992223 644.593267a57.678925 57.678925 0 0 1-81.455838 81.569604L512.000006 593.626486l-132.65015 132.536385a57.394512 57.394512 0 0 1-81.455838 0 57.678925 57.678925 0 0 1 0-81.569604l132.536385-132.422619-132.536385-132.65015A57.678925 57.678925 0 1 1 379.463621 297.950894L512.000006 430.487279l132.65015-132.65015a57.678925 57.678925 0 1 1 81.569604 81.569604L593.56961 511.943117l132.422619 132.65015z" p-id="4702" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path>
                </svg>
              </div>
              <svg
                :class="locationType === '1' ? 'rotate-180' : ''"
                class="w-2 h-2 text-black transition-all opacity-60"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="128"
                height="128"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  p-id="1822"
                  data-spm-anchor-id="a313x.7781069.0.i0"
                  class="selected"
                ></path>
              </svg>
            </div>
            <!-- 商圈 -->
            <div :class="select.tradingId.length > 0 ? 'text-fjBlue-100' : ''" class="flex flex-row items-center" @click="locationType = '2'">
              <span>商圈</span>
              <div v-show="select.tradingId.length > 0" class="flex flex-row items-center" @click.stop="select['tradingId'] = []">
                <span>({{ select.tradingId.length }})</span>
                <svg
                  t="1631524675623"
                  class="w-2 h-2 transition-all text-fjBlue-100"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4701"
                  width="128"
                  height="128">
                  <path d="M512.000006 0a511.943117 511.943117 0 1 0 0.056883 1024A511.943117 511.943117 0 0 0 512.000006 0z m213.992223 644.593267a57.678925 57.678925 0 0 1-81.455838 81.569604L512.000006 593.626486l-132.65015 132.536385a57.394512 57.394512 0 0 1-81.455838 0 57.678925 57.678925 0 0 1 0-81.569604l132.536385-132.422619-132.536385-132.65015A57.678925 57.678925 0 1 1 379.463621 297.950894L512.000006 430.487279l132.65015-132.65015a57.678925 57.678925 0 1 1 81.569604 81.569604L593.56961 511.943117l132.422619 132.65015z" p-id="4702" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path>
                </svg>
              </div>
              <svg
                :class="locationType === '2' ? 'rotate-180' : ''"
                class="w-2 h-2 text-black transition-all opacity-60"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="128"
                height="128"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  p-id="1822"
                  data-spm-anchor-id="a313x.7781069.0.i0"
                  class="selected"
                ></path>
              </svg>
            </div>
            <!-- 地铁 -->
            <div :class="select.stationId.length > 0 ? 'text-fjBlue-100' : ''" class="flex flex-row items-center" @click="locationType = '3'">
              <span>地铁</span>
              <div v-show="select.stationId.length > 0" class="flex flex-row items-center" @click="select['stationId'] = []">
                <span>({{ select.stationId.length }})</span>
                <svg
                  t="1631524675623"
                  class="w-2 h-2 transition-all text-fjBlue-100"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4701"
                  width="128"
                  height="128">
                  <path d="M512.000006 0a511.943117 511.943117 0 1 0 0.056883 1024A511.943117 511.943117 0 0 0 512.000006 0z m213.992223 644.593267a57.678925 57.678925 0 0 1-81.455838 81.569604L512.000006 593.626486l-132.65015 132.536385a57.394512 57.394512 0 0 1-81.455838 0 57.678925 57.678925 0 0 1 0-81.569604l132.536385-132.422619-132.536385-132.65015A57.678925 57.678925 0 1 1 379.463621 297.950894L512.000006 430.487279l132.65015-132.65015a57.678925 57.678925 0 1 1 81.569604 81.569604L593.56961 511.943117l132.422619 132.65015z" p-id="4702" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path>
                </svg>
              </div>
              <svg
                :class="locationType === '3' ? 'rotate-180' : ''"
                class="w-2 h-2 text-black transition-all opacity-60"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="128"
                height="128"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  p-id="1822"
                  data-spm-anchor-id="a313x.7781069.0.i0"
                  class="selected"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 位置主体 -->
        <div class="w-full flex flex-row py-4 justify-end border-gray-300 border-b-[1px] text-xs text-gray-700">
          <!-- 区域 -->
          <div :class="locationType === '1' ? '' : 'h-0 w-0'" class="grid w-11/12 grid-flow-row grid-cols-12 gap-4 overflow-hidden transition-all auto-rows-auto">
            <span v-for="item in areas" :key="item.id" :class="select['areaId'].includes(item.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('areaId', item.id)">{{ item.name }}</span>
          </div>
          <!-- 商圈 -->
          <div :class="locationType === '2' ? '' : 'h-0 w-0'" class="grid w-11/12 grid-flow-row grid-cols-8 gap-4 overflow-hidden transition-all auto-rows-auto">
            <span v-for="item in tradings" :key="item.id" :class="select.tradingId.includes(item.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('tradingId', item.id)">{{ item.name }}</span>
          </div>
          <!-- 地铁 -->
          <div :class="locationType === '3' ? '' : 'h-0 w-0'" class="w-11/12 overflow-hidden transition-all">
            <div v-for="line in metroLines" :key="line.id" class="flex flex-row">
              <span class="w-1/12 mr-4 text-gray-600">{{ line.name }}</span>
              <div class="w-11/12 space-x-4">
                <span v-for="station in line.stations" :key="station.id" :class="select.stationId.includes(station.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('stationId', station.id)">{{ station.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 单价 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">单价</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in priceList" :key="index" class="flex flex-row mr-4">
              <div class="flex flex-row whitespace-nowrap">
                <input v-if="item.title !== null" v-model="select.price" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectPrice(index)" />
                <label v-if="item.title !== null" class="inline-block whitespace-nowrap" @click="checkPrice(index)">{{ item.title }}</label >
              </div>
              <div class="flex flex-row whitespace-nowrap">
                <input v-if="item.title === null" v-model="select.lowPrice" type="number" min="0" class="w-16" @change="inputPrice">
                <label v-if="item.title === null" class="inline-block whitespace-nowrap">-</label>
                <input v-if="item.title === null" v-model="select.heightPrice" type="number" min="0" class="w-16" @change="inputPrice">
                <label v-if="item.title === null" class="inline-block whitespace-nowrap">元/㎡</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 总价 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">总价</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in totalPriceList" :key="index" class="flex flex-row mr-4">
              <div v-if="item.title !== null"  class="flex flex-row whitespace-nowrap">
                <input v-model="select.totalPrice" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectTotalPrice(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkTotalPrice(index)">{{ item.title }}</label >
              </div>
              <div v-if="item.title === null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.lowTotalPrice" type="number" min="0" class="w-16" @change="inputTotalPrice">
                <label class="inline-block whitespace-nowrap">-</label>
                <input v-model="select.heightTotalPrice" type="number" min="0" class="w-16" @change="inputTotalPrice">
                <label class="inline-block whitespace-nowrap">万元</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 面积 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">面积</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in acreageList" :key="index" class="flex flex-row mr-4">
              <div v-if="item.title !== null"  class="flex flex-row whitespace-nowrap">
                <input v-model="select.acreage" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectAcreage(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkAcreage(index)">{{ item.title }}</label >
              </div>

              <div v-if="item.title === null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.lowAcreage" type="number" min="0" class="w-16" @change="inputAcreage">
                <label class="inline-block whitespace-nowrap">-</label>
                <input v-model="select.heightAcreage" type="number" min="0" class="w-16" @change="inputAcreage">
                <label class="inline-block whitespace-nowrap">㎡</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 户型 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">户型</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in houseType" :key="index" class="flex flex-row mr-4">
              <div class="flex flex-row whitespace-nowrap">
                <input v-model="select.houseType" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectHouseType(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkHouseType(index)">{{ item.title }}</label >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 类型 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">类型</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in projectType" :key="index" class="flex flex-row mr-4">
              <div class="flex flex-row whitespace-nowrap">
                <input v-model="select.projectType" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectProjectType(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkProjectType(index)">{{ item.title }}</label >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 状态 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">状态</div>
          <!-- flex flex-row flex-wrap items-center w-11/12 h-full text-xs text-gray-500 -->
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in saleState" :key="index" class="flex flex-row mr-4">
              <div class="flex flex-row whitespace-nowrap">
                <input v-model="select.saleState" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectSaleState(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkSaleState(index)">{{ item.title }}</label >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- list -->
    <div id="list" class="w-full mt-14">
      <!-- 标题 -->
      <div class="flex flex-row w-full border-b-2 border-fjBlue-100">
        <div class="w-[97px] h-[52px] bg-fjBlue-100 text-white flex flex-row justify-center items-center">
          <span class="">默认排序</span>
        </div>
        <div class="w-[97px] h-[52px] text-black flex flex-row justify-center items-center" @click="sortPrice">
          <span class="">均价</span>
          <div class="flex flex-col">
            <svg
                :class="select.sortType === '1' ? '' : 'opacity-30'"
                class="w-2 h-2 text-black transition-all rotate-180"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="128"
                height="128"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  p-id="1822"
                  data-spm-anchor-id="a313x.7781069.0.i0"
                  class="selected"
                ></path>
            </svg>
            <svg
              :class="select.sortType === '2' ? '' : 'opacity-30'"
                class="w-2 h-2 text-black transition-all"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1821"
              width="128"
              height="128"
            >
              <path
                d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                p-id="1822"
                data-spm-anchor-id="a313x.7781069.0.i0"
                class="selected"
              ></path>
            </svg>
          </div>
        </div>
        <div class="w-[97px] h-[52px] text-black flex flex-row justify-center items-center" @click="sortTime">
          <span class="">开盘时间</span>
          <div class="flex flex-col">
            <svg
                :class="select.sortType === '3' ? '' : 'opacity-30'"
                class="w-2 h-2 text-black transition-all rotate-180"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="128"
                height="128"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  p-id="1822"
                  data-spm-anchor-id="a313x.7781069.0.i0"
                  class="selected"
                ></path>
              </svg>
              <svg
                :class="select.sortType === '4' ? '' : 'opacity-30'"
                class="w-2 h-2 text-black transition-all"
                fill="currentColor"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1821"
                width="128"
                height="128"
              >
                <path
                  d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
                  p-id="1822"
                  data-spm-anchor-id="a313x.7781069.0.i0"
                  class="selected"
                ></path>
              </svg>
          </div>
        </div>
        <div v-if="false" class="flex flex-row items-center justify-end w-full">
          <span>我的关注</span>
          <svg
            class="w-2 h-2 transition-all rotate-180 text-fjRed-100"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1821"
            width="128"
            height="128"
          >
            <path
              d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
              p-id="1822"
              data-spm-anchor-id="a313x.7781069.0.i0"
              class="selected"
            ></path>
          </svg>
        </div>
      </div>
      <!-- 主体 -->
      <div class="flex flex-col w-full mt-6">
        <div v-for="item in projectList" :key="item.id" class="px-4 py-4 mb-12 hover:bg-gray-100">
          <a :href="`/house/${item.id}.html`" class="w-full h-[250px] flex flex-row">
            <!-- 左边图片 -->
            <div class="h-full w-[360px] static">
              <img :src="getImg(item)" class="object-cover w-full h-full" height="100%" width="100%" :alt="item.name">
            </div>
            <!-- 右边内容 -->
            <div class="h-full w-[920px] pl-6">
              <div class="flex flex-row items-end h-11">
                <!-- title -->
                <h1 class="h-full mb-0 text-[28px] font-bold text-black hover:text-fjBlue-100">{{ item.name }}</h1>
                <div class="h-full pt-3 text-[14px] ml-4">
                <h1 v-if="item.saleState === '1'" class="font-normal text-white rounded-sm bg-fjYellow-100">在售</h1>
                <h3 v-if="item.saleState === '2'" class="font-normal text-white rounded-sm bg-fjBlue-100">待售</h3>
                <h3 v-if="item.saleState === '3'" class="font-normal text-white rounded-sm bg-fjRed-100">售罄</h3>
                </div>
              </div>
              <div class="text-[16px]">
                <!-- 类型 -->
                <span v-if="item.type === '1'" class="text-gray-400">住宅</span>
                <span v-if="item.type === '2'" class="text-gray-400">公寓</span>
                <span v-if="item.type === '3'" class="text-gray-400">商铺</span>
                <span v-if="item.type === '4'" class="text-gray-400">写字楼</span>
                <span v-if="item.type === '5'" class="text-gray-400">仓库</span>
                <span v-if="item.type === '6'" class="text-gray-400">其它</span>
                <!-- 面积 -->
                <span v-if="item.hLayoutsById.length > 0" class="text-gray-400">|</span>
                <span class="text-gray-400" :title="getRoomArea(item.hLayoutsById)">{{ getRoomArea(item.hLayoutsById) }}</span>
                <!-- 开盘时间 -->
                <span v-if="item.openTime" class="text-gray-400">|</span>
                <span class="text-gray-400" :title="getOpenTime(item.openTime)">{{ getOpenTime(item.openTime) }}</span>
              </div>
              <!-- 右中内容 -->
              <div class="flex flex-row w-full mt-7 h-[168px] text-[#999999]">
                <div class="w-4/5 h-full text-[18px]">
                  <div class="flex flex-row">
                    <span class="mr-4" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]</span>
                    <span v-if="item.address" class="" :title="item.address">{{ item.address }}</span>
                    <span v-else>{{ item.address }}</span>
                  </div>
                  <div class="flex flex-row mt-2">
                    <span>户型：</span>
                    <span>{{getRoomList(item)}}</span>
                  </div>
                  <div class="mt-16">
                    <span v-for="item1 in getLabel(item.labels)" :key="item1.id" class="text-[14px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                  </div>
                </div>
                <div class="w-1/5 text-[14px] text-right">
                  <div class="w-full">
                    <span v-if="item.price" class="text-[#DA1111] text-[36px] font-bold">{{ item.price }}</span>
                    <span v-if="item.price">元/㎡起</span>
                    <span v-if="!item.price">暂无数据</span>
                  </div>
                  <div class="w-full">
                    <span v-if="item.updatePriceTime" class="text-xs">价格更新日期：</span>
                    <span v-if="item.updatePriceTime" class="text-xs">{{ getPriceDate(item.updatePriceTime) }}</span>
                    <span v-else class="text-xs">暂无数据</span>
                  </div>
                  <div class="w-full">
                    <span v-if="item.priceDays" class="text-xs">价格有效期：{{ item.priceDays }}天</span>
                    <span v-else class="text-xs">暂无数据</span>
                  </div>
                  <div class="w-full mt-4">
                    <span></span>
                    <span class="text-base text-fjRed-100">400-960-9889 {{ item.number }}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="w-full text-right">
      <a-pagination
        :total="total"
        :show-total="total => `共计 ${total} 条`"
        :page-size="10"
        :current="pageNum"
        @change="pageChange"
      />
    </div>
    <!--  -->
    <div class="w-full mt-12 text-[#999999] text-xs">
      郑重提示广大用户：本页面内容，旨在为满足广大用户的信息需求而免费提供，并非广告服务性信息。页面所载内容，仅供用户参考和借鉴，最终以开发商实际公示为准。商品房预售须取得《商品房预售许可证》，
用户在购房时请务必慎重查验开发商的证件信息。（注：本页面所提到房屋面积如无特别标示，均指建筑面积）
    </div>
    <!-- 广告位1 -->
    <!-- 广告位2 -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as AreaApi, AreaByCondition, AreaModel } from '~/api/model/areaModel';
import { BaseListResult, BasePageResult } from '~/api/model/baseModel';
import { Api as MetroLineApi, MetroLineByCondition, MetroLineModel } from '~/api/model/metroLineModel';
import { Api as TradingAreaApi, TradingAreaByCondition, TradingAreaModel } from '~/api/model/tradingAreaModel';
import { Api as HouseApi, priceList, totalPriceList, acreageList, houseType, projectType, saleState } from '~/api/model/houseModel';
import { Api as DictApi } from '~/api/model/dictModel';
import { getListResult } from '~/utils/response/util';


export default Vue.extend({
  name: 'Home',
  components: {
  },
  async asyncData({ $axios, store, route }) {
    // 获取区域
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
    // 获取商圈
    const data: TradingAreaByCondition = {
      provinceId: store.state.app.provinceId,
      cityId: store.state.app.cityId,
      state: '1',
    };

    const param: any = {
      data
    };
    const result:BaseListResult<TradingAreaModel>  = await $axios.$post(TradingAreaApi.GetAllTradingAreas, param);
    let tradings: any[] = [];
    if (result.code === 200) {
      tradings = getListResult(result);
    }
    // 获取地铁
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

    const query = route.query
    const fields: string[] = [
      'areaId', 
      'tradingId', 
      'stationId', 
      'price', 
      'totalPrice', 
      'acreage',
      'houseType'
    ]
    const fields2: string[] = [
      'lowPrice',
      'heightPrice',
      'lowTotalPrice',
      'heightTotalPrice',
      'lowAcreage',
      'heightAcreage',
    ]
    const select: any = {};
    fields.forEach((item) => {
      if (query[item]) {
        select[item] = (query[item] as string).split(',')
      }
    });
    fields2.forEach((item) => {
      if (query?.item) {
        select[item] = query?.item as string
      }
    });

    let projectList: any;
    let labels: any;
    let total: number = 0;

    const getList = async () => {
      const condition: any = {};
      condition.city = { id: store.state.app.cityId }
      const areaIds: any[] = [];
      if (select.areaId) {
        select.areaId.forEach((item: any) => {
          areaIds.push({id: item});
        })
      }
      if (areaIds.length > 0) {
        condition.area = areaIds;
      }
      
      condition.trading = select.tradingId;
      condition.station = select.stationId;
      condition.type = select.projectType;
      condition.saleState = select.saleState;
      condition.rooms = select.houseType;
      const sort: any = {};
      if (select.sortType === '1') {
        sort.desc = ['price']
      }
      if (select.sortType === '2') {
        sort.asc = ['price']
      }
      if (select.sortType === '3') {
        sort.desc = ['openTime']
      }
      if (select.sortType === '4') {
        sort.asc = ['openTime']
      }
      const param: any = {
        data: condition,
        page: {
          pageNum: 0,
          pageSize: 10
        },
        sort,
      };
      const result: BasePageResult<any> = await $axios.$post(HouseApi.GetByCityIdAndOrder, param);
      if (result.code === 200) {
        projectList = getListResult(result)
        const labelObj: any = {};
        projectList.forEach((item: any) => {
          if (item.labels) {
            item.labels.split(',').forEach((l:string) => {
              labelObj[l] = 0;
            })
          }
        })
        total = result.data.page.totalElements;
        const ids = Object.keys(labelObj);
        const param: any = {
        data: {
            ids,
          }
        }
        if (ids.length > 0) {
          const dictResult: BaseListResult<any> = await $axios.$post(DictApi.GetLabelsByArray, param)
          if (dictResult.code === 200) {
            labels = getListResult(dictResult);
          }
        }
        
      }
    }

    await getList();

    return {
      areas,
      metroLines,
      tradings,
      priceList,
      totalPriceList,
      acreageList,
      houseType,
      projectType,
      saleState,
      projectList,
      labels,
      total
    }
  },
  data () {
    const areaId: string[] = [];
    const tradingId: string[] = [];
    const stationId: string[] = [];
    const price: number[] = [];
    const lowPrice: string | number = '';
    const heightPrice: string | number = '';
    const totalPrice: number[] = [];
    const lowTotalPrice: string | number = '';
    const heightTotalPrice: string | number = '';
    const acreage: number[] = [];
    const lowAcreage: string | number = '';
    const heightAcreage: string | number = '';
    const houseType: number[] = [];
    const projectType: number[] = [];
    const saleState: number[] = [];
    const projectList: any[] = [];
    const sortType: string = '';
    const labels: any[] = [];
    return {
      projectList,
      locationType: '1', // 1: 区域 2:商圈 3: 地铁
      select: {
        areaId,
        tradingId,
        stationId,
        price,
        lowPrice,
        heightPrice,
        totalPrice,
        lowTotalPrice,
        heightTotalPrice,
        acreage,
        lowAcreage,
        heightAcreage,
        houseType,
        projectType,
        saleState,
        sortType,
      },
      labels,
      pageNum: 1,
      pageSize: 10,
      total: 0,
    }
  },
  watch: {
    select: {
      handler(_val, _oldVal) {
        this.getList();
      },
      deep: true,
    }
  },
  mounted() {
    // route 获取参数设置到data中
    const query = this.$route.query
    const fields: string[] = [
      'areaId', 
      'tradingId', 
      'stationId', 
      'price', 
      'totalPrice', 
      'acreage',
      'houseType'
    ]
    const fields2: string[] = [
      'lowPrice',
      'heightPrice',
      'lowTotalPrice',
      'heightTotalPrice',
      'lowAcreage',
      'heightAcreage',
    ]
    const that = this;
    fields.forEach((item) => {
      if (query[item]) {
        (that.select as any)[item] = (query[item] as string).split(',')
      }
    });
    fields2.forEach((item) => {
      if (query?.item) {
        (that.select as any)[item] = query?.item as string
      }
    });
    // await this.getList();
  },
  methods: {
    async pageChange(page: number) {
      this.pageNum = page;
      await this.getList();
      const anchor:any = this.$el.querySelector('#list')
      anchor.scrollIntoView({ behavior: 'smooth' })
    },
    getPriceDate(time: string) {
      const date = new Date(time);
      const result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      return result;
    },
    getPrice(item: any) {
      if (!item.updatePriceTime) {
        return '暂无数据'
      }
      return ''

    },
    getLabel(ids: string) {
      const result: string[] = [];
      if (ids) {
        ids.split(',').forEach((l: string) => {
          this.labels.forEach((l1: any) => {
            if (l1.id === l) {
              result.push(l1);
            }
          })
        })
      }
      return result;
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
      if (item?.sysTradingAreasById[0].name) {
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
    getRoomLabels(_roomLabelsStr: string) {
      // const result: any[] = [];
      // const labelArray: string[] = roomLabelsStr.split(',');
      // this.labels.forEach((item: any) => {
      //   if (labelArray.includes(item.id)) {
      //     result.push(item)
      //   }
      // })
      // return result;
    },
    async getList() {
      const condition: any = {};
      condition.city = { id: this.$store.state.app.cityId }
      const areaIds: any[] = [];
      this.select.areaId.forEach((item: any) => {
        areaIds.push({id: item});
      })
      if (areaIds.length > 0) {
        condition.area = areaIds;
      }
      
      condition.trading = this.select.tradingId;
      condition.station = this.select.stationId;
      condition.type = this.select.projectType;
      condition.saleState = this.select.saleState;
      condition.rooms = this.select.houseType;
      const sort: any = {};
      if (this.select.sortType === '1') {
        sort.desc = ['price']
      }
      if (this.select.sortType === '2') {
        sort.asc = ['price']
      }
      if (this.select.sortType === '3') {
        sort.desc = ['openTime']
      }
      if (this.select.sortType === '4') {
        sort.asc = ['openTime']
      }
      const param: any = {
        data: condition,
        page: {
          pageNum: this.pageNum - 1,
          pageSize: this.pageSize
        },
        sort,
      };
      this.$nuxt.$loading.start();
      try {
        const result: BasePageResult<any> = await this.$axios.$post(HouseApi.GetByCityIdAndOrder, param);
        if (result.code === 200) {
          this.projectList = getListResult(result)
          const labelObj: any = {};
          this.projectList.forEach((item) => {
            if (item.labels) {
              item.labels.split(',').forEach((l:string) => {
                labelObj[l] = 0;
              })
            }
          })
          const ids = Object.keys(labelObj);
          const param: any = {
          data: {
              ids,
            }
          }
          if (ids.length > 0) {
            const dictResult: BaseListResult<any> = await this.$axios.$post(DictApi.GetLabelsByArray, param)
            if (dictResult.code === 200) {
              this.labels = getListResult(dictResult);
            }
          }
          this.pageNum = result.data.page.number + 1;
        }
      } catch (e) {}
      finally {
        this.$nuxt.$loading.finish();
      }
    },
    getImg(item: any) {
      if (item?.firstImg?.address) {
        return item?.firstImg?.address;
      }
      return 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3d%2Fa5%2F42%2F3da542de95a5ab09941a42ff4256951d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634269587&t=80f0f68d94ff94c2c11f9ec12456637c';
    },
    selectFunc(flag: 'areaId' | 'tradingId' | 'stationId', id: string) {
      if (this.select[flag].includes(id)) {
        const i: number = this.select[flag].indexOf(id);
        this.select[flag].splice(i, 1);
      } else {
        this.select[flag].push(id);
      }
    },
    inputPrice() {
      this.select.price = [];
    },
    selectPrice(index: string | number) {
      this.select.lowPrice = '';
      this.select.heightPrice = '';
      if (index === 0) {
        this.select.price = [0]
      } else if (this.select.price.includes(0)) {
          this.select.price.splice(this.select.price.indexOf(0), 1);
      }
    },
    checkPrice(index: string | number) {
      this.select.lowPrice = '';
      this.select.heightPrice = '';
      if (index === 0) {
        this.select.price = [0]
      } else {
        if (this.select.price.includes(0)) {
          this.select.price.splice(this.select.price.indexOf(0), 1);
        }
        if (this.select.price.includes((index as number))) {
          this.select.price.splice(this.select.price.indexOf((index as number)), 1);
        } else {
          this.select.price.push((index as number));
        }
      }
    },
    inputTotalPrice() {
      this.select.totalPrice = [];
    },
    selectTotalPrice(index: string | number) {
      this.select.lowTotalPrice = '';
      this.select.heightTotalPrice = '';
      if (index === 0) {
        this.select.totalPrice = [0]
      } else if (this.select.totalPrice.includes(0)) {
          this.select.totalPrice.splice(this.select.totalPrice.indexOf(0), 1);
      }
    },
    checkTotalPrice(index: string | number) {
      this.select.lowPrice = '';
      this.select.heightPrice = '';
      if (index === 0) {
        this.select.totalPrice = [0]
      } else {
        if (this.select.totalPrice.includes(0)) {
          this.select.totalPrice.splice(this.select.totalPrice.indexOf(0), 1);
        }
        if (this.select.totalPrice.includes((index as number))) {
          this.select.totalPrice.splice(this.select.totalPrice.indexOf((index as number)), 1);
        } else {
          this.select.totalPrice.push((index as number));
        }
      }
    },
    inputAcreage() {
      this.select.acreage = [];
    },
    selectAcreage(index: string | number) {
      this.select.lowAcreage = '';
      this.select.heightAcreage = '';
      if (index === 0) {
        this.select.acreage = [0]
      } else if (this.select.acreage.includes(0)) {
          this.select.acreage.splice(this.select.acreage.indexOf(0), 1);
      }
    },
    checkAcreage(index: string | number) {
      this.select.lowAcreage = '';
      this.select.heightAcreage = '';
      if (index === 0) {
        this.select.acreage = [0]
      } else {
        if (this.select.acreage.includes(0)) {
          this.select.acreage.splice(this.select.acreage.indexOf(0), 1);
        }
        if (this.select.acreage.includes((index as number))) {
          this.select.acreage.splice(this.select.acreage.indexOf((index as number)), 1);
        } else {
          this.select.acreage.push((index as number));
        }
      }
    },
    selectHouseType(index: string | number) {
      if (index === 0) {
        this.select.houseType = [0]
      } else if (this.select.houseType.includes(0)) {
          this.select.houseType.splice(this.select.houseType.indexOf(0), 1);
      }
    },
    checkHouseType(index: string | number) {
      if (index === 0) {
        this.select.houseType = [0]
      } else {
        if (this.select.houseType.includes(0)) {
          this.select.houseType.splice(this.select.houseType.indexOf(0), 1);
        }
        if (this.select.houseType.includes((index as number))) {
          this.select.houseType.splice(this.select.houseType.indexOf((index as number)), 1);
        } else {
          this.select.houseType.push((index as number));
        }
      }
    },
    selectProjectType(index: string | number) {
      if (index === 0) {
        this.select.projectType = [0]
      } else if (this.select.projectType.includes(0)) {
          this.select.projectType.splice(this.select.projectType.indexOf(0), 1);
      }
    },
    checkProjectType(index: string | number) {
      if (index === 0) {
        this.select.projectType = [0]
      } else {
        if (this.select.projectType.includes(0)) {
          this.select.projectType.splice(this.select.projectType.indexOf(0), 1);
        }
        if (this.select.projectType.includes((index as number))) {
          this.select.projectType.splice(this.select.projectType.indexOf((index as number)), 1);
        } else {
          this.select.projectType.push((index as number));
        }
      }
    },
    selectSaleState(index: string | number) {
      if (index === 0) {
        this.select.saleState = [0]
      } else if (this.select.saleState.includes(0)) {
          this.select.saleState.splice(this.select.saleState.indexOf(0), 1);
      }
    },
    checkSaleState(index: string | number) {
      if (index === 0) {
        this.select.saleState = [0]
      } else {
        if (this.select.saleState.includes(0)) {
          this.select.saleState.splice(this.select.saleState.indexOf(0), 1);
        }
        if (this.select.saleState.includes((index as number))) {
          this.select.saleState.splice(this.select.saleState.indexOf((index as number)), 1);
        } else {
          this.select.saleState.push((index as number));
        }
      }
    },
    sortPrice() {
      if (this.select.sortType === '1') {
        this.select.sortType = '2'
        return
      }
      if (this.select.sortType === '2') {
        this.select.sortType = '1'
        return 
      }
      this.select.sortType = '1';
    },
    sortTime() {
      if (this.select.sortType === '3') {
        this.select.sortType = '4'
        return
      }
      if (this.select.sortType === '4') {
        this.select.sortType = '3'
        return 
      }
      this.select.sortType = '3';
    }
  }
})
</script>

<style scoped>
.ant-pagination >>> .ant-pagination-item-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>