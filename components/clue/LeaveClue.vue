<template>
  <div class="fixed">
    <div class="fixed w-screen h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden;" @click="$emit('isOpen')">
      <div class="bg-right-top bg-auto bg-clue-head bg-no-repeat rounded-md fixed z-[80] opacity-100 bg-white lg:w-[434px] lg:p-9 sm:w-[90%] sm:p-5 sm:m-auto sm:space-y-5" @click="re">
        <div class="">
          <div class="w-full h-full">
            <img class="absolute top-4 right-4 " src="~/assets/img/clue/x.png" alt="" @click="$emit('isOpen')" />
          </div>
          
          <div class="space-x-1">
            <span class="font-bold text-black lg:text-2xl sm:text-xl">{{ title }}</span>
            <span v-show="look" class="lg:text-[14px]">已有<span class="text-red-600 lg:text-[14px]">{{ look }}</span><span class="lg:text-[14px]" >人{{ action }}</span></span>
          </div>
          <div class="lg:mt-5 sm:mt-3">
            <p class="lg:leading-loose lg:text-[15px]">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="border border-solid divide-y rounded-md border-gray-300 lg:h-[120px] lg:mt-9 sm:h-[95px]">
          <input id="phone" v-model="phone" autocomplete="off" class="w-full text-[15px] h-1/2 rounded-t-md pl-4 placeholder-gray-300" :class="phoneNull ? 'border border-red-600 placeholder-red-500' : ''" placeholder="请输入手机号" @blur="isDisable">
          <div class=" sm:text-12px flex flex-row  items-center text-[15px] h-1/2 rounded-b-md pl-4" :class="codeNull ? 'border border-red-600 placeholder-red-500' : ''">
            <input v-model="code" class="w-3/5 h-full placeholder-gray-300 rounded-md sm:text-12px"  :class="codeNull ? 'placeholder-red-500' : ''" placeholder="请输入短信验证码">
            <span class="text-gray-300 sm:text-12px">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button v-if="isTime" class="text-gray-300 sm:text-12px" >{{ msg }}</button>
            <button v-else type="button" class=" sm:text-12px" :class="isValidate ? 'text-gray-300' : 'text-blue-700'" @click="clickReceive">获取验证码</button>
          </div>
        </div>
        <div class="lg:mt-3 lg:text-[13px] flex flex-row justify-start items-center space-x-1 sm:-mt-2">
          <input v-model="checked" type="checkbox" name="selected" :checked="checked" />
          <span>我已阅读<a class="text-blue-600" href="">《房匠用户协议》</a></span>
        </div>
        <div class="lg:mt-11 sm:mt-2">
          <button class=" sm:w-full sm:text-[15px] lg: w-[357px] lg:h-[55px] sm:h-[40px] rounded-full text-white text-2xl bg-fjBlue-100" @click="addClue">{{ operation }}</button>
        </div>
      </div>
    </div>
    <div v-show="notice" class=" fixed w-full h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden; position: fixed;" >
        <NoticeReminder :title="'温馨提示'" :notice-info="noticeInfo"  @closeNotice="closeNotice"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { message } from 'ant-design-vue';
