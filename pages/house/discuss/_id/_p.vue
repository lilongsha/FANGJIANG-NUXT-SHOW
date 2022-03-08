<template>
  <div class="sm:w-screen sm:px-2">
    <div id="list" class="w-full sm:h-10 lg:h-24"></div>
    <div class="mx-auto sm:w-full lg:container">
      <AppTitle :house="project"  :favorite="favorite"/>
      <!-- house menu -->
      <AppBar :current="'discuss'" :house="project" :class-name="'menu sticky z-[20] flex flex-row flex-shrink-0 w-full sm:h-10 lg:h-16 bg-fjBlue-100 sm:mt-0 lg:mt-6 sm:top-[95px] lg:top-[118px] text-white'" />
      <div class="sm:w-full lg:w-3/4 lg:pr-4 sm:mt-2 lg:mt-8  min-h-[500px]">
        <!-- h-36px -->
        <div class="flex flex-row items-center justify-between w-full h-[36px] border-b-[1px] border-fjBlue-100">
          <!-- 标题内容 -->
          <div class="sm:text-base lg:text-xl font-bold border-b-[6px] border-fjBlue-100">{{ project.name }}问答</div>
          <button class="lg:py-2 sm:py-1 lg:px-6 sm:px-4 text-white bg-fjBlue-100 rounded-[4px] lg:text-[16px] sm:text-[14px] lg:mb-4 sm:mb-1" @click="clickAdd">我要提问</button>
        </div>
        <!-- content -->
        <div class="w-full mt-8">
          <div v-for="item in questions" :key="item.id" class="w-full mb-4 border-b border-gray-300 border-dashed">
            <!-- question Title -->
            <div class="w-full mb-4">
              <a :href="`/house/discuss/${item.id}.html`" target="_blank">
                <span class="text-lg text-black hover:border-b border-fjBlue-100">{{ item.content }}</span>
              </a>
            </div>
            <!-- question Content -->
            <div v-if="item.answerEntities && item.answerEntities.length > 0">
              <div v-for="(answer, index) in item.answerEntities" v-show="index < 2 || item.id === showMoreId" :key="index" class="flex flex-row w-full mb-2 transition-all">
                <div class="overflow-hidden sm:w-2/3 lg:w-3/4">
                  <span>{{ answer.content }}</span>
                </div>
                <div class="flex flex-row items-center justify-end sm:w-1/3 lg:w-1/4">
                  <svg t="1632970194001" class="w-3 h-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3415" width="128" height="128"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="3416"></path></svg>
                  <span class="sm:mr-1 lg:mr-6">{{ answer.likeNum }}</span>
                  <span>{{ answer.createTime.split('T')[0] }}</span>
                </div>
              </div>
              <div v-if="item.answerEntities.length > 2">
                <div v-if="showMoreId !== item.id" class="w-full text-center" @click="showMore(item.id)">展开更多({{ item.answerEntities.length }})</div>
                <div v-else class="w-full text-center" @click="showMore('')">合并更多({{ item.answerEntities.length }})</div>
              </div>
            </div>
            <!-- question Time -->
            <div v-if="item.updateBy" class="text-sm text-gray-400">{{ item.updateTime.split('T')[0] }}</div>
            <div v-else class="text-sm text-gray-400">{{ item.createTime.split('T')[0] }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="sm:w-full lg:container">
      <div class="text-right sm:w-full lg:w-3/4">
        <a-pagination
          v-if="isMobile"
          size="small"
          :total="pageParam.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParam.pageNum"
          :item-render="itemRender"
        />
        <a-pagination
          v-else
          :total="pageParam.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParam.pageNum"
          :item-render="itemRender"
        />
      </div>
    </div>
    <QuestionAddQuestion v-show="isShow" :project-id="project.id" @clickClose="clickClose" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getQuestions } from '~/api/model/questionModel'
