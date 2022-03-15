<template>
  <div class="lg:hidden bg-[#F3F5FF] w-screen h-screen p-4 relative">
    <div class="flex flex-row items-center justify-between">
      <div class="w-[10px] h-[17px]" @click="clickBack"><img src="~/assets/img/userInfo/back.png" alt=""></div>
      <div v-if="type === 'update'" class="font-bold text-[20px] text-[#333333]">编辑资料</div>
      <div v-if="type === 'set'" class="font-bold text-[20px] text-[#333333]">设置</div>
      <div v-if="type === 'updatePassword'" class="font-bold text-[20px] text-[#333333]">修改密码</div>
      <div class="flex flex-row space-x-3"><img src="~/assets/img/userInfo/message.png" alt="" class="w-[19px] h-[17px]"></div>
    </div>
    <div v-if="type === 'update'" class="w-full mt-5">
      <div class="grid grid-cols-1 justify-items-center">
        <div class="text-center rounded-full w-[80px] h-[80px]">
          <!-- <img v-if="userInfo.avatar" class="rounded-full w-[80px] h-[80px]" :src="userInfo.avatar" alt="">
          <img v-else class="rounded-full w-[80px] h-[80px]" src="" alt=""> -->
          <Upload
            accept="image/*"
            :custom-request="customRequest"
            name="file"
            class="avatarClass"
            list-type="picture-card"
            :show-upload-list="false"
          >
            <img v-if="userInfo.avatar" :src="userInfo.avatar" class="rounded-full w-[80px] h-[80px]" alt="">
            <a-icon v-else type="instagram" class="sss" />
          </Upload>
        </div>
      </div>
      <div class="grid grid-cols-4 text-[#666666] mt-10 pb-4 border-b border-b-[#EDEDED]">
        <div class="">用户名</div>
        <div class="col-span-3 text-[#333333] text-[16px]"><input v-model="userInfo.nickName" type="text" class="bg-[#F3F5FF]"></div>
      </div>
      <div class="grid grid-cols-4 text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">性别</div>
        <div class="col-span-3 text-[#333333] text-[16px]"><input v-model="gender" type="text" class="bg-[#F3F5FF]"></div>
      </div>
      <div class="grid grid-cols-4 items-center text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">省份</div>
        <div class="col-span-3 text-[#333333] text-[16px]">
          <Select v-model="userInfo.provinceId"
            placeholder=""
            :options="provinceOptions"
            class="selectClass"
            @change="changeProvince"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 items-center text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">城市</div>
        <div class="col-span-3 text-[#333333] text-[16px]">
          <Select v-model="userInfo.cityId"
            placeholder=""
            :options="cityOptions"
            class="selectClass"
            @change="changeCity"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 items-center text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">地区</div>
        <div class="col-span-3 text-[#333333] text-[16px]">
          <Select v-model="userInfo.areaId"
            placeholder=""
            :options="areaOptions"
            class="selectClass"
            @change="changeArea"
          />
        </div>
      </div>
    </div>
    <div v-if="type === 'set'" class="w-full mt-10 ">
      <div class="flex flex-row justify-between items-center pb-4 border-b border-b-[#EDEDED] text-[#333333] text-[16px]" @click="changeType('updatePassword')">
        <div>修改密码</div> 
        <div><img src="~/assets/img/userInfo/go.png" class="w-2 h-3" alt=""></div>
      </div>
      <!-- <div class="mt-6 flex flex-row justify-between items-center pb-4 border-b border-b-[#EDEDED] text-[#333333] text-[16px]" @click="changeType('updatePhone')">
        <div>更换手机号</div> 
        <div><img src="~/assets/img/userInfo/go.png" class="w-2 h-3" alt=""></div>
      </div> -->
    </div>
    <div v-if="type === 'updatePassword'" class="w-full mt-10 ">
      <div class="grid grid-cols-4 text-[#666666] mt-10 pb-4 border-b border-b-[#EDEDED]">
        <div class="">旧密码</div>
        <div class="col-span-3 text-[#333333] text-[16px]"><input v-model="oldPassword" type="password" class="bg-[#F3F5FF]"></div>
      </div>
      <div class="grid grid-cols-4 text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">新密码</div>
        <div class="col-span-3 text-[#333333] text-[16px]"><input v-model="newPassword" type="password" class="bg-[#F3F5FF]"></div>
      </div>
      <div class="grid grid-cols-4 text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">确认新密码</div>
        <div class="col-span-3 text-[#333333] text-[16px]"><input v-model="confirmPassword" type="password" class="bg-[#F3F5FF]"></div>
      </div>
    </div>
    <!-- <div v-if="type === 'updatePhone'">
      <div class="grid grid-cols-4 text-[#666666] mt-10 pb-4 border-b border-b-[#EDEDED]">
        <div class="">手机号</div>
        <div class="col-span-3 text-[#333333] text-[16px]"><input v-model="newPhone" type="password" class="bg-[#F3F5FF]"></div>
      </div>
      <div class="grid grid-cols-4 text-[#666666] mt-6 pb-4 border-b border-b-[#EDEDED]">
        <div class="">验证码</div>
        <div class="col-span-2 text-[#333333] text-[16px]"><input v-model="code" type="text" class="bg-[#F3F5FF]"></div>
        <div v-if="isTime" class="text-[#999999] text-16px" >{{ msg }}</div>
        <div v-else class="text-fjBlue-100" @click="post">发送验证码</div>
      </div>
    </div> -->
    <!-- <div class="absolute left-0 w-full px-4 text-center text-white h-14 bottom-10"> -->
    <div class="w-full px-4 mt-10 text-center text-white h-14">
      <button v-show="type === 'update'" class="w-full h-full bg-[#2E69F7] rounded-[10px] font-bold text-[22px]" @click="updateInfo">保存修改</button>
      <button v-show="type === 'set'" class="w-full h-full bg-[#2E69F7] rounded-[10px] font-bold text-[22px]" @click="loginOut">退出登录</button>
      <button v-show="type === 'updatePassword'" class="w-full h-full bg-[#2E69F7] rounded-[10px] font-bold text-[22px]" @click="updatePassword">确认修改</button>
      <!-- <button v-show="type === 'updatePhone'" class="w-full h-full bg-[#2E69F7] rounded-[10px] font-bold text-[22px]" @click="updatePhone">确认修改</button> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import * as Cookies from 'js-cookie';
