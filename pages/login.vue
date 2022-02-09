.<template>
<div class="flex flex-row items-end justify-end w-screen h-screen">
  <img src="~/assets/img/login/bj.png" class="absolute top-0 left-0 z-0 w-screen h-screen bg-cover sm:hidden">
  <img src="~/assets/img/login/phonebj.png" class="absolute top-0 left-0 z-0 w-screen h-screen bg-cover lg:hidden">
  <div class="relative w-full h-full mx-auto lg:container">
  
  <div class="lg:hidden sm:mt-[60px]">
    <span class="ml-6 font-bold text-[30px]">Hi!</span>
    <br>
    <span class="mt-4 ml-6 font-medium text-[30px]">欢迎登录房匠</span>
  </div>
  <div class="absolute lg:top-[120px] sm:mt-[80px] sm:bottom-0 sm:w-full right-0 flex flex-row items-center">
    <div class="lg:w-[460px] lg:px-8 sm:w-full bg-[#FFFFFF] lg:rounded-l-[20px] lg:pb-12 sm:rounded-tr-[80px] sm:rounded-tl-[20px] sm:px-4 sm:py-8">
      <div class=" mt-[40px] sm:hidden">
        <span class="font-bold text-[#015EEA] text-[30px]">欢迎登录</span>
      </div>
      <div class=" lg:hidden">
        <span class="font-bold" :class="loginType === '1' ? 'text-[#015EEA] sm:text-[24px] lg:text-[30px]' : 'text-[#666666] sm:text-[20px] lg:text-[26px]'" @click="changeLogin('1')">验证码登录</span>
        <span  class="font-bold sm:ml-6 lg:ml-12" :class="loginType === '2' ? 'text-[#015EEA] sm:text-[24px] lg:text-[30px]' : 'text-[#666666] sm:text-[20px] lg:text-[26px]'" @click="changeLogin('2')">账号密码登录</span>
      </div>
      
      <div v-show="loginType === '1'">
        <div class="sm:hidden lg:text-[26px] font-normal text-[#333333]">房匠网站</div>
        <div class="lg:mt-[40px] sm:mt-8 sm:pb-4 lg:pb-4 flex flex-row items-center sm:space-x-2 lg:space-x-6 border-b border-b-[#DDDDDD]">
          <div><img src="~/assets/img/login/phone.png" alt="" class="w-5 h-7"></div>
          <div><input v-model="mobile" type="text"  class="text-[20px] text-[#666666]" @change="mobileChange"></div>
        </div>
        <div class="w-full lg:mt-[50px] sm:mt-8 sm:pb-2 lg:pb-4 flex flex-row items-center justify-between sm:space-x-2 border-b border-b-[#DDDDDD]">
          <div><img src="~/assets/img/login/code.png" alt="" class="w-6 h-7"></div>
          <div class="ml-4"><input v-model="phoneCode" type="text" class="text-[20px] text-[#666666]"></div>
          <div class="">
            <button v-if="isTime" class="text-[#999999] text-[18px] sm:text-16px" >{{ msg }}</button>
            <button v-else :disabled="!isTrue" class="text-[18px] sm:text-[16px] font-normal" :class="isTrue ? 'text-[#015EEA]' : 'text-[#999999]' " @click="post">获取验证码</button>
          </div>
        </div>
      </div>
      <div v-show="loginType === '2'">
        <!-- <div class="sm:hidden lg:text-[26px] font-normal text-[#333333]">房匠网站</div> -->
        <div class="lg:mt-[40px] sm:mt-8 sm:pb-4 lg:pb-4 flex flex-row items-center sm:space-x-2 lg:space-x-6 border-b border-b-[#DDDDDD]">
          <div><img src="~/assets/img/login/phone.png" alt="" class="w-5 h-7"></div>
          <div><input v-model="LoginParams.username" type="text"  class="text-[20px] text-[#666666]"></div>
        </div>
        <div class="lg:mt-[40px] sm:mt-8 sm:pb-4 lg:pb-4 flex flex-row items-center sm:space-x-2 lg:space-x-6 border-b border-b-[#DDDDDD]">
          <div><img src="~/assets/img/login/password.png" alt="" class="w-6 h-7"></div>
          <div><input v-model="password" type="password" class="text-[20px] text-[#666666]"></div>
        </div>
        <div class="lg:mt-[30px] sm:mt-4 sm:pb-4 lg:pb-4 flex flex-row items-center justify-between sm:space-x-2 lg:space-x-6 border-b border-b-[#DDDDDD]">
          <div><input v-model="LoginParams.code" type="text" class="text-[20px] text-[#666666]"></div>
          <div><img :src="img" alt="" @click="clickImg"></div>
        </div>
      </div>
      <div class="flex flex-row items-center w-full mt-3 mb-2 lg:hidden">
        <img class="mr-2 lg:hidden" src="~/assets/img/login/check.png" alt="">
        <span class="text-[#999999] text-[16px]">登录表示同意</span>
        <a href="" class="text-[#015EEA] text-[16px]">《房匠用户协议》</a>
      </div>
      <div class="sm:hidden mt-4 flex flex-row items-center justify-between text-[#999999] text-[16px]">
        <div class="flex flex-row items-center space-x-2">
          <!-- <img src="~/assets/img/login/check.png" alt=""> -->
          <input v-model="checked" type="checkbox" name="selected" :checked="checked" />
          <span>七天内免登录</span>
        </div>
        <div>
          <span v-show="loginType === '1'">已有账号，<button class="text-[#015EEA]" @click="changeLogin('2')">去登陆</button></span>
          <button v-show="loginType === '2'" @click="changeLogin('1')">手机验证码登录</button>
        </div>
      </div>
      <div class="lg:mt-[80px] sm:mt-[60px] w-full">
        <div class="flex flex-row items-center w-full mb-2 sm:hidden">
          <span class="text-[#999999] text-[16px]">登录表示同意</span>
          <a href="" class="text-[#015EEA] text-[16px]">《房匠用户协议》</a>
        </div>
        <button v-show="loginType === '1'" class="w-full bg-fjBlue-100  text-center rounded-lg lg:py-2 sm:py-2 lg:text-[25px] sm:text-[20px] text-white shadow" @click="mobileLogin">登录</button>
        <button v-show="loginType === '2'" class="w-full bg-fjBlue-100  text-center rounded-lg lg:py-2 sm:py-2 lg:text-[25px] sm:text-[20px] text-white shadow" @click="clickLogin">登录</button>
      </div>
      <div class="sm:hidden w-full space-x-2 lg:mt-[30px] sm:mt-5 flex flex-row items-center">
        <span class="h-[1px] w-2/5 bg-[#DDDDDD]"></span>
        <img src="~/assets/img/login/wechat.png" alt="">
        <span class="h-[1px] w-2/5 bg-[#DDDDDD]"></span>
      </div>
    </div>
    <div class="relative w-3/5 sm:hidden ">
      <div class="w-full">
        <img src="~/assets/img/login/right.png" class="bg-cover " :class="loginType === '1' ? 'h-[628px]' : 'h-[662px]'">
      </div>
    </div>
  </div>
      
  </div>
