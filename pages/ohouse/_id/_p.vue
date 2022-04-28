<template>
  <div class="w-full h-full">
    <div class="lg:h-20"></div>
    <div v-if="house" class="h-full sm:w-full sm:px-2 sm:overflow-hidden lg:mx-auto lg:container sm:mt-[-32px]">
      <div class="w-full pt-10 sm:px-2">
        <div class="flex flex-row items-center justify-between w-full">
            <div>
            <!-- name and saleState -->
            <div class="flex w-full lg:items-end sm:flex-col lg:flex-row">
                <a :href="`/house/${house.id}.html`" style="color: inherit" class="sm:text-xl lg:text-3xl"><h1><strong>{{ house.name }}</strong></h1></a>
                <h2 v-if="house.aliasName" class="lg:ml-4">别名：{{ house.aliasName }}</h2>
            </div>
            <div class="flex flex-row items-center sm:mt-2 lg:mt-4">
                <HouseStateLabel :state="house.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm'" class=" sm:mr-0.5 lg:mr-1" />
                <HouseTypeLabel :sort="house.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></HouseTypeLabel>
                <span class="sm:ml-2 lg:ml-4"></span>
                <span v-if="house.beansByLabels && house.beansByLabels.length > 0"><span v-for="(item, index) in house.beansByLabels" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs sm:mr-0.5 lg:mr-1">{{ item.value }}</span></span>
            </div>
            </div>
        </div>
        </div>
      <div class="lg:flex flex-row sm:w-screen lg:w-full lg:mt-8 sm:mt-4 lg:h-[547px]">
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
        </div>
        <div class="h-full ml-3 lg:flex-1">
          <div class="lg:px-6 w-full lg:h-[392px] text-[#666666] lg:text-base sm:text-[14px]">
            <!-- <div class="flex flex-row items-center justify-end w-full mt-2 sm:hidden">
              <div class="w-4 h-4 mr-2 bg-cover bg-looks bg-[#666666]"></div>
              <span class="pb-[1px]">{{ house.lookTime }}</span>
            </div> -->
            <div>产权年限：{{ house.property }}年</div>
            <div class="lg:pt-4 sm:pt-2">
              <span v-if="house.cng === '1'">有天然气</span>
              <span v-if="house.cng === '1' && house.divideCar === '1'" class="mx-1">|</span>
              <span v-if="house.divideCar === '1'">人车分流</span>
            </div>
            <div class="lg:pt-4 sm:pt-2">
                <span v-if="house.waterMethod === '1'" class="mr-2">民用水</span><span v-if="house.waterMethod === '2'">商用水</span>
                <span v-if="house.electricityMethod === '1'" class="mr-2">民用电</span><span v-if="house.electricityMethod === '2'">商用电</span>
                <span v-if="house.heatMethod === '1'" class="mr-2">市政供暖</span><span v-if="house.heatMethod === '2'">集体供暖</span><span v-if="house.heatMethod === '3'">自供暖</span>
            </div>
            <div class="lg:pt-4 sm:pt-2">
              <span v-if="house.buildType">
                建筑类型：
                <span v-if="house.buildType === '1'">被动式</span>
                <span v-if="house.buildType === '2'">装配式</span>
                <span v-if="house.buildType === '3'">浇注式</span>
                <span v-if="house.buildType === '4'">部分装配式</span>
                <span v-if="house.buildType === '5'">部分浇筑式</span>
              </span>
            </div>
            <!-- address -->
            <div class="flex flex-row w-full lg:pt-4 sm:pt-2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">项目地址：<span class="flex-shrink-0">{{ house.sysAreaByAreaId.name }}-{{ house.address }}</span></div>
            <div v-if="house.openTime" class="w-full py-4">最新开盘：{{ house.openTime.split('T')[0] }}</div>
            <div v-else class="w-full py-4">最新开盘：暂未开盘 </div>
            <div class="">优点： <span v-if="house.advantage">{{ house.advantage }}</span></div>
            <div class="w-full mt-5 h-0.5 bg-[#DDDDDD]"></div>
            <!-- phone -->
            <a :href="`tel:${phoneNum},${house.number}%23`">
              <div class="w-full ml-2 font-bold lg:mt-6 sm:mt-2 lg:text-2xl text-fjRed-100">{{ phoneNum }} 转 {{ house.number }}</div>
            </a>
          </div>
        </div>
      </div>
      <div v-if="houseList && houseList.length > 0" class="">
        <div v-for="item in houseList" :key="item.id" class="lg:py-4 lg:mb-6 hover:bg-gray-100 border-t border-t-[#DDDDDD] mt-4">
            <a :href="`/ohouse/onumber/${item.id}.html`" target="_blank" class="w-full lg:h-[200px] flex flex-row">
            <!-- 左边图片 -->
            <div class="static w-2/5 lg:h-full">
                <div v-if="item.resources">
                <div v-for="item1 in item.resources" :key="item1.id">
                    <img v-if="item1.sort === '1'" :src="item1.address" class="object-contain w-full lg:h-[200px] sm:h-[150px]" :alt="item1.title" />
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
                    <span class="text-[24px] sm:text-[18px] text-fjRed-100 font-semibold">{{ item.price }}</span>
                    <span v-if="item.price">万元</span>
                    </div>
                    <div v-if="item.downPayments" class="w-full text-[14px]">
                    <span>首付：</span>
                    <span>{{ item.downPayments }}万元</span>
                    </div>
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
    <div class="mx-auto mt-2 text-right lg:container">
      <a-pagination
        v-if="isMobile"
        :simple="true"
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
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { message } from 'ant-design-vue';
import { SearchApi } from '~/api/search/searchApi';
import { phoneNum } from '~/api/model/houseModel';