import { message, Upload, Select } from 'ant-design-vue';
import moment from 'moment';
import { Api } from '~/api/user/userApi';
import { LocationApi } from '~/api/model/areaModel';
import { getDataResult } from '~/utils/response/util';
import { encrypt } from '~/utils/crypto/cryptojs';

interface Option {
  value: '',
  label: ''
}

export default Vue.extend({
  name: 'UpdateInfo',
  components: {
    Upload,
    Select,
  },
  async asyncData({ $axios, store, route }) {
    

    const fromPath =  route.query?.fromPath;
    const type = route.query?.redirect;
    const tokenType = store.state.app.tokenType;
    const accessToken = store.state.app.accessToken;

    let userInfo;
    try {
      $axios.setHeader('Authorization', tokenType + ' ' +accessToken)
      const result = await $axios.$post(Api.GetCurInfo)
      if (result?.code === 200) {
        userInfo = result.data.content;
      }
    } catch (error) {
    } finally {
      $axios.setHeader('Authorization', '')
    }
    // 性别
    let gender = '';
    if (userInfo.gender === '1') {
      gender ='女';
    } else if (userInfo.gender === '0') {
      gender = '男';
    }

    // 省
    const provinceOptions: Option[] = [];
    try {
      const param = {
        data: {},
      };
      const result = await $axios.$post(LocationApi.GetAllProvinces, param);
      if (result?.code === 200) {
        const provinces = getDataResult(result);
        if (provinces && provinces.length > 0) {
          provinces.forEach((item: any) => {
            provinceOptions.push({ value: item.id, label: item.name });
          })
        }
      }
    } catch (error) {
      
    }

     // 市
     const cityOptions: Option[] = []
    if (userInfo.provinceId) {
      const param = {
        data: {
          id: userInfo.provinceId
        }
      }
      const result = await $axios.$post(LocationApi.GetAllCitiesByProvinceId, param);
      if (result?.code === 200) {
        const cities = getDataResult(result);
        if (cities && cities.length > 0) {
          cities.forEach((city: any) => {
            cityOptions.push({ value: city.id, label: city.name })
          })
        }
      }
    }



    // 区
    const areaOptions: Option[] = [];
    if (userInfo.cityId) {
      const param = {
        data: {
          id: userInfo.cityId
        }
      }
      const result = await $axios.$post(LocationApi.GetAllAreasByCityId, param);
      if (result?.code === 200) {
        const areas = getDataResult(result);
        if (areas && areas.length > 0) {
          areas.forEach((city: any) => {
            areaOptions.push({ value: city.id, label: city.name })
          })
        }
      }
    }

    return {
      tokenType,
      accessToken,
      provinceOptions,
      areaOptions,
      type,
      userInfo,
      fromPath,
      gender,
      cityOptions,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      newPhone: '',
      code: '',
      msg: '',
      isTime: false,
    }
  },
  data() {
    let areaOptions: any;
    let provinceOptions: any;
    let cityOptions: any;
    return {
      areaOptions,
      provinceOptions,
      cityOptions,
      msg: '',
      isTime: false,
      newPhone: '',
      code: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      type: 'update',
      fromPath: '',
      userInfo: {
        gender: '',
        nickName: '',
        messageOk: '0',
        avatar: '',
        cityId: '',
        phoneOk: '0',
        provinceId: '',
        realName: '',
        password: '',
        areaId: '',
        id: '',
        username: ''
      },
      tokenType: this.$store.state.app.tokenType,
      accessToken: this.$store.state.app.accessToken,
      gender: '',
    }
  },
  methods: {
    updatePhone() {

    },
    mobileChange(s: string) {
      const testFun = /^1\d{10}$/;
      return testFun.test(s);
    },
    async post() {
      if (this.mobileChange(this.newPhone)) {
        const mobile = this.newPhone;
        const param = {
          data: {
            mobile
          }
        }
        const result = await this.$axios.$post(Api.SmsCode, param);
        if (result?.code === 200){
          message.success({ content: '验证码已发送', duration: 3 });
          this.isTime = true;
          this.setTime();
        }
      } else {
        message.info({ content: '请正确填写信息', duration: 3});
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
    async updatePassword() {
      if (this.oldPassword && this.newPassword && this.confirmPassword) {
        if (this.newPassword !== this.confirmPassword) {
          message.info({ content: '新密码与确认密码不同', duration: 3 });
        } else if (!this.test(this.newPassword)) {
          message.info({ content: '密码格式错误.数字加两位位字母，一位大写，共八位.'});
        } else {
          const old = encrypt(this.oldPassword)
          const newP = encrypt(this.newPassword);
          const param = {
            data: {
              t: newP,
              o: old,
            }
          }
          let result;
          try {
            this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
            result = await this.$axios.$post(Api.Update, param)
            if (result?.code === 200) {
              message.success({ content: '修改密码成功', duration: 3 })
            } 
          } catch (error) {
            message.error({ content: '密码错误，或密码格式错误.数字加两位位字母，一位大写，共八位.', duration: 3 })
          } finally {
            this.$axios.setHeader('Authorization', '')
          }
        }
      } else {
        message.info({ content: '请正确填写信息', duration: 3 })
      }
    },
    test(a: string) {
      const s = /(?!^\d+$)(?!^[a-zA-Z]+$)^[0-9A-Za-z]{8}$/
      return s.test(a)
    },
    changeType(type: string) {
      this.type = type;
    },
    async loginOut() {
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
      await this.$store.commit('app/AccessToken', '')
      await this.$store.commit('app/ExpiresIn', '')
      await this.$store.commit('app/RefreshToken', '')
      await this.$store.commit('app/Scope', [])
      await this.$store.commit('app/TokenType', '')
      await this.$store.commit('app/UserId', '')
      await this.$store.commit('app/Avatar', '')
      await this.$store.commit('app/NickName', '')
      await this.$store.commit('app/Gender', '')
      if (this.$route.path.includes('/PhoneUserInfo')) {
        this.$router.push('/')
      } else {
        this.$router.go(0)
      }
      message.success({ content: '退出成功', duration: 3 })
    },
    async updateInfo() {
      if (this.gender === '女') {
        this.userInfo.gender = '1';
      } else if (this.gender === '男') {
        this.userInfo.gender = '0';
      } else {
        this.userInfo.gender = '';
      }
      const param = {
        data: {
          gender: this.userInfo.gender,
          nickName: this.userInfo.nickName,
          // messageOk: this.userInfo.messageOk,
          avatar: this.userInfo.avatar,
          cityId: this.userInfo.cityId,
          // phoneOk: this.userInfo.phoneOk,
          provinceId: this.userInfo.provinceId,
          // realName: this.userInfo.realName,
          // password: this.userInfo.password,
          areaId: this.userInfo.areaId,
          id: this.userInfo.id,
          // username: this.userInfo.username,
        }
      }
      try {
        this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
        const result = await this.$axios.$post(Api.UpdateInfo, param);
        if (result?.code === 200) {
          message.success({ content: '保存成功', duration: 3 })
          await this.$store.commit('app/UserId', this.userInfo.id)
          await this.$store.commit('app/UserName', this.userInfo.username)
          await this.$store.commit('app/Avatar', this.userInfo.avatar)
          await this.$store.commit('app/NickName', this.userInfo.nickName)
          await this.$store.commit('app/Gender', this.userInfo.gender)
          Cookies.set('UserName', this.userInfo.username, { expires: 7, })
          Cookies.set('Gender', this.userInfo.gender, { expires: 7, })
          Cookies.set('UserId', this.userInfo.id, { expires: 7, })
          Cookies.set('RealName', this.userInfo.realName, { expires: 7, })
          Cookies.set('ProvinceId', this.userInfo.provinceId, { expires: 7, })
          Cookies.set('PhoneOk', this.userInfo.phoneOk, { expires: 7, })
          Cookies.set('Password', this.userInfo.password, { expires: 7, })
          Cookies.set('NickName', this.userInfo.nickName, { expires: 7, })
          Cookies.set('MessageOk', this.userInfo.messageOk, { expires: 7, })
          Cookies.set('CityId', this.userInfo.cityId, { expires: 7, })
          Cookies.set('AreaId', this.userInfo.areaId, { expires: 7, })
          Cookies.set('Avatar', this.userInfo.avatar, { expires: 7, })
          this.$router.go(0)
        }

      } catch (error) {
      } finally {
        this.$axios.setHeader('Authorization', '')
      }
    },
    async changeCity(value: string) {
      this.userInfo.cityId = value || '';
      if (this.userInfo.cityId) {
        const param = {
          data: {
            id: this.userInfo.cityId
          }
        }
        const result = await this.$axios.$post(LocationApi.GetAllAreasByCityId, param);
        if (result?.code === 200) {
          const areas = getDataResult(result);
          this.areaOptions.splice(0);
          this.userInfo.areaId = '';
          if (areas && areas.length > 0) {
            areas.forEach((area: any) => {
              this.areaOptions.push({ value: area.id, label: area.name })
            })
          }
        }
      }
    },
    // 选择省
    async changeProvince(value: string) {
      this.userInfo.provinceId = value;
      if (this.userInfo.provinceId) {
        const param = {
          data: {
            id: this.userInfo.provinceId
          }
        }
        const result = await this.$axios.$post(LocationApi.GetAllCitiesByProvinceId, param);
        if (result?.code === 200) {
          const cities = getDataResult(result);
          this.cityOptions.splice(0);
          this.userInfo.cityId = '';
          this.userInfo.areaId = '';
          if (cities && cities.length > 0) {
            cities.forEach((city: any) => {
              this.cityOptions.push({ value: city.id, label: city.name })
            })
          }
        }
      }
    },
    changeArea(value: string) {
      this.userInfo.areaId = value;
    },
    clickBack() {
      if (this.type === 'updatePassword' || this.type === 'updatePhone') {
        this.type = 'set';
      } else {
        this.$router.push('/PhoneUserInfo?redirect='+ this.fromPath);
      }
    },
    customRequest(options: any) {
      const formData = new FormData();
      formData.append('file', options.file as any);
      formData.append('id', this.userInfo.id || '');
      this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
      this.$axios.$post(
        Api.UploadAvatar, 
        formData,
        { headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8' } }
      )
      .then(async (res: any) => {
          options.onSuccess(res, options.file);
          const date = moment();
          this.userInfo.avatar = res.data + '&date=' + date;
          await this.$store.commit('app/Avatar', this.userInfo.avatar)
          Cookies.set('Avatar', this.userInfo.avatar, { expires: 7, })
          message.success('上传成功');
        })
        .catch(() => {
          options.onError();
          message.error('上传失败，请删除重试');
        });
      this.$axios.setHeader('Authorization', '')
    },
  }
})
</script>
<style scoped>
  .avatarClass {
    @apply w-[80px] h-[80px];
  }
  .avatarClass >>> *{
    @apply w-[80px] h-[80px] rounded-full;
  }
  .avatarClass >>> .ant-upload {
    @apply p-0 bg-[#DDDDDD];
  }
  .avatarClass >>> .sss {
    @apply object-center w-[50px] h-10;
  }
  .selectClass {
    @apply w-[100%];
  }
  .selectClass >>> .ant-select-selection {
    @apply bg-[#F3F5FF];
  }
  .selectClass >>> * {
    @apply border-[0px] text-[#333333] text-[16px];
  }
  .selectClass >>> .ant-select-selection__rendered {
    @apply ml-0;
  }
  .selectClass >>> .anticon  {
    @apply hidden;
  }
</style>