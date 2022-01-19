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
        v-if="isMobile"
        :simple="true"
        :total="total"
        :show-total="total => `共计 ${total} 条`"
        :page-size="12"
        :current="pageNum"
        :item-render="itemRender"
      />
      <a-pagination
        v-else
        :total="total"
        :show-total="total => `共计 ${total} 条`"
        :page-size="12"
        :current="pageNum"
        :item-render="itemRender"
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
    let query:any;
    let params = route.params?.p;
    let pageNum = 1;
    if (params) {
      if (params.endsWith('.html')) {
        params = params.split('.')[0];
      }
      const paramsArray = params.split(',');
      query = {};
      paramsArray.forEach((item:string) => {
        if (item && item.indexOf('-')){
          const p = item.split('-');
          const key = p[0]
          const value = p[1];
          let temp:any;
          // eslint-disable-next-line prefer-const
          temp = {};
          temp[key] = value;
          Object.assign(query, temp);
        }
        if (item && item.search(/p[0-9]+/) >= 0) {
          pageNum = Number(item.substring(1));
        }
      })
    }

    const cityId = store.state.app.cityId;
    const sort = query.sort;

    const param: any = {
      data: {
        cityId,
        sort,
      },
      page: {
        pageNum: pageNum - 1,
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
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }
    return { cityId, list, sort, isMobile, total, pageNum };
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

    const tdk = [
      {
        t: `${city}楼盘实拍_楼盘实拍-${city}房匠网`,
        d: `${city}房匠网为您提供最专业的楼盘视频,新房视频，让您通过视频了解${city}楼盘实拍、楼盘样板间赏析、楼盘对比视频，房匠视频让您足不出户了解${city}新房信息。`,
        k: `${city}楼盘实拍,楼盘实拍,${city}视频看房`,
      },
      {
        t: `${city}楼盘样板间_楼盘样板间-${city}房匠网`,
        d: `${city}房匠网为您提供最专业的楼盘视频,新房视频，让您通过视频了解${city}楼盘实拍、楼盘样板间赏析、楼盘对比视频，房匠视频让您足不出户了解${city}新房信息。`,
        k: `${city}楼盘样板间,楼盘样板间,${city}视频看房`,
      },
      {
        t: `${city}楼盘对比_楼盘对比-${city}房匠网`,
        d: `${city}房匠网为您提供最专业的楼盘视频,新房视频，让您通过视频了解${city}楼盘实拍、楼盘样板间赏析、楼盘对比视频，房匠视频让您足不出户了解${city}新房信息。`,
        k: `${city}楼盘对比,楼盘对比,${city}视频看房`,
      },
      {
        t: `${city}楼市政策_楼市政策_${city}房匠网`,
        d: `${city}房匠网为您提供最专业的楼市政策视频,新房视频，让您通过视频了解${city}楼盘实拍、楼盘样板间赏析、楼盘对比视频，房匠视频让您足不出户了解${city}新房信息。`,
        k: `${city}楼市政策,楼市政策,${city}视频看房`,
      },
    ]

    let type: number = Number(this.sort) || 1;
    type = type - 1;
    const title = tdk[type].t;
    const description = tdk[type].d;
    const keywords = tdk[type].k;

    return {
      title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: keywords,
        },
        {
          hid: 'description',
          name: 'description',
          content: description
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
    },
    itemRender (page: any, type: any, originalElement: any) {
      const path = `/video/list/p${page},sort-${this.sort}.html`;
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

.box {
  @apply flex sm:w-full sm:px-4 lg:container flex-col mx-auto sm:mt-4 lg:mt-14;
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
  @apply sm:flex sm:flex-col sm:px-4 sm:space-y-4 mt-4 lg:grid lg:grid-cols-4 lg:grid-flow-row lg:gap-y-4;
}

.content .item {
  @apply lg:h-52 sm:w-full sm:h-48 lg:w-72;
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