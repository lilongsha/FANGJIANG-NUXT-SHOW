<template>
  <div class="sm:w-screen sm:px-2">
    <div id="list" class="w-full sm:h-10 lg:h-24"></div>
    <div class="flex flex-row mx-auto sm:w-full lg:container">
      <div class="sm:w-full lg:w-3/4 lg:pr-4 sm:mt-2 lg:mt-8">
        <!-- h-36px -->
        <div class="flex flex-row items-center justify-between w-full h-[36px] border-b-[1px] border-fjBlue-100">
          <!-- 标题内容 -->
          <div class="sm:text-base lg:text-xl font-bold border-b-[6px] border-fjBlue-100">{{ project.name }}问答</div>
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
                <div class="w-3/4 overflow-hidden">
                  <span>{{ answer.content }}</span>
                </div>
                <div class="flex flex-row items-center justify-end w-1/4">
                  <svg t="1632970194001" class="w-3 h-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3415" width="128" height="128"><path d="M598.354747 67.542626c-48.148687 0-90.130101 32.905051-98.960808 79.437576 0 0-14.312727 72.882424-21.798787 99.090101-12.308687 43.196768-55.363232 90.944646-86.522829 106.188283-23.531313 11.636364-110.99798 11.765657-116.350707 11.765656H155.707475c-32.762828 0-59.384242 26.479192-59.384243 59.384243v475.022222c0 32.762828 26.479192 59.384242 59.384243 59.384242h548.033939c88.126061 0 163.025455-64.452525 176.135758-151.647676l45.873131-305.713132c10.834747-71.809293-44.8-136.274747-117.423838-136.274747H673.254141s20.066263-66.469495 30.228687-178.669899c5.081212-56.837172-35.167677-110.99798-94.280404-117.152323-3.620202-0.54303-7.227475-0.814545-10.847677-0.814546zM333.705051 898.288485V421.533737c38.917172-2.534141 66.999596-8.016162 83.574949-16.316767 43.726869-21.669495 99.633131-81.040808 117.281616-143.088485 7.899798-27.681616 21.39798-96.155152 23.001212-104.184243 3.47798-17.92 20.596364-31.159596 40.649697-31.159596 1.603232 0 3.206465 0.129293 4.822627 0.271516 28.211717 2.947879 43.326061 29.698586 41.32202 52.686868-9.360808 103.912727-27.823838 166.503434-28.082425 166.904243l-23.130505 76.489697h215.182223c17.519192 0 33.564444 7.356768 45.071515 20.596363 11.507071 13.239596 16.316768 30.228687 13.640404 47.618586L821.294545 797.052121c-8.830707 58.569697-58.181818 101.094141-117.423838 101.094142h-370.165656v0.142222z m-177.997576 0v-475.022222h118.626262v475.022222H155.707475z m0 0" p-id="3416"></path></svg>
                  <span class="mr-6">{{ answer.likeNum }}</span>
                  <span>{{ answer.createTime.split('T')[0] }}</span>
                </div>
              </div>
              <div v-if="item.answerEntities.length > 2 && showMoreId === ''" class="w-full text-center" @click="showMore(item.id)">展开更多({{ item.answerEntities.length }})</div>
              <div v-else class="w-full text-center" @click="showMore('')">合并更多({{ item.answerEntities.length }})</div>
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
          :simple="isMobile"
          :total="pageParam.total"
          :show-total="total => `共计 ${total} 条`"
          :page-size="10"
          :current="pageParam.pageNum"
          @change="pageChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getQuestions } from '~/api/model/questionModel'
import { getProject } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'DiscussList',
  components: {
  },
  async asyncData({ $axios, params, store }) {
    let id: string = params.id;
    if (id.endsWith('.html')) {
      id = id.replace('.html', '');
    }
    const pageParam = {
      pageSize: 10,
      pageNum: 1,
      total: 0
    }

    const [resultProject, resultQuestions] = await  Promise.all([
      getProject($axios, id),
      getQuestions($axios, id, pageParam.pageSize, pageParam.pageNum - 1)
    ])

    let project: any;
    if (resultProject.code === 200) {
      project = getDataResult(resultProject);
    }
    



    const { content, page } = getPageResult(resultQuestions);
    pageParam.total = page.totalElements;
    pageParam.pageNum = page.number + 1;
    let questions: any[] = [];
    questions = content;

    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
    breadcrumb.push({ title: project.name, href: `/house/${project.id}` })
    breadcrumb.push({ title: '问答', href: '', icon: 'list' })
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

    return {
      pageParam,
      id,
      questions,
      project
    }
  },
  data () {
    const pageParam = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };

    const questions: any[] = [];
    const showMoreId: string = '';
    const id: string = '';
    const isMobile: boolean = true;
    return {
      id,
      pageParam,
      questions,
      showMoreId,
      isMobile,
    }
  },
  beforeMount() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        // 跳转移动端页面
        this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  },
  methods: {
    showMore(id: string) {
      this.showMoreId = id;
    },
    async getList() {
      const result = await getQuestions(this.$axios, this.id, this.pageParam.pageSize, this.pageParam.pageNum - 1);
      if (result.code === 200) {
        const { content, page } = getPageResult(result);
        this.pageParam.total = page.totalElements;
        this.pageParam.pageNum = page.number + 1;
        this.questions = content;
      }
    },
    async pageChange(page: number) {
      this.pageParam.pageNum = page;
      await this.getList();
      const anchor:any = this.$el.querySelector('#list')
      anchor.scrollIntoView({ behavior: 'smooth' })
    },
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
</style>