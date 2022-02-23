<template>
  <div class="w-full h-full p-4">
    <div class="flex flex-row justify-between items-center">
      <div class="w-[10px] h-[17px]" @click="clickBack"><img src="~/assets/img/userInfo/back.png" alt=""></div>
      <div class="font-bold text-[20px] text-[#333333]">我的问答</div>
      <div class="flex flex-row space-x-3"><img src="~/assets/img/userInfo/message.png" alt="" class="w-[19px] h-[17px]"></div>
    </div>
    <div class="mt-6">
      <div v-if="questions && questions.length > 0">
        <div v-for="item in questions" :key="item.id" class="mt-2">
          <div class="flex flex-row items-center mb-2" @click="clickDiscuss(item.id)">
            <div class="text-white bg-fjRed-100 px-1 rounded-[4px]">问</div>
            <div class="lg:ml-4 sm:ml-2 lg:text-[18px] text-[#333333] font-medium">{{ item.content }}</div>
          </div>
          <div v-if="item.answerEntities && item.answerEntities.length > 0">
            <div v-for="answer in item.answerEntities" :key="answer.id" class="lg:mt-8 pb-2 border-b border-b-[#DDDDDD] w-full flex flex-row">
              <div class="overflow-hidden w-3/4">
                <div class="flex flex-row items-center lg:space-x-6 sm:space-x-2">
                  <img :src="answer.avatar" alt="" class="lg:w-[60px] lg:h-[60px] sm:w-[30px] sm:h-[30px] rounded-full">
                  <div class="lg:space-y-3 sm:space-y-1">
                    <div class="sm:text-xs text-[#666666] text-[20px]">{{ answer.author }}</div>
                    <div class="sm:text-xs text-[#666666] text-[18px]">{{ answer.content }}</div>
                    <div class="sm:text-xs text-[#999999]">{{ answer.createTime.split('T')[0] }}</div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-end justify-end sm:w-2/5 lg:w-1/4 text-[#999999]">
                <div class="lg:px-3 sm:px-1 border border-[#DDDDDD] flex flex-row items-center rounded-full space-x-2" @click="clickDiscuss(item.id)">
                  <img src="~/assets/img/answer.png" alt="">
                  <span>{{ item.answerEntities.length }}</span>
                </div>
                <div class=" lg:ml-4 sm:ml-2 flex flex-row items-center border border-[#DDDDDD] rounded-full space-x-2 lg:px-3 sm:px-1" @click="clickAgree(answer.id)"> 
                  <img v-if="agree.includes(answer.id)" src="~/assets/img/agree.png" alt="">
                  <img v-else src="~/assets/img/disagree.png" alt="">
                  <span v-if="agree.includes(answer.id)">{{ answer.likeNum + 1 }}</span>
                  <span v-else>{{ answer.likeNum }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { AnswerApi, QuestionApi } from '~/api/user/userApi';
import { Breadcrumb } from '~/types/app';
import { getPageResult } from '~/utils/response/util';
export default Vue.extend({
    name: 'Question',
    async asyncData({ $axios, store }) {
      const breadcrumb: Breadcrumb[] = [];
      breadcrumb.splice(0)
      store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

      const tokenType = store.state.app.tokenType;
      const accessToken = store.state.app.accessToken;
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
        questions,
        pageParam,
        tokenType,
        accessToken,
      }
    },
    data() {
      return{
        agree: [''],
        tokenType: '',
        accessToken: '',
      }
    },
    methods: {
      clickDiscuss(id: string) {
        this.$router.push('/house/discuss/' + id + '.html')
      },
      async clickAgree(answerId: string) {
        if (this.agree.includes(answerId)) {
          return
        }
        try {
          this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          const param = {
            data: {
              id: answerId,
            }
          }
          const result = await this.$axios.$post(AnswerApi.Agree, param)
          if (result.code === 200) {
            this.agree.push(answerId)
          }
        } catch (error) {
          
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
      },
      clickBack() {
        const fromPath = this.$route.query?.fromPath
        this.$router.push('/PhoneUserInfo?redirect=' + fromPath)
      },
    }
})
</script>