<template>
  <div class="relative flex flex-row justify-center w-full h-full">
    <!-- 位置信息 -->
    <div class="absolute left-0 flex flex-row items-center justify-center h-full">
      <div class="flex items-center h-full">
        <img v-show="getIsHome" class="object-cover w-16 h-16" src="~/assets/img/white-logo.png" />
        <img v-show="!getIsHome" class="object-cover w-16 h-16" src="~/assets/img/blue-logo.png" />
      </div>
      <span class="text-lg ml-11" :class="getIsHome? 'text-white': 'text-black'">
        {{ getLocation }}
      </span>
      <svg
        class="w-5 h-5"
         :class="getIsHome? 'text-white': 'text-black'"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1821"
        width="128"
        height="128"
      >
        <path
          d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
          p-id="1822"
          data-spm-anchor-id="a313x.7781069.0.i0"
          class="selected"
        ></path>
      </svg>
    </div>
    <div class="flex flex-row items-center pl-4 space-x-6 text-xl" :class="getIsHome? 'text-white': 'text-black'">
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/" target="_blank">首页</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/house/list" target="_blank">新房</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/info/list" target="_blank">资讯</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/map" target="_blank">地图</a>
      <a :class="getIsHome? 'fj-href': 'fj-href-'" href="/about/company" target="_blank">关于</a>
    </div>
    <!-- 右侧 -->
    <div class="absolute right-0 flex flex-row items-center justify-center h-full max-w-lg">
      <!-- 搜索 -->
      <div class="flex items-center ml-8 mr-6 text-lg transition-all group">
        <svg 
          t="1631870449894" 
          class="w-5 h-5 icon group-hover:opacity-0" 
          viewBox="0 0 1024 1024" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          p-id="7414" 
          data-spm-anchor-id="a313x.7781069.0.i1" 
          width="128"
          height="128">
          <path d="M716.799825 213.997948c-139.189966-139.189966-364.224911-139.189966-503.415877 0-139.189966 139.189966-139.189966 364.224911 0 503.414877s364.225911 139.189966 503.415877 0 139.189966-364.837911 0-503.414877zM136.124967 794.059806c-181.499956-181.499956-181.499956-476.435884 0-657.934839 181.498956-181.499956 476.434884-181.499956 657.934839 0 181.499956 181.498956 181.499956 476.434884 0 657.934839-181.499956 182.111956-475.822884 182.111956-657.934839 0z m869.479787 211.544948c-25.139994 24.526994-64.996984 24.526994-90.136978 0l-90.135977-90.136978c-24.526994-24.526994-24.526994-64.995984 0-90.135977 24.526994-24.526994 64.995984-24.526994 90.135977 0l90.136978 90.135977c25.139994 25.139994 25.139994 65.609984 0 90.136978z" p-id="7415" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#999999"></path>
        </svg>
        <div class="absolute flex flex-col pt-1 bg-[#f5f5f5] rounded-md right-20 top-5">
          <input v-model="searchText" type="text" class="w-0 transition-all group-hover:w-96 group-hover:px-4 group-hover:mx-2 h-7 text-sm rounded-2xl bg-[#ededed] focus:outline-none outline-none " placeholder="请输入搜索项目">
          <div class="flex flex-col w-0 mb-2 space-y-2 overflow-hidden text-black transition-all group-hover:w-full">
            <div v-for="item in list" :key="item.id" class="flex flex-row overflow-hidden">
              <a :href="`/house/${item.id}.html`" :title="item.name" class="flex flex-row w-full h-6 px-5 overflow-hidden justify-items-center search-a">
                <!-- 项目名称 区域 -->
                <div class="flex flex-row justify-start w-1/2 h-full justify-items-center">
                  <span class="mt-1 text-sm">{{ item.name }}</span>
                  <span class="mt-2 ml-4 text-xs text-gray-400">{{ item.sysAreaByAreaId.name }}</span>
                </div>
                <!-- 单价 -->
                <div class="flex flex-row justify-end w-1/2 h-full justify-items-center">
                  <span class="text-lg font-bold text-fjRed-100">{{ item.price }}</span>
                  <span v-if="item.price" class="mt-1 text-sm">元/㎡</span>
                  <span v-else>暂无数据</span>
                  <div v-if="item.saleState === '1'" class="px-1 pt-1 ml-2 text-xs text-center text-white align-middle bg-fjRed-100">在售</div>
                  <div v-if="item.saleState === '2'" class="px-1 pt-1 ml-2 text-xs text-center text-white align-middle bg-fjBlue-100">待售</div>
                  <div v-if="item.saleState === '3'" class="px-1 pt-1 ml-2 text-xs text-center text-white align-middle bg-fjYellow-100">售罄</div>
                </div>
              </a>
            </div>
            <AppLoading ref="loading" :box-class="'w-full h-20 rounded-xl'" :height="'32px'" :width="'6px'"  />
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-center h-full text-lg" :class="getIsHome? 'text-white': 'text-black'">
        <span class="text-base">登录/注册</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BasePageResult } from '~/api/model/baseModel';
import { Api as HouseApi } from '~/api/model/houseModel';
import { getListResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'SidenavCenter',
  components: {},
  asyncData() {
  },
  data() {
    const timeout: any = undefined;
    return {
      showSearch: '0',
      searchText: '',
      list: [],
      timeout,
    }
  },
  computed: {
    getLocation() {
      return this.$store.state.app.city;
    },
    getIsHome() {
      return this.$route.path === '/'
    }
  },
  watch: {
    searchText: {
      handler (_value) {
        this.search();
      },
    },
  },
  methods: {
    search() {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
      this.timeout = setTimeout(this.getSearchList, 800);
    },
    async getSearchList() {
      const condition: any = {};
      condition.cityId = this.$store.state.app.cityId;
      condition.name = this.searchText;
      if (!this.searchText || this.searchText === '') {
        return;
      }
       const param: any = {
        data: condition,
        page: {
          pageNum: 0,
          pageSize: 5
        },
      };
      (this.$refs.loading as any).start();
      try {
        const result: BasePageResult<any> = await this.$axios.$post(HouseApi.Search, param);
        if (result.code === 200) {
          this.list = getListResult(result)
        }
      } catch (e) {}
      finally {
        (this.$refs.loading as any).finish();
      }
    }
  }
})
</script>
<style scoped>
a {
  @apply text-white hover:text-white;
};

.search-a {
  @apply text-black hover:text-fjBlue-100;
}

.fj-href- {
  @apply text-black hover:text-black;
}

.fj-href {
  @apply flex flex-row items-center h-full hover:border-b-2;
}
.search-input:focus{
  outline: none;
  border-width: 0;
}
</style>