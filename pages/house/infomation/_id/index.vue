<template>
  <div class="mx-auto sm:w-full sm:px-2 lg:container">
    <div class="w-full sm:h-12 lg:h-20"></div>
    <AppTitle :house="house"  :favorite="favorite" class="mb-4" />
    <AppBar :current="'infomation'" :house="house" :class-name="'mb-2 menu sticky z-[45] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 sm:top-[95px] lg:top-[118px] text-white'" />
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
              <div class="flex flex-row">产权类型：
                <HouseTypeLabel :sort="house.type" :class-name="'font-normal'"></HouseTypeLabel>
              </div>
              <div>建筑类型：<span v-if="house.buildType">{{ buildType[house.buildType].title }}</span><span v-else>暂无数据</span></div>
              <div>产权年限：<span v-if="house.property">{{ house.property }}年</span><span v-else>暂无数据</span></div>
              <div>开&nbsp;&nbsp;发&nbsp;&nbsp;商：<span v-if="house.hDeveloperByDeveloperId"><a :href="house.hDeveloperByDeveloperId.link" target="_blank">{{ house.hDeveloperByDeveloperId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>品&nbsp;&nbsp;牌&nbsp;&nbsp;商：<span v-if="house.brandId"><a :href="house.brandId.link" target="_blank">{{ house.brandId.name }}</a></span><span v-else>暂无数据</span></div>
              <div>装修类型：<span v-if="house.decorationType">{{ decorationType[house.decorationType].title }}</span><span v-else>暂无数据</span></div>
              <div>装修标准：<span v-if="house.decorationStandard">{{ house.decorationStandard }}元/㎡</span><span v-else>暂无数据</span></div>
              <div>项目地址：<span v-if="house.address" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{ house.address }}</span><span v-else>暂无数据</span></div>
            </div>
            <div class="sm:mt-4 sm:w-full lg:w-1/2">
              <div class="w-full h-[220px] mx-auto mt-2">
                <line-echart :option="scoreOption" />
              </div>
            </div>
          </div>
          <ClueButtonClue :name="'订阅楼盘'" @clickButton="openClue('6')"/>
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
              <div>开盘时间：<span v-if="house.openTime">{{ house.openTime.split('T')[0] }}</span><span v-else>暂无数据</span>
                <button class="text-fjBlue-100 font-medium lg:text-[16px] ml-4" @click="openClue('9')">[开盘提醒我]</button>
              </div>
              <div>售楼地址：<span v-if="house.saleAddress" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">预计{{ house.saleAddress }}</span><span v-else>暂无数据</span></div>
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
                    <HouseStateLabel :state="house.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm'" />
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
          <div class="w-full pb-[1px] border-b border-fjBlue-100 flex flex-row items-end">
            <span class="text-lg font-bold border-b-[6px] border-fjBlue-100">楼盘解析</span>
            <button class=" sm:hidden align-baseline ml-2 mb-1 space-x-2 p-1 object-center border border-fjBlue-100 rounded flex flex-row w-[115px] h-[25px] items-center" @click="openClue('10')">
                <img src="~/assets/img/clue/horn.png" alt="" class="w-[15px] h-[13px]">
                <span class="text-[13px] font-medium text-fjBlue-100">了解周边规划</span>
            </button>
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
          <ClueButtonClue :name="'了解周边配套及规划'" @clickButton="openClue('10')"/>
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
          <ClueButtonClue :name="'价格波动通知我'" @clickButton="openClue('2')"/>
        </div>
      </div>
      <div class="sm:w-0 sm:hidden lg:w-1/4 space-y-[15px]">
        <!-- 广告位 -->
        <div>
          <img src="~/assets/img/clue/busAd.png" alt="广告" class="w-[306px] h-[358px]" @click="openActivityClue('4')">
        </div>
        <div>
          <img src="~/assets/img/clue/groupAd.png" alt="广告" class="w-[306px] h-[358px]" @click="openActivityClue('5')">
        </div>
        <div v-if="activities" class="relative" @click="openActivityClue('15', activities.id)">
          <img :src="activities.headImg" alt="广告" class="w-[306px] h-[358px]">
          <span class="absolute lg:top-4 lg:w-full text-center text-white text-[26px] ">{{ activities.title }}</span>
          <span class="absolute lg:top-[80px] lg:w-full text-center text-white text-[18px] ">{{ activities.description }}</span>
        </div>
      </div>
    </div>
    <!-- 推荐楼盘 -->
    <reomend-house />
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="cityId" :look="lookTime"  :project-id="house.id" :clue-type="clueType" @isOpen="isOpen" />
    <ClueLeaveClue v-show="openActivity" class="absolute z-[60] w-full h-full" :city="cityId" :look="lookTime" :activity-id="activityId" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi, decorationType, buildType, saleState, phoneNum } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
