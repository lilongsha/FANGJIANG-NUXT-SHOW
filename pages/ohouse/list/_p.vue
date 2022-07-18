<template>
  <div class="mx-auto lg:container">
    <div class="w-full lg:h-24"></div>
    <!-- condition -->
    <!-- sm:hidden  -->
    <div v-if="!isMobile" class="w-full px-8 py-10 mt-16 bg-gray-100">
      <!-- 位置 -->
      <div class="w-full">
        <div class="w-full flex flex-row pb-4 border-gray-300 border-b-[1px]">
          <div class="w-1/12 text-xs font-semibold">位置</div>
          <!-- 位置菜单 -->
          <div class="flex flex-row items-center w-11/12 h-full space-x-8 text-xs">
            <!-- 区域 -->
            <div :class="select.areaId ? 'text-fjBlue-100' : ''" class="flex flex-row items-center">
              <span>区域</span>
              <div class="h-0 w-0 border-[4px] border-t-gray-600 border-r-gray-100 border-l-gray-100 border-b-gray-100 mt-[2px] transition-all" :class="select.areaId ? 'rotate-180 mt-[-4px]' : ''"></div>
            </div>
          </div>
        </div>
        <!-- 位置主体 -->
        <div class="w-full flex flex-row py-4 justify-end border-gray-300 border-b-[1px] text-xs text-gray-700">
          <!-- 区域 -->
          <div :class="locationType === '1' ? 'w-11/12' : 'h-0 w-0'" class="grid grid-flow-row grid-cols-12 gap-4 overflow-hidden transition-all auto-rows-auto">
            <div v-for="item in areas" :key="item.id">
              <a rel="nofollow" :class="select.areaId === item.id ? 'text-fjBlue-100' : ''" :href="getUrl(item.id, 'areaId')">{{ item.name }}</a>
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
              <a v-if="item.title !== null" rel="nofollow" class="flex flex-row items-center whitespace-nowrap radio" :href="getUrl(index + '', 'price')">
                <input :id="'option' + index" type="radio" name="mode" :value="index" class="mr-1 checked:bg-[#0075ff]" :checked="index === 0 ? true : false || select.price === index || select.price === '' + index" @click="openNew(index + '', 'price')"/>
		            <div :class="(select.price === index) || (select.price === '' + index)  ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'label' + index" :for="'option' + index" class=""><span class="">{{ item.title }}</span></label>
              </a>
              <div v-if="false && item.title === null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.lowPrice" type="number" min="0" class="w-16" @change="inputPrice">
                <label class="inline-block whitespace-nowrap">-</label>
                <input v-model="select.heightPrice" type="number" min="0" class="w-16" @change="inputPrice">
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
              <a v-if="item.title !== null" rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'totalPrice')">
                <input :id="'totalPrice' + index" type="radio" name="total" :value="index" class="checked:bg-[#0075ff] mr-1" :checked="index === 0 ? true : false || select.totalPrice === index || select.totalPrice === '' + index" @click="openNew(index + '', 'totalPrice')"/>
		            <div :class="(select.totalPrice === index) || (select.totalPrice === '' + index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'totalLabel' + index" :for="'totalPrice' + index"><span class="">{{ item.title }}</span></label>
              </a>
              <div v-if="false && item.title === null" class="flex flex-row whitespace-nowrap">
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
              <a v-if="item.title !== null" rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'area')">
                <input :id="'area' + index" type="radio" name="area" :value="index" class="checked:bg-[#0075ff] mr-1" :checked="index === 0 ? true : false || select.area === '' + index || select.area === index" @click="openNew(index + '', 'area')"/>
		            <div :class="(select.area === '' + index) || (select.area === index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'acreageLabel' + index" :for="'area' + index"><span class="">{{ item.title }}</span></label>
              </a>
              <div v-if="false && item.title === null" class="flex flex-row whitespace-nowrap">
                <input v-model="select.lowArea" type="number" min="0" class="w-16" @change="inputAcreage">
                <label class="inline-block whitespace-nowrap">-</label>
                <input v-model="select.heightArea" type="number" min="0" class="w-16" @change="inputAcreage">
                <label class="inline-block whitespace-nowrap">㎡</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 楼层类型 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">楼层</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in floorTypeList" :key="index" class="flex flex-row mr-4">
              <a rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'floorType')">
                <input :id="'floorType' + index" type="radio" name="floorType" :value="index" class="checked:bg-[#0075ff] mr-1 option-radio" :checked="index === 0 ? true : false || select.floorType === '' + index || select.floorType === index" @click="openNew(index + '', 'floorType')"/>
		            <div :class="(select.floorType === '' + index) || (select.floorType === index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'floorTypeLabel' + index" :for="'floorType' + index"><span class="">{{ item.title }}</span></label>
              </a>
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
              <a rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'houseType')">
                <input :id="'houseType' + index" type="radio" name="houseType" :value="index" class="checked:bg-[#0075ff] mr-1 option-radio" :checked="index === 0 ? true : false || select.houseType === '' + index || select.houseType === index" @click="openNew(index + '', 'houseType')"/>
		            <div :class="(select.houseType === '' + index) || (select.houseType === index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'houseTypeLabel' + index" :for="'houseType' + index"><span class="">{{ item.title }}</span></label>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 客厅 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">客厅</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in hallType" :key="index" class="flex flex-row mr-4">
              <a rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'hallType')">
                <input :id="'hallType' + index" type="radio" name="hallType" :value="index" class="checked:bg-[#0075ff] mr-1 option-radio" :checked="index === 0 ? true : false || select.hallType === '' + index || select.hallType === index" @click="openNew(index + '', 'hallType')"/>
		            <div :class="(select.hallType === '' + index) || (select.hallType === index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'hallTypeLabel' + index" :for="'hallType' + index"><span class="">{{ item.title }}</span></label>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 卫生间 -->
      <div class="w-full">
        <div class="flex flex-row justify-center w-full py-4">
          <div class="w-1/12 text-xs font-semibold">卫生间</div>
          <div class="grid w-11/12 h-full grid-flow-row grid-cols-7 text-xs text-gray-500 auto-rows-auto gap-y-3">
            <div v-for="(item, index) in toiletType" :key="index" class="flex flex-row mr-4">
              <a rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'toiletType')">
                <input :id="'toiletType' + index" type="radio" name="toiletType" :value="index" class="checked:bg-[#0075ff] mr-1 option-radio" :checked="index === 0 ? true : false || select.toiletType === '' + index || select.toiletType === index" @click="openNew(index + '', 'toiletType')"/>
		            <div :class="(select.toiletType === '' + index) || (select.toiletType === index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'toiletTypeLabel' + index" :for="'toiletType' + index"><span class="">{{ item.title }}</span></label>
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
              <a rel="nofollow" class="flex flex-row whitespace-nowrap radio" :href="getUrl(index + '', 'projectType')">
                <input :id="'projectType' + index" type="radio" name="projectType" :value="index" class="checked:bg-[#0075ff] mr-1 option-radio" :checked="index === 0 ? true : false || select.projectType === '' + index || select.projectType === index" @click="openNew(index + '', 'projectType')"/>
		            <div :class="(select.projectType === '' + index) || (select.projectType === index) ? 'selected' : 'w-0 h-0 hidden'"></div>
                <label :id="'projectTypeLabel' + index" :for="'projectType' + index"><span class="">{{ item.title }}</span></label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 移动端codition -->
    <!--  lg:hidden -->
    <div v-if="isMobile" class="fixed top-14 z-[51] bg-white w-full flex flex-col">
      <!-- title -->
      <div class="flex flex-row justify-around w-full h-12 px-2">
        <!-- 位置 区域 商圈 地铁 -->
        <div class="m-menu-titile" @click="showMenuBodyM('0')">
          <span>位置</span>
          <div class="h-0 w-0 border-[6px] border-t-gray-600 border-r-white border-l-white border-b-white mt-[6px] transition-all"></div>
        </div>
        <!-- 价格 -->
        <div class="m-menu-titile" @click="showMenuBodyM('1')">
          <span>价格</span>
          <div class="h-0 w-0 border-[6px] border-t-gray-600 border-r-white border-l-white border-b-white mt-[6px] transition-all"></div>
        </div>
        <!-- 楼层类型 -->
        <div class="m-menu-titile" @click="showMenuBodyM('2')">
          <span>户型</span>
          <div class="h-0 w-0 border-[6px] border-t-gray-600 border-r-white border-l-white border-b-white mt-[6px] transition-all"></div>
        </div>
        <!-- 筛选 -->
        <div class="m-menu-titile" @click="showMenuBodyM('3')">
          <span>筛选</span>
          <div class="h-0 w-0 border-[6px] border-t-gray-600 border-r-white border-l-white border-b-white mt-[6px] transition-all"></div>
        </div>
      </div>
      <!-- body -->
      <div :class="selectMenuM !== '' ? 'max-h-[46vh]' : 'max-h-0'" class="w-full overflow-hidden ease-linear border-b shadow" style="transition: max-height .5s;">
        <!-- 区域、商圈、地铁 -->
        <div :class="selectMenuM !== '0' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="m-menu-body-menu">
            <span :class="locationType === '1' ? 'text-fjBlue-100' : ''" @click="locationType = '1'">区域</span>
          </div>
          <div :class="locationType === '1' ? 'm-sub-menu' : 'm-sub-menu-hidden'">
            <div :class="locationType === '1' ? 'w-full h-full' : 'h-0 w-0'" class="m-sub-menu-div">
              <a v-for="item in areas" :key="item.id" rel="nofollow" :class="select.areaId === item.id ? 'text-fjBlue-100' : ''"  :href="getUrl(item.id, 'areaId')">{{ item.name }}</a>
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
              <a v-if="item.title !== null" rel="nofollow" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'price')">
                <img v-if="select.price === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
          </div>
          <div :class="selectMenuPrice === '2' ? 'm-sub-menu-col' : 'm-sub-menu-hidden'">
            <div v-for="(item, index) in totalPriceList" :key="index">
              <a v-if="item.title !== null" rel="nofollow" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'totalPrice')">
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
            <div class="w-full my-2 font-bold"><span>卧室</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
            <div v-for="(item, index) in houseType" :key="index" class="flex flex-row justify-center mr-4">
              <a rel="nofollow" class="flex flex-row items-center justify-start w-14 whitespace-nowrap" :href="getUrl(index + '', 'houseType')">
                <img v-if="select.houseType === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
            </div>
          </div>
        </div>
        <!-- 客厅 -->
        <div :class="selectMenuM !== '2' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-sm text-gray-500">
            <div class="w-full my-2 font-bold"><span>客厅</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
            <div v-for="(item, index) in hallType" :key="index" class="flex flex-row justify-center mr-4">
              <a rel="nofollow" class="flex flex-row items-center justify-start w-14 whitespace-nowrap" :href="getUrl(index + '', 'hallType')">
                <img v-if="select.hallType === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
            </div>
          </div>
        </div>
        <!-- 卫生间 -->
        <div :class="selectMenuM !== '2' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-sm text-gray-500">
            <div class="w-full my-2 font-bold"><span>卫生间</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
            <div v-for="(item, index) in toiletType" :key="index" class="flex flex-row justify-center mr-4">
              <a rel="nofollow" class="flex flex-row items-center justify-start w-14 whitespace-nowrap" :href="getUrl(index + '', 'toiletType')">
                <img v-if="select.toiletType === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
            </div>
            </div>
          </div>
        </div>
        <!-- 楼层类型 -->
        <div :class="selectMenuM !== '2' ? 'max-h-0' : 'max-h-[33vh]'" class="flex flex-row w-full px-2 overflow-hidden ease-linear" style="transition: max-height .5s;">
          <div class="w-full h-full space-y-2 text-sm text-gray-500">
            <div class="w-full my-2 font-bold"><span>楼层类型</span></div>
            <div class="grid grid-flow-row grid-cols-4 gap-2 text-xs">
            <div v-for="(item, index) in floorTypeList" :key="index" class="flex flex-row justify-center mr-4">
              <a rel="nofollow" class="flex flex-row items-center justify-start w-14 whitespace-nowrap" :href="getUrl(index + '', 'floorType')">
                <img v-if="select.floorType === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
              </a>
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
                <a v-if="item.title !== null" rel="nofollow" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'area')">
                  <img v-if="select.area === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
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
                <a rel="nofollow" class="flex flex-row items-center whitespace-nowrap" :href="getUrl(index + '', 'projectType')">
                  <img v-if="select.projectType === '' + index" src="~/assets/img/list/xuanzhong.png" class="w-4 h-4 mr-1">
                  <img v-else src="~/assets/img/list/weixuanzhong.png" class="w-4 h-4 mr-1">
                  <label class="inline-block whitespace-nowrap">{{ item.title }}</label >
                </a>
              </div>
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
                  <input v-model="select.heightPrice" pattern="[0-9]*" type="number" placeholder="最高均价" min="0" class="w-full text-xs bg-gray-200" @change="inputPrice">
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
                  <input v-model="select.heightTotalPrice" pattern="[0-9]*" type="number" placeholder="最高总价" min="0" class="w-full text-xs bg-gray-200" @change="inputTotalPrice">
                </div>
              </div>
            </div>
            <!-- 面积输入 -->
            <div :class="selectMenuM === '3' ? 'p-1 w-full' : 'w-0 h-0'" class="overflow-hidden">
              <div class="flex flex-row w-full whitespace-nowrap">
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.lowArea" pattern="[0-9]*" type="number" placeholder="最低面积" min="0" class="w-full text-xs bg-gray-200" @change="inputAcreage">
                </div>
                <label class="inline-block p-2 text-center align-middle whitespace-nowrap">-</label>
                <div class="p-2 text-center align-middle bg-gray-200">
                  <input v-model="select.heightArea" pattern="[0-9]*" type="number" placeholder="最高面积" min="0" class="w-full text-xs bg-gray-200" @change="inputAcreage">
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 p-2 text-center align-middle">
            <a rel="nofollow" class="block w-full px-2 py-1 text-white rounded bg-fjBlue-100" href="/ohouse/list">重置</a>
          </div>
        </div>
      </div>
    </div>
    <div :class="selectMenuM !== '' ? '' : 'hidden'" class="fixed bottom-0 left-0 right-0 z-50 block top-14" style="background: rgba(0,0,0,.5);" @click="selectMenuM = ''"></div>
    <!--  lg:hidden -->
    <div v-if="isMobile" id="list" class="h-14"></div>
    <!-- list -->
    <div class="w-full overflow-hidden sm:mt-1 lg:mt-8">
      <!-- 标题 -->
      <!--  sm:hidden -->
      <div v-if="!isMobile" class="flex flex-row w-full border-b-2 border-fjBlue-100">
        <div :class="select.sortType === '0' ? 'bg-fjBlue-100 text-white' : 'text-black'" class="w-[97px] h-[52px] flex flex-row justify-center items-center">
          <a :href="getSortUrl('0')" >默认排序</a>
        </div>
        <div class="flex flex-row items-center justify-end w-full">
          <span>我的关注</span>
          <img src="~/assets/img/clue/heart.png" alt="" @click="selectFav">
        </div>
      </div>
      <!-- 主体 -->
      <div class="w-full sm:mt-1 lg:mt-6">
        <div v-for="item in projectList" :key="item.id" class="">
          <div class="sm:py-4 sm:px-2 lg:p-4 lg:mb-6 hover:bg-gray-100">
            <a :href="`/ohouse/onumber/${item.id}.html`" target="_blank" class="w-full lg:h-[200px] flex flex-row">
              <!-- 左边图片 -->
              <div class="static w-2/5 lg:h-full">
                  <div v-if="item.resources">
                  <div v-for="item1 in item.resources" :key="item1.id">
                      <img v-if="item1.sort === '1'" :src="item1.address" class="object-cover w-full lg:h-[200px] sm:h-[130px]" :alt="item1.title" />
                  </div>
                  </div>
              </div>
              <!-- 右边内容 -->
              <div class="w-3/5 h-full lg:pl-6 sm:pl-3">
                  <div class="flex flex-row items-center justify-between lg:h-11">
                  <div class="flex flex-row items-center">
                  <!-- title -->
                  <h3 class="h-full mb-0 lg:text-[20px] font-bold text-black hover:text-fjBlue-100" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.title }}</h3>
                  </div>
                  <div class="text-right" @click.stop="stopA">
                      
                      <img v-if="isFavorite && isFavorite.includes(item.id)" src="~/assets/img/list/red.png" alt="" @click="delFav(item)">
                      <img v-else src="~/assets/img/list/white.png" alt="" @click="addFav(item)">
                  </div>
                  </div>
                  <div class="lg:text-[14px] sm:text-[12px] flex flex-row text-[#999999] lg:mt-3 items-center">
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
                  <div v-if="item.floorType" class=" lg:mt-4 sm:text-[12px] flex flex-row items-center text-[#999999]">
                  <svg t="1650695164653" class="mr-2 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2407" width="16" height="16"><path d="M23.489939 979.006061v-149.969455h236.140606V678.94303h236.264728v-149.752242h236.978424V379.810909h236.606061v599.257212z" p-id="2408" fill="#3485FF"></path><path d="M40.773818 979.006061v-131.537455-18.525091l-17.283879 17.283879h236.140606c9.340121 0 17.283879-7.974788 17.283879-17.283879V697.250909v-18.556121l-17.252848 17.283879h236.233697c9.340121 0 17.283879-7.943758 17.283879-17.283879v-131.10303-18.649213l-17.283879 17.283879h236.854303c9.309091 0 17.283879-7.943758 17.283879-17.283879v-130.761697-18.52509l-17.283879 17.283878H969.355636l-17.283878-17.283878V954.492121c0 7.726545-0.465455 15.670303 0 23.396849v1.024l17.283878-17.283879H61.967515c-12.194909 0-24.513939-0.217212-36.739879 0H23.614061c-8.998788 0-17.749333 7.943758-17.283879 17.283879 0.465455 9.309091 7.602424 17.283879 17.283879 17.283878H931.002182c12.194909 0 24.513939 0.217212 36.739879 0h1.613575c9.309091 0 17.283879-7.943758 17.283879-17.283878v-60.012606-142.832485-173.149091-149.628121c0-24.203636 0.682667-48.407273 0-72.579879v-1.024c0-9.340121-7.943758-17.283879-17.283879-17.283879H732.749576c-9.309091 0-17.283879 7.943758-17.283879 17.283879v149.286788l17.283879-17.283879H495.864242c-9.309091 0-17.252848 7.943758-17.252848 17.283879V678.725818l17.252848-17.283879H259.661576c-9.340121 0-17.283879 7.943758-17.283879 17.283879v150.217697c5.740606-5.771636 11.481212-11.543273 17.283879-17.283879H23.52097c-9.340121 0-17.314909 7.943758-17.314909 17.283879v150.093576c0 8.998788 7.974788 17.749333 17.283878 17.283879 9.464242-0.465455 17.283879-7.602424 17.283879-17.283879zM832.387879 3.227152c-8.285091 5.182061-16.446061 10.488242-24.762182 15.670303-22.341818 14.056727-44.590545 28.237576-66.932364 42.263272l-97.900606 61.967515-117.977212 74.65891-126.913939 80.275393c-41.580606 26.375758-83.192242 52.658424-124.89697 79.034182-37.205333 23.614061-74.410667 47.104-111.616 70.749091l-87.443394 55.26497c-17.37697 11.077818-34.753939 22.031515-52.161939 33.078303-3.10303 1.954909-6.361212 3.909818-9.340121 5.988848-1.024 0.682667-1.396364 1.024-2.792728 2.079031-7.447273 5.740606-9.060848 13.808485-9.060848 22.55903v55.544242c0 12.101818 10.581333 23.58303 23.024485 23.024485 12.412121-0.589576 23.024485-10.146909 23.024484-23.024485v-59.888484l-11.388121 19.890424 21.876364-13.808485c19.952485-12.567273 39.749818-25.227636 59.671273-37.794909 29.385697-18.649212 58.864485-37.205333 88.250181-55.854546 35.933091-22.683152 71.773091-45.490424 107.675152-68.204606l117.977212-74.627878 119.125333-75.341576 111.026425-70.283637 93.897697-59.42303c22.465939-14.273939 45.02497-28.454788 67.490909-42.759757 10.612364-6.671515 21.410909-13.34303 31.930182-20.262788a8.595394 8.595394 0 0 1 1.365333-0.806788c10.146909-6.454303 15.204848-20.852364 8.316121-31.557818-6.454303-10.24-20.51103-15.204848-31.464727-8.409212z" p-id="2409" fill="#3485FF"></path><path d="M111.709091 472.653576v356.38303c0 12.101818 10.612364 23.614061 23.055515 23.055515 12.443152-0.589576 23.055515-10.146909 23.055515-23.055515v-121.049212-191.45697-43.876848c0-12.101818-10.612364-23.614061-23.055515-23.055515-12.536242 0.589576-23.024485 10.146909-23.024485 23.055515zM347.756606 322.52897V678.94303c0 12.101818 10.612364 23.614061 23.055515 23.055515 12.412121-0.589576 23.024485-10.146909 23.024485-23.055515V557.924848v-191.456969-43.907879c0-12.101818-10.581333-23.58303-23.024485-23.024485-12.443152 0.465455-23.055515 10.022788-23.055515 23.024485zM584.021333 172.776727V529.190788c0 12.101818 10.612364 23.614061 23.055515 23.055515 12.412121-0.589576 23.024485-10.146909 23.024485-23.055515v-121.049212-191.45697-43.907879c0-12.101818-10.581333-23.58303-23.024485-23.024485-12.443152 0.465455-23.055515 10.022788-23.055515 23.024485zM867.048727 379.810909V258.699636v-191.456969V23.396848l-23.024485 23.024485h125.331394c12.101818 0 23.614061-10.581333 23.024485-23.024485-0.558545-12.443152-10.115879-23.055515-23.024485-23.055515H844.024242c-12.412121 0-23.024485 10.612364-23.024484 23.055515v356.383031c0 12.101818 10.581333 23.614061 23.024484 23.055515 12.412121-0.589576 23.024485-10.146909 23.024485-23.055515z" p-id="2410" fill="#3485FF"></path></svg>
                  <span v-if="item.floorType === '1'">低层</span>
                  <span v-if="item.floorType === '2'">中层</span>
                  <span v-if="item.floorType === '3'">高层</span>
                  <span v-if="item.floor">({{ item.floor }})</span>
                  </div>
                  <!-- 右中内容 -->
                  <div class="lg:flex flex-row w-full text-[#999999]">
                  <div class=" lg:w-3/5 h-full text-[14px]">
                      <div class="lg:text-[14px] sm:text-[12px] lg:mt-3 flex flex-row items-center">
                      <a-icon type="clock-circle" theme="twoTone" class="mr-2" />
                      <span>{{ item.createTime.split('.000+08:00')[0].split('T').toString() }}</span>
                      </div>
                      <div v-if="item.beansByLabels && item.beansByLabels.length > 0 && !isMobile" class="lg:mt-4">
                      <span v-for="(item1, index) in item.beansByLabels" :key="index" class="text-[14px] sm:text-[12px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                      </div>
                  </div>
                  <div class="lg:w-2/5 text-[14px] sm:text-[12px] lg:text-right">
                      <div class="w-full">
                          <span v-if="isMobile">价格：</span>
                      <span class="text-[24px] sm:text-[18px] text-fjRed-100 font-semibold">{{ item.totalPrice }}</span>
                      <span v-if="item.totalPrice">万元</span>
                      </div>
                      <!-- <div v-if="item.downPayments" class="w-full text-[14px]">
                      <span>首付：</span>
                      <span>{{ item.downPayments }}万元</span>
                      </div> -->
                  </div>
                  </div>
                  <div v-if="item.beansByLabels && item.beansByLabels.length > 0 && isMobile" class="lg:mt-4">
                      <span v-for="(item1, index) in item.beansByLabels" :key="index" class="text-[14px] sm:text-[12px] rounded px-2 py-1 mr-4 text-[#3485ff] opacity-50 bg-opacity-50 bg-[#98C1FF]">{{ item1.value }}</span>
                  </div>
              </div>
            </a>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { message } from 'ant-design-vue';
