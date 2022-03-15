<template>
  <div class="w-full lg:hidden">
    <div class="flex flex-row items-center w-full pt-4">
      <input v-model="searchText" type="text" class="mx-auto w-3/4 px-4 h-7 text-sm rounded-2xl bg-[#ededed] outline-none " placeholder="请输入搜索项目">
    </div>
    <div class="flex flex-col items-center w-full mb-2 space-y-2 overflow-hidden text-black min-h-[400px] relative">
      <div v-for="item in list" :key="item.id" class="flex flex-row overflow-hidden">
        <a :href="`/house/${item.id}.html`" target="_blank" :title="item.name" class="flex flex-row w-full h-6 px-5 overflow-hidden justify-items-center">
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
            <HouseStateDiv :state="item.saleState" :class-name="'px-1 pt-1 ml-2 text-xs text-center text-white align-middle'" />
          </div>
        </a>
      </div>
      <AppLoading ref="loading" :box-class="'w-full h-20 rounded-xl'" :height="'32px'" :width="'6px'" />
      <!-- 热门楼盘 -->
      <div class="flex flex-row flex-wrap w-full p-4">
        <span class="w-full px-4 text-lg font-bold text-black">热门楼盘</span>
        <a v-for="(item, index) in getHotProject" v-show="index < 5" :key="item.id" class="inline-block p-1 m-2 text-black border" target="_blank" :href="`/house/${item.id}.html`">{{ item.name }}</a>
      </div>
      <!-- 热门搜索 -->
      <!-- <div class="flex flex-row flex-wrap w-full p-4">
        <span class="w-full px-4 text-lg font-bold text-black">搜索历史</span>
        <a v-for="(item, index) in getHotProject" v-show="index < 5" :key="item.id" class="inline-block p-1 m-2 text-black border" target="_blank" :href="`/house/${item.id}.html`">{{ item.name }}</a>
      </div> -->
      <div class="container absolute bottom-0 flex flex-col items-center mt-9">
        <div class="w-full h-[80px] bg-cover rounded-md bg-bimg pl-[30px] pt-[4px]">
          <div>
            <div class="text-[20px] font-bold text-white italic">线上<span class="mx-4">“<span class="text-[#ECF000]">0</span>接触”</span>找房</div>
            <div class="text-[10px] tracking-[8px] text-white italic">足不出户换新房安全更安心</div>
            <button class="bg-[#ECF000] rounded-3xl font-bold h-[26px] w-[91px] text-fjBlue-100 text-[12px] mt-[2px] italic " @click="helpUser">马上看房</button>
          </div>
        </div>
        <div class="mt-2 w-full h-[80px] bg-cover rounded-md bg-rightbg pl-[20px] pt-[6px]">
          <div class="text-[20px] font-bold text-white">看房专车免费接送</div>
          <button class="bg-white rounded-3xl font-bold h-[32px] w-[130px] text-fjBlue-100 text-[14px] mt-[8px]" @click="openActivityClue('4')">立即预约</button>
        </div>
      </div>

    </div>
    <ClueHelpClue v-show="openingHelp" class="absolute z-[60] w-full h-full"  :city-id="''"  @isOpen="isOpen" />
    <ClueLeaveClue v-show="openActivity" class="absolute z-[60] w-full h-full" :city="''" :project-id="''" :clue-type="clueType" @isOpen="isOpen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex';
import { BasePageResult } from '~/api/model/baseModel';
import { getDataResult } from '~/utils/response/util';
import { Api as HouseApi } from '~/api/model/houseModel';

export default Vue.extend({
  name: 'Search',
  data() {
    const timeout: any = undefined;
    return {
      showSearch: '0',
      searchText: '',
      list: [],
      timeout,
      openingHelp: false,
      openActivity: false,
      activityId: '',
      clueType: '',
    }
  },
  computed: {
    getLocation() {
      return this.$store.state.app.city;
    },
    getHotProject() {
      return this.$store.state.app.hotProject;
    }
  },
  watch: {
    searchText: {
      handler (_value) {
        this.search();
      },
    },
  },
  mounted() {
    this.TITLE_SET('房匠搜房');
    this.URL_SET('');
  },
  methods: {
    helpUser() {
      this.openingHelp = true;
    },
    isOpen() {
      this.openActivity = false;
      this.openingHelp = false;
    },
    openActivityClue(type: string, id: string) {
      this.activityId = id;
      this.clueType = type;
      this.openActivity = true;
    },
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
        if (result?.code === 200) {
          this.list = getDataResult(result)
        }
      } catch (e) {}
      finally {
        (this.$refs.loading as any).finish();
      }
    },
    ...mapMutations('app', ['BREADCRUMB_RE_SET', 'TITLE_SET', 'URL_SET']),
  }
})
</script>