import { getProject, houseMenu, phoneNum } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'DiscussList',
  components: {
  },
  async asyncData({ $axios, route, store, req, redirect }) {
    const topFlag: string = 'question';
    const userAgent = req?.headers['user-agent'] || '';
    let pageNum = 1;
    let p = route.params?.p;
    const id = route.params?.id;
    if (p) {
      if (p.endsWith('.html')) {
        p = p.split('.')[0];
      }
    }
    if (p && p.startsWith('p')) {
      pageNum = Number(p.substring(1));
    }
    const pageParam = {
      pageSize: 10,
      pageNum,
      total: 0
    }

    const [resultProject, resultQuestions] = await  Promise.all([
      getProject($axios, id, store, route, redirect),
      getQuestions($axios, id, pageParam.pageSize, pageParam.pageNum - 1)
    ])

    let project: any;
    let favorite;
    if (resultProject.code === 200) {
      favorite = resultProject.data.favorite;
      project = getDataResult(resultProject);
    }

    const { content, page } = getPageResult(resultQuestions);
    pageParam.total = page.totalElements;
    pageParam.pageNum = page.number + 1;
    let questions: any[] = [];
    questions = content;
    let max;
    if (questions) {
      for (let i = 0; i< questions.length; i++) {
        if ((questions[i + 1]?.createTime || '') > (questions[i]?.createTime || '')) {
          max = questions[i + 1];
          questions[i+1] = questions[i]
          questions[i] = max
        }
      }
    }

    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
    breadcrumb.push({ title: project.name, href: `/house/${project.id}` })
    breadcrumb.push({ title: '问答', href: '', icon: 'list' })
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

    let isMobile:any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }

    return {
      pageParam,
      id,
      questions,
      project,
      isMobile,
      phoneNum,
      topFlag,
      favorite
    }
  },
  data () {
    const topFlag: string = 'question';
    const pageParam = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };

    const questions: any[] = [];
    const showMoreId: string = '';
    const id: string = '';
    let isMobile: any;
    let project: any;
    return {
      topFlag,
      houseMenu,
      id,
      pageParam,
      questions,
      showMoreId,
      isMobile,
      project,
      isShow: false,
    }
  },
  head() {
    const houseName: string = this.project.name;
    const houseAreaName: string = this.project.sysAreaByAreaId.name || '';
    const houseCityName: string = this.project.sysCityByCityId.name || '';
    const houseProvinceName: string = this.project.sysProvinceByProvinceId.name;
    const latLng: string = this.project.latitude + '' + this.project.longitude;
    const title: string = `【${houseCityName}${houseAreaName}${houseName}楼盘怎么样】业主论坛 - 房匠网`;
    const description: string = `房匠网为您解答${houseName}怎么样，${houseName}业主论坛拥有大量业主与售楼处互动信息及专家点评。让您全面了解${houseCityName}${houseAreaName}${houseName}好不好？关注房匠网。`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.project.firstImg?.address;
    const sandImgAddress: string = this.project.sandImg?.address;
    const pubTime: string = this.project.createTime.split('.')[0];
    let upTime: string = this.project.updateTime || this.project.createTime;
    upTime = upTime.split('.')[0];
    const keyword: string = `${houseName}怎么样,${houseName}好不好,${houseName}业主论坛`;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1713124212115293","title":"${title}","images":["${firstImgAddress}","${sandImgAddress}", "${sandImgAddress}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
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
  methods: {
    showMore(id: string) {
      this.showMoreId = id;
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
        if (page === 0 || page === this.pageParam.pageNum) {
          Object.assign(originalElement.data, {
            attrs: {
              href: 'javascript:;',
              rel: 'nofollow'
            }
          });
        }
      }

      if (type === 'page') {
        if (page === this.pageParam.pageNum) {
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
    },
    clickAdd() {
      const accessToken = this.$store.state.app.accessToken;
      const tokenType = this.$store.state.app.tokenType
      if (accessToken && tokenType) {
        this.isShow = true;
      } else {
        this.$router.push('/login?redirect=' + this.$route.path)
      }
      
    },
    clickClose() {
      this.isShow = false;
    }
  }
})
</script>

<style scoped>
.ant-pagination >>> .ant-pagination-item-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.menu .menu-sub {
  @apply hover:bg-[#017af0] text-white;
}
.menu .menu-sub-ing {
  @apply bg-[#0033d8] hover:bg-[#0033d8];
}

</style>