import LineEchart from '~/components/echart/LineEchart.vue';
import ReomendHouse from '~/components/house/RecomendHouse.vue'
import { ActivityApi, ActivityModel } from '~/api/clue/activity';
const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
export default Vue.extend({
  name: 'HouseInfoMation',
  components: {
    LineEchart,
    ReomendHouse
  },
  async asyncData ({ $axios, params, store, req, route, redirect }) {
    const start = new Date().getTime();
    const userAgent = req?.headers['user-agent'] || '';

    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }

    // 获取楼盘相关活动
    const activityParam = {
      data: {
        projectId: id
      }
    }
    let activities;
    if (activityParam.data.projectId) {
      const activityResult = await $axios.$post(ActivityApi.GetByProjectId, activityParam)
      if (activityResult?.code === 200 && activityResult.data) {
        const result:ActivityModel = getDataResult(activityResult);
        if (result) {
          activities = result;
        }
      }
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
    const cityId: any = store.state.app.cityId;
    let lookTime: any;
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
    let favorite;
    const getHouse = async () => {
      const param: any = {
        data: {
          id,
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
          favorite = result.data?.favorite
          house = getDataResult(result);
          lookTime = house.lookTime;
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
        
      } catch (error) {
        if (result?.code === 401) {
          redirect('/login?redirect='+ route.path)
        }
      } finally {
        $axios.setHeader('Authorization', '')
      }
      
    }

    await getHouse();

    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        option.yAxis.show = false;
    }

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("新房详情信息调用接口使用时间：", end - start)

    return {
       cityId, lookTime, house, option, scoreOption, activities, favorite,
    }
  },
  data() {
    const clueType: string = '';
    const opening: boolean = false;
    const showBuild: boolean = false;
    const option: any = {};
    let house: any;
    return {
      activityId: '',
      openActivity: false,
      clueType,
      opening,
      colors,
      buildType,
      decorationType,
      saleState,
      phoneNum,
      showBuild,
      option,
      house,
      favorite: '',
    }
  },
  head() {
    const houseName: string = this.house.name;
    const houseAreaName: string = this.house.sysAreaByAreaId.name || '';
    const houseCityName: string = this.house.sysCityByCityId.name || '';
    const houseProvinceName: string = this.house.sysProvinceByProvinceId.name;
    const latLng: string = this.house.latitude + '' + this.house.longitude;
    const title: string = `${houseCityName}${houseAreaName}${this.house.name}楼盘详情信息 - 房匠`;
    const description: string = `房匠网为您提供${houseCityName}${houseAreaName}${houseName}楼盘信息,${houseName}价格,${houseName}售楼处电话,${houseName}周边配套,${houseName}开盘时间等信息,了解更多${houseCityName}${houseAreaName}${this.house.name}详细信息,请关注房匠网.`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.house.firstImg?.address;
    const sandImgAddress: string = this.house.sandImg?.address;
    const pubTime: string = this.house.createTime.split('.')[0];
    let upTime: string = this.house.updateTime || this.house.createTime;
    upTime = upTime.split('.')[0];
    const keyword: string = `${houseCityName}${houseAreaName}${houseName},${houseName}信息,${houseName}价格,${houseName}售楼处电话,${houseName}周边配套`;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${title}","images":["${firstImgAddress}","${sandImgAddress}", "${sandImgAddress}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    let location: string;
    if (this.house.latitude && this.house.longitude) {
      location = `province=${houseProvinceName};city=${houseCityName};coord=${latLng}`;
    } else {
      location = `province=${houseProvinceName};city=${houseCityName};`;
    }
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
        {
          hid: 'location',
          name: 'location',
          content: location
        },
      ],
      script: [
        {
          innerHTML: ldJson,
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
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
    openActivityClue(type: string, id: string) {
      this.activityId = id;
      this.clueType = type;
      this.openActivity = true;
    },
    isOpen() {
      this.opening = false;
      this.openActivity = false;
    },
    openClue(type: string) {
      this.clueType = type;
      this.opening = true;
    },
     changeShowBuild(flag: boolean) {
      this.showBuild = flag;
    },
  }
});
</script>