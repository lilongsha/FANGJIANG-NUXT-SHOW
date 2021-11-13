<template>
  <div class="mx-auto sm:w-full lg:container">
    <div class="w-full sm:h-2 lg:h-24"></div>
    <!-- top -->
    <div class="sm:hidden flex flex-row w-full h-[300px]">
      <!-- top photo -->
      <div class="flex flex-row w-2/3">
        <!-- big photo -->
        <div v-if="newsTop.length > 0" class="w-1/2 pr-1">
          <a v-if="newsTop[0]" :href="`/info/${newsTop[0].id}.html`" target="_blank" class="relative block w-full h-full">
            <img :src="newsTop[0].img" :title="newsTop[0].title" :alt="newsTop[0].title" class="object-cover w-full h-full">
            <div class="absolute bottom-0 z-10 w-full h-10 bg-black bg-opacity-50">
              <span class="text-white text-[18px] h-full flex flex-row items-center ml-6">{{ newsTop[0].title }}</span>
            </div>
          </a>
        </div>
        <!-- two photo -->
        <div class="flex flex-col w-1/2 h-full pl-1">
          <div v-if="newsTop.length > 1" class="w-full h-1/2 pb-[2px]">
            <a v-if="newsTop[1]" :href="`/info/${newsTop[1].id}.html`" target="_blank" class="relative block w-full h-full">
              <img :src="newsTop[1].img" :title="newsTop[1].title" :alt="newsTop[1].title" class="object-cover w-full h-full">
              <div class="absolute bottom-0 z-10 w-full h-10 bg-black bg-opacity-50">
                <span class="text-white text-[18px] h-full flex flex-row items-center ml-6">{{ newsTop[1].title }}</span>
              </div>
            </a>
          </div>
          <div v-if="newsTop.length > 2" class="w-full h-1/2 pt-[2px]">
            <a v-if="newsTop[2]" :href="`/info/${newsTop[2].id}.html`" target="_blank" class="relative block w-full h-full">
              <img :src="newsTop[2].img" :title="newsTop[2].title" :alt="newsTop[2].title" class="object-cover w-full h-full">
              <div class="absolute bottom-0 z-10 w-full h-10 bg-black bg-opacity-50">
                <span class="text-white text-[18px] h-full flex flex-row items-center ml-6">{{ newsTop[2].title }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- top list -->
      <div class="w-1/3 h-full pl-5">
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
              <span class="inline-block mt-2 text-base font-bold text-black">{{ item.title }}</span>
              <div class="h-14 overflow-hidden text-[#999999] text-[12px] mt-1">{{ item.description }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div></div>
    <!-- content -->
    <div class="flex flex-row w-full mt-8">
      <!-- list -->
      <div class="flex flex-row sm:w-full lg:w-2/3">
        <!-- sort menu -->
        <div class="sticky flex flex-col w-1/4 h-112 top-20">
          <div class="sm:w-[120px] flex flex-row items-center">
            <div class="w-1 h-4 ml-4 bg-black lg:hidden"></div>
            <span class="text-[#666666] sm:text-lg sm:font-bold lg:text-[20px] sm:ml-2 lg:mb-4">资讯类别</span>
          </div>
          <div v-for="item in NEWS_SORT" :key="item.key" :class="item.key === sort ? 'h-[62px] bg-info-sort-bg pt-[14px]' : 'h-[40px] hover:pt-[14px] hover:-mt-4'" class="group -ml-3 w-[140px] text-center hover:h-[62px] hover:bg-info-sort-bg">
            <span>
              <a :href="`/info/list?type=${item.key}`" :class="item.key === sort ? 'text-fjBlue-100' : 'text-[#999999]'" class="group-hover:text-fjBlue-100">{{ item.value }}</a>
            </span>
          </div>
        </div>
        <!-- list content -->
        <div id="list" class="w-3/4 min-h-[512px] sm:pl-8 sm:pr-4">
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
                <a :href="`/info/${item.id}.html`" target="_blank" :title="item.title" style="overflow: hidden;display: -webkit-box; text-overflow: ellipsis;-webkit-line-clamp: 2;word-break: break-all;-webkit-box-orient: vertical;" class="overflow-hidden text-[#333333] sm:text-sm lg:text-[20px] font-bold hover:text-fjBlue-100">{{ item.title }}</a>
                <div class="sm:h-0 mr-[37px] lg:h-16" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 3;word-break: break-all;-webkit-box-orient: vertical;">
                  {{ item.description }}
                </div>
                <!-- tiem -->
                <div v-if="item.createTime" class="absolute bottom-0 text-right right-2 text-[#999999]">{{ item.createTime.split('T')[0] }}</div>
              </div>
            </div>
          </div>
          <!-- pagination -->
          <div class="w-full text-center mt-14">
            <a-pagination
              :simple="isMobile"
              :total="total"
              :show-total="total => `共计 ${total} 条`"
              :page-size="10"
              :current="pageNum"
              @change="pageChange"
            />
          </div>
        </div>
      </div>
      <!-- ad -->
      <!-- <div class="sticky w-1/3"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as NewsApi, NEWS_SORT } from '~/api/model/newsModel'
import { getDataResult } from '~/utils/response/util'

export default Vue.extend({
  name: 'InfoList',
  async asyncData({ $axios, route, store }) {
    const query: any = route.query;
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
          desc: ['orderNum'],
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
          pageNum: 0,
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
      if (newsTopResult.code === 200) {
        newsTop = getDataResult(newsTopResult);
      }
      if (newsListResult.code === 200) {
        newsList = getDataResult(newsListResult);
        total = newsTopResult.data.page.totalElements;
      }
    }
    await getNews();
    
    return {
      newsTop,
      newsList,
      total,
      sort,
    }
  },
  data () {
    const sort: number = 0;
    return {
      sort,
      NEWS_SORT,
      pageNum: 1,
      newsTop: [],
      newsList: [],
      total: 0,
      isMobile: true,
    }
  },
  head() {
    let city:string = this.$store.app.city || '石家庄';
    if (city.endsWith('市')) {
      city = city.substring(city.length - 1);
    }

    const year = new Date().getFullYear();
    
    const tdk = [
      {
        t: `${city}楼市资讯,${city}房价行情分析,${city}买房哪里好`,
        d: `房匠网资讯中心为您提供全面真实实时的${city}房地产资讯信息,涵盖拿地政策、开盘信息、楼市政策、房贷利率、区域规划、区域房价、实探楼盘.`,
        k: `${city}楼市资讯,${city}房价行情分析,${city}买房哪里好,${city}购房政策,${city}买房条件`,
      },
      {
        t: `${city}拿地信息,${city}最新拍地信息,${city}拿地价`,
        d: `房匠网拿地政策栏目为您提供${city}拿地信息、${city}土地规划、${city}土地价格等官方权威数据.`,
        k: `${city}拿地信息,${city}最新拍地信息,${city}拿地价,${city}土地规划,${city}最新地块成交情况`,
      },
      {
        t: `${city}最新楼盘信息,${city}楼盘最新房价,${city}最新楼盘开盘`,
        d: `房匠网开盘资讯栏目为您提供大量真实有效的${city}最新楼盘信息、${city}最新楼盘、${city}最新楼盘价格,帮助您快速查询最新楼盘信息价格,为您创造最佳新房购买体验.`,
        k: `${city}最新楼盘信息,${city}楼盘最新房价,${city}最新楼盘开盘,${city}新开楼盘,${city}最新楼盘价格`,
        },
        {
        t: `${city}楼市政策,${city}购房政策,${city}购房政策解读`,
        d: `房匠网楼市政策栏目为您提供最全面最及时的${city}房产政策、${city}楼市政策、${city}购房政策及解读,想了解${city}房地产最新政策资讯就上房匠网!`,
        k: `${city}楼市政策,${city}购房政策,${city}购房政策解读,${city}限购政策,${city}二手房政策`,
        },
        {
        t: `${year}${city}房贷利率,${city}房贷利率最新政策,${city}购房贷款利率`,
        d: `房匠网房贷利率栏目为您汇总最新的${city}房贷政策及${city}购房贷款利率优惠政策等信息.`,
        k: `${year}${city}房贷利率,${city}房贷利率最新政策,${city}购房贷款利率`,
        },
        {
        t: `${city}区域规划,${city}城市规划,${city}最新区域规划`,
        d: `房匠网区域规划栏目为您提供${city}未来10年重点区域规划方向及解读,为您在${city}购房置业提供专业的参考.`,
        k: `${city}区域规划,${city}城市规划,${city}最新区域规划,${city}重点区域规划,${city}总体区域规划`,
        },
        {
        t: `裕华区房价,长安区房价,新华区房价,桥西区房价`,
        d: `房匠网区域房价栏目提供${city}${year}年各区域房价趋势、走势图、${city}二手房价格信息,让您清楚及时的了解房价信息,为您的购房置业提供专业的参考.`,
        k: `裕华区房价,长安区房价,新华区房价,桥西区房价,正定房价,鹿泉房价,新区房价`,
        },
        {
        t: `${city}实探热门楼盘,${city}实探爆款楼盘,${city}实探网红楼盘`,
        d: `房匠网实探楼盘栏目帮您从专业的角度对${city}热门楼盘、爆款楼盘、网红楼盘、高品质楼盘进行实探分析,帮您解答买房路上的各种困难.`,
        k: `${city}实探热门楼盘,${city}实探爆款楼盘,${city}实探网红楼盘,${city}实探高品质楼盘`,
        },
        {
        t: `${city}房产百科,${city}房产知识,${city}购房百科`,
        d: `房匠网房产百科栏目提供全面的房产知识,为您解读${city}房产实时政策,预测${city}房价走势,分析${city}楼市成交数据,确保您安心买房`,
        k: `${city}房产百科,${city}房产知识,${city}购房百科,${city}买房知识,${city}购买知识`,
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
  mounted() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        // 跳转移动端页面
        this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  methods: {
    async pageChange(page: number) {
      this.pageNum = page;
      await this.getNewsList();
      const anchor:any = this.$el.querySelector('#list')
      anchor.scrollIntoView({ behavior: 'smooth' })
    },
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
        if (result.code === 200) {
          this.newsList.splice(0);
          this.newsList = getDataResult(result);
          this.total = result.data.page.totalElements;
        }
      } catch (e) {}
      finally {
        this.$nuxt.$loading.finish();
      }
    },
    // async changeSort(flag: string) {
    //   this.sort = flag;
    //   this.pageNum = 1;
    //   await this.getNewsList();
    //   const anchor:any = this.$el.querySelector('#list')
    //   anchor.scrollIntoView({ behavior: 'smooth' })
    // }
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