</div>
  
</template>
<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import * as Cookies from 'js-cookie';
import { message } from 'ant-design-vue';
import { Api } from '~/api/user/userApi';
import {encrypt} from '~/utils/crypto/cryptojs';
import { Breadcrumb } from '~/types/app';

export default Vue.extend({
  name:'Login',
  async asyncData({ $axios, route, store }) {
    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.splice(0)
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
    const path = route.query?.redirect || '';
    const codeResult = await $axios.$post(Api.getCode);
    let keyCode;
    let img;
    if (codeResult.code === 200) {
      keyCode = codeResult.data.key;
      img = codeResult.data.codeUrl;
    }
    return {
      codeResult,
      keyCode,
      img,
      loginType: '1',
      path,
    }
  },
  data() {
    let codeResult: any;
    const LoginParams =  {
      grant_type: 'password',
      username: '',
      password: '',
      key: '',
      code: '',
    }
    return {
      loginType: '1',
      LoginParams,
      codeResult,
      keyCode: '',
      img:'',
      mobile: '',
      phoneCode: '',
      isTrue: true,
      isTime: false,
      msg: '',
      password: '',
      checked: true,
      path: ''
    }
  },
  watch: {
    mobile() {
      this.mobileChange()
    }
  },
  methods: {
    changeLogin(type: string) {
      this.loginType = type;
    },
    async clickLogin() {
      try {
        
      
      if (this.password && this.LoginParams.username && this.LoginParams.code) {
        this.LoginParams.password = this.password;
        this.LoginParams.key = this.codeResult.data.key;
        const pass = encrypt(this.LoginParams.password)
        this.LoginParams.password = pass;
        this.$axios.setHeader('Authorization','Basic Y3VzdG9tZXI6ZmFuZ2ppYW5nd2FuZw==');
        const result = await this.$axios.$get(Api.Token, {params:this.LoginParams});
        this.$axios.setHeader('Authorization','');
        // let userInfo;
        if (result.code === 200) {
          const that = this;
          const store = that.$store;
          await store.commit('app/AccessToken', result.data.access_token)
          await store.commit('app/ExpiresIn', result.data.expires_in)
          await store.commit('app/RefreshToken', result.data.refresh_token)
          await store.commit('app/Scope', result.data.scope)
          await store.commit('app/TokenType', result.data.token_type)
          if (this.checked) {
            Cookies.set('Access_Token', result.data.access_token, { expires: 7, })
            Cookies.set('Token_Type', result.data.token_type, { expires: 7, })
            Cookies.set('ExpiresIn', result.data.expires_in, { expires: 7, })
            Cookies.set('RefreshToken', result.data.refresh_token, { expires: 7, })
            Cookies.set('Scope', result.data.scope, { expires: 7, })
          } else {
            Cookies.set('Access_Token', result.data.access_token)
            Cookies.set('Token_Type', result.data.token_type)
            Cookies.set('ExpiresIn', result.data.expires_in)
            Cookies.set('RefreshToken', result.data.refresh_token)
            Cookies.set('Scope', result.data.scope)
          }
          
          const token = this.$store.state.app.accessToken;
          const tokenType = this.$store.state.app.tokenType
          this.$axios.setHeader('Authorization',tokenType + ' ' +token);
          const s = await this.$axios.$post(Api.GetCurInfo)
          this.$axios.setHeader('Authorization','');
          if (s.code === 200) {
            const userInfo = s.data.content;
            await store.commit('app/UserId', userInfo.id)
            await store.commit('app/UserName', userInfo.userName)
            await store.commit('app/Avatar', userInfo.avatar)
            await store.commit('app/NickName', userInfo.nickName)
            if (this.checked) {
              Cookies.set('UserName', userInfo.username, { expires: 7, })
              Cookies.set('Gender', userInfo.gender, { expires: 7, })
              Cookies.set('UserId', userInfo.id, { expires: 7, })
              Cookies.set('State', userInfo.state, { expires: 7, })
              Cookies.set('RealName', userInfo.realName, { expires: 7, })
              Cookies.set('ProvinceId', userInfo.provinceId, { expires: 7, })
              Cookies.set('PhoneOk', userInfo.phoneOk, { expires: 7, })
              Cookies.set('Password', userInfo.password, { expires: 7, })
              Cookies.set('NickName', userInfo.nickName, { expires: 7, })
              Cookies.set('MessageOk', userInfo.messageOk, { expires: 7, })
              Cookies.set('CityId', userInfo.cityId, { expires: 7, })
              Cookies.set('AreaId', userInfo.areaId, { expires: 7, })
              Cookies.set('Avatar', userInfo.avatar, { expires: 7, })
            } else {
              Cookies.set('UserName', userInfo.username)
              Cookies.set('Gender', userInfo.gender)
              Cookies.set('UserId', userInfo.id)
              Cookies.set('State', userInfo.state)
              Cookies.set('RealName', userInfo.realName)
              Cookies.set('ProvinceId', userInfo.provinceId)
              Cookies.set('PhoneOk', userInfo.phoneOk)
              Cookies.set('Password', userInfo.password)
              Cookies.set('NickName', userInfo.nickName)
              Cookies.set('MessageOk', userInfo.messageOk)
              Cookies.set('CityId', userInfo.cityId)
              Cookies.set('AreaId', userInfo.areaId)
              Cookies.set('Avatar', userInfo.avatar)
            }
            
          }
          this.$axios.setHeader('Authorization', '')
          this.$router.push(this.path)
        }
        this.$axios.setHeader('Authorization', '')
      } else {
        message.error({ content: '请正确填写信息', duration: 3});
      }
      } catch (error) {
        
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
    },
    async clickImg() {
      const codeResult = await this.$axios.$post(Api.getCode);
      if (codeResult.code === 200) {
        this.keyCode = codeResult.data.key;
        this.img = codeResult.data.codeUrl;
      }
    },
    async post() {
      if (this.mobile && this.isTrue) {
        const mobile = this.mobile;
        const param = {
          data: {
            mobile
          }
        }
        const result = await this.$axios.$post(Api.SmsCode, param);
        if (result.code === 200){
          message.success({ content: '验证码已发送', duration: 3 });
          this.isTime = true;
          this.setTime();
        }
      } else {
        message.error({ content: '请正确填写信息', duration: 3});
      }
    },
    setTime() {
      let time = 60;
      const mm = '秒';
      const id = setInterval(() =>{
        time = time - 1;
        this.msg = time + mm;
        if (time === 0) {
            clearInterval(id);
            this.isTime = false;
        }
      }, 1000)
    },
    async mobileLogin() {
      try {
        
      
      if (this.isTrue && this.phoneCode) {
      
        const mobile = this.mobile;
        const code = this.phoneCode;
        const param = {
          data: {
            mobile,
            code,
          }
        }
        const result = await this.$axios.$post(Api.MobileRegisterOrLogin, param)
        if (result.code === 0) {
          const that = this;
          const store = that.$store;
          await store.commit('app/AccessToken', result.data.access_token)
          await store.commit('app/ExpiresIn', result.data.expires_in)
          await store.commit('app/RefreshToken', result.data.refresh_token)
          await store.commit('app/Scope', result.data.scope)
          await store.commit('app/TokenType', result.data.token_type)
          if (this.checked) {
            Cookies.set('Access_Token', result.data.access_token, { expires: 7, })
            Cookies.set('Token_Type', result.data.token_type, { expires: 7, })
            Cookies.set('ExpiresIn', result.data.expires_in, { expires: 7, })
            Cookies.set('RefreshToken', result.data.refresh_token, { expires: 7, })
            Cookies.set('Scope', result.data.scope, { expires: 7, })
          } else {
            Cookies.set('Access_Token', result.data.access_token)
            Cookies.set('Token_Type', result.data.token_type)
            Cookies.set('ExpiresIn', result.data.expires_in)
            Cookies.set('RefreshToken', result.data.refresh_token)
            Cookies.set('Scope', result.data.scope)
          }
          const token = this.$store.state.app.accessToken;
          const tokenType = this.$store.state.app.tokenType
          this.$axios.setHeader('Authorization',tokenType + ' ' +token);
          const s = await this.$axios.$post(Api.GetCurInfo)
          this.$axios.setHeader('Authorization','');
          if (s.code === 200) {
            // const user = encrypt(JSON.stringify(s.data))
            // Cookies.set('User', user)
            const userInfo = s.data.content;
            await store.commit('app/UserId', userInfo.id)
            await store.commit('app/UserName', userInfo.userName)
            await store.commit('app/Avatar', userInfo.avatar)
            await store.commit('app/NickName', userInfo.nickName)
            if (this.checked) {
              Cookies.set('UserName', userInfo.username, { expires: 7, })
              Cookies.set('Gender', userInfo.gender, { expires: 7, })
              Cookies.set('UserId', userInfo.id, { expires: 7, })
              Cookies.set('State', userInfo.state, { expires: 7, })
              Cookies.set('RealName', userInfo.realName, { expires: 7, })
              Cookies.set('ProvinceId', userInfo.provinceId, { expires: 7, })
              Cookies.set('PhoneOk', userInfo.phoneOk, { expires: 7, })
              Cookies.set('Password', userInfo.password, { expires: 7, })
              Cookies.set('NickName', userInfo.nickName, { expires: 7, })
              Cookies.set('MessageOk', userInfo.messageOk, { expires: 7, })
              Cookies.set('CityId', userInfo.cityId, { expires: 7, })
              Cookies.set('AreaId', userInfo.areaId, { expires: 7, })
              Cookies.set('Avatar', userInfo.avatar, { expires: 7, })
            } else {
              Cookies.set('UserName', userInfo.username)
              Cookies.set('Gender', userInfo.gender)
              Cookies.set('UserId', userInfo.id)
              Cookies.set('State', userInfo.state)
              Cookies.set('RealName', userInfo.realName)
              Cookies.set('ProvinceId', userInfo.provinceId)
              Cookies.set('PhoneOk', userInfo.phoneOk)
              Cookies.set('Password', userInfo.password)
              Cookies.set('NickName', userInfo.nickName)
              Cookies.set('MessageOk', userInfo.messageOk)
              Cookies.set('CityId', userInfo.cityId)
              Cookies.set('AreaId', userInfo.areaId)
              Cookies.set('Avatar', userInfo.avatar)
            }
          }
          this.$axios.setHeader('Authorization', '')
          this.$router.push(this.path)
        }
        this.$axios.setHeader('Authorization', '')
      } else {
        message.error({ content: '请正确填写信息', duration: 3});
      }

      } catch (error) {
        
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
    },
    mobileChange() {
      const testFun = /^1\d{10}$/;
      if (testFun.test(this.mobile)) {
        this.isTrue = true;
      } else {
        this.isTrue = false;
      }
    },
    
  }
})
</script>
