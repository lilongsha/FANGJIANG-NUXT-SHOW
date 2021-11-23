<template>
  <div class="mx-auto sm:w-full sm:px-2 lg:container">
    <div class="w-full sm:h-12 lg:h-32"></div>
    <div class="w-full h-24">
      <!-- name -->
      <div class="w-full sm:flex sm:flex-col">
        <span class="font-bold sm:text-xl lg:text-3xl">{{ house.name }}</span>
        <span v-if="house.aliasName" class="lg:ml-4">别名：{{ house.aliasName }}</span>
      </div>
      <div class="sm:mt-2 lg:mt-4">
        <span v-if="house.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
        <span v-else-if="house.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
        <span v-else-if="house.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
        <type-label :type="house.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></type-label>
        <!-- <span v-if="house.type === '1'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">住宅</span>
        <span v-else-if="house.type === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">公寓</span>
        <span v-else-if="house.type === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">商铺</span>
        <span v-else-if="house.type === '4'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">写字楼</span>
        <span v-else-if="house.type === '5'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">仓库</span>
        <span v-else-if="house.type === '6'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">其它</span> -->
        <span class="sm:ml-2 lg:ml-4"></span>
        <span v-for="(item, index) in house.labels.split(',')" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs sm:mr-0.5 lg:mr-1">{{ item }}</span>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="sm:w-full lg:w-3/4 lg:pr-4">
        <!-- 基本信息 -->
        <div class="w-full p-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">基本信息</span>
          </div>
          <!-- 内容 -->
          <div class="flex lg:flex-row sm:flex-col">
            <div class="pt-2 space-y-2 sm:w-full lg:w-1/2">
              <div>产权类型：
                <type-label :type="house.type" :class-name="'font-normal'"></type-label>
                <!-- <span v-if="house.type === '1'" class="font-normal">住宅</span>
                <span v-else-if="house.type === '2'" class="font-normal">公寓</span>
                <span v-else-if="house.type === '3'" class="font-normal">商铺</span>
                <span v-else-if="house.type === '4'" class="font-normal">写字楼</span>
                <span v-else-if="house.type === '5'" class="font-normal">仓库</span>
                <span v-else-if="house.type === '6'" class="font-normal">其它</span> -->
              </div>
              <div>建筑类型：<span v-if="house.buildType">{{ buildType[house.buildType].title }}</span><span v-else>暂无数据</span></div>
              <div>产权年限：<span v-if="house.property">{{ house.property }}年</span><span v-else>暂无数据</span></div>
              <div>开&nbsp;&nbsp;发&nbsp;&nbsp;商：<span v-if="house.hDeveloperByDeveloperId"><a :href="house.hDeveloperByDeveloperId.link" target="_blank">{{ house.hDeveloperByDeveloperId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>品&nbsp;&nbsp;牌&nbsp;&nbsp;商：<span v-if="house.brandId"><a :href="house.brandId.link" target="_blank">{{ house.brandId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>装修类型：<span v-if="house.decorationType">{{ decorationType[house.decorationType].title }}</span><span v-else>暂无数据</span></div>
              <div>装修标准：<span v-if="house.decorationStandard">{{ house.decorationStandard }}元/㎡</span><span v-else>暂无数据</span></div>
              <div>项目地址：<span v-if="house.address">{{ house.address }}</span><span v-else>暂无数据</span></div>
            </div>
            <div class="sm:w-full lg:w-1/2">
              <div class="w-full h-[220px] mx-auto mt-2">
                <line-echart :option="scoreOption" />
              </div>
            </div>
          </div>
        </div>
        <!-- 销售信息 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">销售信息</span>
          </div>
          <!-- 内容 -->
          <div class="flex sm:flex-col lg:flex-row">
            <div class="pt-2 space-y-2 sm:w-full lg:w-1/2">
              <div>销售状态：<span v-if="house.saleState">{{ saleState[house.saleState].title }}</span><span v-else>暂无数据</span></div>
              <div>交房时间：<span v-if="house.payTime">预计{{ house.payTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>咨询电话：
                <a :href="`tel:${phoneNum},${house.number}%23`">
                  <span class="text-fjRed-100">{{ phoneNum }} 转 {{ house.number }}</span>
                </a>
              </div>
            </div>
            <div class="pt-2 space-y-2 sm:w-full lg:w-1/2">
              <div>开盘时间：<span v-if="house.openTime">{{ house.openTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>售楼地址：<span v-if="house.saleAddress">预计{{ house.saleAddress }}</span><span v-else>暂无数据</span></div>
            </div>
          </div>
          <!-- 楼栋列表详情 -->
          <div class="w-full p-4">
            <table v-if="house.hBuildsById && house.hBuildsById.length > 0" class="w-full text-center transition-all border" cellpadding="0" cellspacing="0">
              <tbody>
                <tr class="w-full h-12 bg-gray-400">
                  <!-- number -->
                  <td class="w-1/12 border">楼栋号</td>
                  <!-- price -->
                  <td class="w-1/12 border">楼栋均价</td>
                  <!-- priceDescription -->
                  <td class="w-3/12 border">价格描述</td>
                  <!-- saleState -->
                  <td class="w-1/12 border">状态</td>
                  <!-- floors -->
                  <td class="w-1/12 border">层高</td>
                  <!-- description -->
                  <td class="w-4/12 border">描述</td>
                  <!-- licenseId -->
                  <td class="w-1/12 border">预售信息</td>
                </tr>
                <tr v-for="(item, index) in house.hBuildsById" v-show="index < 2 || showBuild" :key="item.id" class="w-full h-12 bg-gray-300">
                  <td class="w-1/12 border">{{ item.number }}</td>
                  <td class="w-1/12 border">{{ item.price }}</td>
                  <td class="w-3/12 border">{{ item.priceDescription }}</td>
                  <td class="w-1/12 border">
                    <span v-if="item.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
                    <span v-if="item.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
                    <span v-if="item.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
                  </td>
                  <td class="w-1/12 border">{{ item.floors }}</td>
                  <td class="w-4/12 border">{{ item.description }}</td>
                  <!-- {{ item.licenseId }} -->
                  <td class="w-1/12 border"><a target="_blank">预售证</a></td>
                </tr>
              </tbody>
            </table>
            <div v-if="house.hBuildsById && house.hBuildsById.length > 2" v-show="!showBuild" class="w-1/6 mx-auto text-center bg-gray-300" @click="changeShowBuild(true)">展开</div>
            <div v-if="house.hBuildsById && house.hBuildsById.length > 2" v-show="showBuild" class="w-1/6 mx-auto text-center bg-gray-300" @click="changeShowBuild(false)">合并</div>
          </div>
        </div>
        <!-- 小区规划 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">小区规划</span>
          </div>
          <!-- 内容 -->
          <div class="flex sm:flex-col lg:flex-row">
            <div class="pt-2 space-y-2 sm:w-full lg:w-1/2">
              <div>占地面积：<span v-if="house.landArea">{{ house.landArea }}㎡</span><span v-else>暂无数据</span></div>
              <div>拿地时间：<span v-if="house.getLandTime" class="">{{ house.getLandTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>容&nbsp;&nbsp;积&nbsp;&nbsp;率：<span v-if="house.volumeRate" class="">{{house. volumeRate }}</span><span v-else>暂无数据</span></div>
              <div>停&nbsp;&nbsp;车&nbsp;&nbsp;位：<span v-if="house.parking" class="">{{ house.parking }}</span><span v-else>暂无数据</span></div>
              <div>总&nbsp;&nbsp;户&nbsp;&nbsp;数：<span v-if="house.houseTotal" class="">{{ house.houseTotal }}户</span><span v-else>暂无数据</span></div>
              <div>物&nbsp;&nbsp;业&nbsp;&nbsp;费：<span v-if="house.estatePrice" class="">{{ house.estatePrice }}元/㎡</span><span v-else>暂无数据</span></div>
            </div>
            <div class="pt-2 space-y-2 sm:w-full lg:w-1/2">
              <div>建筑面积：<span v-if="house.buildArea" class="">{{ house.buildArea }}㎡</span><span v-else>暂无数据</span></div>
              <div>绿&nbsp;&nbsp;化&nbsp;&nbsp;率：<span v-if="house.greenRate" class="">{{ house.greenRate }}%</span><span v-else>暂无数据</span></div>
              <div>楼栋总数：<span v-if="house.buildingTotal" class="">{{ house.buildingTotal }}栋</span><span v-else>暂无数据</span></div>
              <div>物业公司：<span v-if="house.estateCompanyById" class=""><a target="_blank" :href="house.estateCompanyById.link">{{ house.estateCompanyById.name }}</a></span><span v-else>暂无数据</span></div>
              <div>物业费说明：<span v-if="house.estateDescription" class="">{{ house.estateDescription }}</span><span v-else>暂无数据</span></div>
            </div>
          </div>
        </div>
        <!-- 楼盘分析 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">楼盘解析</span>
          </div>
          <!-- 内容 -->
          <div class="py-2 space-y-4">
            <div class="w-full">交通配套：<span v-if="house.trafficInfo" class="text-gray-400">{{ house.trafficInfo }}</span><span v-else>暂无数据</span></div>
            <div class="w-full">医疗配套：<span v-if="house.medicalInfo" class="text-gray-400">{{ house.medicalInfo }}</span><span v-else>暂无数据</span></div>
            <div class="w-full">商业配套：<span v-if="house.matchingInfo" class="text-gray-400">{{ house.matchingInfo }}</span><span v-else>暂无数据</span></div>
            <div class="w-full">教育配套：<span v-if="house.educationInfo" class="text-gray-400">{{ house.educationInfo }}</span><span v-else>暂无数据</span></div>
            <div class="w-full">其它配套：<span v-if="house.otherInfo" class="text-gray-400">{{ house.otherInfo }}</span><span v-else>暂无数据</span></div>
            <div class="w-full">楼盘优点：<span v-if="house.advantage" class="text-gray-400">{{ house.advantage }}</span><span v-else>暂无数据</span></div>
            <div>
              <span class="">项目缺点：<a :href="`tel:${phoneNum},${house.number}%23`">请咨询客服了解<span class="text-fjRed-100">[{{house.name}}]</span>缺点信息</a></span>
            </div>
          </div>
        </div>
        <!-- 价格信息 -->
        <div class="w-full p-4 mt-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">价格信息</span>
          </div>
          <div class="w-full h-80">
            <line-echart :option="option" :chart-id="'priceChart'" />
          </div>
        </div>
      </div>
      <div class="sm:w-0 sm:hidden lg:w-1/4">
        <!-- 广告位 -->
      </div>
    </div>
    <!-- 推荐楼盘 -->
    <reomend-house />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi, decorationType, buildType, saleState, phoneNum } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
import LineEchart from '~/components/echart/LineEchart.vue';
import ReomendHouse from '~/components/house/RecomendHouse.vue'
const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
export default Vue.extend({
  name: 'HouseInfoMation',
  components: {
    LineEchart,
    ReomendHouse
  },
  async asyncData ({ $axios, params, store }) {
    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    // 获取价格
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
        axisLabel: {
          formatter: '{value} 元/㎡'
        }
      },
      series: [
        {
          data: [],
          type: 'line',
          tooltip: {
            trigger: 'item'
          },
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

    // 获取楼盘详情
    let house: any;
    const scoreOption = {
      title: {
        text: '',
        top: '0',
        left: '0'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        left: '0',
        top: '28',
        data: ['']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '位置评分', max: 5.0 },
          { name: '教育评分', max: 5.0 },
          { name: '医疗评分', max: 5.0 },
          { name: '交通评分', max: 5.0 },
          { name: '商业评分', max: 5.0 },
        ]
      },
      series: [
        {
          name: '',
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          data: [{ value: [0], name: ''}]
        }
      ]
    };
    const getHouse = async () => {
      const param: any = {
        data: {
          id,
        }
      }
      const result = await $axios.$post(HouseApi.GetProject, param)
      if (result.code === 200) {
        house = getDataResult(result);
        getPrice(house);
        scoreOption.title.text = `综合评分`;
        scoreOption.legend.data = [house.name];
        scoreOption.series[0].data = [{
          value: [house.locationScore, house.educationScore, house.medicalScore, house.trafficScore, house.matchingScore],
          name: house.name
        }]

        const breadcrumb: Breadcrumb[] = [];
        breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
        breadcrumb.push({ title: '新房', href: '/house/list' })
        breadcrumb.push({ title: house.sysAreaByAreaId.name, href: '/house/list?areaId=' + house.sysAreaByAreaId.id })
        breadcrumb.push({ title: house.name, href: `/house/${house.id}.html` })
        breadcrumb.push({ title: '详情信息', href: '' })
        store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

      }
    }

    await getHouse();

    return {
      house, option, scoreOption
    }
  },
  data() {
    const showBuild: boolean = false;
    const option: any = {};
    return {
      colors,
      buildType,
      decorationType,
      saleState,
      phoneNum,
      showBuild,
      option,
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
  beforeMount() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        // 跳转移动端页面
        this.option.yAxis.show = false;
    }
  },
  methods: {
     changeShowBuild(flag: boolean) {
      this.showBuild = flag;
    },
  }
});
</script>