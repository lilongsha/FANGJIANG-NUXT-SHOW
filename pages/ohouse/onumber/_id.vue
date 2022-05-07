<template>
	<div class="lg:mx-auto lg:container sm:w-full sm:px-2">
		<div class="lg:h-20"></div>
    <div class="flex-row w-full lg:my-6 lg:flex">
      <div class="font-semibold text-[#333333] lg:text-[34px] sm:text-[20px] w-2/3" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ houseInfo.title }}</div>
      <div class="text-[#999999] text-[8px] lg:text-right flex-shrink-0 lg:w-1/3">房屋编号：{{ houseInfo.identifier }}</div>
    </div>
    <div class="flex-row lg:flex">
      <div class="lg:w-[680px] lg:h-[500px] overflow-hidden">
        <img v-if="houseInfo.resources && houseInfo.resources.length > 0" :src="houseInfo.resources[0].address" alt="图片">
      </div>
      <div class="flex-1 lg:ml-10">
        <div class="flex flex-row items-center lg:pb-4">
          <div><span class="text-[#E30707] lg:text-[64px] sm:text-[24px]">{{ houseInfo.totalPrice }}</span><span v-if="houseInfo.totalPrice" class="text-[#333333] lg:text-[30px] sm:text-[20px]">万</span></div>
          <div class="lg:ml-11 sm:text-right sm:flex-1">
            <div><span class="text-[#333333] lg:text-[26px] sm:text-[18px]">{{ houseInfo.price }}</span><span v-if="houseInfo.price" class=" lg:text-[16px] text-[#999999]">元/㎡</span></div>
            <div class="text-[16px] text-[#015EEA]">首付及税费详情资讯经纪人</div>
          </div>
        </div>
        <div class="grid grid-cols-3 lg:py-6 sm:py-3 border-b border-b-[#EFEFEF] border-t border-t-[#EFEFEF]">
          <div>
            <div>
              <span class="text-[#333333] lg:text-[24px]">
                {{ houseInfo.rooms }}
                <span class="lg:text-[16px]">室</span>
                {{ houseInfo.hall }}
                <span class="lg:text-[16px]">厅</span>
                {{ houseInfo.toilet }}
                <span class="lg:text-[16px]">卫</span>
              </span>
            </div>
            <div class="mt-2 text-[#333333]">
              共{{ houseInfo.floor }}层
            </div>
          </div>
          <div>
            <div>
              <span class="text-[#333333] lg:text-[24px]">
                {{ houseInfo.area }}
                <span class="lg:text-[16px]">㎡</span>
              </span>
            </div>
            <div class="mt-2 text-[#333333]">
              <span v-if="houseInfo.renovation === '1'">毛坯</span>
              <span v-if="houseInfo.renovation === '2'">简单装修</span>
              <span v-if="houseInfo.renovation === '3'">精装</span>
              <span v-if="houseInfo.renovation === '4'">豪华装修</span>
            </div>
          </div>
          <div>
            <div>
              <span class="text-[#333333] lg:text-[24px]">
                <span v-if="houseInfo.orientation === '1'">南</span>
                <span v-if="houseInfo.orientation === '2'">北</span>
                <span v-if="houseInfo.orientation === '3'">东</span>
                <span v-if="houseInfo.orientation === '4'">西</span>
              </span>
            </div>
            <div class="mt-2 text-[#333333]">
              <span>{{ houseInfo.projectById.payTime.split('T')[0] }}</span>
              <span v-if="houseInfo.projectById.payTime">竣工/</span>
              <span v-if="houseInfo.type === '1'">住宅</span>
              <span v-if="houseInfo.type === '2'">公寓</span>
              <span v-if="houseInfo.type === '3'">商铺</span>
              <span v-if="houseInfo.type === '4'">写字楼</span>
              <span v-if="houseInfo.type === '5'">仓库</span>
              <span v-if="houseInfo.type === '6'">别墅</span>
              <span v-if="houseInfo.type === '7'">商业</span>
            </div>
          </div>
        </div>
        <div class="lg:pb-4 lg:pt-9 sm:pt-4 sm:pb-2 border-b border-b-[#EFEFEF] text-[#333333]">
          <div v-if="houseInfo.beansByLabels && houseInfo.beansByLabels.length > 0" class="flex flex-row">
            <div v-for="item in houseInfo.beansByLabels" :key="item.id" class="bg-[#EBEBEB] rounded-sm px-2 py-1 mr-1">
              {{ item.value }}
            </div>
          </div>
          <div class="mt-3">
            <span>所属小区&nbsp;&nbsp;&nbsp;&nbsp;{{ project.name }}</span>
          </div>
          <div class="mt-3">
            <span>所属区域&nbsp;&nbsp;&nbsp;&nbsp;{{ project.sysAreaByAreaId.name}}&nbsp;&nbsp;{{ project.address }}</span>
          </div>
        </div>
        <div>
          <div class="text-[#015EEA] lg:text-[16px] lg:mt-6 sm:mt-3">看房热线</div>
          <div class="sm:my-3">
            <a :href="`tel:${phoneNum},${houseInfo.mobile}%23`">
              <div class="w-full mt-2 ml-2 font-bold text-black lg:text-2xl sm:text-xl">{{ phoneNum }} 转 <span class="text-fjBlue-100">{{ houseInfo.mobile }}</span> </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex flex-row w-full lg:mt-[60px]">
      <div class="sm:w-full lg:w-3/5 lg:pr-8">
        <div class="text-[#333333] lg:text-[26px] sm:text-[16px] font-semibold">房源概况</div>
        <div class="lg:mt-9 sm:mt-4 text-[#333333] text-[16px]">
          <div class="pl-2 border-l-2 border-l-fjBlue-100">核心卖点</div>
          <div class="lg:my-4 sm:my-3">
            小区介绍：{{ project.description }}
          </div>
          <div>房屋介绍：</div>
          <div>{{ houseInfo.description }}</div>
          <div class="pl-2 border-l-2 lg:my-6 sm:my-4 border-l-fjBlue-100">业主心态：</div>
          <div>{{ houseInfo.mentality }}</div>
          <div class="pl-2 border-l-2 lg:my-6 sm:my-4 border-l-fjBlue-100">服务介绍：</div>
          <div>本人做房产多年，本着专业的房产知识，为您 服务，我会在短时间内帮您买好满意的房子，不让您错失任何好房子，更不让您每天为买房的事烦心，欢迎随时联系！</div>
        </div>
        <div class="flex flex-row items-center justify-between w-full lg:mt-12 sm:mt-6">
          <div class="text-[#333333] lg:text-[26px] sm:text-[18px] font-semibold">{{ project.name }}</div>
          <a class="text-fjBlue-100 lg:text-[18px] sm:text-[14px]" :href="`/ohouse/${project.id}/p1`">查看小区详情</a>
        </div>
        <div class="lg:flex lg:mt-10">
          <div class="lg:w-1/2 grid grid-cols-2 text-[#999999] text-[16px]">
            <!-- <div>小区均价&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#333333]">{{ project.price }}</span></div> -->
            <div>小区户数&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#333333]">{{ project.houseTotal }}户</span></div>
            <div>物业费用&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#333333]">{{ project.estatePrice }}元/㎡/月</span></div>
            <div>容&nbsp;&nbsp;积&nbsp;&nbsp;率&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#333333]">{{ project.volumeRate }}</span></div>
            <div>绿&nbsp;&nbsp;化&nbsp;&nbsp;率&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#333333]">{{ project.greenRate }}%</span></div>
          </div>
          <div class="lg:w-1/2 sm:w-full">
            <div class="sm:w-full"><img v-if="project.firstImg" :src="project.firstImg" class="sm:w-full" style="float:right;" height="120" width="170" alt=""></div>
          </div>
        </div>
        <div class="relative lg:mt-8 sm:mt-4">
          <div id="aroundMap" class="w-full sm:h-48 lg:h-[360px] sm:mt-4"></div>
          <div class="absolute right-0 lg:bottom-4 sm:bottom-2">
            <div class="grid content-center mt-2 lg:w-9 sm:w-6 lg:h-9 sm:h-6 hover:bg-[#015EEA]" :class="aroundType === 1 ? 'bg-[#015EEA]' : 'bg-[#5C656D]'" @click="changeAround(1)"><img class="justify-self-center" src="~/assets/img/around/imgBus.png" width="20" alt=""></div>
            <div class="grid content-center mt-2 lg:w-9 sm:w-6 lg:h-9 sm:h-6 hover:bg-[#1DB4A0]" :class="aroundType === 2 ? 'bg-[#1DB4A0]' : 'bg-[#5C656D]'" @click="changeAround(2)"><img class="justify-self-center" src="~/assets/img/around/imgShop.png" width="20" alt=""></div>
            <div class="grid content-center mt-2 lg:w-9 sm:w-6 lg:h-9 sm:h-6 hover:bg-[#DF2C5E]" :class="aroundType === 3 ? 'bg-[#DF2C5E]' : 'bg-[#5C656D]'" @click="changeAround(3)"><img class="justify-self-center" src="~/assets/img/around/imgBook.png" width="20" alt=""></div>
            <div class="grid content-center mt-2 lg:w-9 sm:w-6 lg:h-9 sm:h-6 hover:bg-[#E50012]" :class="aroundType === 4 ? 'bg-[#E50012]' : 'bg-[#5C656D]'" @click="changeAround(4)"><img class="justify-self-center" src="~/assets/img/around/imgMedic.png" width="20" alt=""></div>
          </div>
        </div>
        <div class="text-[#333333] lg:text-[26px] sm:text-[16px] font-semibold lg:my-12 sm:my-6">房源图片</div>
        <div v-if="houseInfo.resources.length > 0" class="w-full lg:h-[352px] sm:h-[130px]">
          <img :src="houseInfo.resources[0].address" width="100%" height="352" class="sm:h-[120px] lg:h-[352px]" alt="">
        </div>
        <div v-if="houseInfo.resources.length > 1" class="grid-cols-2 gap-5 lg:mt-5 sm:mt-2 lg:grid">
          <div v-for="(item, index) in houseInfo.resources" :key="index" class="relative sm:mt-2" :class="index === 0 || index > 4 ? 'hidden' : ''">
            <img :src="item.address" width="100%" class="lg:h-[212px] sm:h-[130px]" alt="">
            <div v-if="index === 4 && houseInfo.resources.length > 5" class="text-center w-full h-full bg-opacity-[0.5] bg-black absolute top-0 right-0 flex flex-row content-center items-center group">
              <div class="text-[48px] text-white w-full group-hover:hidden">+{{ houseInfo.resources.length }}</div>
              <div class="content-center hidden w-full text-center group-hover:block"><span class="text-[18px] text-white border border-white rounded-full px-2 py-1" @click="clickMore">点击查看更多</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-full lg:w-2/5">
        <div class="text-[#333333] lg:text-[26px] sm:text-[16px] font-semibold sm:mt-4">相似小区房源</div>
        <div class="w-full lg:mt-9 sm:mt-4">
          <div v-if="houseList && houseList.length > 0">
            <div v-for="(item, index) in houseList" :key="index" class="flex flex-row w-full h-[120px] overflow-hidden lg:mb-6 sm:mb-3">
              <a :href="`/ohouse/onumber/${item.id}`" class="flex flex-row w-full h-[120px] overflow-hidden lg:mb-6 hover:bg-gray-100 p-1" >
                <div class="w-1/3 ">
                  <img v-if="item.resources && item.resources.length > 0" width="100%" :src="item.resources[0].address" alt="图片">
                </div>
                <div class="w-2/3 ml-2">
                  <div class="text-[#000000] text-[18px]" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.area }}平&nbsp;&nbsp;{{ item.rooms }}室{{ item.hall }}厅 {{ item.title }}</div>
                  <div class="mt-[6px] text-[#666666] text-[16px]" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.projectById.sysAreaByAreaId.name }}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{{ item.projectById.address }}</div>
                  <div class="mt-[6px] text-[#666666] text-[16px]">{{ item.rooms }}室{{ item.hall }}厅&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{{ item.area }}㎡</div>
                  <div class="mt-[6px] text-[#666666] text-[16px]"><span class="text-[#E74243] text-[18px]">{{ item.totalPrice }}万</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{{ item.price }}元/㎡</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="hidden lg:my-9 text-[#333333] lg:text-[26px] font-semibold">新房推荐</div>
      </div>
    </div>
    <AppLoading ref="loading" :box-class="'w-full h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
    <div class="z-[65]" :class="isClick ? 'fixed top-0 right-0 w-screen h-screen bg-opacity-50 bg-black' : 'hidden'" @click="closeDiv">
      <div class="absolute left-0 sm:top-[300px] lg:top-[394px] z-10 flex flex-row items-center justify-center w-6 h-16 bg-black bg-opacity-60" @click="clickLeft()" @click.stop="stop">
          <svg class="w-5 h-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
      </div>
      <div class="absolute flex flex-row items-center w-full h-full" :class="'left-[' + leftNum + 'px]'" :style="'left:' + leftNum + 'px'">
        <div v-for="(item, index) in houseInfo.resources" :key="index" class="flex-shrink-0 mr-9">
          <img :src="item.address" class="lg:h-[350px] lg:w-[400px] sm:h-[130px] sm:w-[160px]" alt="">
        </div>
      </div>
      <div class="absolute right-0  sm:top-[300px] lg:top-[394px] z-10 flex flex-row items-center justify-center w-6 h-16 bg-black bg-opacity-60" @click="clickRight()" @click.stop="stop">
        <svg class="w-5 h-5 rotate-180" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1389" width="128" height="128"><path d="M727.272727 978.385455a34.629818 34.629818 0 0 1-24.669091-10.24l-430.545454-430.545455a34.909091 34.909091 0 0 1 0-49.338182l430.545454-430.545454a34.909091 34.909091 0 1 1 49.384728 49.384727l-405.876364 405.829818 405.876364 405.829818a34.909091 34.909091 0 0 1-24.715637 59.624728z" p-id="1390" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#ffffff"></path></svg>
      </div>
    </div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import { aroundApi, SearchApi } from '~/api/search/searchApi';
