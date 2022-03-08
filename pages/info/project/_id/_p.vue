<template>
  <div class="w-full mx-auto sm:w-screen sm:px-2 sm:pb-2 lg:container">
    <div class="lg:h-24 sm:h-10"></div>
    <AppTitle :house="house" :favorite="favorite" />
    <AppBar :current="'info'" :house="house" :class-name="'menu sticky z-[45] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 lg:mt-6 sm:top-[95px] lg:top-[118px] text-white'" />
    <div class="flex flex-row items-start justify-start lg:space-x-8 lg:mt-[30px] lg:text-[18px] sm:mt-4 sm:space-x-2">
      <span :class="type === '0' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('0')">全部资讯</span>
      <span class="text-coolGray-400">|</span>
      <span :class="type === '2' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('2')">开盘资讯</span>
      <span class="text-coolGray-400">|</span>
      <span :class="type === '7' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('7')">实探楼盘</span>
      <span class="text-coolGray-400">|</span>
      <span :class="type === '3' ? 'text-fjBlue-100 border-b-2 border-fjBlue-100' : ''" @click="changeType('3')">楼市政策</span>
    </div>
    <div class="w-full lg:flex lg:flex-row lg:mt-8 sm:mt-2">
      <div class="lg:w-3/4 sm:w-full min-h-[500px]">
        <div class="w-full">
          <div v-if="type === '0'" class="lg:space-y-[28px] sm:space-y-2">
            <a v-for="(item, index) in news" v-show="index < 10" :key="item.id" :href="`/info/${item.id}.html`" class="sm:h-24 flex flex-row bg-[#F5F5F5]">
              <div class="w-2/5">
                <img :src="item.img" alt="" class="w-full lg:h-[244px] sm:h-full overflow-hidden">
              </div>
              <div class="relative w-3/5 lg:pl-8 lg:pt-8 sm:pl-2 sm:pt-2">
                <div class="overflow-hidden lg:w-2/3 sm:w-full">
                  <div class="lg:text-[22px] sm:text-[16px] inline-block text-base font-bold text-black">{{ item.title }}</div>
                  <div class="text-[#666666] lg:mt-4 lg:text-[16px] sm:text-[14px] text-ellipsis tracking-wider overflow-hidden" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;">
                    {{ item.description }}
                  </div>
                </div>
                <div class="absolute lg:bottom-4 sm:bottom-2 lg:right-4 lg:text-[18px] sm:text-[12px] sm:right-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
              </div>
            </a>
          </div>
          <div v-if="type === '2'" class="lg:space-y-[28px] sm:space-y-2">
            <a v-for="(item, index) in new2" v-show="index < 10" :key="item.id" :href="`/info/${item.id}.html`" class="sm:h-24 flex flex-row bg-[#F5F5F5]">
              <div class="w-2/5">
                <img :src="item.img" alt="" class="w-full lg:h-[244px] sm:h-full overflow-hidden">
              </div>
              <div class="relative w-3/5 lg:pl-8 lg:pt-8 sm:pl-2 sm:pt-2">
                <div class="overflow-hidden lg:w-2/3 sm:w-full">
                  <div class="lg:text-[22px] sm:text-[16px] inline-block text-base font-bold text-black">{{ item.title }}</div>
                  <div class="text-[#666666] lg:mt-4 lg:text-[16px] sm:text-[14px] text-ellipsis tracking-wider overflow-hidden" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;">
                    {{ item.description }}
                  </div>
                </div>
                <div class="absolute lg:bottom-4 sm:bottom-2 lg:right-4 lg:text-[18px] sm:text-[12px] sm:right-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
              </div>
            </a>
          </div>
          <div v-if="type === '7'" class="lg:space-y-[28px] sm:space-y-2">
            <a v-for="(item, index) in new7" v-show="index < 10" :key="item.id" :href="`/info/${item.id}.html`" class="sm:h-24 flex flex-row bg-[#F5F5F5]">
              <div class="w-2/5">
                <img :src="item.img" alt="" class="w-full lg:h-[244px] sm:h-full overflow-hidden">
              </div>
              <div class="relative w-3/5 lg:pl-8 lg:pt-8 sm:pl-2 sm:pt-2">
                <div class="overflow-hidden lg:w-2/3 sm:w-full">
                  <div class="lg:text-[22px] sm:text-[16px] inline-block text-base font-bold text-black">{{ item.title }}</div>
                  <div class="text-[#666666] lg:mt-4 lg:text-[16px] sm:text-[14px] text-ellipsis tracking-wider overflow-hidden" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;">
                    {{ item.description }}
                  </div>
                </div>
                <div class="absolute lg:bottom-4 sm:bottom-2 lg:right-4 lg:text-[18px] sm:text-[12px] sm:right-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
              </div>
            </a>
          </div>
          <div v-if="type === '3'" class="lg:space-y-[28px] sm:space-y-2">
            <a v-for="(item, index) in new3" v-show="index < 10" :key="item.id" :href="`/info/${item.id}.html`" class="sm:h-24 flex flex-row bg-[#F5F5F5]">
              <div class="w-2/5">
                <img :src="item.img" alt="" class="w-full lg:h-[244px] sm:h-full overflow-hidden">
              </div>
              <div class="relative w-3/5 lg:pl-8 lg:pt-8 sm:pl-2 sm:pt-2">
                <div class="overflow-hidden lg:w-2/3 sm:w-full">
                  <div class="lg:text-[22px] sm:text-[16px] inline-block text-base font-bold text-black">{{ item.title }}</div>
                  <div class="text-[#666666] lg:mt-4 lg:text-[16px] sm:text-[14px] text-ellipsis tracking-wider overflow-hidden" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;">
                    {{ item.description }}
                  </div>
                </div>
                <div class="absolute lg:bottom-4 sm:bottom-2 lg:right-4 lg:text-[18px] sm:text-[12px] sm:right-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4 sm:w-full lg:space-y-4">
        <div class="sm:hidden">
          <img src="~/assets/img/clue/freeCar.png" alt="" class="w-[278px] h-[324px] ml-11" @click="clickOpen('', '4')">
        </div>
        <div class=" lg:hidden mt-2 w-full h-[80px] bg-cover rounded-md bg-rightbg pl-[20px] pt-[6px]">
          <div class="text-[20px] font-bold text-white">看房专车免费接送</div>
          <button class="bg-white rounded-3xl font-bold h-[32px] w-[130px] text-fjBlue-100 text-[14px] mt-[8px]" @click="clickOpen('', '4')">立即预约</button>
        </div>
        <div v-if="activities" class="space-y-3 ml-11 sm:hidden">
          <div class="relative rounded" @click="clickOpen(activities.id, '15')">
            <img :src="activities.headImg" alt="" class="rounded w-[278px] h-[270px]">
            <span class="absolute lg:top-4 lg:w-full text-center text-white text-[26px] ">{{ activities.title }}</span>
            <span class="absolute lg:top-[80px] lg:w-full text-center text-white text-[18px] ">{{ activities.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="mt-4 sm:w-full lg:container">
      <div class="text-center sm:w-full lg:w-3/4">
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
    <ClueLeaveClue v-show="opening" class="absolute z-[60] w-full h-full" :city="cityId" :look="house.lookTime"  :project-id="house.id" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Api as NewsApi } from '~/api/model/newsModel';
import { Api as HouseApi } from '~/api/model/houseModel';
import { getDataResult, getPageResult } from '~/utils/response/util';
import { Breadcrumb } from '~/types/app';
import { ActivityApi } from '~/api/clue/activity';
export default Vue.extend({
  name: 'InfoList',
  components: {},
  async asyncData({  $axios, store, route, req, redirect }){
    const userAgent = req?.headers['user-agent'] || '';
    let isMobile: any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 移动端
        isMobile = true;
    } else {
      isMobile = false;
    }
    let params = route.params?.id;
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
      }
    }
    let pageNum = 1;
    let p = route.params?.p;
    if (p) {
      if (p.endsWith('.html')) {
        p = p.split('.')[0];
      }
    }
    if (p && p.startsWith('p')) {
      pageNum = Number(p.substring(1));
    }
    const pageParam = {
      pageSize: 10,
      pageNum:pageNum - 1,
      total: 0
    }
    const result = await $axios.$post(
      NewsApi.GetNewsByProject, 
      { 
        data: { projectId: params, inMobile:isMobile }, 
        sort: { desc: ['createTime']},
        page: pageParam
      }
    );
    let news;
    const new2 = [];
    const new3 = [];
    const new7 = [];
    if (result.code === 200) {
      const { content, page } = getPageResult(result);
      news = content;
      pageParam.total = page.totalElements;
      pageParam.pageNum = page.number + 1;
      for (let i = 0; i< news.length; i++) {
        if (news[i].sort === '2') {
          new2.push(news[i])
        } else if (news[i].sort === '3') {
          new3.push(news[i])
        } else if (news[i].sort === '7') {
          new7.push(news[i])
        }
      }
    }
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
        if (result.code === 200) {
          favorite = result.data?.favorite
          house = getDataResult(result);

          const breadcrumb: Breadcrumb[] = [];
          breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
          breadcrumb.push({ title: house.name, href: `/house/${house.id}.html` })
          breadcrumb.push({ title: '楼盘资讯', href: '' })
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
     // 相关活动
    const activityParam = {
      data: {
        projectId: params
      }
    }
    let activities;
    if (activityParam.data.projectId) {
      const activityResult = await $axios.$post(ActivityApi.GetByProjectId, activityParam)
      
      if (activityResult.code === 200 && activityResult.data) {
        activities = activityResult.data.content;
      }
    }
    const cityId = store.state.app.cityId;
    return { params, news, isMobile, house, new2, new3, new7, activities, cityId, pageParam, favorite }
  },
  data () {
    let house: any;
    const pageParam = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };
    let news: any;
    let new2: any;
    let new3: any;
    let new7: any;
    return {
      house,
      type: '0',
      clueType: '',
      activityId: '',
      opening: false,
      pageParam,
      params: '',
      news,
      new2,
      new3,
      new7,
      favorite: '',
    }
  },
  head() {
    const houseName = this.house.name;
    const houseCityName: string = this.house.sysCityByCityId.name || '';
    const title:string = `【${houseName}资讯】最新资讯-房匠网`;
    const description: string = `${houseCityName}房匠为您提供${houseName}实时资讯，包括实探楼盘、开盘咨询、楼市政策等，了解更多关于${houseName}楼盘资讯，关注房匠网`;
    const keyword: string = `${houseName}资讯,${houseName}最新资讯`;
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
      if (type === '0') {
        this.pageParam.total = this.news.length
      } else if(type === '2') {
        this.pageParam.total = this.new2.length
      } else if(type === '3') {
        this.pageParam.total = this.new3.length
      } else if(type === '7') {
        this.pageParam.total = this.new7.length
      }
    },
    clickOpen(activityId?: string, clueType?: string) {
      this.opening = true;
      this.activityId = activityId || '';
      this.clueType = clueType || '';
    },
    isOpen() {
      this.opening = false;
    },
    itemRender (page: any, type: any, originalElement: any) {
      const path = `/info/project/${this.params}/p${page}`;
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
        if (page === 0 || page === this.pageParam.pageNum) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }

      if (type === 'page') {
        if (page === this.pageParam.pageNum) {
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