import { Api } from '~/api/clue/clueApi';
export default Vue.extend({
  name: 'LeaveClue',
  props: {
    clueType: {     
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: false,
      default: '',
    },
    demand: {
      type: String,
      required: false,
      default: ''
    },
    activityId: {
      type: String,
      required: false,
      default: '',
    },
    city: {
      type: String,
      required: false,
      default: '130100',
    },
    look: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  emits: ['isOpen'],
  data () {
    return { 
      msg: '',
      isTime: false,
      phone: '',
      title: '',
      context: '',
      action: '',
      operation: '',
      description: '',
      isValidate: true,
      checked: true,
      code: '',
      intentionCity: '',
      intentionProject: '',
      failNotice: false,
      notice: false,
      noticeInfo: '',
      phoneNull: false,
      codeNull: false,
      lookTime: 0,
    };
  },
  watch: {
    clueType() {
      if (this.clueType === '2') {
        this.title = '价格变化提醒';
        this.action = '订阅该楼盘';
        this.operation = '立即订阅';
        this.description = '降价涨价消息早知道。立即订阅，价格一波动立刻通知您，帮您找准买房好时机，让您不错过最低价！';
      }else if (this.clueType === '16') {
        this.title = '余房查询';
        this.action = '了解该楼盘剩余房源';
        this.operation = '余房查询';
        this.description = '帮您及时了解楼盘信息，不要错过心仪房号。';
      }else if (this.clueType === '10') {
        this.title = '周边配套信息';
        this.action = '了解该楼盘周边信息';
        this.operation = '了解周边';
        this.description = '帮您更多了解楼盘信息，找到最适合的楼盘。';
      }else if (this.clueType === '9') {
        this.title = '开盘提醒我';
        this.action = '设置开盘提醒';
        this.operation = '提醒我';
        this.description = '了解开盘时间，及时通知您，帮您找准买房好时机。';
      }else if (this.clueType === '8') {
        this.title = '成交价查询';
        this.action = '了解该楼盘成交信息';
        this.operation = '成交价查询';
        this.description = '了解楼盘成交信息，让您不错过最低价！';
      }else if (this.clueType === '4') {
        this.title = '专车看房';
        this.action = '参与专车看房活动';
        this.operation = '专车看房';
        this.description = '全程免费带您看房，帮您找到合适房源。';
      }else if (this.clueType === '5') {
        this.title = '组团砍价';
        this.action = '参与组团砍价活动';
        this.operation = '参与拼团';
        this.description = '参与拼团活动，让您不错过最低价！';
      }else if (this.clueType === '7') {
        this.title = '新动态通知';
        this.action = '订阅了动态通知';
        this.operation = '立即订阅';
        this.description = '楼市动态早知道，帮您找准买房好时机，让您不错过最低价！';
      }else if (this.clueType === '15') {
        this.title = '活动推广';
        this.action = '参与该活动';
        this.operation = '参与活动';
        this.description = '帮您找准买房好时机，让您不错过最低价';
      }else if (this.clueType === '3') {
        this.title = '帮您找房';
        this.action = '通过房匠找到了合适的楼盘';
        this.operation = '帮您找房';
        this.description = '平时太忙，房匠满足您的个性化需求！';
      }else if (this.clueType === '6') {
        this.title = '订阅楼盘';
        this.action = '订阅该楼盘';
        this.operation = '立即订阅';
        this.description = '立即订阅，价格一波动立刻通知您，帮您找准买房好时机，让您不错过最低价！';
      }
    },
    phone(_newName, _oldName) { 
      this.isDisable();
      this.phoneNull = false;
    },
    code() {
      this.codeNull = false;
    },
    checked() {},
    failNotice() {},
    async projectId() {
        // if (this.projectId) {
        //     const result = await this.$axios.$post(HouseApi.GetProject, { data: { id: this.projectId } })
        //     if (result?.code === 200) {
        //         this.context = result.data.content.lookTime;
        //         this.intentionCity = result.data.content.sysCityByCityId.id;
        //         this.intentionProject = result.data.content.name;
        //     }
        // }
    },
    look() {},
    city() {},
    isTime() {},
  },
   mounted () {
    if (this.clueType === '2') {
      this.title = '价格变化提醒';
      this.action = '订阅该楼盘';
      this.operation = '立即订阅';
      this.description = '降价涨价消息早知道。立即订阅，价格一波动立刻通知您，帮您找准买房好时机，让您不错过最低价！';
    }else if (this.clueType === '16') {
        this.title = '余房查询';
        this.action = '了解该楼盘剩余房源';
        this.operation = '余房查询';
        this.description = '帮您及时了解楼盘信息，不要错过心仪房号。';
    }else if (this.clueType === '10') {
      this.title = '周边配套信息';
      this.action = '了解该楼盘周边信息';
      this.operation = '了解周边';
      this.description = '帮您更多了解楼盘信息，找到最适合的楼盘。';
    }else if (this.clueType === '9') {
      this.title = '开盘提醒我';
      this.action = '设置开盘提醒';
      this.operation = '提醒我';
      this.description = '了解开盘时间，及时通知您，帮您找准买房好时机。';
    }else if (this.clueType === '8') {
      this.title = '成交价查询';
      this.action = '了解该楼盘成交信息';
      this.operation = '成交价查询';
      this.description = '了解楼盘成交信息，让您不错过最低价！';
    }else if (this.clueType === '4') {
      this.title = '专车看房';
      this.action = '参与专车看房活动';
      this.operation = '专车看房';
      this.description = '全程免费带您看房，帮您找到合适房源。';
    }else if (this.clueType === '5') {
      this.title = '组团砍价';
      this.action = '参与组团砍价活动';
      this.operation = '参与拼团';
      this.description = '参与拼团活动，让您不错过最低价！';
    }else if (this.clueType === '7') {
      this.title = '新动态通知';
      this.action = '订阅了动态通知';
      this.operation = '立即订阅';
      this.description = '楼市动态早知道，帮您找准买房好时机，让您不错过最低价！';
    }else if (this.clueType === '15') {
      this.title = '活动推广';
      this.action = '参与该活动';
      this.operation = '参与活动';
      this.description = '帮您找准买房好时机，让您不错过最低价';
    }else if (this.clueType === '3') {
      this.title = '帮您找房';
      this.action = '通过房匠找到了合适的楼盘';
      this.operation = '帮您找房';
      this.description = '平时太忙，房匠满足您的个性化需求！';
    }else if (this.clueType === '6') {
      this.title = '订阅楼盘';
      this.action = '订阅该楼盘';
      this.operation = '立即订阅';
      this.description = '降价涨价消息早知道。立即订阅，价格一波动立刻通知您，帮您找准买房好时机，让您不错过最低价！';
    }
    // if (this.projectId) {
    //     const result = await this.$axios.$post(HouseApi.GetProject, { data: { id: this.projectId } })
    //     if (result?.code === 200) {
    //         this.context = result.data.content.lookTime;
    //         this.intentionCity = result.data.content.sysCityByCityId.id;
    //         this.intentionProject = this.projectId;
    //     }
    // }
    
  },
  methods: {
    re (e) {
      e.stopPropagation();
    },
    async clickReceive() {
      // message.success({ content: '验证码已发送', duration: 0, icon: <a-icon style="top: -4px;" type="apple" /> });
      if (this.phone) {
        const phone = this.phone;
        const result = await this.$axios.$post(Api.GetCode, { data: { phone } });
        if (result?.code === 200) {
          // this.notice = true;
          // this.noticeInfo = '验证码已发送';
          message.success({ content: '验证码已发送', duration: 3, icon: <a-icon type="check-circle" style="top: -4px;" /> });
          this.isTime = true;
          this.setTime();
        } else {
          // this.notice = true;
          // this.noticeInfo = '验证码发送失败';
          message.error({ content: '验证码发送失败', duration: 3, icon: <a-icon type="close-circle" style="top: -4px;" /> });
        }
      } else {
        // this.notice = true;
        // this.noticeInfo = '请正确填写信息'
        message.warning({ content: '请正确填写信息', duration: 3, icon: <a-icon type="bulb" style="top: -4px;" /> });
      }
      const e = window.event;
      if (e) {
        e.stopPropagation();
      }
    },
    isDisable() {
      const testFun = /^1\d{10}$/;
      if (testFun.test(this.phone)) {
        this.isValidate = false;
      } else {
        this.isValidate = true;
      }
    },
    async addClue() {
      this.isDisable();
      if(!this.isValidate) {
        if (this.phone && this.code && this.checked) {
          const param = {
            data: {
              intentionCity: this.city || '130100',
              contact: this.phone,
              source: this.clueType,
              intentionProject: this.projectId,
              demand: this.demand,
              activityId: this.activityId,
            },
            code: this.code
          }
          let result;
          try{
            result = await this.$axios.$post(Api.Add, param);
            if (result?.code === 200) {
              // this.notice = true;
              if (this.clueType === '2') {
                message.success({ content: '您已成功订阅' + this.intentionProject + '房价变化提醒，稍后我们会有专业的房产顾问联系您！', duration: 3, icon: <a-icon type="fund" style="top: -4px;" /> });
              } else if(this.clueType === '3') {
                message.success({ content: '您已成功成功参与房匠帮您找房活动，稍后我们会有专业的房产顾问联系您！', duration: 3, icon: <a-icon type="alert" style="top: -4px;" /> });
              } else if (this.clueType === '15' || this.clueType === '4' || this.clueType === '5') {
                message.success({ content: '您已成功参与房匠推广活动，稍后我们会有专业的房产顾问联系您！', duration: 3, icon: <a-icon type="notification" style="top: -4px;" /> });
              } else {
                message.success({ content: '您已成功订阅' + this.intentionProject + '楼盘相关信息，稍后我们会有专业的房产顾问联系您！', duration: 3, icon: <a-icon type="message" style="top: -4px;" /> });
              }
            }
          } catch(e) {
              // this.notice = true;
              // this.noticeInfo = '订阅失败'
            // if (result.code === 4621) {
            //   message.warning({ content: '验证码错误', duration: 3, icon: <a-icon type="close-circle" style="top: -4px;" /> });
            // } else {
            //   message.warning({ content: '订阅失败', duration: 3, icon: <a-icon type="close-circle" style="top: -4px;" /> });
            // }
            message.warning({ content: '订阅失败', duration: 3, icon: <a-icon type="close-circle" style="top: -4px;" /> });
          }
        } else if (!this.phone) {
          this.phoneNull = true;
        } else if (!this.code) {
          this.codeNull = true;
        }else if (!this.checked) {
          // this.notice = true;
          // this.noticeInfo = '请确认已阅读《房匠用户协议》'
          message.warning({ content: '请确认已阅读《房匠用户协议》', duration: 3, icon: <a-icon type="snippets" style="top: -4px;" /> });
        } else {
          // this.notice = true;
          // this.noticeInfo = '请正确填写信息'
          message.warning({ content: '请正确填写信息', duration: 3, icon: <a-icon type="edit" style="top: -4px;" /> });
        }
      } else {
        this.phoneNull = true;
      }
    },
    closeNotice() {
      this.notice = false;
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
    }
  }
})
</script>
<style scoped>
.ant-message-custom-content {
  display: flex;
}
</style>