import { Api as AreaApi, AreaByCondition, AreaModel } from '~/api/model/areaModel';
import { BaseListResult, BasePageResult } from '~/api/model/baseModel';
import { priceList, totalPriceList, acreageList, floorTypeList, projectType, saleState, phoneNum, toiletType, hallType, houseType } from '~/api/model/houseModel';
import { getDataResult } from '~/utils/response/util';
import { CurrentApi } from '~/api/user/userApi';
import { SearchApi } from '~/api/search/searchApi';
type fieldType = 'areaId'|'tradingId'|'stationId'|'price'|'lowPrice'|'heightPrice'|'totalPrice'|'lowTotalPrice'|'heightTotalPrice'|'area'|'lowArea'|'heightArea'|'floorType'|'houseType'|'hallType'|'toiletType'|'projectType'|'saleState'|'sortType';
const fields: string[] = [
  // 'areaId', 
  'tradingId', 
  'stationId', 
  // 'floorType',
  // 'houseType',
  // 'hallType',
  // 'toiletType',
  // 'projectType',
  'saleState'
]
const fields2: string[] = [
  'areaId',
  'price', 
  'totalPrice', 
  'area',
  'lowPrice',
  'heightPrice',
  'lowTotalPrice',
  'heightTotalPrice',
  'lowArea',
  'heightArea',
  'floorType',
  'houseType',
  'hallType',
  'toiletType',
  'projectType',
]

