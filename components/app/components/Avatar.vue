<template>
  <div @mouseleave="noAction">
    <div v-show="!nickName" class="flex flex-row items-center">
      <a-icon class="svgClass" type="user" />
      <button class="ml-2" @click="clickLogin">登录</button>
    </div>
    <div v-show="nickName" class="flex flex-row items-center" @mouseover="showAction" @click="showAction">
      <img :src="avatar" alt="" class="w-[32px] h-[32px] rounded-full">
      <span class="ml-1 text-[18px]">{{ nickName }}</span>
      <svg
        class="w-4 h-4 ml-1"
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
    <div v-show="isShow" class="absolute z-[60] w-[120px] flex flex-col px-2 py-1 bg-white top-14 right-4 shadow-lg rounded" @mouseleave="noAction">
      <button class="hover:text-fjBlue-100 border-b border-b-[#F5F5F5] text-[#333333] text-[16px] px-2 py-2 font-medium">个人信息</button>
      <button class="hover:text-fjBlue-100 border-b border-b-[#F5F5F5] text-[#333333] text-[16px] px-2 py-2 font-medium">浏览记录</button>
      <button class="hover:text-fjBlue-100 border-b border-b-[#F5F5F5] text-[#333333] text-[16px] px-2 py-2 font-medium">我的收藏</button>
      <button class="hover:text-fjBlue-100 text-[#333333] text-[16px] px-2 py-2 font-normal" @click="loginOut">退出登录</button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import * as Cookies from 'js-cookie';
export default Vue.extend({
    name: 'Avatar',
    components: {},
    data() {
      const nickName = Cookies.get('NickName');
      const avatar = Cookies.get('Avatar')
      return {
        nickName,
        avatar,
        isShow: false,
      }
    },
    methods: {
      clickLogin() {
        const path = this.$route.path;
        this.$router.push('/login?redirect=' + path)
        
      },
      showAction() {
        this.isShow = true;
      },
      noAction() {
        this.isShow = false;
      },
      loginOut() {
        Cookies.remove('CityId')
        Cookies.remove('MessageOk')
        Cookies.remove('Password')
        Cookies.remove('AreaId')
        Cookies.remove('PhoneOk')
        Cookies.remove('ExpiresIn')
        Cookies.remove('RealName')
        Cookies.remove('Avatar')
        Cookies.remove('UserId')
        Cookies.remove('Gender')
        Cookies.remove('State')
        Cookies.remove('NickName')
        Cookies.remove('UserName')
        Cookies.remove('Access_Token')
        Cookies.remove('Scope')
        Cookies.remove('RefreshToken')
        Cookies.remove('ProvinceId')
        Cookies.remove('Token_Type')
      }
    }
})
</script>
<style scoped>
.svgClass >>> * {
  @apply w-6 h-6;
}

</style>