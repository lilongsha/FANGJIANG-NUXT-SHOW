<template>
  <div class="container mx-auto">
    <div class="w-full h-32"></div>
    <div class="w-full h-24">
      <!-- name -->
      <div>
        <span class="text-3xl font-bold">{{ house.name }}</span>
        <span v-if="house.aliasName" class="ml-4">别名：{{ house.aliasName }}</span>
      </div>
      <div class="mt-4">
        <span v-if="house.saleState === '1'" class="px-1 py-0.5 font-normal text-sm text-white rounded-sm bg-fjYellow-100">在售</span>
        <span v-else-if="house.saleState === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">待售</span>
        <span v-else-if="house.saleState === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjRed-100">售罄</span>
        <span v-if="house.type === '1'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">住宅</span>
        <span v-else-if="house.type === '2'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">公寓</span>
        <span v-else-if="house.type === '3'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">商铺</span>
        <span v-else-if="house.type === '4'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">写字楼</span>
        <span v-else-if="house.type === '5'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">仓库</span>
        <span v-else-if="house.type === '6'" class="px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100">其它</span>
        <span class="ml-4"></span>
        <span v-for="(item, index) in house.labels.split(',')" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs ">{{ item }}</span>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="w-3/4 pr-4">
        <!-- 基本信息 -->
        <div class="w-full p-4 shadow">
          <!-- 标题 -->
          <div class="w-full pb-[1px] border-b border-fjBlue-100">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">基本信息</span>
          </div>
          <!-- 内容 -->
          <div class="flex flex-row">
            <div class="w-1/2 pt-2 space-y-2">
              <div>产权类型：
                <span v-if="house.type === '1'" class="font-normal">住宅</span>
                <span v-else-if="house.type === '2'" class="font-normal">公寓</span>
                <span v-else-if="house.type === '3'" class="font-normal">商铺</span>
                <span v-else-if="house.type === '4'" class="font-normal">写字楼</span>
                <span v-else-if="house.type === '5'" class="font-normal">仓库</span>
                <span v-else-if="house.type === '6'" class="font-normal">其它</span>
              </div>
              <div>建筑类型：<span v-if="house.buildType">{{ buildType[house.buildType].title }}</span><span v-else>暂无数据</span></div>
              <div>产权年限：<span v-if="house.property">{{ house.property }}年</span><span v-else>暂无数据</span></div>
              <div>开&nbsp;&nbsp;发&nbsp;&nbsp;商：<span v-if="house.hDeveloperByDeveloperId"><a :href="house.hDeveloperByDeveloperId.link" target="_blank">{{ house.hDeveloperByDeveloperId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>品&nbsp;&nbsp;牌&nbsp;&nbsp;商：<span v-if="house.brandId"><a :href="house.brandId.link" target="_blank">{{ house.brandId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>装修类型：<span v-if="house.decorationType">{{ decorationType[house.decorationType].title }}</span><span v-else>暂无数据</span></div>
              <div>装修标准：<span v-if="house.decorationStandard">{{ house.decorationStandard }}元/㎡</span><span v-else>暂无数据</span></div>
              <div>项目地址：<span v-if="house.address">{{ house.address }}</span><span v-else>暂无数据</span></div>
            </div>
            <div class="w-1/2">
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
          <div class="flex flex-row">
            <div class="w-1/2 pt-2 space-y-2">
              <div>销售状态：<span v-if="house.saleState">{{ saleState[house.saleState].title }}</span><span v-else>暂无数据</span></div>
              <div>交房时间：<span v-if="house.payTime">预计{{ house.payTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>咨询电话：<span class="text-fjRed-100">{{ phoneNum }} 转 {{ house.number }}</span></div>
            </div>
            <div class="w-1/2 pt-2 space-y-2">
              <div>开盘时间：<span v-if="house.payTime">{{ house.payTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
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
          <div class="flex flex-row">
            <div class="w-1/2 pt-2 space-y-2">
              <div>占地面积：<span v-if="house.landArea">{{ house.landArea }}㎡</span><span v-else>暂无数据</span></div>
              <div>拿地时间：<span v-if="house.getLandTime" class="">{{ house.getLandTime.split('T')[0] }}</span><span v-else>暂无数据</span></div>
              <div>容&nbsp;&nbsp;积&nbsp;&nbsp;率：<span v-if="house.volumeRate" class="">{{house. volumeRate }}</span><span v-else>暂无数据</span></div>
              <div>停&nbsp;&nbsp;车&nbsp;&nbsp;位：<span v-if="house.parking" class="">{{ house.parking }}</span><span v-else>暂无数据</span></div>
              <div>总&nbsp;&nbsp;户&nbsp;&nbsp;数：<span v-if="house.houseTotal" class="">{{ house.houseTotal }}户</span><span v-else>暂无数据</span></div>
              <div>物&nbsp;&nbsp;业&nbsp;&nbsp;费：<span v-if="house.estatePrice" class="">{{ house.estatePrice }}元/㎡</span><span v-else>暂无数据</span></div>
            </div>
            <div class="w-1/2 pt-2 space-y-2">
              <div>建筑面积：<span v-if="house.buildArea" class="">{{ house.buildArea }}㎡</span><span v-else>暂无数据</span></div>
              <div>绿&nbsp;&nbsp;化&nbsp;&nbsp;率：<span v-if="house.greenRate" class="">{{ house.greenRate }}%</span><span v-else>暂无数据</span></div>
              <div>楼栋总数：<span v-if="house.buildingTotal" class="">{{ house.buildingTotal }}栋</span><span v-else>暂无数据</span></div>
              <div>物业公司：<span v-if="house.estateCompanyById" class=""><a target="_blank" :href="house.estateCompanyById.link">{{ house.estateCompanyById.name }}</a></span><span v-else>暂无数据</span></div>
              <div>物业费说明：<span v-if="house.estateDescription" class="">{{ house.estateDescription }}</span><span v-else>暂无数据</span></div>
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
      <div class="w-1/4">
        <!-- 广告位 -->
      </div>
    </div>
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
      <div class="grid grid-cols-4 grid-rows-1 gap-2 w-[full-8] mx-4 mt-8 h-96 overflow-hidden">
        <a v-for="item in getHotProject" :key="item.id" :href="`/house/${item.id}.html`" target="_blank" class="block w-[96%] h-[96%] mx-[2%] my-[2%] shadow-lg">
          <div class="w-full h-3/5">
            <img v-if="item.firstImg" :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
          </div>
          <div class="w-full px-4 mt-2 bg-white h-2/5">
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
            <div class="flex flex-row items-center mt-2">
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
              <span v-if="item.address" class="overflow-hidden text-gray-400" :title="item.address">{{ item.address }}</span>
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
              <span class="overflow-hidden text-gray-400" :title="item.rooms">{{ item.rooms }}</span>
              <span class="ml-2 overflow-hidden text-gray-400" :title="item.roomAreas">{{ item.roomAreas }}</span>
            </div>
            <div class="flex flex-row items-end justify-between px-2 h-9">
              <div v-if="item.labels" class="flex flex-row items-end space-x-2">
                <span v-for="(label, index) in (item.labels.split(','))" :key="index" class="px-1 text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm" :title="label">{{ label }}</span>
              </div>
              <div>
                <div>
                  <span class="text-2xl font-bold text-fjRed-100">{{ item.price }}</span>
                  <span class="text-xs text-gray-400">元/㎡</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi, decorationType, buildType, saleState, phoneNum } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
import LineEchart from '~/components/echart/LineEchart.vue';
const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
export default Vue.extend({
  name: 'HouseInfoMation',
  components: {
    LineEchart,
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
        scoreOption.title.text = `${house.name}综合评分`;
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
    return {
      colors,
      buildType,
      decorationType,
      saleState,
      phoneNum,
      showBuild,
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
  methods: {
     changeShowBuild(flag: boolean) {
      this.showBuild = flag;
    },
  }
});
</script>