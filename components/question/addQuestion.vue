<template>
  <div class="absolute top-0 left-0">
    <div class="fixed w-screen h-full top-0 left-0 z-[70] flex flex-col items-center justify-center" style="background: rgba(0,0,0,0.7); overflow: hidden;" @click="$emit('clickClose')">
      <div class="rounded-md fixed z-[80] opacity-100 bg-white lg:w-[504px] lg:px-10 lg:py-12 sm:w-[90%] sm:p-5 sm:m-auto sm:space-y-5" @click="stop">
        <div class="absolute top-4 right-4" @click="$emit('clickClose')">
          <img class="" src="~/assets/img/clue/x.png" alt="" />
        </div>
        <div class="text-[28px] text-[#000000] font-bold">在线为你解答</div>
        <div class="relative lg:mt-10 sm:mt-4">
          <textarea v-model="text" class="w-full lg:h-[210px] sm:h-[150px] placeholder-[#999999] text-[16px] text-[#999999] p-2" cols="30" rows="10" placeholder="详细描述你的问题，描述的越清晰，越容易获得的解答，
最多100字。"></textarea>
          <div class="absolute lg:right-2 lg:bottom-2 sm:right-2 sm:bottom-2 lg:text-[18px] text-[#999999]">{{ number }}字</div>
        </div>
        <div class="lg:mt-8 sm:mt-4 w-full bg-fjBlue-100 text-white lg:py-4 sm:py-2 sm:text-[18px] lg:text-[26px] text-center rounded-lg" @click="addQuestion">
          <button>提交问题</button>
          <AppLoading ref="loading" :box-class="'w-full h-full rounded-xl'" :height="'32px'" :width="'6px'"  />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { message } from 'ant-design-vue';
import Vue from 'vue'
import { QuestionApi } from '~/api/user/userApi';
export default Vue.extend({
  name: 'AddQuestion',
  props: {
    projectId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      text: '',
      number: 0,
    }
  },
  watch: {
    text() {
      this.number = this.text.length
    }
  },
  methods: {
    stop(e: any) {
      e.stopPropagation();
    },
    async addQuestion() {
      const accessToken = this.$store.state.app.accessToken;
      const tokenType = this.$store.state.app.tokenType;
      if (accessToken && tokenType) {
        this.$nuxt.$loading.start()
        try {
          this.$axios.setHeader('Authorization', tokenType + ' ' + accessToken)
          const param = {
            data: {
              content: this.text,
              projectId: this.projectId,
              lookTimes: 0
            }
          }
          const result = await this.$axios.$post(QuestionApi.Add, param)
          if (result?.code === 200) {
            message.success({ content: '成功发布问题', duration: 3})
          }
        } catch (error) {
          message.error({ content: '用户一天只能对一个项目提问一个问题', duration: 3})
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
        this.$nuxt.$loading.finish()
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    }
  }
})
</script>