export default Vue.extend({
  name: 'OHouseInfo',
  components: {},
  async asyncData ({ $axios, route, store }) {
    let id = route.params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }
    let query:any;
    let params = route.params?.p;
    let pageNum = 1;
    let pageSize;
    let total;
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
      }
      const paramsArray = params.split(',');
      query = {};
      paramsArray.forEach((item:string) => {
        if (item && item.indexOf('-')){
          const p = item.split('-');
          const key = p[0]
          const value = p[1];
          let temp:any;
          // eslint-disable-next-line prefer-const
          temp = {};
          temp[key] = value;
          Object.assign(query, temp);
        }
        if (item && item.search(/p[0-9]+/) >= 0) {
          pageNum = Number(item.substring(1));
        }
      })
    }
    const accessToken = store.state.app.accessToken;
    const tokenType = store.state.app.tokenType;
    const isMobile = store.state.app.isMobile;

    let house;

    let houseList;
    const getHouseList = async () => {
      const oparam = {
        data: {
          projectId: id
        },
        page: {
          pageNum: pageNum - 1,
          pageSize: 10
        }
      }
      if (tokenType && accessToken) {
        $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
      }
      const numberResult = await $axios.$post(SearchApi.oNumber, oparam)
      if (numberResult?.code === 200) {
        total = numberResult.data?.page.totalElements;
        houseList = numberResult.data?.content;
      }
      $axios.setHeader('Authorization', '');
    }

    const resourceList: any[] = [];

    await Promise.all([
      // getOHouse(),
      getHouseList(),
    ])
    return {
      houseList,
      id,
      house,
      tokenType,
      accessToken,
      isMobile,
      resourceList, 
      phoneNum,
      pageNum,
      pageSize,
      total,
    }
  },
  data () {
    const houseList: any[] = [];
    const resourceList: any[] = [];
    let house: any;
    let isMobile : any;
    const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
    return {
      id: '',
      house,
      tokenType: '',
      accessToken: '',
      isMobile,
      resourceList,
      houseList,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      phoneNum,
      colors,
    }
  },
  async mounted () {
    let result;
    if (this.accessToken && this.tokenType) {
      result = await this.$axios.get(SearchApi.GetOHouse + '?id=' + this.id, { headers: { 'Authorization': this.tokenType + ' ' + this.accessToken }});
      this.$axios.setHeader('Authorization', '');
    } else {
      result = await this.$axios.get(SearchApi.GetOHouse + '?id=' + this.id);
    }
    this.house = result?.data?.data.content;
    if (this.house.firstImg) {
      this.resourceList.push({ address: this.house.firstImg, title: '项目首图' })
    }
    if (this.house.sandImg) {
      this.resourceList.push({ address: this.house.sandImg, title: '沙盘图' })
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
    stopA() {
        // 阻止冒泡
        const evt =  window.event;
        if (evt && evt.preventDefault) {
            evt.preventDefault();
            evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
        }
    },
    next() {
      (this as any).$refs.carousel.next();
    },
    prev() {
      (this as any).$refs.carousel.prev();
    },
    itemRender (page: any, type: any, originalElement: any) {
      const path = `/ohouse/${this.id}/p${page}.html`;
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
    }
  }
})
</script>