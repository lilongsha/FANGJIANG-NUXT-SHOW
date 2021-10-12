<template>
  <div class="container mx-auto">
    <div class="w-full h-24"></div>
    <!-- top -->
    <div class="flex flex-row w-full h-[300px]">
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
          <span class="inline-block p-1 text-white bg-fjBlue-100">热门咨询</span>
        </div>
        <div class="w-full h-[270px]">
          <div v-if="newsTop.length > 3" class="w-full h-1/2 pb-[2px]">
            <a v-if="newsTop[3]" :href="`/info/${newsTop[4].id}.html`" class="block w-full h-full">
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
    <!-- content -->
    <div class="flex flex-row w-full mt-8">
      <!-- list -->
      <div class="flex flex-row w-2/3">
        <!-- sort menu -->
        <div class="sticky flex flex-col w-1/4 h-10 space-y-1 top-20">
          <span class="text-[#666666] text-[20px]">资讯类别</span>
          <div v-for="item in NEWS_SORT" :key="item.key" class="h-9" @click="changeSort(item.key);">
            <div :class="item.key === sort ? 'bg-fjBlue-100' : ''" class="w-20 py-2 h-9 sort text-[#999999]">
              {{ item.value }}
            </div>
          </div>
        </div>
        <!-- list content -->
        <div id="list" class="w-3/4">
          <div class="border-b-2 border-[#999999]">
            <span class="text-[#999999] text-[20px]">最近</span>
          </div>
          <div class="space-y-8 mt-11">
            <!-- news item -->
            <div v-for="item in newsList" :key="item.id" class="h-[188px] bg-[#f5f5f5] flex flex-row">
              <img :src="item.img" :title="item.title" :alt="item.title" width="50%" >
              <!-- news item info -->
              <div class="relative w-full pl-[27px] py-2">
                <!-- look times -->
                <div class="flex flex-row items-center justify-end w-full text-right">
                  <div class="w-4 h-4 mr-2 bg-cover bg-looks-gray"></div>
                  <span class="mr-2 text-[#999999] text-[12px]">{{ item.lookTimes }}</span>
                </div>
                <a :href="`/info/${item.id}.html`" target="_blank" :title="item.title" class="text-[#333333] text-[20px] font-bold hover:text-fjBlue-100">{{ item.title }}</a>
                <div class="mr-[37px] h-16" style="overflow: hidden;display: -webkit-box;text-overflow: ellipsis;-webkit-line-clamp: 3;word-break: break-all;-webkit-box-orient: vertical;">
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
      <div class="sticky W-1/3"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as NewsApi, NEWS_SORT } from '~/api/model/newsModel'
import { getDataResult } from '~/utils/response/util'

export default Vue.extend({
  name: 'InfoList',
  async asyncData({ $axios, store }) {
    const getNewsTop = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
          inMobile: "0",
        },
        page: {
          pageNum: 0,
          pageSize: 5,
        },
        sort: {
          desc: ['orderNum'],
        },
      }
      return await $axios.$post(NewsApi.GetNewsByCity, newsParam);
    }
    const getNewsList = async () => {
      const newsParam: any = {
        data: {
          cityId: store.state.app.cityId,
          inMobile: "0",
        },
        page: {
          pageNum: 0,
          pageSize: 10,
        },
        sort: {
          desc: ['createTime'],
        },
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
      sort: '0',
    }
  },
  data () {
    return {
      sort: '0',
      NEWS_SORT,
      pageNum: 1,
      newsTop: [],
      newsList: [],
      total: 0
    }
  },
  head() {
    return {
      title: '房匠 - 做您买房路上的自己人',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: '房匠 - 做您买房路上的自己人'
        }
      ]
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
          inMobile: "0",
        },
        page: {
          pageNum: this.pageNum - 1,
          pageSize: 10,
        },
        sort: {
          desc: ['createTime'],
        },
      }
      if (this.sort && this.sort !== '0') {
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
    async changeSort(flag: string) {
      this.sort = flag;
      this.pageNum = 1;
      await this.getNewsList();
      const anchor:any = this.$el.querySelector('#list')
      anchor.scrollIntoView({ behavior: 'smooth' })
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
