<template>
  <div class="w-full mx-auto sm:w-screen sm:pb-2 lg:container">
    <div class="lg:h-24 sm:h-10"></div>
    <AppTitle :house="house" :favorite="favorite" />
    <AppBar :current="'price'" :house="house" :class-name="'menu sticky z-[45] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 lg:mt-6 sm:top-[95px] lg:top-[118px] text-white'" />
    <div class="flex-row shadow-lg sm:px-2 lg:mt-8 lg:flex">
      <div class="sm:w-full lg:w-3/4 sm:h-56 lg:pr-10 ">
        <div class="lg:text-[22px] sm:text-[18px] my-4 border-l-fjBlue-100 border-l-8 px-4">{{ house.name }}历史价格走势</div>
        <EchartLineEchart :option="option" class="border-t border-t-[#DDDDDD] object-center lg:h-[340px]" />
      </div>
      <div class="lg:w-1/4 sm:w-full">
        <div class="lg:text-[20px] sm:text-[16px] my-4 lg:h-[33px]">推荐楼盘</div>
        <div class="border-t border-t-[#DDDDDD]">
          <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" style="color: inherit" class="w-full lg:py-6 sm:py-2 flex flex-row space-x-2 border-b border-dashed border-b-[#DDDDDD]">
            <div class="w-2/5"><img v-if="item.firstImg" :src="item.firstImg.address" alt="项目首图" class="w-[126px] h-[84px]"></div>
            <div class="flex flex-col w-3/5 gap-y-2">
              <span class="text-[16px] font-bold text-[#333333]">{{ item.name }}</span>
              <span class="text-[14px]">{{ item.sysAreaByAreaId.name }}</span>
              <span class="text-[18px] text-[#DA1111]">{{ item.price }}<span v-if="item.price" class="text-[14px] text-[#000000] text-opacity-30">元/㎡起</span><span v-else class="text-[14px] text-[#000000] text-opacity-20">暂无数据</span></span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="lg:mt-10 sm:mt-2 border border-[#DDDDDD] flex flex-row justify-between items-center lg:h-[79px] lg:px-9 sm:px-1 sm:h-[46px] sm:w-full">
      <div class="flex flex-row items-center lg:space-x-2 sm:space-x-1"> 
        <img src="~/assets/img/clue/ding.png" alt="" class="lg:w-5 lg:h-5 sm:w-3 sm:h-3">
        <span class="text-[#333333] lg:text-[20px] sm:text-xs font-normal">设置订阅该楼盘，楼盘价格变化早知道，让您先人一步</span>
      </div>
      <div class="flex flex-row items-center" @click="openClue('2')">
        <input type="text" disabled class="placeholder-[#999999] bg-[#F5F5F5] lg:w-[266px] lg:h-[45px] sm:h-[35px] sm:w-[85px] sm:text-[10px] lg:pl-5 -mr-1" placeholder="请输入手机号">
        <button class="text-white lg:text-[20px] sm:text-xs font-medium bg-fjRed-100 lg:w-[156px] lg:h-[46px] sm:w-[90px] sm:h-[35px]">楼盘降价提醒</button>
      </div>
    </div>
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="cityId" :look="house.lookTime"  :project-id="house.id" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Api as HouseApi } from '~/api/model/houseModel';
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
export default Vue.extend({
  name: 'PriceList',
  components: {},
  async asyncData({ $axios, store, route, redirect }){
    const start = new Date().getTime();
    
    let params = route.params?.id;
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
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
    // 相关楼盘
    let house: any;
    let favorite;
    const getHouse = async () => {
      const param: any = {
        data: {
          id: params,
        }
      }
      const accessToken = store.state.app.accessToken;
      const tokenType = store.state.app.tokenType
      let result;
      try {
        if (tokenType && accessToken) {
          $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        }
        result = await $axios.$post(HouseApi.GetProject, param)
        if (result?.code === 200) {
          favorite = result.data.favorite
          house = getDataResult(result);

          const breadcrumb: Breadcrumb[] = [];
          breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
          breadcrumb.push({ title: house.name, href: `/house/${house.id}.html` })
          breadcrumb.push({ title: '历史价格', href: '' })
          store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
          getPrice(house)
        }
        
        
      } catch (error) {
        if (result?.code === 401) {
          redirect('/login?redirect='+ route.path)
        }
      } finally {
        $axios.setHeader('Authorization', '')
      }
      
      
    }
    await getHouse();

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("新房价格详情调用接口使用时间：", end - start)

    const cityId = store.state.app.cityId;
    return {
      house,
      option,
      cityId,
      favorite,
    }
  },
  data(){
    let house: any;
    return {
      opening: false,
      clueType: '',
      house,
    }
  },
  head() {
    const houseName = this.house.name;
    const houseCityName: string = this.house.sysCityByCityId.name || '';
    const title:string = `【${houseCityName}${houseName}价格走势】最新房价_开盘价多少钱一平-房匠网`;
    const description: string = `房匠网为您提供${houseCityName}${houseName}价格走势最新消息,${houseName}多少钱一平？分析房价走势,成交价格记录,了解${houseName}最新房价走势，关注房匠网。`;
    const keyword: string = `${houseName}房价,${houseName}房价走势,${houseName}价格,${houseName}多少钱一平`;
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
      ],
    }
  },
  computed: {
    getHotProject() {
      // const that = this;
      // const store = that.$store;
      // const hotProject = store.state.app.hotProject;
      // return hotProject.slice(0, 2);
      return this.$store.state.app.hotProject.slice(0,5);
    }
  },
  methods: {
    openClue(type: string) {
      this.clueType = type;
      this.opening = true;
    },
    isOpen() {
      this.opening = false;
    }
  }
})
</script>