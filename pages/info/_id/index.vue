<template>
  <div class="container mx-auto">
    <div class="w-full h-32"></div>
    <div class="text-4xl">{{ news.title }}</div>
    <div class="w-3/4" v-html="news.content"></div>
    <div class="w-3/4">
      <house-content v-for="item in projects" :key="item.id" :name="item.name" :image="item.firstImg.address" :house-id="item.id" :price="item.price + ''" :area="item.sysAreaByAreaId.name" :address="item.address" :layout="item.layoutStr" :build-area="item.area" :labels="item.labels.split(',')" :number="item.number" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as NewsApi } from '~/api/model/newsModel';
import { getHouseType } from '~/api/model/houseModel';
import { Breadcrumb } from '~/types/app';
import { getDataResult } from '~/utils/response/util';
import HouseContent from '~/components/house/Content.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    HouseContent,
  },
  async asyncData({ $axios, route, store }) {
    const params: any = route.params;
    let id: string = params.id;
    if (id.endsWith('.html')) {
      id = id.replace('.html', '');
    }
    
    const param = {
      data: {
        id,
      }
    }
    
    let news: any = {};
    let projects: any[] = [];
    const result = await $axios.$post(NewsApi.GetNews, param);
    if (result.code === 200) {
      news = getDataResult(result);
      
      const breadcrumb: Breadcrumb[] = [];
      breadcrumb.push({ title: '房匠', href: '/', icon: 'home' })
      breadcrumb.push({ title: '资讯', href: '/info/list', icon: 'list' })
      breadcrumb.push({ title: news.title, href: '' })
      store.commit('app/BREADCRUMB_ADD_ALL', breadcrumb)

      projects = news.projects;
      projects.forEach((item: any) => {
        item.layoutStr = getHouseType(item);
      });
    }

    return {
      id,
      news,
      projects
    }
  },
  data() {
    const id: string = '';
    const news: any = {};
    const projects: any[] = [];
    return {
      id,
      news,
      projects
    }
  },
  head() {
    const newsCityName: string = this.news.city.name;
    const newsProvinceName: string = this.news.province.name;
    const latLng: string = this.news.latitude + '' + this.news.longitude;
    const title: string = `${this.news.title} - 房匠`;
    const description: string = `${this.news.description}`;
    const curUrl: string = 'https://www.fangjiang.com' + this.$route.path;
    const imgUrl: string = this.news.img;
    const pubTime: string = this.news.updateTime;
    const upTime: string = this.news.updateTime || this.news.createTime;
    const keyword: string = this.news.keywords;
    const ldJson: string = `{"@context":"https://ziyuan.baidu.com/contexts/cambrian.jsonld","@id":"${curUrl}","appid":"1575153492583878","title":"${title}","images":["${imgUrl}","${imgUrl}", "${imgUrl}"],"description": "${description}","pubDate":"${pubTime}","upDate":"${upTime}"}`;
    const location: string = `province=${newsProvinceName};city=${newsCityName};coord=${latLng}`;
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
  }
})
</script>