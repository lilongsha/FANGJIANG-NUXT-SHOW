<template>
  <div class="mx-auto sm:w-full lg:container sm:pb-4">
    <div class="w-full sm:h-2 lg:h-24"></div>
    <div class="flex-row lg:flex">
      <div class="lg:w-2/3">
        <div class="sm:hidden flex flex-row w-full h-[300px]">
        <!-- top photo -->
        <div class="flex flex-row w-full">
          <!-- big photo -->
          <div v-if="newsTop.length > 0" class="w-1/2 pr-1">
            <a v-if="newsTop[0]" :href="`/info/${newsTop[0].id}.html`" target="_blank" class="relative block w-full h-full">
              <img :src="newsTop[0].img" :title="newsTop[0].title" :alt="newsTop[0].title" class="object-cover w-full h-full">
              <div class="absolute bottom-0 z-10 w-full h-10 py-1 bg-black bg-opacity-50">
                <span class="text-white text-[18px] h-full flex flex-row items-center ml-6" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical">{{ newsTop[0].title }}</span>
              </div>
            </a>
          </div>
          <!-- two photo -->
          <div class="flex flex-col w-1/2 h-full pl-1">
            <div v-if="newsTop.length > 1" class="w-full h-1/2 pb-[2px]">
              <a v-if="newsTop[1]" :href="`/info/${newsTop[1].id}.html`" target="_blank" class="relative block w-full h-full">
                <img :src="newsTop[1].img" :title="newsTop[1].title" :alt="newsTop[1].title" class="object-cover w-full h-full">
                <div class="absolute bottom-0 z-10 w-full h-10 py-1 bg-black bg-opacity-50">
                  <span class="text-white text-[18px] h-full flex flex-row items-center ml-6" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical">{{ newsTop[1].title }}</span>
                </div>
              </a>
            </div>
            <div v-if="newsTop.length > 2" class="w-full h-1/2 pt-[2px]">
              <a v-if="newsTop[2]" :href="`/info/${newsTop[2].id}.html`" target="_blank" class="relative block w-full h-full">
                <img :src="newsTop[2].img" :title="newsTop[2].title" :alt="newsTop[2].title" class="object-cover w-full h-full">
                <div class="absolute bottom-0 z-10 w-full h-10 py-1 bg-black bg-opacity-50">
                  <span class="text-white text-[18px] h-full flex flex-row items-center ml-6" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical">{{ newsTop[2].title }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- top -->
      <div class="w-full pl-4 mt-2 lg:hidden">
        <div class="flex flex-row items-center">
          <div class="w-1 h-4 bg-black"></div>
          <!-- 标题 -->
          <div class="ml-2 text-lg font-bold">热门资讯</div>
        </div>
        <div v-for="item in newsTop" :key="item.id" class="flex flex-row flex-shrink-0 h-24 mt-2">
          <!-- img -->
          <div class="w-2/5 h-full">
            <a v-if="item" :href="`/info/${item.id}.html`" target="_blank" class="block w-full h-full">
              <img :src="item.img" :title="item.title" :alt="item.title" class="object-cover w-full h-full">
            </a>
          </div>
          <!-- content -->
          <div class="w-3/5 px-2">
            <a v-if="item" :href="`/info/${item.id}.html`" target="_blank" class="block w-full h-full">
              <div class="flex flex-col w-full h-full overflow-hidden">
                <span class="inline-block mt-2 text-base font-bold text-black" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical">{{ item.title }}</span>
                <div class="h-14 overflow-hidden text-[#999999] text-[12px] mt-1" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 3;word-break: break-all;-webkit-box-orient: vertical">{{ item.description }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <!-- content -->
      <div class="flex flex-row w-full mt-8">
        <!-- list -->
        <div class="flex flex-row sm:w-full lg:w-full">
          <!-- sort menu -->
          <div class="sticky flex flex-col w-1/4 h-112 top-20">
            <div class="sm:w-[120px] flex flex-row items-center">
              <div class="w-1 h-4 ml-4 bg-black lg:hidden"></div>
              <span class="text-[#666666] sm:text-lg sm:font-bold lg:text-[20px] sm:ml-2 lg:mb-4">资讯类别</span>
            </div>
            <div v-for="item in NEWS_SORT" :key="item.key" :class="item.key === sort ? 'h-[62px] bg-info-sort-bg pt-[14px]' : 'h-[40px] hover:pt-[14px] hover:-mt-4'" class="group -ml-3 w-[140px] text-center hover:h-[62px] hover:bg-info-sort-bg">
              <span>
                <a v-if="item.key === 0" href="/info/list/p1.html" :class="item.key === sort ? 'text-fjBlue-100' : 'text-[#999999]'" class="group-hover:text-fjBlue-100">{{ item.value }}</a>
                <a v-else :href="`/info/list/p1,type-${item.key}.html`" :class="item.key === sort ? 'text-fjBlue-100' : 'text-[#999999]'" class="group-hover:text-fjBlue-100">{{ item.value }}</a>
              </span>
            </div>
          </div>
          <!-- list content -->
          <div id="list" class="w-full min-h-[512px] sm:pl-8 sm:pr-4">
            <div class="border-b-2 border-[#999999]">
              <span class="text-[#999999] sm:text-base lg:text-[20px] ">最近</span>
            </div>
            <div class="sm:space-y-4 lg:space-y-8 mt-11">
              <!-- news item -->
              <div v-for="item in newsList" :key="item.id" class="sm:h-24 lg:h-[188px] bg-[#f5f5f5] flex flex-row flex-shrink-0">
                <div class="sm:w-2/5 lg:w-[320px] h-full">
                  <img :src="item.img" :title="item.title" :alt="item.title" class="sm:w-full lg:w-[320px] h-full object-cover" />
                </div>
                <!-- news item info -->
                <div class="relative sm:w-3/5 lg:w-[320px] sm:pl-4 lg:pl-[27px] py-2">
                  <!-- look times -->
                  <div class="flex flex-row items-center justify-end w-full text-right">
                    <div class="w-4 h-4 mr-2 bg-cover bg-looks-gray"></div>
                    <span class="mr-2 text-[#999999] text-[12px]">{{ item.lookTimes }}</span>
                  </div>
                  <a :href="`/info/${item.id}.html`" target="_blank" :title="item.title" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 1;word-break: break-all;-webkit-box-orient: vertical;" class="overflow-hidden text-[#333333] sm:text-sm lg:text-[20px] font-bold hover:text-fjBlue-100"><h3>{{ item.title }}</h3></a>
                  <div class="sm:h-0 lg:h-18" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 3;word-break: break-all;-webkit-box-orient: vertical;">
                    <h5>{{ item.description }}</h5>
                  </div>
                  <!-- tiem -->
                  <div v-if="item.createTime" class="absolute bottom-0 text-right right-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="w-1/3 h-full pl-5 sm:hidden lg:sticky lg:top-24">
        <!-- title -->
        <div class="w-full border-b-2 border-fjBlue-100">
          <span class="inline-block p-1 text-white bg-fjBlue-100">热门资讯</span>
        </div>
        <div class="w-full h-[270px]">
          <div v-if="newsTop.length > 3" class="w-full h-1/2 pb-[2px]">
            <a v-if="newsTop[3]" :href="`/info/${newsTop[3].id}.html`" class="block w-full h-full">
              <div class="flex flex-col w-full h-full overflow-hidden border-b-2 border-[#DDDDDD]">
                <span class="text-black text-[18px] mt-5 inline-block">{{ newsTop[3].title }}</span>
                <div class="text-[#999999] text-[12px] mt-2">{{ newsTop[3].description }}</div>
              </div>
            </a>
          </div>
          <div v-if="newsTop.length > 4" class="w-full h-1/2 pb-[2px]">
            <a v-if="newsTop[4]" :href="`/info/${newsTop[4].id}.html`" class="block w-full h-full">
              <div class="flex flex-col w-full h-full overflow-hidden">
                <span class="text-black text-[18px] mt-5 inline-block">{{ newsTop[4].title }}</span>
                <div class="text-[#999999] text-[12px] mt-2">{{ newsTop[4].description }}</div>
              </div>
            </a>
          </div>
        </div>
        <div v-if="activities && activities.length > 0"  class="w-[306px] h-[358px]" @click="openActivityClue('15', activities[0].id)">
          <div class="relative">
            <img :src="activities[0].headImg" alt="活动" class="w-[306px] h-[358px]">
            <span class="absolute lg:top-4 lg:w-full text-center text-white text-[26px] ">{{ activities[0].title }}</span>
            <span class="absolute lg:top-[80px] lg:w-full text-center text-white text-[18px] ">{{ activities[0].description }}</span>
          </div>
        </div>
        <div v-if="activities && activities.length > 1" class="w-[306px] h-[358px]" @click="openActivityClue('15', activities[1].id)">
          <div class="relative">
            <img :src="activities[1].headImg" alt="活动" class="w-[306px] h-[358px]">
            <span class="absolute lg:top-4 lg:w-full text-center text-white text-[26px] ">{{ activities[1].title }}</span>
            <span class="absolute lg:top-[80px] lg:w-full text-center text-white text-[18px] ">{{ activities[1].description }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- pagination -->
    <div class="w-full mt-4 text-center">
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
    <ClueLeaveClue v-show="openActivity" class="absolute z-[60] w-full h-full" :activity-id="activityId" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActivityApi, ActivityModel } from '~/api/clue/activity'
import { Api as NewsApi, NEWS_SORT } from '~/api/model/newsModel'
import { getDataResult } from '~/utils/response/util'
const fields: string[] = [
  'type'
]

export default Vue.extend({
  name: 'InfoList',
  async asyncData({ $axios, route, store, req }) {
    const start = new Date().getTime();
    // 活动信息
    let activities;
    const getActivity = async () => {
      const activityParam = {
        data: {
          cityId:store.state.app.cityId
        }
      }
      const activityResult = await $axios.$post(ActivityApi.GetByCity, activityParam)
      if (activityResult?.code === 200) {
        const result:ActivityModel[] = getDataResult(activityResult);
        if (result) {
          activities = result;
        }
      }
    }

    
    
    let pageNum = 1;
    const userAgent = req?.headers['user-agent'] || '';
    let query:any;
    let params = route.params?.p;
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
      }
      const paramsArray = params.split(',');
      query = {};
      paramsArray.forEach((item:string) => {
        if (item && item.indexOf('-')){
          const p = item.split('-');
          if (fields.includes(p[0])) {
            const key = p[0]
            const value = p[1];
            let temp:any;
            // eslint-disable-next-line prefer-const
            temp = {};
            temp[key] = value;
            Object.assign(query, temp);
          }
        }
        if (item && item.startsWith('p')) {
          pageNum = Number(item.substring(1));
        }
      })
    }
    
    if (!query) {
      query = {};
    }

    const sort: number = Number(query.type) || 0;

    const getNewsTop = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
        },
        page: {
          pageNum: 0,
          pageSize: 5,
        },
        sort: {
          desc: ['orderNum', 'createTime'],
        },
      }
      if (sort && sort !== 0) {
        newsParam.data.sort = sort;
      }
      return await $axios.$post(NewsApi.GetNewsByCity, newsParam);
    }
    const getNewsList = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
        },
        page: {
          pageNum: pageNum - 1,
          pageSize: 10,
        },
        sort: {
          desc: ['createTime'],
        },
      }
      if (sort && sort !== 0) {
        newsParam.data.sort = sort;
      }
      return await $axios.$post(NewsApi.GetNewsByCity, newsParam);
    }
    let newsTop: any[] = [];
    let newsList: any[] = [];
    let total: number = 0;

    const getNews = async () => {
      const [newsTopResult, newsListResult] = await Promise.all([
        getNewsTop(),
        getNewsList()
      ])
      if (newsTopResult?.code === 200) {
        newsTop = getDataResult(newsTopResult);
      }
      if (newsListResult?.code === 200) {
        newsList = getDataResult(newsListResult);
        total = newsTopResult.data.page.totalElements;
      }
    }

    await Promise.all([
      getActivity(),
      getNews(),
    ])

    let isMobile: any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }

    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("资讯列表调用接口使用时间：", end - start)
    
    return {
      activities,
      newsTop,
      newsList,
      total,
      sort,
      isMobile,
      pageNum,
    }
  },
  data () {
    const sort: number = 0;
    let isMobile:any;
    return {
      clueType: '',
      openActivity: false,
      activityId: '',
      sort,
      NEWS_SORT,
      pageNum: 1,
      newsTop: [],
      newsList: [],
      total: 0,
      isMobile,
    }
  },
  head() {
    let city:string = this.$store.app.city || '石家庄';
    if (city.endsWith('市')) {
      city = city.substring(city.length - 1);
    }

    // const year = new Date().getFullYear();
    
    const tdk = [
      {
        t: `${city}房产信息资讯网_${city}楼市最新消息_${city}房地产新闻-${city}房匠网`,
        d: `${city}房匠网为您提供全面的${city}新房资讯,包含拿地政策、开盘信息、楼市政策、房贷利率、区域规划、区域房价、实探楼盘等栏目，是${city}房产资讯动态的网络平台。`,
        k: `${city}新房资讯,${city}房地产新闻,${city}房产资讯`,
      },
      {
        t: `${city}拿地政策_拿地政策_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}拿地政策,拿地政策,${city}新房资讯,${city}房产资讯`,
      },
      {
        t: `${city}开盘资讯_开盘资讯_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}开盘资讯,开盘资讯,${city}新房资讯,${city}房产资讯`,
        },
        {
        t: `${city}楼市政策_楼市政策_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}楼市政策,楼市政策,${city}新房资讯,${city}房产资讯`,
        },
        {
        t: `${city}房贷利率_房贷利率_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}房贷利率,房贷利率,${city}新房资讯,${city}房产资讯`,
        },
        {
        t: `${city}区域规划_区域规划_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络`,
        k: `${city}区域规划,区域规划,${city}新房资讯,${city}房产资讯`,
        },
        {
        t: `${city}区域房价_区域房价_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}区域房价,区域房价,${city}新房资讯,${city}房产资讯`,
        },
        {
        t: `${city}实探楼盘_实探楼盘_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}实探楼盘,实探楼盘,${city}新房资讯,${city}房产资讯`,
        },
        {
        t: `${city}房产百科_房产百科_${city}新房资讯-${city}房匠网`,
        d: `${city}房匠网资讯中心提供最全面最及时的${city}新房资讯，内容涵盖楼市动态、土地规划、楼盘评测、区域房价等栏目,是${city}房产资讯动态的网络平台。`,
        k: `${city}房产百科,房产百科,${city}新房资讯,${city}房产资讯`,
        }
    ]
    const type: number = this.sort;

    const title = tdk[type].t;
    const description = tdk[type].d;
    const keywords = tdk[type].k;
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
          content: keywords
        }
      ]
    }
  },
  methods: {
    openActivityClue(type: string, id: string) {
      this.activityId = id;
      this.clueType = type;
      this.openActivity = true;
    },
    isOpen() {
      this.openActivity = false;
    },
    // async pageChange(page: number) {
    //   this.pageNum = page;
    //   await this.getNewsList();
    //   const anchor:any = this.$el.querySelector('#list')
    //   anchor.scrollIntoView({ behavior: 'smooth' })
    // },
    async getNewsList () {
      const newsParam: any = {
        data: {
          cityId: this.$store.state.app.cityId,
        },
        page: {
          pageNum: this.pageNum - 1,
          pageSize: 10,
        },
        sort: {
          desc: ['createTime'],
        },
      }
      if (this.sort && this.sort !== 0) {
        newsParam.data.sort = this.sort;
      }
      this.$nuxt.$loading.start();
      try {
        const result = await this.$axios.$post(NewsApi.GetNewsByCity, newsParam);
        if (result?.code === 200) {
          this.newsList.splice(0);
          this.newsList = getDataResult(result);
          this.total = result.data.page.totalElements;
        }
      } catch (e) {}
      finally {
        this.$nuxt.$loading.finish();
      }
    },
    itemRender (page: any, type: any, originalElement: any) {
      let path = `/info/list/p${page}.html`;
        if (this.sort !== 0) {
          path = `/info/list/p${page},type-${this.sort}.html`;
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
