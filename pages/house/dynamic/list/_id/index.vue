<template>
  <div class="">
    <div id="list" class="w-full h-24"></div>
    <div class="container flex flex-row mx-auto">
      <div class="w-3/4 pr-4 mt-8">
        <!-- h-36px -->
        <div class="flex flex-row items-center justify-between w-full h-[36px] border-b-[1px] border-fjBlue-100">
          <!-- 标题内容 -->
          <div class="text-xl font-bold border-b-[6px] border-fjBlue-100">{{ project.name }}问答</div>
        </div>
        <!-- content -->
        <div class="w-full mt-8">
          <div v-for="item in dynamics" :key="item.id" class="w-full mb-4 border-b border-gray-300 border-dashed">
            <!-- dynamic Title -->
            <div class="w-full mb-4">
              <a :href="`/house/discuss/${item.id}.html`" target="_blank">
                <span class="text-lg text-black hover:border-b border-fjBlue-100">{{ item.title }}</span>
              </a>
            </div>
            <!-- dynamic Content -->
            <div v-if="item.content">
              <span>{{ item.content }}</span>
            </div>
            <!-- question Time -->
            <div v-if="item.updateBy" class="text-sm text-gray-400">{{ item.updateTime.split('T')[0] }}</div>
            <div v-else class="text-sm text-gray-400">{{ item.createTime.split('T')[0] }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- pagination -->
    <div class="container">
      <div class="w-3/4 text-right">
        <a-pagination
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
import { getDynamicNews } from '~/api/model/dynamicModel'
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

    const [resultProject,  resultDynamic] = await  Promise.all([
      getProject($axios, id),
      getDynamicNews($axios, id, pageParam.pageSize, pageParam.pageNum - 1)
    ])

    let project: any;
    if (resultProject.code === 200) {
      project = getDataResult(resultProject);
    }
    
    const { content, page } = getPageResult(resultDynamic);
    pageParam.total = page.totalElements;
    pageParam.pageNum = page.number + 1;
    let dynamics: any[] = [];
    dynamics = content;

    const breadcrumb: Breadcrumb[] = [];
    breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
    breadcrumb.push({ title: project.name, href: `/house/${project.id}` })
    breadcrumb.push({ title: '动态', href: '', icon: 'list' })
    store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

    return {
      pageParam,
      id,
      dynamics,
      project
    }
  },
  data () {
    const pageParam = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };

    const dynamics: any[] = [];
    const id: string = '';
    return {
      id,
      pageParam,
      dynamics,
    }
  },
  methods: {
    async getList() {
      const result = await getDynamicNews(this.$axios, this.id, this.pageParam.pageSize, this.pageParam.pageNum - 1);
      if (result.code === 200) {
        const { content, page } = getPageResult(result);
        this.pageParam.total = page.totalElements;
        this.pageParam.pageNum = page.number + 1;
        this.dynamics = content;
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