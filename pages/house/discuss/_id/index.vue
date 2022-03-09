<template>
  <div class="mx-auto sm:w-screen sm:px-2 sm:pb-2 lg:container">
    <div class="w-full sm:h-10 lg:h-20"></div>
    <AppTitle :house="project"  :favorite="favorite"/>
    <AppBar :current="'discuss'" :house="project" :class-name="'menu sticky z-[20] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 sm:mt-0 lg:mt-6 sm:top-[95px] lg:top-[118px] text-white'" />
    <div class="lg:mt-12 sm:mt-2 bg-[#FBFBFC] lg:py-6 lg:px-6 text-[#333333]">
      <div class="flex flex-row items-center sm:text-xl lg:text-[24px] ">
        <span class="bg-[#DA1111] px-1 lg:py-1 text-[14px] rounded sm:mr-2 lg:mr-5 text-white h-6">问</span>
        {{ question.content }}
      </div>
      <div class="flex flex-row items-center justify-between lg:mt-6 sm:mt-4">
        <div v-if="question.updateTime">{{ question.updateTime.split('T')[0] }}</div>
        <div v-else>{{ question.createTime.split('T')[0] }}</div>
        <button class="bg-fjBlue-100 text-white rounded-md text-[16px] lg:px-6 lg:py-3 sm:px-4 sm:py-2 sm:text-[14px]" @click="scrollTo">我要回答</button>
      </div>
    </div>
    <div class="lg:mt-5 sm:mt-3 lg:py-4 sm:py-2 border-b border-b-[#DDDDDD] text-[#999999] text-[18px]">全部回答
      <span class="ml-2">(</span>
      <span v-if="answers && answers.length > 0" class="text-fjBlue-100">{{ answers.length }}</span>
      <span v-else class="text-fjBlue-100">0</span>
      <span>)</span>
    </div>
    <div class="mt-4 sm:w-full lg:w-full">
      <div v-if="answers && answers.length > 0">
        <div v-for="(answer, index1) in answers" :key="index1" class="lg:py-10 sm:py-4 border-b border-b-[#DDDDDD] flex flex-row w-full mb-2 transition-all">
          <div class="overflow-hidden sm:w-3/5 lg:w-3/4">
            <div class="flex flex-row items-center lg:space-x-4 sm:space-x-2">
              <img :src="answer.avatar" alt="" class="lg:w-[60px] lg:h-[60px] sm:w-[30px] sm:h-[30px] rounded-full flex-shrink-0">
              <div class="lg:space-y-3 sm:space-y-1">
                <div class="sm:text-xs text-[#666666] text-[20px]">{{ answer.author }}</div>
                <div class="sm:text-xs text-[#666666] text-[18px]">{{ answer.content }}</div>
                <div class="sm:text-xs text-[#999999] text-[16px]">{{ answer.createTime.split('T')[0] }}</div>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-end justify-end sm:w-2/5 lg:w-1/4 text-[#999999]">
            <div class=" lg:ml-4 sm:ml-2 flex flex-row items-center border border-[#DDDDDD] rounded-full space-x-2 lg:px-3 sm:px-1" @click="agreeAnswer(answer.id)"> 
              <img v-if="agree.includes(answer.id)" src="~/assets/img/agree.png" alt="">
              <img v-else src="~/assets/img/disagree.png" alt="">
              <span v-if="agree.includes(answer.id)">{{ answer.likeNum + 1 }}</span>
              <span v-else>{{ answer.likeNum }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="sm:w-full lg:container lg:mt-5 sm:mt-2">
      <div class="w-full text-right">
        <a-pagination
          v-if="isMobile"
          size="small"
          :total="pageParams.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParams.pageNum"
          :item-render="itemRender"
        />
        <a-pagination
          v-else
          :total="pageParams.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParams.pageNum"
          :item-render="itemRender"
        />
      </div>
    </div>
    <div class="sm:w-full lg:container lg:h-[350px] sm:h-[150px] lg:mt-5 sm:mt-2 relative">
      <textarea id="textArea" v-model="text" cols="30" rows="12" class="border border-[#999999] lg:p-7 sm:p-3 text-[#999999] lg:text-[18px] placeholder-[#999999]" placeholder="详细描述你的问题，描述的越清晰，越容易获得的解答，最多100字。" style="width: 100%; height: 100%;" ></textarea>
      <div class="absolute lg:right-7 lg:bottom-7 sm:right-3 sm:bottom-3 lg:text-[18px] text-[#999999]">{{ number }}字</div>
    </div>
    <div class="text-right sm:w-full lg:container lg:mt-5 sm:mt-2">
      <button class="rounded text-white lg:py-4 lg:px-8 sm:py-1 px-3 lg:w-[150px] lg:text-[20px]" :class="number ? 'bg-fjBlue-100' : 'bg-[#DDDDDD]'" @click="addAnswer">提交回答</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { message } from 'ant-design-vue';
import { Api as QuestionApi } from '~/api/model/discuss';
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';
import { getProject } from '~/api/model/houseModel';
import { AnswerApi } from '~/api/user/userApi';

export default Vue.extend({
  name: 'DiscussDetail',
  components: {},
  async asyncData({ $axios, route, store, redirect, req }) {
    const start = new Date().getTime();

    const accessToken = store.state.app.accessToken;
    const tokenType = store.state.app.tokenType
    const currId = store.state.app.nickName
    const pageNum = 0
    const pageParams = {
      pageSize: 10,
      pageNum,
      total: 0
    }
    let isMobile:any;
    const userAgent = req?.headers['user-agent'] || '';
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }
    let question: any = {};
    const params: any = route.params;
    let id: string = params.id;
    const getQuestion = async () => {
      if (id.endsWith('.html')) {
        id = id.replace('.html', '');
      }
      const param = {
        data: {
          id,
        }
      }
      const result = await $axios.$post(QuestionApi.GetQuestion, param);
      if (result.code === 200) {
        question = getDataResult(result);
        await getProjectData(question.projectId);
        const breadcrumb: Breadcrumb[] = [];
        breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
        breadcrumb.push({ title: '问答', href: '/house/discuss/'+ question.projectId + '/p1', icon: '' })
        breadcrumb.push({ title: question.content, href: '' })
        store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
      }
    }

    let answers: any[] = []
    const getAnswer = async () => {
      try {
        if (id.endsWith('.html')) {
          id = id.replace('.html', '');
        }
        const questionId = id;
        const answerParam = {
          data: {
            questionId,
          },
          pageParam: {
            pageNum: pageParams.pageNum,
            pageSize: 10
          }
        }
        const result = await $axios.$post(AnswerApi.GetAnswers, answerParam)
        if (result.code === 200) {
          const { content, page } = getPageResult(result)
          answers = content;
          pageParams.total = page.totalElements
          pageParams.pageNum = page.number + 1
        }
      } catch (error) {
        
      }
    }

    let project: any;
    let favorite: any;
    const getProjectData = async (id: string) => {
      const resultProject = await getProject($axios, id, store, route, redirect)
      if (resultProject.code === 200) {
        favorite = resultProject.data.favorite;
        project = getDataResult(resultProject);
      }
    }

    await Promise.all([
      getQuestion(),
      getAnswer(),
    ])
    
    const end = new Date().getTime();
    // eslint-disable-next-line no-console
    console.log("问答详情调用接口使用时间：", end - start)

    return {
      id,
      question,
      project,
      favorite,
      accessToken,
      tokenType,
      currId,
      pageParams,
      pageNum,
      isMobile,
      answers,
    }
  },
  data() {
    const id: string = '';
    const question: any = {};
    let project:any;
    const pageParams = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };
    return {
      id,
      question,
      project,
      favorite: '',
      agree: [''],
      accessToken: '',
      tokenType: '',
      pageParams,
      text: '',
      number: 0,
      currId: '',
      answers: []
    }
  },
  head() {
    const houseName: string = this.project.name;
    const houseAreaName: string = this.project.sysAreaByAreaId.name || '';
    const houseCityName: string = this.project.sysCityByCityId.name || '';
    const houseProvinceName: string = this.project.sysProvinceByProvinceId.name || '';
    const latLng: string = this.project.latitude + '' + this.project.longitude;
    const title: string = `${this.question.content} - 房匠`;
    const description: string = `房匠网为您提供${houseCityName}${houseAreaName}${houseName}楼盘问答频道作为${houseName}业主论坛，拥有大量业主与售楼处互动信息及专家点评。让您全面了解${houseCityName}${houseAreaName}${houseName}怎么样？评价好不好？请关注房匠网.`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.project.firstImg?.address;
    const sandImgAddress: string = this.project.sandImg?.address;
    const pubTime: string = this.question.createTime.split('.')[0];
    let upTime: string = this.question.updateTime || this.question.createTime;
    upTime = upTime.split('.')[0];
    const keyword: string = `${houseCityName}${houseAreaName}${houseName},${houseName}楼盘怎么样,${houseName}好不好,${houseName}业主论坛`;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${title}","images":["${firstImgAddress}","${sandImgAddress}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    let location: string;
    if (this.project.latitude && this.project.longitude) {
      location = `province=${houseProvinceName};city=${houseCityName};coord=${latLng}`;
    } else {
      location = `province=${houseProvinceName};city=${houseCityName};`;
    }
    return {
      title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keyword
        },
        {
          hid: 'location',
          name: 'location',
          content: location
        },
      ],
      script: [
        {
          innerHTML: ldJson,
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  computed: {
    getHotProject(): any {
      const that = this;
      const store = that.$store;
      const hotProject: [] = store.state.app.hotProject;
      return hotProject.slice(0, 4);
    }
  },
  watch:{
    text() {
      this.number = this.text.length
      if (this.number > 100) {
        this.number = 100
        this.text = this.text.substring(0, 100)
      }
    }
  },
  methods: {
    scrollTo() {
      if (this.accessToken && this.tokenType) {
        const anchor:any = this.$el.querySelector('#textArea')
        anchor.scrollIntoView({ behavior: 'smooth' })
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    },
    async addAnswer() {
      if (this.accessToken && this.tokenType) {
        try {
          this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          const param = {
            data: {
              content: this.text,
              author: this.currId,
              questionId: this.id

            }
          }
          const result = await this.$axios.$post(AnswerApi.Add, param)
          if (result.code === 200) {
            message.success({content: '评论成功', duration: 3})
            this.$router.go(0)
          }
        } catch (error) {
          
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
        
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    },
    async agreeAnswer(id: string) {
      if (this.accessToken && this.tokenType) {
        if (this.agree.includes(id)) {
          return
        }
        try {
          this.$axios.setHeader('Authorization', this.tokenType + ' ' + this.accessToken)
          const param = {
            data: {
              id,
            }
          }
          const result = await this.$axios.$post(AnswerApi.Agree, param)
          if (result.code === 200) {
            this.agree.push(id)
          }
        } catch (error) {
          
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
    },
    itemRender (page: any, type: any, originalElement: any) {
      const path = `/house/discuss/${this.id}/p${page}`;
      if (originalElement.data) {
        Object.assign(originalElement.data, {
          attrs: {
            href: path
          }
        });
      } else {
        originalElement.data = {
          attrs: {
            href: path
          }
        }
      }

      if (type === 'prev' || type === 'next') {
        if (page === 0 || page === this.pageParams.pageNum) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }

      if (type === 'page') {
        if (page === this.pageParams.pageNum) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }

      const callback = function (e:any) {
        e.preventDefault();
      };
      if (originalElement.on) {
        Object.assign(originalElement.on, {click: callback});
      } else {
        originalElement.on = {click: callback};
      }
      
      return originalElement;
    }
  }
})
</script>