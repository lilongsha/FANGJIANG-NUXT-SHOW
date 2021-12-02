<template>
  <div class="w-full sm:pb-4">
    <div id="list" class="lg:h-24"></div>
    <div v-if="list.length > 0" class="box">
      <div class="title">
        <span v-if="sort === '1'">项目实拍</span>
        <span v-if="sort === '2'">样板间赏析</span>
        <span v-if="sort === '3'">项目对比</span>
        <span v-if="sort === '4'">楼市政策</span>
      </div>
      <div class="content">
        <div v-for="item in list" :key="item.id" class="item group">
          <a :href="`/video/${item.id}.html`">
            <div class="justify-center h-10 transition-all lg:group-hover:justify-start lg:group-hover:pt-4 lg:group-hover:space-y-2 lg:group-hover:h-full">
              <p class="text-[18px]">{{ item.title }}</p>
              <p class="hidden transition-all text-[12px] lg:group-hover:block">{{ item.description }}</p>
            </div>
            <img src="~/assets/img/video/play.png" class="play lg:group-hover:hidden"/>
            <img :src="item.photoAddress">
          </a>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-2 text-right lg:container">
      <a-pagination
        :simple="isMobile"
        :total="total"
        :show-total="total => `共计 ${total} 条`"
        :page-size="12"
        :current="pageNum"
        @change="pageChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as VideoApi } from '@/api/model/videoModel'
export default Vue.extend({
  name: "Video",
  async asyncData({ $axios, store, route, req }) {
    const userAgent = req?.headers['user-agent'] || '';

    const cityId = store.state.app.cityId;
    const query = route.query;
    const sort = query.sort;

    const param: any = {
      data: {
        cityId,
        sort,
      },
      page: {
        pageNum: 0,
        pageSize: 12,
      },
    }
    const result:any = await $axios.$post(VideoApi.ByPage, param);
    let list: any;
    let total: any;
    if (result.code === 200) {
      list = result.data.content;
      total = result.data.page.totalElements;
    }

    let isMobile: any;
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }
    return { cityId, list, sort, isMobile, total };
  },
  data() {
    let isMobile: any;
    return {
      list: [],
      cityId: '',
      pageNum: 1,
      pageSize: 12,
      sort: '',
      isMobile,
      total: 0,
    }
  },
  head() {
    let city:string = this.$store.app.city || '石家庄';
    if (city.endsWith('市')) {
      city = city.substring(city.length - 1);
    }

    return {
      title: `${city}新房视频-房匠网`,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频,${city}新房网`
        },
        {
          hid: 'description',
          name: 'description',
          content: `房匠网提供${city}新房视频,${city}楼盘视频,${city}样板间视频,${city}房价视频等最新信息.房匠网房源多,信息全,价透明,做您买房路上的自己人.`
        },
      ],
    };
  },
  methods: {
    async pageChange(page: number) {
      this.pageNum = page;
      const param: any = {
        data: {
          cityId: this.cityId,
          sort: this.sort,
        },
        page: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        },
      }
      try {
        this.$nuxt.$loading.start();
        const result:any = await this.$axios.$post(VideoApi.ByPage, param);
        if (result.code === 200) {
          this.list = result.data.content;
          this.total = result.data.page.totalElements;
        }
      } catch (e) { }
      finally {
        this.$nuxt.$loading.finish();
      }
      

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

.box {
  @apply flex sm:w-full sm:px-4 lg:container flex-col lg:h-[260px] mx-auto sm:mt-4 lg:mt-14;
}

.box .title {
  @apply h-8 flex flex-row justify-between items-center w-full;
}

.box .title span {
  @apply lg:text-2xl font-bold text-[#333];
}

.box .title a {
  @apply text-[#999] block sm:text-[12px];
}

.content {
  @apply lg:h-52 flex sm:flex-col sm:px-4 lg:flex-row sm:space-y-4 lg:space-x-11 mt-4;
}

.content .item {
  @apply sm:w-full sm:h-48 lg:w-72 lg:h-full;
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