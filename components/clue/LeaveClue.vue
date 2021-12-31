<template>
    <div class="fixed">
        <div class=" fixed w-full h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden; position: fixed;" @click="$emit('isOpen')">
            <div class="bg-right-top bg-auto bg-clue-head bg-no-repeat rounded-md fixed z-[80] opacity-100 bg-white lg:p-9 lg: w-[433px] lg: h-[458px] sm:w-[95%] sm:h-[320px] sm:p-3 sm:m-3 sm:space-y-5 sm:mx-3" @click="re">
                <div class="">
                    <div class="w-full h-full">
                        <img class="absolute top-4 right-4 " src="~/assets/img/clue/x.png" alt="" @click="$emit('isOpen')" />
                    </div>
                    
                    <div class="space-x-1">
                        <span class="font-bold text-black lg:text-2xl sm:text-xl">{{ title }}</span>
                        <span v-show="context" class="lg:text-[14px]">已有</span><span class="text-red-600 lg:text-[14px]">{{ context }}</span><span v-show="context" class="lg:text-[14px]" >人{{ action }}</span>
                    </div>
                    <div class="lg:mt-5 sm:mt-3">
                        <p class="lg:leading-loose lg:text-[15px]">
                            {{ description }}
                        </p>
                    </div>
                </div>
                <div class="border border-solid divide-y rounded-md border-gray-300 lg:h-[120px] lg:mt-9 sm:h-[100px]">
                    <input id="phone" v-model="phone" autocomplete="off" class="w-full text-[15px] h-1/2 rounded-md pl-4 placeholder-gray-300" :class="phoneNull ? 'border border-red-600 placeholder-red-500' : ''" placeholder="请输入手机号" @blur="isDisable">
                    <div class=" sm:text-12px flex flex-row  items-center text-[15px] h-1/2 rounded-md pl-4" :class="codeNull ? 'border border-red-600 placeholder-red-500' : ''">
                        <input v-model="code" class="w-3/5 h-full placeholder-gray-300 rounded-md sm:text-12px"  :class="codeNull ? 'placeholder-red-500' : ''" placeholder="请输入短信验证码">
                        <span class="text-gray-300 sm:text-12px">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button v-if="isValidate" id="code" type="button" class="text-gray-300 sm:text-12px" @click="clickReceive">获取验证码</button>
                        <button v-else id="code" class="text-blue-700 sm:text-12px" type="button"  @click="clickReceive">获取验证码</button>
                    </div>
                </div>
                <div class="lg:mt-3 lg:text-[13px]">
                    <input v-model="checked" type="checkbox" name="selected" :checked="checked" />
                    <span>我已阅读<a class="text-blue-600" href="">《房匠用户协议》</a></span>
                </div>
                <div class=" lg:mt-11">
                    <button class=" sm:w-full sm:text-[15px] lg: w-[357px] lg:h-[55px] rounded-md text-white text-2xl bg-fjBlue-100" @click="addClue">{{ operation }}</button>
                </div>
            </div>
        </div>
        <div v-show="notice" class=" fixed w-full h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden; position: fixed;" >
            <NoticeReminder :title="'温馨提示'" :notice-info="noticeInfo"  @closeNotice="closeNotice"/>
        </div>
    </div>
</template>
<script>
import { Api } from '~/api/clue/clueApi';
import { Api as HouseApi } from '~/api/model/houseModel';
export default {
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
  },
  emits: ['isOpen'],
  data () {
    return { 
        phone: '',
        title: '',
        context: '',
        action: '',
        operation: '',
        description: '',
        isValidate: true,
        checked: false,
        code: '',
        intentionCity: '',
        intentionProject: '',
        successNotice: false,
        failNotice: false,
        notice: false,
        noticeInfo: '',
        phoneNull: false,
        codeNull: false,
    };
  },
  watch: {
      clueType() {
        if (this.clueType === '2') {
            this.title = '价格变化提醒';
            this.action = '订阅该楼盘';
            this.operation = '立即订阅';
            this.description = '降价涨价消息早知道。立即订阅，价格一波动立刻通知您，帮您找准买房好时机，让您不错过最低价！';
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
    successNotice() {},
    failNotice() {},
  },
  async mounted () {
        if (this.clueType === '2') {
            this.title = '价格变化提醒';
            this.action = '订阅该楼盘';
            this.operation = '立即订阅';
            this.description = '降价涨价消息早知道。立即订阅，价格一波动立刻通知您，帮您找准买房好时机，让您不错过最低价！';
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
    if (this.projectId) {
        const result = await this.$axios.$post(HouseApi.GetProject, { data: { id: this.projectId } })
        if (result.code === 200) {
            this.context = result.data.content.lookTime;
            this.intentionCity = result.data.content.sysCityByCityId.id;
            this.intentionProject = result.data.content.name;
        }
    }
    
  },
  methods: {
    re (e) {
        debugger;
        e.stopPropagation();
    },
    async clickReceive() {
        if (this.phone) {
            const phone = this.phone;
            const result = await this.$axios.$post(Api.GetCode, { data: { phone } });
            if (result.code === 200) {
                // this.successNotice = true;
                this.notice = true;
                this.noticeInfo = '验证码已发送';
            } else {
                // this.failNotice = true;
                this.noticeInfo = '验证码发送失败';
            }
        } else {
            this.notice = true;
            this.noticeInfo = '请正确填写信息'
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
        if (this.phone && this.code && this.checked) {
            const param = {
                data: {
                    intentionCity: this.intentionCity,
                    contact: this.phone,
                    source: this.clueType,
                    intentionProject: this.projectId,
                    demand: this.demand,
                    activityId: this.activityId,
                },
                code: this.code
            }
            try{
                const result = await this.$axios.$post(Api.Add, param);
                if (result.code === 200) {
                    // this.successNotice = true;
                    this.notice = true;
                    if (this.clueType === '2') {
                        const info = this.intentionProject + '房价变化提醒，稍后我们会有专业的房产顾问联系您！'
                        this.noticeInfo = '您已成功订阅' + info;
                    } else if(this.clueType === '3') {
                        this.noticeInfo = '您已成功成功参与房匠帮您找房活动，稍后我们会有专业的房产顾问联系您！'
                    } else if (this.clueType === '15' || this.clueType === '4' || this.clueType === '5') {
                        this.noticeInfo = '您已成功参与房匠推广活动，稍后我们会有专业的房产顾问联系您！'
                    } else {
                        const info = this.intentionProject + '楼盘相关信息，稍后我们会有专业的房产顾问联系您！'
                        this.noticeInfo = '您已成功订阅' + info;
                    }
                    
                }
            } catch(e) {
                this.notice = true;
                this.noticeInfo = '订阅失败'
            }
        } else if (!this.phone) {
            this.phoneNull = true;
        } else if (!this.code) {
            this.codeNull = true;
        }else if (!this.checked) {
            this.notice = true;
            this.noticeInfo = '请确认已阅读《房匠用户协议》'
        } else {
            this.notice = true;
            this.noticeInfo = '请正确填写信息'
        }
        
    },
    closeNotice() {
        this.notice = false;
    }
  }
}
</script>