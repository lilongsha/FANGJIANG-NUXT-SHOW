<template>
  <div class="mx-auto sm:w-screen sm:px-2 lg:container">
    <div class="w-full sm:h-10 lg:h-32"></div>
    <div class="sm:text-xl lg:text-4xl">{{ question.content }}</div>
    <!-- 左侧推荐楼盘 -->
    <div class="sticky flex flex-col float-right w-1/3 sm:hidden top-28">
      <div class="w-full mb-2 text-lg font-bold border-b border-fjBlue-100">推荐楼盘</div>
      <div v-for="item in getHotProject" :key="item.id" class="flex flex-row w-full mb-4">
        <!-- 图片 -->
        <div class="w-1/3 mr-2 h-28">
          <img v-if="item.firstImg.address" :src="item.firstImg.address" :alt="item.name" width="100%" height="100%" class="object-cover w-full h-full">
        </div>
        <div class="w-2/3 h-28">
          <div class="flex flex-row items-center w-full">
            <span class="text-lg font-bold text-black py-0.5"><a target="_blank" :href="`/house/${item.id}.html`">{{ item.name }}</a></span>
            <HouseStateLabel :state="item.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm'" />
            <HouseTypeLabel :sort="item.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></HouseTypeLabel>
          </div>
          <div class="flex flex-row items-center">
            <svg
              class="w-4 h-4 text-gray-400 icon"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2536"
              width="128"
              height="128">
              <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                p-id="2537"
                data-spm-anchor-id="a313x.7781069.0.i2"
                class="selected"></path>
            </svg>
            <span v-if="item.address" class="overflow-hidden text-gray-400" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" :title="item.address">{{ item.address }}</span>
          </div>
          <div class="flex flex-row items-center">
            <svg
              class="w-4 h-4 text-gray-400 icon"
              fill="currentColor"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2536"
              width="128"
              height="128">
              <path d="M512 128a307.2 307.2 0 0 1 307.2 307.2c0 122.24-57.6 201.152-126.976 271.36l-21.12 20.8-46.336 43.776C583.488 809.984 543.04 849.472 512 896c-26.624-39.872-60.16-74.624-95.104-108.16l-53.248-50.24-21.376-20.608C268.288 644.16 204.8 563.52 204.8 435.2A307.2 307.2 0 0 1 512 128z m0 64a243.2 243.2 0 0 0-243.2 243.2c0 96.896 34.88 155.904 135.36 252.544l53.248 50.304 25.6 24.96c7.936 7.936 15.36 15.488 22.208 22.784l6.784 7.296 6.784-7.296c10.368-11.008 21.76-22.528 34.56-34.944l27.584-26.432 24.768-23.232 27.392-26.368C723.456 585.664 755.2 527.68 755.2 435.2A243.2 243.2 0 0 0 512 192z m0 128a128 128 0 1 1 0 256 128 128 0 0 1 0-256z m0 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
                p-id="2537"
                data-spm-anchor-id="a313x.7781069.0.i2"
                class="selected"></path>
            </svg>
            <span class="overflow-hidden text-gray-400" :title="item.rooms">{{ item.rooms }}</span>
            <span class="ml-2 overflow-hidden text-gray-400" :title="item.roomAreas">{{ item.roomAreas }}</span>
          </div>
          <div class="flex flex-row items-end justify-between px-2 h-9">
            <div v-if="item.labels" class="flex flex-row items-end space-x-2">
              <span v-for="(label, index) in (item.labels.split(','))" :key="index" class="px-1 text-xs text-blue-600 align-text-bottom bg-blue-300 rounded-sm" :title="label">{{ label }}</span>
            </div>
            <div>
              <div>
                <span class="text-lg text-fjRed-100">{{ item.price }}</span>
                <span class="text-xs text-gray-400">元/㎡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 lg:pr-4 sm:w-full lg:w-2/3">
      <div v-if="question.answerEntities && question.answerEntities.length > 0">
        <div v-for="(answer, index) in question.answerEntities" :key="index" class="flex flex-row w-full mb-2 transition-all">
          <div class="overflow-hidden sm:w-full lg:w-3/4">
            <span>{{ answer.content }}</span>
          </div>
          <div class="flex flex-row items-center justify-end w-1/4">
            <svg t="1632970194001" class="w-3 h-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3415" width="128" height="128"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="3416"></path></svg>
            <span class="sm:mr-1 lg:mr-6">{{ answer.likeNum }}</span>
            <span>{{ answer.createTime.split('T')[0] }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 其它资讯 -->
    <div class="w-2/3 mt-2 pb-[6px] border-b border-fjBlue-100 pr-2">
      <span class="border-b-8 border-fjBlue-100">热门问答</span>
    </div>
    <div class="flex flex-row sm:w-full lg:w-2/3 sm:mt-2 lg:mt-4">
      <div v-for="item in questions" :key="item.id" class="mr-10 font-medium"><a target="_blank" :href="`/house/discuss/${item.id}.html`">{{ item.content }}</a></div>
    </div>
    <reomend-house />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as QuestionApi } from '~/api/model/discuss';
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';
import ReomendHouse from '~/components/house/RecomendHouse.vue'
import { getProject } from '~/api/model/houseModel';

export default Vue.extend({
  name: 'DiscussDetail',
  components: {
    ReomendHouse,
  },
  async asyncData({ $axios, route, store, req, redirect }) {
    

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
        await getQuestions(question.projectId);
        await getProjectData(question.projectId);
        const breadcrumb: Breadcrumb[] = [];
        breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
        breadcrumb.push({ title: '问答', href: '/info/list', icon: 'list' })
        breadcrumb.push({ title: question.content, href: '' })
        store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
      }
    }

    let questions: any[] = [];
    const getQuestions = async (projectId: string) => {
      if (!projectId) {
        return;
      }
      const param = {
        data: {
          projectId,
        }
      }
      const result = await $axios.$post(QuestionApi.GetQuestions, param);
      if (result.code === 200) {
        const { content } = getPageResult(result);
        questions = content;
        const breadcrumb: Breadcrumb[] = [];
        breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
        breadcrumb.push({ title: '问答', href: '/info/list', icon: 'list' })
        breadcrumb.push({ title: question.content, href: '' })
        store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)
      }
    }

    let project: any;
    const getProjectData = async (id: string) => {
      const resultProject = await getProject($axios, id, req, route, redirect)
      if (resultProject.code === 200) {
        project = getDataResult(resultProject);
      }
    }

    await Promise.all([
      getQuestion()
    ])
    

    return {
      id,
      question,
      questions,
      project,
    }
  },
  data() {
    const id: string = '';
    const question: any = {};
    let project:any;
    return {
      id,
      question,
      project,
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
})
</script>