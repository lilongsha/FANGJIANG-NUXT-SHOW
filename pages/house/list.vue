<template>
  <div class="mx-auto lg:container">
    <div class="w-full lg:h-24"></div>
    <!-- condition -->
    <div class="w-full px-8 py-10 mt-16 bg-gray-100 sm:hidden">
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
          <div :class="locationType === '1' ? 'w-11/12' : 'h-0 w-0'" class="grid grid-flow-row grid-cols-12 gap-4 overflow-hidden transition-all auto-rows-auto">
            <span v-for="item in areas" :key="item.id" :class="select['areaId'].includes(item.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('areaId', item.id)">{{ item.name }}</span>
          </div>
          <!-- 商圈 -->
          <div :class="locationType === '2' ? 'w-11/12' : 'h-0 w-0'" class="grid grid-flow-row grid-cols-8 gap-4 overflow-hidden transition-all auto-rows-auto">
            <span v-for="item in tradings" :key="item.id" :class="select.tradingId.includes(item.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('tradingId', item.id)">{{ item.name }}</span>
          </div>
          <!-- 地铁 -->
          <div :class="locationType === '3' ? 'w-11/12' : 'h-0 w-0'" class="overflow-hidden transition-all ">
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
              <div v-if="item.title !== null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.price" :title="item.title" type="radio" name="price" :value="index" class="w-3 h-4 mr-1" @change="selectPrice(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkPrice(index)">{{ item.title }}</label >
              </div>
              <div v-if="item.title === null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.lowPrice" type="number" min="0" class="w-16" @change="inputPrice">
                <label class="inline-block whitespace-nowrap">-</label>
                <input v-model="select.highPrice" type="number" min="0" class="w-16" @change="inputPrice">
                <label class="inline-block whitespace-nowrap">元/㎡</label>
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
                <input v-model="select.totalPrice" :title="item.title" type="radio" name="totalPrice" :value="index" class="w-3 h-4 mr-1" @change="selectTotalPrice(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkTotalPrice(index)">{{ item.title }}</label >
              </div>
              <div v-if="item.title === null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.lowTotalPrice" type="number" min="0" class="w-16" @change="inputTotalPrice">
                <label class="inline-block whitespace-nowrap">-</label>
                <input v-model="select.highTotalPrice" type="number" min="0" class="w-16" @change="inputTotalPrice">
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
                <input v-model="select.acreage" :title="item.title" type="radio" name="area" :value="index" class="w-3 h-4 mr-1" @change="selectAcreage(index)" />
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
    <!-- 移动端codition -->
    <div class="fixed top-14 z-[51] bg-white w-full flex flex-col lg:hidden">
      <!-- title -->
      <div class="flex flex-row justify-around w-full h-12 px-2">
        <!-- 位置 区域 商圈 地铁 -->
        <div class="m-menu-titile" @click="showMenuBodyM('0')">
          <span>位置</span>
          <svg
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
        <!-- 价格 -->
        <div class="m-menu-titile" @click="showMenuBodyM('1')">
          <span>价格</span>
          <svg
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
        <!-- 户型 -->
        <div class="m-menu-titile" @click="showMenuBodyM('2')">
          <span>户型</span>
          <svg
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
        <!-- 筛选 -->
        <div class="m-menu-titile" @click="showMenuBodyM('3')">
          <span>筛选</span>
          <svg
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
        <!-- 排序 -->
        <div class="m-menu-titile" @click="showMenuBodyM('4')">
          <svg t="1636419020893" class="sort" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2535" width="200" height="200"><path d="M358.265 273.813l-111.561 94.165c-19.508 16.466-48.67 14-65.136-5.508-16.466-19.507-14-48.67 5.508-65.135l187.597-158.346c30.052-25.365 76.036-4.003 76.036 35.322v682.667c0 25.528-20.694 46.222-46.222 46.222-25.528 0-46.222-20.694-46.222-46.222V273.813z m410.837 389.409c19.507-16.466 48.67-14 65.135 5.508 16.466 19.507 14 48.67-5.507 65.135L641.132 892.211c-30.05 25.365-76.036 4.003-76.036-35.322V174.222c0-25.528 20.695-46.222 46.223-46.222 25.527 0 46.222 20.694 46.222 46.222v583.165l111.56-94.165z" p-id="2536" data-spm-anchor-id="a313x.7781069.0.i2" class="selected" fill="#000000"></path></svg>
        </div>
      </div>
      <!-- body -->
      <div :class="selectMenuM !== '' ? 'max-h-[45vh]' : 'max-h-0'" class="w-full overflow-hidden ease-linear border-b shadow" style="transition: max-height .5s;">
        <!-- 区域、商圈、地铁 -->
        <div :class="selectMenuM !== '0' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="m-menu-body-menu">
            <span :class="locationType === '1' ? 'text-fjBlue-100' : ''" @click="locationType = '1'">区域</span>
            <span :class="locationType === '2' ? 'text-fjBlue-100' : ''" @click="locationType = '2'">商圈</span>
            <span :class="locationType === '3' ? 'text-fjBlue-100' : ''" @click="locationType = '3'">地铁</span>
          </div>
          <div :class="locationType === '1' ? 'm-sub-menu' : 'm-sub-menu-hidden'">
            <div :class="locationType === '1' ? 'w-full h-full' : 'h-0 w-0'" class="m-sub-menu-div">
              <span v-for="item in areas" :key="item.id" :class="select['areaId'].includes(item.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('areaId', item.id)">{{ item.name }}</span>
            </div>
          </div>
          <div :class="locationType === '2' ? 'm-sub-menu' : 'm-sub-menu-hidden'">
            <div :class="locationType === '2' ? 'w-full h-full' : 'h-0 w-0'" class="m-sub-menu-div">
              <span v-for="item in tradings" :key="item.id" :class="select.tradingId.includes(item.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('tradingId', item.id)">{{ item.name }}</span>
            </div>
          </div>
          <div :class="locationType === '3' ? 'm-sub-menu' : 'm-sub-menu-hidden'">
            <div :class="locationType === '3' ? 'w-full h-full' : 'h-0 w-0'" class="flex flex-row">
              <div class="flex flex-col w-1/2 overflow-hidden max-h-[33vh] space-y-2 overflow-y-auto">
                <span v-for="line in metroLines" :key="line.id" :class="line.id === selectMenuLine" class="w-full mr-4 text-gray-600" @click="selectMenuLine = line.id">{{ line.name }}</span>
              </div>
              <div class="flex flex-col w-1/2">
                <div v-for="line in metroLines" v-show="selectMenuLine === line.id" :key="line.id" class="w-full mr-4 text-gray-600 space-y-2 flex flex-col overflow-hidden max-h-[33vh] overflow-y-auto">
                  <span v-for="station in line.stations" :key="station.id" :class="select.stationId.includes(station.id) ? 'text-fjBlue-100' : ''" @click="selectFunc('stationId', station.id)">{{ station.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 均价、总价 -->
        <div :class="selectMenuM !== '1' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="m-menu-body-menu">
            <span :class="selectMenuPrice === '1' ? 'text-fjBlue-100' : ''" @click="selectMenuPrice = '1'">均价</span>
            <span :class="selectMenuPrice === '2' ? 'text-fjBlue-100' : ''" @click="selectMenuPrice = '2'">总价</span>
          </div>
          <div :class="selectMenuPrice === '1' ? 'm-sub-menu-col' : 'm-sub-menu-hidden'">
            <div v-for="(item, index) in priceList" :key="index">
              <div v-if="item.title !== null" class="flex flex-row items-center whitespace-nowrap">
                <input v-model="select.price" :title="item.title" type="radio" name="price" :value="index" class="w-3 h-4 mr-1" @change="selectPrice(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkPrice(index)">{{ item.title }}</label >
              </div>
            </div>
          </div>
          <div :class="selectMenuPrice === '2' ? 'm-sub-menu-col' : 'm-sub-menu-hidden'">
            <div v-for="(item, index) in totalPriceList" :key="index">
              <div v-if="item.title !== null"  class="flex flex-row whitespace-nowrap">
                <input v-model="select.totalPrice" :title="item.title" type="radio" name="totalPrice" :value="index" class="w-3 h-4 mr-1" @change="selectTotalPrice(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkTotalPrice(index)">{{ item.title }}</label >
              </div>
            </div>
          </div>
        </div>
        <!-- 户型 -->
        <div :class="selectMenuM !== '2' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-sm text-gray-500">
            <div v-for="(item, index) in houseType" :key="index" class="flex flex-row justify-center mr-4">
              <div class="flex flex-row items-center justify-start w-14 whitespace-nowrap">
                <input v-model="select.houseType" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectHouseType(index)" />
                <label class="inline-block whitespace-nowrap" @click="checkHouseType(index)">{{ item.title }}</label >
              </div>
            </div>
          </div>
        </div>
        <!-- 筛选 -->
        <div :class="selectMenuM !== '3' ? 'max-h-0' : 'max-h-[33vh]'" class="w-full px-4 pb-2 overflow-y-auto ease-linear" style="transition: max-height .5s;">
          <!-- 面积 -->
          <div class="w-full">
            <div class="w-full my-2 font-bold"><span>面积</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
              <div v-for="(item, index) in acreageList" :key="index">
                <div v-if="item.title !== null"  class="flex flex-row items-center whitespace-nowrap">
                  <input v-model="select.acreage" :title="item.title" type="radio" name="area" :value="index" class="w-3 h-4 mr-1" @change="selectAcreage(index)" />
                  <label class="inline-block whitespace-nowrap" @click="checkAcreage(index)">{{ item.title }}</label >
                </div>
              </div>
            </div>
          </div>
          <!-- 类型 -->
          <div class="w-full">
            <div class="w-full my-2 font-bold"><span>类型</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
              <div v-for="(item, index) in projectType" :key="index">
                <div class="flex flex-row items-center whitespace-nowrap">
                  <input v-model="select.projectType" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectProjectType(index)" />
                  <label class="inline-block whitespace-nowrap" @click="checkProjectType(index)">{{ item.title }}</label >
                </div>
              </div>
            </div>
          </div>
          <!-- 状态 -->
          <div class="w-full">
            <div class="w-full my-2 font-bold"><span>状态</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
              <div v-for="(item, index) in saleState" :key="index">
              <div class="flex flex-row whitespace-nowrap">
                <input v-model="select.saleState" :title="item.title" type="checkbox" :name="item.title" :value="index" class="w-3 h-4 mr-1" @change="selectSaleState(index)" />
                <label class="items-center inline-block whitespace-nowrap" @click="checkSaleState(index)">{{ item.title }}</label >
              </div>
            </div>
            </div>
          </div>
        </div>
        <!-- 排序 -->
        <div :class="selectMenuM !== '4' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-gray-500">
            <div class="text-sm text-center">
              <div :class="select.sortType === '1' ? 'text-fjBlue-100' : ''" @click="sortPrice">均价从高到底</div>
              <div :class="select.sortType === '2' ? 'text-fjBlue-100' : ''" @click="sortPrice">均价从底到高</div>
              <div :class="select.sortType === '3' ? 'text-fjBlue-100' : ''" @click="sortTime">开盘时间顺序</div>
              <div :class="select.sortType === '4' ? 'text-fjBlue-100' : ''" @click="sortTime">开盘时间倒序</div>
            </div>
          </div>
        </div>
        <!-- 底部按钮 -->
        <div class="flex flex-row w-full p-1 bg-white border h-14">
          <div class="w-2/3">
            <!-- 单价输入 -->
            <div :class="selectMenuM === '1' && selectMenuPrice === '1' ? 'p-1 w-full' : 'w-0 h-0'" class="overflow-hidden">
              <div class="flex flex-row w-full whitespace-nowrap">
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.lowPrice" pattern="[0-9]*" type="number" placeholder="最底均价" min="0" class="w-full text-xs bg-gray-200" @change="inputPrice">
                </div>
                <label class="inline-block p-2 text-center align-middle whitespace-nowrap">-</label>
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.highPrice" pattern="[0-9]*" type="number" placeholder="最高均价" min="0" class="w-full text-xs bg-gray-200" @change="inputPrice">
                </div>
              </div>
            </div>
            <!-- 总价输入 -->
            <div :class="selectMenuM === '1' && selectMenuPrice === '2' ? 'p-1 w-full' : 'w-0 h-0'" class="overflow-hidden">
              <div class="flex flex-row w-full whitespace-nowrap">
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.lowTotalPrice" pattern="[0-9]*" type="number" placeholder="最底总价" min="0" class="w-full text-xs bg-gray-200" @change="inputTotalPrice">
                </div>
                <label class="inline-block p-2 text-center align-middle whitespace-nowrap">-</label>
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.highTotalPrice" pattern="[0-9]*" type="number" placeholder="最高总价" min="0" class="w-full text-xs bg-gray-200" @change="inputTotalPrice">
                </div>
              </div>
            </div>
            <!-- 面积输入 -->
            <div :class="selectMenuM === '3' ? 'p-1 w-full' : 'w-0 h-0'" class="overflow-hidden">
              <div class="flex flex-row w-full whitespace-nowrap">
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.lowAcreage" pattern="[0-9]*" type="number" placeholder="最底面积" min="0" class="w-full text-xs bg-gray-200" @change="inputAcreage">
                </div>
                <label class="inline-block p-2 text-center align-middle whitespace-nowrap">-</label>
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.heightAcreage" pattern="[0-9]*" type="number" placeholder="最高面积" min="0" class="w-full text-xs bg-gray-200" @change="inputAcreage">
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 p-2 text-center align-middle">
            <button class="w-full px-2 py-1 text-white rounded bg-fjBlue-100" @click="cancel">重置</button>
          </div>
        </div>
      </div>
    </div>
    <div :class="selectMenuM !== '' ? '' : 'hidden'" class="fixed bottom-0 left-0 right-0 z-50 block top-14" style="background: rgba(0,0,0,.5);" @click="selectMenuM = ''"></div>
    <div id="list" class="h-14"></div>
    <!-- list -->
    <div class="w-full overflow-hidden sm:mt-1 lg:mt-14">
      <!-- 标题 -->
      <div class="flex flex-row w-full border-b-2 sm:hidden border-fjBlue-100">
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
      <div class="w-full sm:mt-1 lg:mt-6">
        <div v-for="item in projectList" :key="item.id" class="sm:mb-2 sm:px-2 lg:p-4 lg:mb-12 hover:bg-gray-100">
          <a :href="`/house/${item.id}.html`" target="_blank" class="w-full sm:h-36 lg:h-[250px] flex flex-row">
            <!-- 左边图片 -->
            <div class="sm:h-24 lg:h-full sm:w-1/3 lg:w-[360px] static">
              <img :src="getImg(item)" class="object-cover w-full h-full" :alt="item.name">
            </div>
            <!-- 右边内容 -->
            <div class="h-full sm:w-2/3 lg:w-[920px] sm:pl-2 lg:pl-6">
              <div class="flex flex-row items-center lg:h-11">
                <!-- title -->
                <h1 class="h-full mb-0 sm:pb-0 sm:text-[16px] lg:text-[28px] font-bold text-black hover:text-fjBlue-100">{{ item.name }}</h1>
                <div class="h-full sm:pt-1 sm:text-[12px] sm:ml-2 lg:pt-3 lg:text-[14px] lg:ml-4">
                  <h1 v-if="item.saleState === '1'" class="text-white rounded-sm bg-fjYellow-100">在售</h1>
                  <h3 v-if="item.saleState === '2'" class="text-white rounded-sm bg-fjBlue-100">待售</h3>
                  <h3 v-if="item.saleState === '3'" class="text-white rounded-sm bg-fjRed-100">售罄</h3>
                </div>
              </div>
              <div class="sm:mt-1 sm:text-[12px] lg:text-[16px]">
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
              <div class="flex flex-row w-full lg:mt-7 lg:h-[168px] text-[#999999]">
                <div class="sm:w-full lg:w-3/5 h-full sm:text-[12px] lg:text-[18px]">
                  <div class="flex flex-row items-center sm:flex-shrink-0">
                    <svg version="1.1" class="mr-1 text-gray-400 sm:w-3 sm:h-3 lg:w-4 lg:h-4 icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
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
                    <span class="overflow-hidden sm:w-2/5 whitespace-nowrap sm:mr-1 lg:mr-4" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]</span>
                    <span class="overflow-hidden sm:w-3/5 whitespace-nowrap" :title="item.address">{{ item.address }}</span>
                  </div>
                  <div class="flex flex-row items-center lg:mt-2">
                    <svg version="1.1" class="mr-1 text-gray-400 sm:w-3 sm:h-3 lg:w-4 lg:h-4 icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">  <image id="image0" width="48" height="48" x="0" y="0"
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
                  <div class="flex flex-row items-center lg:hidden">
                    <div class="w-2/5">
                      <span v-if="item.price" class="text-[#DA1111] text-[16px] font-bold">{{ item.price }}</span>
                      <span v-if="item.price" class="text-[12px]">元/㎡</span>
                      <span v-if="!item.price">暂无数据</span>
                    </div>
                    <div class="w-3/5">
                      <span class="text-xs">更新日期：</span>
                      <span v-if="item.updatePriceTime" class="text-xs">{{ item.updatePriceTime.split('T')[0] }}</span>
                      <span v-else class="text-xs">暂无数据</span>
                    </div>
                  </div>
                  <div v-if="item.labels" class="lg:mt-16">
                    <span v-for="(item1, index) in item.labels.split(',')" :key="index" class="sm:text-[12px] lg:text-[14px] rounded sm:px-1 lg:px-2 lg:py-1 sm:mr-1 lg:mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1 }}</span>
                  </div>
                </div>
                <div class="sm:w-0 sm:overflow-hidden sm:hidden lg:w-2/5 text-[14px] text-right">
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
                  <div class="w-full mt-4">
                    <span></span>
                    <span class="text-2xl font-bold text-fjRed-100">{{ phoneNum }}&nbsp;&nbsp;转&nbsp;&nbsp;{{ item.number }}</span>
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
        :simple="isMobile"
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
import { Api as HouseApi, priceList, totalPriceList, acreageList, houseType, projectType, saleState, phoneNum } from '~/api/model/houseModel';
import { getDataResult } from '~/utils/response/util';
const fields: string[] = [
  'areaId', 
  'tradingId', 
  'stationId', 
  'acreage',
  'houseType'
]
const fields2: string[] = [
  'price', 
  'totalPrice', 
  'lowPrice',
  'highPrice',
  'lowTotalPrice',
  'highTotalPrice',
  'lowAcreage',
  'heightAcreage',
]

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
      areas = getDataResult(areaResult);
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
      tradings = getDataResult(result);
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
      metroLines = getDataResult(metroLineResult);
    }

    const query = route.query
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
        projectList = getDataResult(result)
        total = result.data.page.totalElements;
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
      total
    }
  },
  data () {
    const areaId: string[] = [];
    const tradingId: string[] = [];
    const stationId: string[] = [];
    const price: number = 0;
    const lowPrice: string | number = '';
    const highPrice: string | number = '';
    const totalPrice: number = 0;
    const lowTotalPrice: string | number = '';
    const highTotalPrice: string | number = '';
    const acreage: number = 0;
    const lowAcreage: string | number = '';
    const heightAcreage: string | number = '';
    const houseType: number[] = [0];
    const projectType: number[] = [0];
    const saleState: number[] = [0];
    const projectList: any[] = [];
    const sortType: string = '';
    const areas: any[] = [];
    const selectMenuM: string = '';
    const selectMenuLine: string = '';
    const selectMenuPrice: string = '1';
    return {
      areas,
      projectList,
      locationType: '1', // 1: 区域 2:商圈 3: 地铁
      select: {
        areaId,
        tradingId,
        stationId,
        price,
        lowPrice,
        highPrice,
        totalPrice,
        lowTotalPrice,
        highTotalPrice,
        acreage,
        lowAcreage,
        heightAcreage,
        houseType,
        projectType,
        saleState,
        sortType,
      },
      pageNum: 1,
      pageSize: 10,
      total: 0,
      phoneNum,
      selectMenuM,
      selectMenuLine,
      selectMenuPrice,
      isMobile: true,
    }
  },
  head() {
    let city:string = this.$store.app.city || '石家庄';
    if (city.endsWith('市')) {
      city = city.substring(city.length - 1);
    }
    let area:string = '';
    if (this.select.areaId) {
      this.areas.forEach((item) => {
        if (item.id === this.select.areaId[0]) {
          area = item.name;
        }
      })
    }
    if (!area) {
      area = city;
    }
    
    
    return {
      title: `${area}新房_${area}楼盘_${area}买房-房匠网`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${city}新房,${city}楼盘,${city}买房购房,${city}房价,${city}新房网`
        },
        {
          hid: 'description',
          name: 'description',
          content: `房匠网为您提供;${city}新房,${city}楼盘,${city}买房相关信息,房匠网-让买房变得简单!`
        },
      ],
      script: [
        {
          innerHTML: `{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"https://www.fangjiang.com","appid":"1713124212115293","title":"${area}新房_${area}楼盘_${area}买房-房匠网","images":[""],"description": "房匠网为您提供;${city}新房,${city}楼盘,${city}买房相关信息,房匠网-让买房变得简单!","upDate":"2021-10-14T18:00:00"}`,
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
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
  beforeMount() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        // 跳转移动端页面
        this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  mounted() {
    // route 获取参数设置到data中
    const query = this.$route.query
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
    cancel() {
      this.select = {
        areaId: [],
        tradingId: [],
        stationId: [],
        price: 0,
        lowPrice: '',
        highPrice: '',
        totalPrice: 0,
        lowTotalPrice: '',
        highTotalPrice: '',
        acreage: 0,
        lowAcreage: '',
        heightAcreage: '',
        houseType: [],
        projectType: [],
        saleState: [],
        sortType: '',
      }
    },
    showMenuBodyM(flag: string) {
      if (this.selectMenuM === flag) {
        this.selectMenuM = '';
      } else {
        this.selectMenuM = flag;
      }
      
    },
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
      if (item?.sysTradingAreasById[0] && item?.sysTradingAreasById[0].name) {
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
      if (!this.select.projectType.includes(0)) {
        condition.type = this.select.projectType;
      }
      if (!this.select.saleState.includes(0)) {
        condition.saleState = this.select.saleState;
      }
      if (!this.select.houseType.includes(0)) {
        condition.rooms = this.select.houseType;
      }
      condition.lowPrice = this.select.lowPrice;
      condition.highPrice = this.select.highPrice;
      condition.lowTotalPrice = this.select.lowTotalPrice;
      condition.highTotalPrice = this.select.highTotalPrice;
      condition.lowArea = this.select.lowAcreage;
      condition.highArea = this.select.heightAcreage;
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
          this.projectList = getDataResult(result)
          this.pageNum = result.data.page.number + 1;
          this.total = result.data.page.totalElements;
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
      this.select.price = 0;
    },
    selectPrice(index: number) {
      this.select.lowPrice = '';
      this.select.highPrice = '';
      if (index === 0) {
        this.select.lowPrice = '';
        this.select.highPrice = '';
      } else {
        this.select.lowPrice = priceList[index].lowPrice || '';
        this.select.highPrice = priceList[index].highPrice || '';
      }
    },
    checkPrice(index: number) {
      this.select.price = index;
      if (index === 0) {
        this.select.lowPrice = '';
        this.select.highPrice = '';
      } else {
        this.select.lowPrice = priceList[index].lowPrice || '';
        this.select.highPrice = priceList[index].highPrice || '';
      }
    },
    inputTotalPrice() {
      this.select.totalPrice = 0;
    },
    selectTotalPrice(index: number) {
      if (index === 0) {
        this.select.lowTotalPrice = '';
        this.select.highTotalPrice = '';
      } else {
        this.select.lowTotalPrice = totalPriceList[index].lowTotalPrice || '';
        this.select.highTotalPrice = totalPriceList[index].highTotalPrice || '';
      }
      
    },
    checkTotalPrice(index: number) {
      this.select.totalPrice = index;
      if (index === 0) {
        this.select.lowTotalPrice = '';
        this.select.highTotalPrice = '';
      } else {
        this.select.lowTotalPrice = totalPriceList[index].lowTotalPrice || '';
        this.select.highTotalPrice = totalPriceList[index].highTotalPrice || '';
      }
    },
    inputAcreage() {
      this.select.acreage = 0;
    },
    selectAcreage(index: number) {
      if (index === 0) {
        this.select.lowAcreage = '';
        this.select.heightAcreage = '';
      } else {
        this.select.lowAcreage = acreageList[index].lowAcreage || '';
        this.select.heightAcreage = acreageList[index].highAcreage || '';
      }
    },
    checkAcreage(index: number) {
      this.select.acreage = index;
      if (index === 0) {
        this.select.lowAcreage = '';
        this.select.heightAcreage = '';
      } else {
        this.select.lowAcreage = acreageList[index].lowAcreage || '';
        this.select.heightAcreage = acreageList[index].highAcreage || '';
      }
    },
    selectHouseType(index: string | number) {
      if (index === 0) {
        this.select.houseType = [0]
      } else if (this.select.houseType.includes(0)) {
          this.select.houseType.splice(this.select.houseType.indexOf(0), 1);
      }
      if (this.select.houseType.length < 1) {
        this.select.houseType = [0]
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
      if (this.select.houseType.length < 1) {
        this.select.houseType = [0]
      }
    },
    selectProjectType(index: string | number) {
      if (index === 0) {
        this.select.projectType = [0]
      } else if (this.select.projectType.includes(0)) {
          this.select.projectType.splice(this.select.projectType.indexOf(0), 1);
      }
      if (this.select.projectType.length < 1) {
        this.select.projectType = [0];
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
      if (this.select.projectType.length < 1) {
        this.select.projectType = [0];
      }
    },
    selectSaleState(index: string | number) {
      if (index === 0) {
        this.select.saleState = [0]
      } else if (this.select.saleState.includes(0)) {
          this.select.saleState.splice(this.select.saleState.indexOf(0), 1);
      }
      if (this.select.saleState.length < 1) {
        this.select.saleState = [0]
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
      if (this.select.saleState.length < 1) {
        this.select.saleState = [0]
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
    },
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

.m-menu-titile {
  @apply flex flex-row items-center;
}

.m-menu-titile span {
  @apply mr-1;
}

.m-menu-titile svg {
  @apply w-3 h-3 text-black transition-all opacity-60;
}

.m-menu-titile .sort {
  @apply w-5 h-5 text-black transition-all opacity-60;
}

.m-menu-body-menu {
  @apply w-1/3 flex flex-col space-y-2;
}

.m-menu-body-menu span {
  @apply w-full border-b text-center;
}

.m-sub-menu {
  @apply w-2/3 flex flex-row pl-2;
}

.m-sub-menu-col {
  @apply w-2/3 flex flex-col pl-2 space-y-2;
}

.m-sub-menu-hidden {
  @apply h-0 w-0 overflow-hidden hidden;
}

.m-sub-menu-div {
  @apply grid grid-flow-row grid-cols-1 gap-2 overflow-hidden transition-all auto-rows-auto max-h-[33vh] overflow-y-auto;
}
</style>