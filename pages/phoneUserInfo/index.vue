<template>
  <div class="lg:hidden bg-[#F3F5FF] w-full h-screen p-4">
      <div class="flex flex-row justify-between">
        <div class="w-[10px] h-[17px]" @click="clickBack"><img src="~/assets/img/userInfo/back.png" alt=""></div>
        <div class="flex flex-row space-x-3"><img src="~/assets/img/userInfo/message.png" alt="" class="w-[19px] h-[17px]"><img src="~/assets/img/userInfo/set.png" alt="" class="w-[20px] h-[17px]" @click="clickSet"></div>
      </div>
      <div class="mt-6 flex flex-row items-center">
        <div class="rounded-full h-[64px] w-[64px]"><img :src="userInfo.avatar" alt="" class="rounded-full h-[64px] w-[64px] flex-shrink-0"></div>
        <div class="ml-5">
          <div class="text-[#333333] text-[20px] font-normal">{{ userInfo.nickName }}</div>
          <div class="text-[#999999] text-[12px]" @click="updateInfo">编辑个人资料 ></div>
        </div>
      </div>
      <div class="mt-8 flex flex-row justify-between text-[#999999] text-[16px] px-3">
        <div @click="toFav('fav')">
          收藏<span class="text-black font-bold text-[18px] ml-2">{{ projectList.length }}</span>
        </div>
        <div @click="toFav('question')">
          问答<span class="text-black font-bold text-[18px] ml-2">{{ questions.length }}</span>
        </div>
        <!-- <div>
          足迹<span class="text-black font-bold text-[18px] ml-2"></span>
        </div> -->
      </div>
      <div class="mt-8 bg-white pt-10 pb-6 px-6 grid grid-cols-3 rounded-[20px] justify-between gap-y-8 relative">
        <div class="grid grid-cols-1 justify-items-center" @click="toFav('fav')">
          <img src="~/assets/img/userInfo/blueHeart.png" alt="" class="w-[26px] h-[26px]">
          <div>我的收藏</div>
        </div>
        <div class="grid grid-cols-1 justify-items-center" @click="toFav('question')">
          <img src="~/assets/img/userInfo/question.png" alt="" class="w-[26px] h-[26px]">
          <div>我的问答</div>
        </div>
        <div class="grid grid-cols-1 justify-items-center" @click="toFav('about')">
          <img src="~/assets/img/userInfo/about.png" alt="" class="w-[26px] h-[26px]">
          <div>关于我们</div>
        </div>
        <!-- <div class="grid grid-cols-1 justify-items-center">
          <img src="~/assets/img/userInfo/share.png" alt="" class="w-[26px] h-[26px]">
          <div>分享</div>
        </div> -->
        <div class="grid grid-cols-1 justify-items-center" @click="clickOnline">
          <img src="~/assets/img/userInfo/online.png" alt="" class="w-[26px] h-[26px]">
          <div>在线客服</div>
        </div>
        <div v-if="isOnline" class="absolute bottom-20 left-1/2 ml-[-121px] rounded-[8px] bg-white p-4 z-10">
          <span class="text-black text-[16px]">24小时热线</span>
          <span class="text-fjRed-100 text-[20px]">400-960-9889</span>
        </div>
        <div v-if="isOnline"  class="z-0 w-4 h-4 rotate-45 absolute bottom-[70px] left-1/2 ml-[-16px] rounded-[8px] bg-white p-4 shadow-md"></div>
      </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Api, CurrentApi, QuestionApi } from '~/api/user/userApi';
import { Breadcrumb } from '~/types/app';
import { getPageResult } from '~/utils/response/util';
export default Vue.extend({
  name: 'PhoneUserInfo',
  components: {},
  async asyncData({ $axios, store, route }) {

    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.splice(0)
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

    const fromPath = route.query?.redirect || '';
    const tokenType = store.state.app.tokenType;
    const accessToken = store.state.app.accessToken;

    // 个人信息
    let userInfo;
    try {
      $axios.setHeader('Authorization', tokenType + ' ' +accessToken)
      const result = await $axios.$post(Api.GetCurInfo)
      if (result.code === 200) {
        userInfo = result.data.content;
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '')
    }
    // 收藏
    let projectList: any[] = [];
    const pageNumProject = 0;
    const pageParamProject = {
      pageSize: 10,
      total: 0,
      pageNumProject,
    }
    try {
      $axios.setHeader('Authorization', tokenType + ' ' + accessToken);
      const param = {
        page: {
          pageNumProject,
          pageSize: 10
        }
      }
      const result = await $axios.$post(CurrentApi.SelectFavorite, param)
      
      if (result.code === 200) {
        const { content, page } = getPageResult(result)
        projectList = content;
        pageParamProject.total = page.totalElements // undefined
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '');
    }

    // 我的问答
    let questions = []
    const pageNum = 0;
    const pageParam = {
      pageSize: 10,
      total: 0,
      pageNum,
    }
    try {
      $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
      const param = {
        data: {
          state: '1'
        },
        page: {
          pageNum,
          pageSize: pageParam.pageSize
        }
      }
      const result = await $axios.$post(QuestionApi.MyQuestion, param)
      if (result.code === 200) {
        const { content, page } = getPageResult(result)
        questions = content;
        pageParam.total = page.totalElements
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '')
    }

    return {
      fromPath,
      tokenType,
      accessToken,
      userInfo,
      projectList,
      pageParamProject,
      questions,
    }
  },
  data(){
    const projectList: any[] = [];
    const pageNumProject = 0;
    const pageParamProject = {
      pageSize: 10,
      total: 0,
      pageNumProject,
    }
    return {
      fromPath: '',
      tokenType: '',
      accessToken: '',
      projectList,
      pageParamProject,
      isOnline: false,
    }
  },
  methods: {
    clickOnline() {
      if (this.isOnline) {
        this.isOnline = false;
      } else {
        this.isOnline = true;
      }
    },
    toFav(s: string) {
       if (s === 'fav') {
         this.$router.push('/PhoneUserInfo/Favourite?fromPath=' + this.fromPath);
       } else if (s === 'question') {
         this.$router.push('/PhoneUserInfo/Question?fromPath=' + this.fromPath);
       }  else if (s === 'share') {
         this.$router.push('/PhoneUserInfo/Share?fromPath=' + this.fromPath);
       }  else if (s === 'about') {
         this.$router.push('/about?fromPath=' + this.fromPath);
       }
     },
    clickBack() {
      this.$router.push(this.fromPath);
    },
    updateInfo() {
      this.$router.push('/PhoneUserInfo/updateInfo?redirect=update&fromPath=' + this.fromPath);
    },
    clickSet() {
      this.$router.push('/PhoneUserInfo/updateInfo?redirect=set&fromPath=' + this.fromPath);
    }
  }
})
</script>