export default Vue.extend({
  name: 'Home',
  components: {
  },
  async asyncData({ $axios, store, route, redirect }) {
    const start = new Date().getTime();

    const curPath = route.path;

    const isMobile = store.state.app.isMobile;
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
    if (areaResult?.code === 200) {
      areas = getDataResult(areaResult);
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
        select[item] = query[item] as number
      } else {
        select[item] = 0;
      }
    });

    let projectList: any;
    let total: number = 0;
    let favorite;
    let projectResult: any;
    let isFavorite;

    let proSale;

    const getList = async () => {
      const condition: any = {};
      condition.cityId = store.state.app.cityId
      // const areaIds: any[] = [];
      // if (select.areaId) {
      //   select.areaId.forEach((item: any) => {
      //     areaIds.push({id: item});
      //   })
      // }
      // if (areaIds.length > 0) {
      //   condition.areaId = areaIds;
      // }
      if (select.areaId) {
        condition.areaId = select.areaId;
      }
      // condition.trading = select.tradingId;
      // condition.station = select.stationId;
      if (select.projectType !== 0) {
        condition.type = select.projectType;
      }
      if (select.floorType !== 0) {
        condition.floorType = select.floorType;
      }
      if (select.houseType !== 0) {
        condition.rooms = select.houseType;
      }
      if (select.hallType !== 0) {
        condition.hall = select.hallType;
      }
      if (select.toiletType !== 0) {
        condition.toilet = select.toiletType;
      }
      // condition.saleState = select.saleState;

      if (select.price) {
        condition.lowPrice = priceList[select.price].lowPrice;
        condition.heightPrice = priceList[select.price].highPrice;
      }
      if (select.totalPrice) {
        condition.lowTotalPrice = totalPriceList[select.totalPrice].lowTotalPrice;
        condition.heightTotalPrice = totalPriceList[select.totalPrice].highTotalPrice;
      }
      if (select.area) {
        condition.lowArea = acreageList[select.area].lowAcreage;
        condition.heightArea = acreageList[select.area].highAcreage;
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
      try {
        const accessToken = store.state.app.accessToken;
        const tokenType = store.state.app.tokenType
        if (tokenType && accessToken) {
          $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        }
        projectResult = await $axios.$post(SearchApi.oNumber, param);
        if (projectResult?.code === 200) {
          favorite = projectResult.data?.favorite;
          isFavorite = projectResult.data?.favorite;
          projectList = getDataResult(projectResult)
          total = projectResult.data.page.totalElements;
        }
      } catch (error) {
        if (projectResult?.code === 401) {
          redirect('/login?redirect=' + route.path)
        }
      } finally {
        $axios.setHeader('Authorization', '')
      }
      
    }

    await getList();

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("新房列表调用接口使用时间：", end - start)
    return {
      curPath,
      pageNum,
      select,
      areas,
      priceList,
      totalPriceList,
      acreageList,
      floorTypeList,
      projectType,
      houseType,
      toiletType,
      hallType,
      saleState,
      projectList,
      favorite,
      total,
      isMobile,
      projectResult,
      isFavorite,
      proSale,
    }
  },
  data () {
    const activityId: string = '';
    const openingHelp: boolean = false;
    const openActivity = false;
    const clueType: string = '';
    const opening: boolean = false;
    // const areaId: string[] = [];
    const areaId: string = '';
    const tradingId: string[] = [];
    const stationId: string[] = [];
    const price: number = 0;
    const lowPrice: string | number = '';
    const heightPrice: string | number = '';
    const totalPrice: number = 0;
    const lowTotalPrice: string | number = '';
    const heightTotalPrice: string | number = '';
    const area: number = 0;
    const lowArea: string | number = '';
    const heightArea: string | number = '';
    // const floorType: number[] = [0];
    // const houseType: number[] = [0];
    // const hallType: number[] = [0];
    // const toiletType: number[] = [0];
    // const projectType: number[] = [0];
    const floorType:number =  0;
    const houseType:number =  0;
    const hallType:number =  0;
    const toiletType:number =  0;
    const projectType:number =  0;
    const saleState: number[] = [0];
    const projectList: any[] = [];
    const sortType: string = '';
    const areas: any[] = [];
    const selectMenuM: string = '';
    const selectMenuLine: string = '';
    const selectMenuPrice: string = '1';
    const curPath: string = '';
    const isFavorite:any[] = [];
    return {
      cityId: '',
      lookTime: 0,
      id: '',
      activityId,
      openingHelp,
      openActivity,
      clueType,
      opening,
      curPath,
      areas,
      projectList,
      favorite: [],
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
        area,
        lowArea,
        heightArea,
        floorType,
        toiletType,
        hallType,
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
      isFavorite,
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
    openNew (index: string, selType: fieldType) {
      const path = this.getUrl(index, selType);
      this.$router.push(path)
    },
    async selectFav() {
      
    },
    async addFav(house: any) {
      // 阻止冒泡
      const evt =  window.event;
      if (evt && evt.preventDefault) {
          evt.preventDefault();
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      }

      const accessToken = this.$store.state.app.accessToken;
      const tokenType = this.$store.state.app.tokenType
      const houseId: string = house.id
      const param =  {
        data: {
          projectId: houseId
        }
      }
      if (tokenType && accessToken) {
        this.$axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        let result;
        try {
          result = await this.$axios.$post(CurrentApi.AddFavoriteProject, param)
          if (result?.code === 200) {
            message.success({ content: '关注成功', duration: 3})
            if (!this.isFavorite) {
              this.isFavorite = []
            }
            this.isFavorite.push(house.id)
          }
        } catch (error) {
          if (result?.code === 401) {
            this.$router.push('/login?redirect=' + this.$route.path)
          }else {
            message.error({ content: '关注失败', duration: 3})
          }
        } finally{
          this.$axios.setHeader('Authorization', '')
        }
        return false;
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
        return false
      }
      
      
    },
    async deleteFav(house: any) {
      const evt =  window.event;
      if (evt && evt.preventDefault) {
          evt.preventDefault();
          evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      }
      
      const accessToken = this.$store.state.app.accessToken;
      const tokenType = this.$store.state.app.tokenType
      const houseId: string = house.id
      const param =  {
        data: {
          projectId: houseId
        }
      }
      if (tokenType && accessToken) {
        this.$axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        let result;
        try {
          result = await this.$axios.$post(CurrentApi.DeleteFavorite, param)
          if (result?.code === 200) {
            message.success({ content: '取消关注', duration: 3})
            for (let index = 0; index < this.isFavorite.length; index++) {
              if (this.isFavorite[index] === house.id) {
                this.isFavorite.splice(index, 1)
              }
            }
          }
        } catch (error) {
          if (result?.code === 401) {
            this.$router.push('/login?redirect=' + this.$route.path)
          }else {
            message.error({ content: '取消失败', duration: 3})
          }
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
        
        return false;
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
        return false
      }
      
    },
    re (e: Event) {
        e.stopPropagation();
    },
    showMenuBodyM(flag: string) {
      if (this.selectMenuM === flag) {
        this.selectMenuM = '';
      } else {
        this.selectMenuM = flag;
      }
      
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
      condition.cityId = this.$store.state.app.cityId
      // const areaIds: any[] = [];
      // this.select.areaId.forEach((item: any) => {
      //   areaIds.push({id: item});
      // })
      // if (areaIds.length > 0) {
      //   condition.areaId = areaIds;
      // }
      // debugger;
      if (this.select.areaId) {
        condition.areaId = this.select.areaId;
      }
      condition.trading = this.select.tradingId;
      // condition.station = this.select.stationId;

      if (this.select.projectType !== 0) {
        condition.type = this.select.projectType;
      }
      // if (!this.select.saleState.includes(0)) {
      //   condition.saleState = this.select.saleState;
      // }
      if (this.select.floorType !== 0) {
        condition.floorType = this.select.floorType;
      }
      if (this.select.houseType !== 0) {
        condition.rooms = this.select.houseType;
      }
      if (this.select.hallType !== 0) {
        condition.hall = this.select.hallType;
      }
      if (this.select.toiletType !== 0) {
        condition.toilet = this.select.toiletType;
      }
      condition.lowPrice = this.select.lowPrice;
      condition.heightPrice = this.select.heightPrice;
      condition.lowTotalPrice = this.select.lowTotalPrice;
      condition.heightTotalPrice = this.select.heightTotalPrice;
      condition.lowArea = this.select.lowArea;
      condition.highArea = this.select.heightArea;
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
        const accessToken = this.$store.state.app.accessToken;
        const tokenType = this.$store.state.app.tokenType
        if (tokenType && accessToken) {
          this.$axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        }
        const result: BasePageResult<any> = await this.$axios.$post(SearchApi.oNumber, param);
        if (result?.code === 200) {
          this.projectList = getDataResult(result)
          this.pageNum = result.data.page.number + 1;
          this.total = result.data.page.totalElements;
          this.isFavorite = result.data?.favorite || [];
        }
      } catch (e) {}
      finally {
        this.$axios.setHeader('Authorization', '')
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
      this.select.area = 0;
    },
    itemRender (page: any, type: any, originalElement: any) {
      const fullPath = this.curPath;
      let path;
      if (fullPath.search(/p[0-9]+,*/) >= 0) {
	      path = fullPath.replace(/p[0-9]+,*/, `p${page},`)
      } else {
        path = fullPath.replace('/ohouse/list', `/ohouse/list/p${page},`)
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
      let path = '/ohouse/list/p1,';
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
      let path = '/ohouse/list/p1,';
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
      let path = '/ohouse/list/p1,';
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

.radio {
  @apply inline-block relative;
}

.radio >>> input {
  @apply w-[13px] h-[13px] border border-gray-500 flex-none appearance-none rounded-sm checked:border-0;
}

.radio >>> label {
  @apply absolute mb-2;
}

.selected {
  @apply absolute left-[4px] top-0 w-[6px] h-[10px] border-r-[2px] border-b-[2px] border-r-white border-b-white border-t-0 border-l-0 rotate-45 rounded-none;
}
</style>