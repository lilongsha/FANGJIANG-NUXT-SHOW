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
              <div v-show="select.areaId.length > 0" @click.stop="">
                <a :href="getClearUrl('areaId')" class="flex flex-row items-center">
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
                </a>
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
              <div v-show="select.tradingId.length > 0" @click.stop="">
                <a :href="getClearUrl('tradingId')" class="flex flex-row items-center">
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
                </a>
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
              <div v-show="select.stationId.length > 0" @click.stop="">
                <a :href="getClearUrl('stationId')" class="flex flex-row items-center">
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
                </a>
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
            <div v-for="item in areas" :key="item.id">
              <a :class="select['areaId'].includes(item.id) ? 'text-fjBlue-100' : ''" :href="getUrl(item.id, 'areaId')">{{ item.name }}</a>
            </div>
          </div>
          <!-- 商圈 -->
          <div :class="locationType === '2' ? 'w-11/12' : 'h-0 w-0'" class="grid grid-flow-row grid-cols-8 gap-4 overflow-hidden transition-all auto-rows-auto">
            <div v-for="item in tradings" :key="item.id" >
              <a :class="select.tradingId.includes(item.id) ? 'text-fjBlue-100' : ''" :href="getUrl(item.id, 'tradingId')">{{ item.name }}</a>
            </div>
          </div>
          <!-- 地铁 -->
          <div :class="locationType === '3' ? 'w-11/12' : 'h-0 w-0'" class="overflow-hidden transition-all ">
            <div v-for="line in metroLines" :key="line.id" class="flex flex-row">
              <span class="w-1/12 mr-4 text-gray-600">{{ line.name }}</span>
              <div class="w-11/12 space-x-4">
                <a v-for="station in line.stations" :key="station.id" :class="select.stationId.includes(station.id) ? 'text-fjBlue-100' : ''" :href="getUrl(station.id, 'stationId')">{{ station.name }}</a>
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
              <a v-if="item.title !== null" class="flex flex-row whitespace-nowrap" :href="getUrl(index + '', 'price')">
                <img v-if="select.price === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
              <div v-if="false && item.title === null" class="flex flex-row whitespace-nowrap">
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
              <a v-if="item.title !== null" class="flex flex-row whitespace-nowrap" :href="getUrl(index + '', 'totalPrice')">
                <img v-if="select.totalPrice === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
              <div v-if="false && item.title === null" class="flex flex-row whitespace-nowrap">
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
              <a v-if="item.title !== null" class="flex flex-row whitespace-nowrap" :href="getUrl(index + '', 'acreage')">
                <img v-if="select.acreage === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>

              <div v-if="false && item.title === null" class="flex flex-row whitespace-nowrap">
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
              <a class="flex flex-row whitespace-nowrap" :href="getUrl(index + '', 'houseType')">
                <img v-if="select.houseType.indexOf(index + '') !== -1 || select.houseType.length < 1 && index === 0" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
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
              <a class="flex flex-row whitespace-nowrap" :href="getUrl(index + '', 'projectType')">
                <img v-if="select.projectType.indexOf(index + '') !== -1 || select.projectType.length < 1 && index === 0" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
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
              <a class="flex flex-row whitespace-nowrap" :href="getUrl(index + '', 'saleState')">
                <img v-if="select.saleState.indexOf(index + '') !== -1 || select.saleState.length < 1 && index === 0" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between w-full mt-7 sm:hidden">
      <div class="w-[625px] h-[154px] bg-cover rounded-md bg-bimg pl-[80px] pt-[24px]">
        <div>
          <div class="text-[34px] font-bold text-white italic">线上<span class="mx-4">“<span class="text-[#ECF000]">0</span>接触”</span>找房</div>
          <div class="text-[12px] tracking-[13px] text-white italic">足不出户换新房安全更安心</div>
          <button class="bg-[#ECF000] rounded-3xl font-bold h-[26px] w-[91px] text-fjBlue-100 text-[12px] mt-[12px] italic " @click="helpUser">马上看房</button>
        </div>
      </div>
      <div class="w-[625px] h-[154px] bg-cover rounded-md bg-rightbg pl-[33px] pt-[22px]">
        <div class="text-[38px] font-bold text-white">看房专车免费接送</div>
        <button class="bg-white rounded-3xl font-bold h-[39px] w-[140px] text-fjBlue-100 text-[18px] mt-[12px]" @click="openActivityClue('4')">立即预约</button>
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
              <a v-for="item in areas" :key="item.id" :class="select['areaId'].includes(item.id) ? 'text-fjBlue-100' : ''"  :href="getUrl(item.id, 'areaId')">{{ item.name }}</a>
            </div>
          </div>
          <div :class="locationType === '2' ? 'm-sub-menu' : 'm-sub-menu-hidden'">
            <div :class="locationType === '2' ? 'w-full h-full' : 'h-0 w-0'" class="m-sub-menu-div">
              <a v-for="item in tradings" :key="item.id" :class="select.tradingId.includes(item.id) ? 'text-fjBlue-100' : ''" :href="getUrl(item.id, 'tradingId')">{{ item.name }}</a>
            </div>
          </div>
          <div :class="locationType === '3' ? 'm-sub-menu' : 'm-sub-menu-hidden'">
            <div :class="locationType === '3' ? 'w-full h-full' : 'h-0 w-0'" class="flex flex-row">
              <div class="flex flex-col w-1/2 overflow-hidden max-h-[33vh] space-y-2 overflow-y-auto">
                <span v-for="line in metroLines" :key="line.id" :class="line.id === selectMenuLine" class="w-full mr-4 text-gray-600" @click="selectMenuLine = line.id">{{ line.name }}</span>
              </div>
              <div class="flex flex-col w-1/2">
                <div v-for="line in metroLines" v-show="selectMenuLine === line.id" :key="line.id" class="w-full mr-4 text-gray-600 space-y-2 flex flex-col overflow-hidden max-h-[33vh] overflow-y-auto">
                  <a v-for="station in line.stations" :key="station.id" :class="select.stationId.includes(station.id) ? 'text-fjBlue-100' : ''" :href="getUrl(station.id, 'stationId')">{{ station.name }}</a>
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
              <a v-if="item.title !== null" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'price')">
                <img v-if="select.price === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
          </div>
          <div :class="selectMenuPrice === '2' ? 'm-sub-menu-col' : 'm-sub-menu-hidden'">
            <div v-for="(item, index) in totalPriceList" :key="index">
              <a v-if="item.title !== null" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'totalPrice')">
                <img v-if="select.totalPrice === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
          </div>
        </div>
        <!-- 户型 -->
        <div :class="selectMenuM !== '2' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-sm text-gray-500">
            <div v-for="(item, index) in houseType" :key="index" class="flex flex-row justify-center mr-4">
              <a class="flex flex-row items-center justify-start w-14 whitespace-nowrap" :href="getUrl(index + '', 'houseType')">
                <img v-if="select.houseType.indexOf(index + '') !== -1 || select.houseType.length < 1 && index === 0" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
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
                <a v-if="item.title !== null" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'acreage')">
                  <img v-if="select.acreage === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                  <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                  <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
                </a>
              </div>
            </div>
          </div>
          <!-- 类型 -->
          <div class="w-full">
            <div class="w-full my-2 font-bold"><span>类型</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
              <div v-for="(item, index) in projectType" :key="index">
                <a class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'projectType')">
                  <img v-if="select.projectType.indexOf(index + '') !== -1 || select.projectType.length < 1 && index === 0" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                  <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                  <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
                </a>
              </div>
            </div>
          </div>
          <!-- 状态 -->
          <div class="w-full">
            <div class="w-full my-2 font-bold"><span>状态</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
              <div v-for="(item, index) in saleState" :key="index">
              <a class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'saleState')">
                <img v-if="select.saleState.indexOf(index + '') !== -1 || select.saleState.length < 1 && index === 0" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
            </div>
          </div>
        </div>
        <!-- 排序 -->
        <div :class="selectMenuM !== '4' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-gray-500">
            <div class="flex flex-col text-sm text-center">
              <a :class="select.sortType === '1' ? 'text-fjBlue-100' : ''" :href="getSortUrl('1')">均价从高到底</a>
              <a :class="select.sortType === '2' ? 'text-fjBlue-100' : ''" :href="getSortUrl('2')">均价从底到高</a>
              <a :class="select.sortType === '3' ? 'text-fjBlue-100' : ''" :href="getSortUrl('3')">开盘时间顺序</a>
              <a :class="select.sortType === '4' ? 'text-fjBlue-100' : ''" :href="getSortUrl('4')">开盘时间倒序</a>
            </div>
          </div>
        </div>
        <!-- 底部按钮 -->
        <div class="flex flex-row w-full p-1 bg-white border h-14">
          <div v-if="false" class="w-2/3">
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
            <a class="block w-full px-2 py-1 text-white rounded bg-fjBlue-100" href="/house/list">重置</a>
          </div>
        </div>
      </div>
    </div>
    <div :class="selectMenuM !== '' ? '' : 'hidden'" class="fixed bottom-0 left-0 right-0 z-50 block top-14" style="background: rgba(0,0,0,.5);" @click="selectMenuM = ''"></div>
    <div id="list" class="h-14 lg:hidden"></div>
    <!-- list -->
    <div class="w-full overflow-hidden sm:mt-1 lg:mt-8">
      <!-- 标题 -->
      <div class="flex flex-row w-full border-b-2 sm:hidden border-fjBlue-100">
        <div :class="select.sortType === '0' ? 'bg-fjBlue-100 text-white' : 'text-black'" class="w-[97px] h-[52px] flex flex-row justify-center items-center">
          <a :href="getSortUrl('0')" >默认排序</a>
        </div>
        <a :href="getSortUrl('1')" :class="select.sortType === '1' || select.sortType === '2' ? 'bg-fjBlue-100 text-white' : 'text-black'" class="w-[97px] h-[52px] flex flex-row justify-center items-center">
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
        </a>
        <a :href="getSortUrl('3')" :class="select.sortType === '3' || select.sortType === '4' ? 'bg-fjBlue-100 text-white' : 'text-black'" class="w-[97px] h-[52px] flex flex-row justify-center items-center">
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
        </a>
        <div class="flex flex-row items-center justify-end w-full">
          <span>我的关注</span>
          <img src="~/assets/img/clue/heart.png" alt="">
          <!-- <svg
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
          </svg> -->
        </div>
      </div>
      <!-- 主体 -->
      <div class="w-full sm:mt-1 lg:mt-6">
        <div v-for="(item, index) in projectList" :key="item.id" class="">
          <div class="sm:py-4 sm:px-2 lg:p-4 lg:mb-6 hover:bg-gray-100">
            <a :href="`/house/${item.id}.html`" target="_blank" class="w-full sm:max-h-36 lg:h-[250px] flex flex-row">
              <!-- 左边图片 -->
              <div class="sm:h-24 lg:h-full sm:w-1/3 lg:w-[360px] static">
                <img :src="getImg(item)" class="object-cover w-full h-full" :alt="item.name" />
              </div>
              <!-- 右边内容 -->
              <div class="h-full sm:w-2/3 lg:w-[920px] sm:pl-2 lg:pl-6">
                
                <div class="flex flex-row items-center justify-between lg:h-11">
                  <div class="flex flex-row ">
                  <!-- title -->
                  <h1 class="h-full mb-0 sm:pb-0 sm:text-[16px] lg:text-[28px] font-bold text-black hover:text-fjBlue-100">{{ item.name }}</h1>
                  <div class="h-full sm:pt-1 sm:text-[12px] sm:ml-2 lg:pt-3 lg:text-[14px] lg:ml-4">
                    <h1 v-if="item.saleState === '1'" class="text-white rounded-sm bg-fjYellow-100">在售</h1>
                    <h3 v-if="item.saleState === '2'" class="text-white rounded-sm bg-fjBlue-100">待售</h3>
                    <h3 v-if="item.saleState === '3'" class="text-white rounded-sm bg-fjRed-100">售罄</h3>
                  </div>
                  </div>
                  <div class="text-right">
                    <img src="~/assets/img/list/white.png" alt="">
                  </div>
                </div>
                <div class="sm:mt-1 sm:text-[12px] lg:text-[16px] flex flex-row">
                  <!-- 类型 -->
                  <HouseTypeLabel :sort="item.type" :class-name="'text-gray-400'" />
                  <!-- 面积 -->
                  <span v-if="item.hLayoutsById.length > 0" class="ml-2 text-gray-400">|</span>
                  <span v-if="getRoomArea(item.hLayoutsById)" class="ml-2 text-gray-400">{{ getRoomArea(item.hLayoutsById) }}</span>
                  <!-- 开盘时间 -->
                  <span v-if="item.openTime" class="ml-2 text-gray-400">|</span>
                  <span class="ml-2 text-gray-400" :title="getOpenTime(item.openTime)">{{ getOpenTime(item.openTime) }}</span>
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
                      <span class="overflow-hidden whitespace-nowrap sm:mr-1 lg:mr-4 sm:max-w-[200px]" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="getAreaAndTrading(item)">[{{ getAreaAndTrading(item) }}]<span class="overflow-hidden sm:w-full whitespace-nowrap sm:ml-2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span></span>
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
                    <div class="flex flex-row items-center justify-between py-1 pl-2 bg-[#F5F5F5] lg:mt-4 lg:space-x-2 lg:h-[35px] lg:w-[370px] sm:hidden">
                      <div class="flex flex-row items-center space-x-2">
                        <img src="~/assets/img/clue/smallDing.png" alt="" />
                        <span class="text-[#333333] lg:text-[15px] sm:text-[9px] font-normal">设置订阅楼盘，楼盘信息早知道</span>
                      </div>
                      <div class="z-[40] flex flex-row items-center">
                        <button class="font-medium text-white bg-fjRed-100 lg:py-1 lg:px-2 lg:text-[15px] sm:text-[9px]" @click.stop="openClue('6', item.id, item.sysCityByCityId.id, item.lookTime)">订阅楼盘信息</button>
                      </div>
                    </div>
                    
                    <div class="flex flex-row items-center lg:hidden">
                      <div v-if="item.price" class="w-2/5">
                        <span v-if="item.price" class="text-[#DA1111] text-[16px] font-bold">{{ item.price }}</span>
                        <span v-if="item.price" class="text-[12px]">元/㎡</span>
                      </div>
                      <div v-else class="w-2/5">
                        <span v-if="item.lowTotalPrice" class="text-[#DA1111] text-[16px] font-bold">{{ item.lowTotalPrice }}</span>
                        <span v-if="item.lowTotalPrice" class="text-[12px]">万/套起</span>
                        <span v-else>暂无数据</span>
                      </div>
                      <div class="w-3/5">
                        <span class="text-xs">更新日期：</span>
                        <span v-if="item.updatePriceTime" class="text-xs">{{ item.updatePriceTime.split('T')[0] }}</span>
                        <span v-else class="text-xs">暂无数据</span>
                      </div>
                    </div>
                    <div v-if="item.labels" class="lg:mt-4">
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
          <div v-if="index === 0 && activities && activities.length > 0" class="relative lg:my-4 sm:px-2">
            <img v-if="activities[0]" class="sm:h-[40px] flex flex-row items-center justify-center bg-cover lg:h-[100px] w-full" :src="activities[0].headImg">
            <span v-if="activities[0]" class="sm:text-[20px] sm:mt-[-10px] absolute top-1/2 lg:mt-[-31.5px]  lg:text-[42px] text-white font-bold text-shadow-xl tracking-[6px] w-full text-center" @click="openActivityClue('15', activities[0].id)">{{activities[0].title}}</span>
            <span class="absolute right-2 top-2 text-white tracking-[8px]">广告</span>
          </div>
          <div v-if="index === 1 && activities && activities.length > 0" class="relative lg:my-4 sm:px-2">
            <img v-if="activities[1]" class="sm:h-[40px] flex flex-row items-center justify-center bg-cover lg:h-[100px] w-full" :src="activities[1].headImg">
            <span v-if="activities[1]"  class=" sm:text-[20px] absolute top-1/2 mt-[-31.5px] lg:text-[42px] text-white font-bold text-shadow-xl tracking-[6px] w-full text-center" @click="openActivityClue('15',activities[1].id )">{{activities[1].title}}</span>
            <span class="absolute right-2 top-2 text-white tracking-[8px]">广告</span>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="w-full text-right">
      <a-pagination
        v-if="isMobile"
        size="small"
        :total="total"
        :show-total="total => `共计 ${total} 条`"
        :page-size="10"
        :current="pageNum"
        :item-render="itemRender"
      />
      <a-pagination
        v-else
        :total="total"
        :show-total="total => `共计 ${total} 条`"
        :page-size="10"
        :current="pageNum"
        :item-render="itemRender"
      />
    </div>
    <!--  -->
    <div class="w-full mt-12 text-[#999999] text-xs sm:p-2">
      郑重提示广大用户：本页面内容，旨在为满足广大用户的信息需求而免费提供，并非广告服务性信息。页面所载内容，仅供用户参考和借鉴，最终以开发商实际公示为准。商品房预售须取得《商品房预售许可证》，
