<template>
  <div class="sm:w-screen sm:px-2">
    <div id="list" class="w-full sm:h-10 lg:h-24"></div>
    <div class="flex flex-row mx-auto sm:w-full lg:container">
      <div class="sm:w-full lg:w-3/4 lg:pr-4 sm:mt-2 lg:mt-8">
        <!-- h-36px -->
        <div class="flex flex-row items-center justify-between w-full h-[36px] border-b-[1px] border-fjBlue-100">
          <!-- 标题内容 -->
          <div class="sm:text-base lg:text-xl font-bold border-b-[6px] border-fjBlue-100">{{ project.name }}动态</div>
        </div>
        <!-- content -->
        <div class="w-full mt-8">
          <div v-for="item in dynamics" :key="item.id" class="w-full mb-4 border-b border-gray-300 border-dashed">
            <!-- dynamic Title -->
            <div class="w-full mb-4">
              <span class="text-lg text-black hover:border-b border-fjBlue-100">{{ item.title }}</span>
              <span :class="DynamicSort[item.sort].color" class="px-1 py-0.5 ml-4 text-xs text-white">{{ DynamicSort[item.sort].title }}</span>
            </div>
            <!-- dynamic Content -->
            <p class="w-full mb-8 truncate whitespace-pre-wrap first-letter:ml-4">{{ item.description }}</p>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getDynamicNews, sort as DynamicSort } from '~/api/model/dynamicModel'
import { getProject } from '~/api/model/houseModel'
import { Breadcrumb } from '~/types/app';
import { getDataResult, getPageResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'DiscussList',
  components: {
  },
  async asyncData({ $axios, store, req, route }) {
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

    let isMobile: any;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }

    return {
      pageParam,
      id,
      dynamics,
      project,
      isMobile
    }
  },
  data () {
    const pageParam = {
      pageSize: 10,
      pageNum: 0,
      total: 0,
    };

    let project: any;
    const dynamics: any[] = [];
    const id: string = '';
    let isMobile:any;
    return {
      id,
      pageParam,
      dynamics,
      DynamicSort,
      isMobile,
      project,
    }
  },
  head() {
    const houseName: string = this.project.name;
    const houseAreaName: string = this.project.sysAreaByAreaId.name || '';
    const houseCityName: string = this.project.sysCityByCityId.name || '';
    const houseProvinceName: string = this.project.sysProvinceByProvinceId.name;
    const latLng: string = this.project.latitude + '' + this.project.longitude;
    const title: string = `${houseCityName}${houseAreaName}${this.project.name}楼盘最新动态 - 房匠`;
    const description: string = `房匠网为您提供${houseCityName}${houseAreaName}${houseName}楼盘信息,${houseName}最新动态信息,了解更多${houseCityName}${houseAreaName}${this.project.name}详细信息,请关注房匠网.`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const firstImgAddress: string = this.project.firstImg?.address;
    const sandImgAddress: string = this.project.sandImg?.address;
    const pubTime: string = this.project.updateTime;
    const upTime: string = this.project.updateTime || this.project.createTime;
    const keyword: string = `${houseCityName}${houseAreaName}${houseName},${houseName}楼盘信息,${houseName}最新动态`;
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
    itemRender (page: any, _type: any, originalElement: any) {
      const path = `/house/dynamic/${this.id}/p${page}`;
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

<style scoped>
.ant-pagination >>> .ant-pagination-item-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>