import { phoneNum } from '~/api/model/houseModel';
import MapLoader from '~/plugins/loadMap';
export default Vue.extend({
	name: 'oNumber',
	components: {},
	async asyncData ({ $axios, params, store }) {
		let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

		const accessToken = store.state.app.accessToken;
    const tokenType = store.state.app.tokenType;
    const isMobile = store.state.app.isMobile;

    // 房源信息
		let houseInfo;
		const getHouseInfo = async () => {
			$axios.setHeader('Authorization', tokenType + ' ' + accessToken);
			const result = await $axios.get(SearchApi.oNumber + '?id=' + id);
			$axios.setHeader('Authorization', '');
			houseInfo = result.data?.data?.content;
      await Promise.all([
        getHouseList(houseInfo.projectId),
        getProject(houseInfo.projectId),
      ])
		}
    // 同小区房源
    let houseList: any;
    const getHouseList = async (id: string) => {
      const oparam = {
        data: {
          projectId: id
        },
        page: {
          pageNum: 0,
          pageSize: 5
        }
      }
      if (tokenType && accessToken) {
        $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
      }
      const numberResult = await $axios.$post(SearchApi.oNumber, oparam)
      if (numberResult?.code === 200) {
        houseList = numberResult.data?.content;
      }
      $axios.setHeader('Authorization', '');
    }
    // 小区信息
    let project: any;
    const getProject = async (id: string) => {
      let result;
      if (accessToken && tokenType) {
        result = await $axios.get(SearchApi.GetOHouse + '?id=' + id, { headers: { 'Authorization': tokenType + ' ' + accessToken }});
      } else {
        result = await $axios.get(SearchApi.GetOHouse + '?id=' + id);
      }
      project = result?.data?.data.content;
    }

		await Promise.all([
			getHouseInfo(),
		])
		return {
			id,
			houseInfo,
			accessToken,
			tokenType,
			isMobile,
      houseList,
      project,
		}
	},
	data() {
    const aroundType = 0;
		let houseInfo;
    let houseList;
    const project: any = {};
    let aMap: any;
    let map: any;
    let medicArray: any;
    let trafficArray: any;
    let eduArray: any;
    let matchArray: any;
    const markers: any[] = [];
		return {
			id: '',
			houseInfo,
			accessToken: '',
			tokenType: '',
			isMobile: undefined,
      phoneNum,
      houseList,
      project,
      aMap,
      map,
      aroundType,
      medicArray,
      trafficArray,
      eduArray,
      matchArray,
      markers,
      isClick: false,
      leftNum: 0,
		}
	},
  mounted() {
    MapLoader().then(AMap => {
      this.$nuxt.$loading.start()
      this.aMap = AMap;
      this.map = new AMap.Map("aroundMap", {
        zoom: 11,
        center: [this.project?.longitude, this.project?.latitude],
        scrollWheel:false,
      })
      const that = this;
      AMap.plugin(['AMap.Scale', 'AMap.HawkEye', 'AMap.ToolBar', 'AMap.ControlBar'], function () {
        const scale = new AMap.Scale();
        that.map.addControl(scale);
        const toolbar = new AMap.ToolBar({
          position: {
            right: '40px',
            bottom: '16px',
          }
        });
        that.map.addControl(toolbar);
        const controlBar = new AMap.ControlBar({
          position: {
            top: '10px',
            right: '10px',
          }
        });
        const marker = new AMap.Marker({
            icon: "https://fangjiang-saas-dev.oss-cn-beijing.aliyuncs.com/app/around/blue-logo.png",
            position: [that.project?.longitude, that.project?.latitude]
        });
        const content = '<span>' + that.project?.name + '</span>'
        marker.setLabel({
            offset: new AMap.Pixel(0, 0),
            content,
            direction: 'bottom'
        });
        that.map.add(marker);
        that.map.addControl(controlBar);
      });
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    clickLeft() {
      if (!this.isMobile) {
        this.leftNum = this.leftNum + 418;
      } else {
        this.leftNum = this.leftNum + 150;
      }
    },
    clickRight() {
      if (!this.isMobile) {
        this.leftNum = this.leftNum - 418;
      } else {
        this.leftNum = this.leftNum - 150;
      }
    },
    clickMore() {
      this.isClick = true;
    },
    closeDiv() {
      this.isClick = false;
    },
    stop () {
      // 阻止冒泡
      const evt =  window.event;
      if (evt && evt.preventDefault) {
        evt.preventDefault();
        evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true);
      }
    },
    async changeAround(selectType: number) {
      this.$nuxt.$loading.start()
      this.aroundType = selectType;
      if (selectType === 1) {
        const location = this.project?.longitude + ',' + this.project?.latitude;
        const type = '150000';
        const trafficResult = await this.$axios.$get(aroundApi.Around + '?location=' + location + '&types=' + type + '&offset=10')
        if (trafficResult?.data?.info === 'OK') {
          this.trafficArray = trafficResult.data.pois;
          this.setMarkers(this.trafficArray);
        }
      } else if (selectType === 2) {
        const location = this.project?.longitude + ',' + this.project?.latitude;
        const type = '060000';
        const houseResult = await this.$axios.$get(aroundApi.Around + '?location=' + location + '&types=' + type + '&offset=10')
        if (houseResult?.data?.info === 'OK' && houseResult.data.pois) {
          this.matchArray = houseResult.data.pois;
          this.setMarkers(this.matchArray);
        }
      } else if (selectType === 3) {
        const location = this.project?.longitude + ',' + this.project?.latitude;
        const type = 'school';
        const eduResult = await this.$axios.$get(aroundApi.Around + '?location=' + location + '&types=' + type + '&offset=10')
        if (eduResult?.data?.info === 'OK' &&eduResult?.data?.pois) {
          this.eduArray = eduResult.data.pois;
          this.setMarkers(this.eduArray);
        }
      } else if (selectType === 4) {
        const location = this.project?.longitude + ',' + this.project?.latitude;
        const type = '090000';
        const result = await this.$axios.$get(aroundApi.Around + '?location=' + location + '&types=' + type + '&offset=10')
        if (result?.data?.info === 'OK') {
          this.medicArray = result.data.pois;
          this.setMarkers(this.medicArray);
        }
      }
      this.map.setFitView();
      this.$nuxt.$loading.finish()
    },
    setMarkers(array: any[]) {
      const that = this;
      if (that.markers) {
        that.map.remove(that.markers);
        that.markers.splice(0);
      }
      if (array.length > 0) {
        array.forEach((item: any) => {
          let selIcon;
          if (this.aroundType === 1) {
            selIcon = "https://image.fangjiang.com/icon/addressBus.png"
          } else if (this.aroundType === 2) {
            selIcon = "https://image.fangjiang.com/icon/addressShop.png"
          } else if (this.aroundType === 3) {
            selIcon = "https://image.fangjiang.com/icon/addressBook.png"
          } else if (this.aroundType === 4) {
            selIcon = "https://image.fangjiang.com/icon/addressMedic.png"
          }
          const marker = new that.aMap.Marker({
            map: that.map,
            // icon: selIcon,
            icon: new that.aMap.Icon({
              size: new that.aMap.Size(37, 37),
              image: selIcon,
              imageSize: new that.aMap.Size(25, 37) 
            }),
            position: [item.location.split(',')[0], item.location.split(',')[1]]
          });
          const content = '<span>' + item.name + '</span>'
          marker.setLabel({
            offset: new that.aMap.Pixel(0, 0),
            content,
            direction: 'bottom'
          });
          that.markers.push(marker);
        })
      }
      
    },
  }
})
</script>