用户在购房时请务必慎重查验开发商的证件信息。（注：本页面所提到房屋面积如无特别标示，均指建筑面积）
    </div>
    <!-- 广告位1 -->
    <!-- 广告位2 -->
    <ClueLeaveClue v-show="openActivity" class="absolute z-[60] w-full h-full" :city="cityId" :activity-id="activityId" :clue-type="clueType" @isOpen="isOpen" />
    <ClueHelpClue v-show="openingHelp" class="absolute z-[60] w-full h-full"  :city-id="cityId"  @isOpen="isOpen" />
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="cityId" :look="lookTime"  :project-id="id" :clue-type="clueType" @isOpen="isOpen" />
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
import { ActivityApi, ActivityModel } from '~/api/clue/activity';
type fieldType = 'areaId'|'tradingId'|'stationId'|'price'|'lowPrice'|'highPrice'|'totalPrice'|'lowTotalPrice'|'highTotalPrice'|'acreage'|'lowAcreage'|'heightAcreage'|'houseType'|'projectType'|'saleState'|'sortType';
const fields: string[] = [
  'areaId', 
  'tradingId', 
  'stationId', 
  'houseType',
  'projectType',
  'saleState'
]
const fields2: string[] = [
  'price', 
  'totalPrice', 
  'acreage',
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
  async asyncData({ $axios, store, route, req }) {
    const activityParam = {
      data: {
        cityId:store.state.app.cityId
      }
    }
    const activityResult = await $axios.$post(ActivityApi.GetByCity, activityParam)
    let activities;
    if (activityResult.code === 200) {
      const result:ActivityModel[] = getDataResult(activityResult);
      if (result) {
        activities = result;
      }
    }

    const curPath = route.path;

    const userAgent = req?.headers['user-agent'] || '';
    let isMobile:any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
      // 跳转移动端页面
      isMobile = true;
    } else {
      isMobile = false;
    }
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

    // const query = route.query
    let query:any;
    let params = route.params?.p;
    let pageNum = 1;
    const select: any = {};
    select.sortType = '0';
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
      }
      const paramsArray = params.split(',');
      query = {};
      paramsArray.forEach((item:string) => {
        if (item && item.indexOf('-')){
          const p = item.split('-');
          if (fields.includes(p[0]) || fields2.includes(p[0])) {
            const key = p[0]
            const value = p[1];
            let temp:any;
            // eslint-disable-next-line prefer-const
            temp = {};
            temp[key] = value;
            Object.assign(query, temp);
          }
        }
        if (item && item.search(/p[0-9]+/) >= 0) {
          pageNum = Number(item.substring(1));
        }
        if (item && item.search(/sort-[0-9]+/) >= 0) {
          select.sortType = item.replace('sort-', '');
        }
      })
    }
    if (!query) {
      query = {};
    }
    
    fields.forEach((item) => {
      if (query[item]) {
        select[item] = (query[item] as string).split('s')
      } else {
        select[item] = [];
      }
    });
    fields2.forEach((item) => {
      if (query[item]) {
        select[item] = query[item] as string
      } else {
        select[item] = '0';
      }
    });

    let projectList: any;
    let total: number = 0;

    const getList = async () => {
      // this.activity()
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
      if (select.price) {
        condition.lowPrice = priceList[select.price].lowPrice;
        condition.highPrice = priceList[select.price].highPrice;
      }
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
      if (select.sortType !== '1' && select.sortType !== '2' && select.sortType !== '3' && select.sortType !== '4') {
        sort.desc = ['orderNum', 'createTime']
      }
      const param: any = {
        data: condition,
        page: {
          pageNum: pageNum - 1,
          pageSize: 10
        },
        sort,
      };
      const result: BasePageResult<any> = await $axios.$post(HouseApi.GetByCityIdAndOrder, param);
      if (result.code === 200) {
        projectList = getDataResult(result)
        // console.log('projectList', projectList);
        total = result.data.page.totalElements;
      }
    }

    await getList();

    return {
      activities,
      curPath,
      pageNum,
      select,
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
      total,
      isMobile,
    }
  },
  data () {
    const activityId: string = '';
    const activities: ActivityModel[] = [];
    const openingHelp: boolean = false;
    const openActivity = false;
    const clueType: string = '';
    const opening: boolean = false;
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
    const curPath: string = '';
    return {
      cityId: '',
      lookTime: 0,
      id: '',
      activityId,
      activities,
      openingHelp,
      openActivity,
      clueType,
      opening,
      curPath,
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
      selectMenuPrice
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
    // if (!area) {
    //   area = city;
    // }
    let title = `${city}新楼盘_${city}新房_${city}买房网-${city}房匠网`;
    let keywords = `${city}新房,${city}新楼盘,${city}新房房价,${city}买房网,${city}买房`;
    let content1 = `${city}房匠网为您提供优质的${city}新房、${city}新开楼盘、${city}房价信息。${city}新房楼盘上房匠网-让您购房变得简单!`;
    // let local = city;
    if (area && area !== '') {
      title = `${city}${area}新房_${city}${area}楼盘_${city}${area}买房-房匠网`;
      keywords = `${city}${area}新房,${city}${area}新楼盘,${city}${area}新房房价,${city}${area}买房网,${city}${area}买房,${city}${area}新房网`
      content1 = `${city}房匠网为您提供优质的${city}${area}新房、${city}${area}新开楼盘、${city}${area}房价信息。${city}${area}新房楼盘上房匠网-让您购房变得简单!`
      // local = local + area;
    }
    return {
      title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: keywords
        },
        {
          hid: 'description',
          name: 'description',
          content: content1
        },
      ],
      script: [
        {
          innerHTML: `{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"https://www.fangjiang.com","appid":"1713124212115293","title":"${title}","images":[""],"description": "${content1}","upDate":"2021-12-08T18:00:00"}`,
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
  methods: {
    re (e: Event) {
        e.stopPropagation();
    },
    helpUser() {
      this.openingHelp = true;
    },
    isOpen() {
      this.opening = false;
      this.openActivity = false;
      this.openingHelp = false;
    },
    openActivityClue(type: string, id: string) {
      this.activityId = id;
      this.clueType = type;
      this.openActivity = true;
    },
    openClue(type: string, projectId?: string, cityId?:string, look?: number) {
      this.clueType = type;
      this.opening = true;
      this.id = projectId || '';
      this.cityId = cityId || '';
      this.lookTime = look || 0;
      const evt =  window.event;
      if (evt && evt.preventDefault) {
          evt.preventDefault();
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      }
      return false;
    },
    showMenuBodyM(flag: string) {
      if (this.selectMenuM === flag) {
        this.selectMenuM = '';
      } else {
        this.selectMenuM = flag;
      }
      
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
      if (this.select.sortType !== '1' && this.select.sortType !== '2' && this.select.sortType !== '3' && this.select.sortType !== '4') {
        sort.desc = ['orderNum', 'createTime']
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
    inputPrice() {
      this.select.price = 0;
    },
    inputTotalPrice() {
      this.select.totalPrice = 0;
    },
    inputAcreage() {
      this.select.acreage = 0;
    },
    itemRender (page: any, type: any, originalElement: any) {
      const fullPath = this.curPath;
      let path;
      if (fullPath.search(/p[0-9]+,*/) >= 0) {
	      path = fullPath.replace(/p[0-9]+,*/, `p${page},`)
      } else {
        path = fullPath.replace('/house/list', `/house/list/p${page},`)
      }

      if (originalElement.data) {
        Object.assign(originalElement.data, {
          attrs: {
            href: path
          }
        });
      } else {
        originalElement.data = {
          attrs: {
            href: path
          }
        }
      }

      if (type === 'prev' || type === 'next') {
        if (page === 0 || page === this.pageNum) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }

      if (type === 'page') {
        if (page === this.pageNum) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }
      const callback = function (e:any) {
        e.preventDefault();
      };
      if (originalElement.on) {
        Object.assign(originalElement.on, {click: callback});
      } else {
        originalElement.on = {click: callback};
      }
      return originalElement;
    },
    getUrl(value: string, flag: fieldType) {
      let path = '/house/list/p1,';
      fields.forEach((field) => {
        if (field === flag) {
          if (!this.select[flag]) {
            path = path + flag + '-' + value + ',';
          } else if (value === '0') {
            return path;
          } else if (this.select[flag] instanceof Array) {
            const params:any = {};
            (this.select[flag] as []).forEach((item) => {
              params[item] = '';
            })
            if (this.select[flag] && (this.select[flag] as string[]).includes(value)) {
              const keys = Object.keys(params);
              const i = keys.indexOf(value);
              keys.splice(i, 1);
              if (keys.length > 0) {
                let param = keys.toString();
                param = param.replace(/,/g, 's');
                path = path + flag + '-' + param + ',';
              }
            } else {
              params[value] = '';
              const keys = Object.keys(params);
              if (keys.length > 0) {
                let param:string = keys.toString();
                param = param.replace(/,/g, 's');
                path = path + flag + '-' + param + ',';
              }
            }
          }
        } else {
          const otherField: fieldType = field as fieldType;
          if (this.select[otherField] && (this.select[otherField] as []).length > 0) {
            const params:any = {};
            (this.select[otherField] as []).forEach((item) => {
              params[item] = '';
            })
            const keys = Object.keys(params);
            if (keys.length > 0) {
              let param = keys.toString();
              param = param.replace(/,/g, 's');
              path = path + field + '-' + param + ',';
            }
          }
        }
      })
      fields2.forEach((field) => {
        const curField: fieldType = field as fieldType;
        if (flag === field) {
          if (value === '0') {
            return path;
          } else {
            const i = Number(value);
            path = path + field + '-' + i + ','; 
          }
        } else if (this.select[curField] && this.select[curField] !== '') {
          if (this.select[curField] !== '0') {
            path = path + field + '-' + this.select[curField] + ',';
          }
        }
      })
      path = path.substring(0, path.length - 1)
      path = path + '.html'
      return path;
    },
    getClearUrl(value: fieldType) {
      let path = '/house/list/p1,';
      fields.forEach((field) => {
        if (field !== value) {
          const params: any = {};
          const curField: fieldType = field as fieldType;
          if (this.select[curField] && (this.select[curField] as []).length > 0) {
            (this.select[curField] as []).forEach((item) => {
              params[item] = '';
            })
            let param = Object.keys(params).toString()
            param = param.replace(/,/g, 's');
            path = path + field + '-' + param + ','
          }
        }
      })
      fields2.forEach((field) => {
        const curField: fieldType = field as fieldType
        if (this.select[curField] !== '0') {
          path = path + field + '-' + this.select[curField] + ',';
        }
      })

      return path;
    },
    getSortUrl(type:string) {
      let path = '/house/list/p1,';
      fields.forEach((field) => {
        const params: any = {};
        const curField: fieldType = field as fieldType;
        if (this.select[curField] && (this.select[curField] as []).length > 0) {
          (this.select[curField] as []).forEach((item) => {
            params[item] = '';
          })
          let param = Object.keys(params).toString()
          param = param.replace(/,/g, 's');
          path = path + field + '-' + param + ','
        }
      })
      fields2.forEach((field) => {
        const curField: fieldType = field as fieldType
        if (this.select[curField] !== '0') {
          path = path + field + '-' + this.select[curField] + ',';
        }
      })
      if (type === '1') {
        if (this.select.sortType === '1') {
          type = '2'
        }
      }
      if (type === '3') {
        if (this.select.sortType === '3') {
          type = '4'
        }
      }
      path = path + `sort-${type},`;
      return path;
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