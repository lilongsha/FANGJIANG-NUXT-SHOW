<template>
  <div class="mx-auto sm:w-screen sm:px-2 lg:container">
    <div id="list" class="w-full sm:h-10 lg:h-24"></div>
    <div class="flex flex-row w-full">
    <div class="lg:w-3/4 sm:w-full">
    <div class="flex flex-row sm:w-full lg:w-full">
      <div class="sm:w-full lg:w-full lg:pr-4 sm:mt-2 lg:mt-8">
        <!-- h-36px -->
        <div class="flex flex-row items-center justify-between w-full h-[36px] border-b-[1px] border-fjBlue-100">
          <!-- 标题内容 -->
          <div class="sm:text-base lg:text-xl font-bold border-b-[6px] border-fjBlue-100  flex justify-center items-center">{{ project.name }}动态
            <button class="ml-2 space-x-2 p-1 object-center border border-fjBlue-100 rounded flex flex-row w-[115px] h-[25px] items-center" @click="openClue('7')">
                <img src="~/assets/img/clue/horn.png" alt="" class="w-[15px] h-[13px]">
                <span class="text-[13px] font-medium text-fjBlue-100">新动态通知我</span>
            </button>
          </div>
        </div>
        <!-- content -->
        <div class="w-full mt-8">
          <div v-for="item in dynamics" :key="item.id" class="w-full mb-4 border-b border-gray-300 border-dashed">
            <!-- dynamic Title -->
            <div class="w-full mb-4">
              <span class="text-lg text-black hover:border-b border-fjBlue-100">{{ item.title }}</span>
              <span :class="DynamicSort[item.sort].color" class="px-1 py-0.5 ml-4 text-xs text-white">{{ DynamicSort[item.sort].title }}</span>
            </div>
            <!-- dynamic Content -->
            <p class="w-full mb-8 truncate whitespace-pre-wrap first-letter:ml-4">{{ item.description }}</p>
            <!-- question Time -->
            <div v-if="item.updateBy" class="text-sm text-gray-400">{{ item.updateTime.split('T')[0] }}</div>
            <div v-else class="text-sm text-gray-400">{{ item.createTime.split('T')[0] }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="sm:w-full lg:w-full">
      <div class="text-right sm:w-full lg:w-3/4">
        <a-pagination
          v-if="isMobile"
          size="small"
          :total="pageParam.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParam.pageNum"
          :item-render="itemRender"
        />
        <a-pagination
          v-else
          :total="pageParam.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParam.pageNum"
          :item-render="itemRender"
        />
      </div>
    </div>
    <div class="lg:mt-10 sm:mt-2 border border-[#DDDDDD] flex flex-row justify-between items-center lg:h-[79px] lg:px-6 sm:h-[46px] sm:w-full">
      <div class="flex flex-row items-center space-x-2"> 
        <img src="~/assets/img/clue/ding.png" alt="" class="lg:w-5 lg:h-5 sm:w-3 sm:h-3">
        <span class="text-[#333333] lg:text-[20px] sm:text-xs font-normal">设置订阅楼盘，楼盘信息早知道</span>
      </div>
      <div class="flex flex-row items-center" @click="openClue('6')">
        <input type="text" class="placeholder-[#999999] bg-[#F5F5F5] lg:w-[266px] lg:h-[45px] sm:h-[35px] sm:w-[85px] sm:text-[10px] lg:pl-5 -mr-1" placeholder="请输入手机号">
        <button class="text-white lg:text-[20px] sm:text-xs font-medium bg-fjRed-100 lg:w-[156px] lg:h-[46px] sm:w-[90px] sm:h-[35px]">订阅楼盘信息</button>
      </div>
    </div>
    </div>
    <div class="sm:w-0 sm:hidden lg:w-1/4 space-y-[15px]">
        <!-- 广告位 -->
        <div>
          <img src="~/assets/img/clue/busAd.png" alt="看房专车免费接送" class="w-[306px] h-[358px]" @click="openActivityClue('4')">
        </div>
        <div>
          <img src="~/assets/img/clue/groupAd.png" alt="组团砍价，参与拼团" class="w-[306px] h-[358px]" @click="openActivityClue('5')">
        </div>
        <div>
          <img v-if="activities" :src="activities.headImg" alt="广告" class="w-[306px] h-[358px]" @click="openActivityClue('15', activities.id)">
        </div>
    </div>
    </div>
    <ClueLeaveClue v-show="openActivity" class="absolute z-[60] w-full h-full" :city="city" :look="lookTime" :project-id="project.id" :activity-id="activityId" :clue-type="clueType" @isOpen="isOpen" />
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="city" :look="lookTime"  :project-id="project.id" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActivityApi, ActivityModel } from '~/api/clue/activity';
import { getDynamicNews, sort as DynamicSort } from '~/api/model/dynamicModel'
import { getProject } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'DiscussList',
  components: {
  },
  async asyncData({ $axios, store, req, route }) {
    
    const userAgent = req?.headers['user-agent'] || '';
    let pageNum = 1;
    let p = route.params?.p;
    const id = route.params?.id;
    if (p) {
      if (p.endsWith('.html')) {
        p = p.split('.')[0];
      }
    }
    if (p && p.startsWith('p')) {
      pageNum = Number(p.substring(1));
    }

    const activityParam = {
      data: {
        projectId: id
      }
    }
    let activities;
    if (activityParam.data.projectId) {
      const activityResult = await $axios.$post(ActivityApi.GetByProjectId, activityParam)
      if (activityResult.code === 200 && activityResult.data) {
        const result:ActivityModel = getDataResult(activityResult);
        if (result) {
          activities = result;
        }
      }
    }
    
    const pageParam = {
      pageSize: 10,
      pageNum,
      total: 0
    }

    const [resultProject,  resultDynamic] = await  Promise.all([
      getProject($axios, id),
      getDynamicNews($axios, id, pageParam.pageSize, pageParam.pageNum - 1)
    ])

    let project: any;
    let city: any;
    let lookTime: any;
    if (resultProject.code === 200) {
      project = getDataResult(resultProject);
      lookTime = project.lookTime;
      city = project.sysCityByCityId.id;
    }
    
    const { content, page } = getPageResult(resultDynamic);
    pageParam.total = page.totalElements;
    pageParam.pageNum = page.number + 1;
    let dynamics: any[] = [];
    dynamics = content;

    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
    breadcrumb.push({ title: project.name, href: `/house/${project.id}` })
    breadcrumb.push({ title: '动态', href: '', icon: 'list' })
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

    let isMobile: any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }

    return {
      pageParam,
      id,
      dynamics,
      project,
      city,
      lookTime,
      isMobile,
      activities
    }
  },
  data () {
    const clueType: string = '';
    const opening: boolean = false;
    const pageParam = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };

    let project: any;
    const dynamics: any[] = [];
    const id: string = '';
    let isMobile:any;
    return {
      activityId: '',
      openActivity: false,
      clueType,
      opening,
      id,
      pageParam,
      dynamics,
      DynamicSort,
      isMobile,
      project,
    }
  },
  head() {
    const houseName: string = this.project.name;
    const houseAreaName: string = this.project.sysAreaByAreaId.name || '';
    const houseCityName: string = this.project.sysCityByCityId.name || '';
    const houseProvinceName: string = this.project.sysProvinceByProvinceId.name;
    const latLng: string = this.project.latitude + '' + this.project.longitude;
    const title: string = `${houseCityName}${houseAreaName}${this.project.name}楼盘最新动态 - 房匠`;
    const description: string = `房匠网为您提供${houseCityName}${houseAreaName}${houseName}楼盘信息,${houseName}最新动态信息,了解更多${houseCityName}${houseAreaName}${this.project.name}详细信息,请关注房匠网.`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.project.firstImg?.address;
    const sandImgAddress: string = this.project.sandImg?.address;
    const pubTime: string = this.project.createTime.split('.')[0];
    let upTime: string = this.project.updateTime || this.project.createTime;
    upTime = upTime.split('.')[0];
    const keyword: string = `${houseCityName}${houseAreaName}${houseName},${houseName}楼盘信息,${houseName}最新动态`;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${title}","images":["${firstImgAddress}","${sandImgAddress}", "${sandImgAddress}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    let location: string;
    if (this.project.latitude && this.project.longitude) {
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
    itemRender (page: any, type: any, originalElement: any) {
      const path = `/house/dynamic/${this.id}/p${page}`;
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

      if (type === 'prev') {
        if (page === 0) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }

      if (type === 'prev' || type === 'next') {
        if (page === 0 || page === this.pageParam.pageNum) {
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

<style scoped>
.ant-pagination >>> .ant-pagination-item-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>