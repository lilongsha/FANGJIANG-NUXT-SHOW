<template>
  <div class="w-full mx-auto sm:w-screen sm:px-2 sm:pb-2 lg:container">
    <div class="lg:h-24"></div>
    <AppTitle :house="house" :favorite="favorite" class="sm:mb-4" />
    <AppBar :current="'video'" :house="house" :class-name="'menu sticky z-[45] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 lg:mt-6 sm:top-[95px] lg:top-[118px] text-white'" />
    <div class="w-full lg:flex lg:flex-row lg:mt-8 sm:mt-2">
      <div class="lg:w-3/4 sm:w-full min-h-[500px]">
        <div class="flex flex-row items-center justify-between w-full h-[36px] border-b-[1px] border-fjBlue-100">
          <div class="sm:text-base lg:text-xl font-bold border-b-[6px] border-fjBlue-100  flex justify-center items-center">{{ house.name }}相关视频</div>
        </div>
        <div class="flex flex-row items-start justify-start lg:space-x-8 lg:mt-[30px] lg:text-[18px] sm:mt-4 sm:space-x-2">
          <span :class="type === '0' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('0')">全部视频</span>
          <span class="text-coolGray-400">|</span>
          <span :class="type === '1' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('1')">楼盘实拍</span>
          <span class="text-coolGray-400">|</span>
          <span :class="type === '2' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('2')">样板间赏析</span>
          <span class="text-coolGray-400">|</span>
          <span :class="type === '3' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('3')">楼盘对比</span>
        </div>
        <div >
          <div v-if="type === '0'" class="content">
            <div v-for="(item, index) in videos" v-show="index < 50" :key="item.id" class="item group">
              <a :href="`/video/${item.id}.html`">
                <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
                  <h3 class="text-[18px] text-white" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.title }}</h3>
                  <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
                </div>
                <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
                <img :src="item.photoAddress">
              </a>
            </div>
          </div>
          <div v-if="type === '1'" class="content">
            <div v-for="(item, index) in video1" v-show="index < 50" :key="item.id" class="item group">
              <a :href="`/video/${item.id}.html`">
                <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
                  <h3 class="text-[18px] text-white" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.title }}</h3>
                  <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
                </div>
                <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
                <img :src="item.photoAddress">
              </a>
            </div>
          </div>
          <div v-if="type === '2'" class="content">
            <div v-for="(item, index) in video2" v-show="index < 50" :key="item.id" class="item group">
              <a :href="`/video/${item.id}.html`">
                <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
                  <h3 class="text-[18px] text-white" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.title }}</h3>
                  <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
                </div>
                <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
                <img :src="item.photoAddress">
              </a>
            </div>
          </div>
          <div v-if="type === '3'" class="content">
            <div v-for="(item, index) in video3" v-show="index < 50" :key="item.id" class="item group">
              <a :href="`/video/${item.id}.html`">
                <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
                  <h3 class="text-[18px] text-white" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;">{{ item.title }}</h3>
                  <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
                </div>
                <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
                <img :src="item.photoAddress">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-3 lg:w-1/4 sm:w-full">
        <!-- sm:hidden -->
        <div v-if="!isMobile" class="">
          <img src="~/assets/img/clue/freeCar.png" alt="" class="w-[278px] h-[324px] mt-4 ml-11" @click="clickOpen('', '4')">
        </div>
        <!-- lg:hidden  -->
        <div v-if="isMobile" class=" mt-2 w-full h-[80px] bg-cover rounded-md bg-rightbg pl-[20px] pt-[6px]">
          <div class="text-[20px] font-bold text-white">看房专车免费接送</div>
          <button class="bg-white rounded-3xl font-bold h-[32px] w-[130px] text-fjBlue-100 text-[14px] mt-[8px]" @click="clickOpen('', '4')">立即预约</button>
        </div>
        <!--  sm:hidden -->
        <div v-if="activities && !isMobile" class="space-y-3 ml-11">
          <!-- <div v-for="item in activities" :key="item.id" class=""> -->
          <div class="relative" @click="clickOpen(activities.id, '15')">
            <img :src="activities.headImg" alt="" class="rounded w-[278px] h-[270px]">
            <span class="absolute lg:top-4 lg:w-full text-center text-white text-[26px] ">{{ activities.title }}</span>
            <span class="absolute lg:top-[80px] lg:w-full text-center text-white text-[18px] ">{{ activities.description }}</span>
          </div>
        </div>
        
      </div>
    </div>
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="cityId" :look="house.lookTime"  :project-id="house.id" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Api as VideoApi } from '@/api/model/videoModel';
import { Api as HouseApi } from '~/api/model/houseModel';
import { getDataResult } from '~/utils/response/util';
import { Breadcrumb } from '~/types/app';
import { ActivityApi } from '~/api/clue/activity';
export default Vue.extend({
  name: 'VideoList',
  components: {},
  async asyncData({ $axios, store, route, redirect }){
    const isMobile = store.state.app.isMobile;

    const start = new Date().getTime();

    // 视频
    let params = route.params?.id;
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
      }
    }
    let videos;
    const video1: any[] = [];
    const video2: any[] = [];
    const video3: any[] = [];

    const getVideo = async () => {
      const result = await $axios.$post(VideoApi.ByProject, { data: { id:params }})
      if (result?.code === 200 && result.data.content) {
        videos = getDataResult(result);
        let max;
        if (videos) {
          for (let i = 0; i< videos.length; i++) {
            if ((videos[i + 1]?.createTime || '') > (videos[i]?.createTime || '')) {
              max = videos[i + 1];
              videos[i+1] = videos[i]
              videos[i] = max
            }
          }
        }
        for(let i = 0; i < videos.length; i++) {
          if (videos[i].sort === '1') {
            video1.push(videos[i]);
          } else if (videos[i].sort === '2') {
            video2.push(videos[i]);
          } else if (videos[i].sort === '3') {
            video3.push(videos[i]);
          }
        }
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
          breadcrumb.push({ title: '楼盘视频', href: '' })
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
    
    // 相关活动
    let activities;
    const getActivity = async () => {
      const activityParam = {
        data: {
          projectId: params
        }
      }
      
      if (activityParam.data.projectId) {
        const activityResult = await $axios.$post(ActivityApi.GetByProjectId, activityParam)
        if (activityResult?.code === 200 && activityResult.data) {
          activities = activityResult.data.content;
        }
      }
    }

    await Promise.all([
      getVideo(),
      getHouse(),
      getActivity(),
    ])

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("新房视频详情调用接口使用时间：", end - start)

    const cityId = store.state.app.cityId;
    return { params, videos, house, type: '0', video1, video2, video3, cityId, activities, favorite, isMobile }
  },
  data () {
    let isMobile: any;
    let house: any;
    const clueType: string = '';
    const type: String = '0';
    const activityId: string = '';
    const opening: boolean = false;
    return { type, video1:[], video2: [], video3: [], opening, activityId, clueType, house, favorite: '', isMobile }
  },
  head() {
    const houseName = this.house.name;
    const houseCityName: string = this.house.sysCityByCityId.name || '';
    const title:string = `【${houseName}视频】最新视频-房匠网`;
    const description: string = `${houseCityName}房匠为您提供${houseName}楼盘视频，包括楼盘实拍、样板间赏析、楼盘对比等，了解${houseName}楼盘视频，关注房匠网。`;
    const keyword: string = `${houseName}视频,${houseName}楼盘视频,${houseName}样板间视频`;
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
  methods: {
    changeType(type: string) {
      this.type = type;
    },
    clickOpen(activityId?: string, clueType?: string) {
      this.opening = true;
      this.activityId = activityId || '';
      this.clueType = clueType || '';
    },
    isOpen() {
      this.opening = false;
    }
  }
})
</script>
<style scoped>
.content {
  @apply flex sm:flex-col sm:px-0 sm:space-y-4 mt-4 lg:grid lg:grid-cols-3 lg:justify-items-center;
}

.content .item {
  @apply sm:w-full sm:h-48 lg:w-[298px] lg:h-[215px] lg:mb-4;
}

.content .item a {
  @apply w-full h-full block relative;
}

.content .item a img {
  @apply w-full h-full object-cover;
}

.content .item a div {
  @apply bg-black absolute bottom-0 w-full object-cover flex flex-col px-2 bg-opacity-40 text-white;
}

.content .item a .play {
  @apply absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5;
}
</style>