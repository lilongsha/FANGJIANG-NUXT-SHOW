<template>
    <div class="fixed">
        <div class=" fixed w-screen h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden; position: fixed;" @click="$emit('isOpen')">
            <div class="bg-right-top bg-auto bg-clue-head bg-no-repeat rounded-md fixed z-[80] opacity-100 bg-white lg:p-9 lg: w-[433px] sm:w-[95%] sm:p-3 sm:m-auto sm:space-y-3" @click="re">
                <div class="">
                    <div class="w-full h-full">
                        <img class="absolute top-4 right-4 " src="~/assets/img/clue/x.png" alt="" @click="$emit('isOpen')" />
                    </div>
                    <div class="space-x-1">
                        <span class="font-bold text-black lg:text-2xl sm:text-xl">帮您找房</span>
                    </div>
                    <div class="lg:mt-6 sm:mt-3">
                        <p class="lg:leading-loose text-[#666666] lg:text-[20px] sm:text-[14px] font-medium">
                            {{ description }}
                        </p>
                    </div>
                </div>
                <div v-show="step === 1" class="rounded-md w-full h-[120px] grid grid-cols-3 justify-items-center place-content-stretch">
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('十万以下')">十万以下</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('二十万以下')">二十万以下</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('三十万以下')">三十万以下</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('四十万以下')">四十万以下</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('五十万以下')">五十万以下</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('五十万以上')">五十万以上</button></div>
                </div>
                <div v-show="step === 2" class="rounded-md w-full h-[120px] grid grid-cols-3 justify-items-center place-content-stretch">
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('一居室')">一居室</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('二居室')">二居室</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('三居室')">三居室</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('四居室')">四居室</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('五居室')">五居室</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('五居室')">五居以上</button></div>
                </div>
                <div v-show="step === 3" class="rounded-md w-full h-[120px] grid grid-cols-3 justify-items-center place-content-stretch">
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('不限')">不限</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('长安区')">长安区</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('裕华区')">裕华区</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('新华区')">新华区</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('桥西区')">桥西区</button></div>
                    <div class="flex items-center"><button class=" w-[78px] h-[34px] bg-[#F5F9FF] text-black focus:border focus:border-fjBlue-100 focus:text-fjBlue-100 rounded" @click="handleChange('开发区')">开发区</button></div>
                </div>
                <ClueLeaveClue v-show="step === 4" class="absolute z-[60] w-full h-full" :city="cityId"  :activity-id="activityId"  :look="look" :project-id="projectId" :clue-type="'3'" :demand="value.toString()" @isOpen="$emit('isOpen')" />
                <div class=" mt-6 text-fjBlue-100 text-[14px]">
                    <span class="w-full lg:hidden">
                        <Select v-model="value"
                            style="width: 100%"
                            size="default"
                            placeholder=""
                            mode="tags"
                            :options="options"
                            :token-separators="[',', '，']"
                            :open="false"
                            class="selectClass"
                        />
                    </span>
                    <span class="sm:hidden">
                        <Select v-model="value"
                            style="width: 100%"
                            size="large"
                            placeholder=""
                            mode="tags"
                            :options="options"
                            :token-separators="[',', '，']"
                            :open="false"
                            class="selectClass"
                        />
                    </span>
                    <div class="pt-2 text-xs text-fjRed-100">*
                        <span v-if="step === 1" class="text-[#999999]">手动输入您的首付预算</span>
                        <span v-if="step === 2" class="text-[#999999]">手动输入您的户型需求</span>
                        <span v-if="step === 3" class="text-[#999999]">手动输入您的意向购房区域</span>
                    </div>
                </div>
                <div class=" lg:mt-11">
                    <button class="  sm:w-full sm:text-[15px] lg: w-[357px] lg:h-[55px] sm:h-[40px] rounded-full text-white text-2xl bg-fjBlue-100" @click="nextStep">下一步</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Select } from 'ant-design-vue';
export default {
  name: 'HelpClue',
  components: {
      Select,
  },
  props: {
    projectId: {
        type: String,
        required: false,
        default: '',
    },
    cityId: {
        type: String,
        required: false,
        default: '130100',
    },
    activityId: {
      type: String,
      required: false,
      default: '',
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
        step: 1,
        value: [],
        options: [{ key: '', label: ''}],
        description: '您的首付预算是多少？',
        notice: false,
        noticeInfo: '请正确填写信息',
    };
  },
  watch: {
      step() {
          if (this.step === 1) {
              this.description = '您的首付预算是多少？'
          } else if(this.step === 2) {
              this.description = '您的户型需求?'
          } else if(this.step === 3) {
              this.description = '您的意向购房区域是哪里？'
          }
      }
  },
  async mounted () {
    
  },
  methods: {
    handleChange(value) {
        if (!this.value.includes(value)) {
            this.value.push(value);
            this.options.push({ key: value, label: value });
        }
    },
    re (e) {
        e.stopPropagation();
    },
    nextStep() {
        this.step = this.step + 1;
    },
    closeNotice() {
        this.notice = false;
    }
  }
}
</script>

<style scoped>
  .selectClass >>> .ant-select-selection {
    @apply text-fjBlue-100 border border-fjBlue-100;
  }
  .selectClass >>> .ant-select-selection__choice {
      @apply bg-[#D6E4F8] text-[#0066FF] text-[14px];
  }
  .selectClass >>> .ant-select-selection__choice__remove {
      @apply text-[#0066FF];
  }
</style>