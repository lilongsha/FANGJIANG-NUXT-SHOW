<template>
  <div class="">
    <div class="w-full h-20"></div>
    <!-- house content -->
    <div class="w-full pb-7 bg-[#f6f9fe]">
      <div class="container mx-auto">
        <!-- name and title -->
        <div class="w-full pt-10">
          <!-- name and saleState -->
          <div class="flex flex-row items-end w-full">
            <span class="text-[#333333] text-[34px] font-medium">{{ house.name }}</span>
            <span v-if="house.saleState === '1'" class="px-1 my-auto text-sm font-normal text-white rounded-sm ml-7 bg-fjYellow-100">在售</span>
            <span v-if="house.saleState === '2'" class="px-1 my-auto font-normal text-white rounded-sm ml-7 bg-fjBlue-100">待售</span>
            <span v-if="house.saleState === '3'" class="px-1 my-auto font-normal text-white rounded-sm ml-7 bg-fjRed-100">售罄</span>
          </div>
          <span class="mt-5 text-[#999999] text-[18px]">{{ house.aliasName }}</span>
        </div>
        <!-- Carousel and baseInfo -->
        <div class="flex flex-row w-full mt-8 h-[547px]">
          <!-- Carousel w-1280-567 -->
          <div class="h-full w-[713px] flex flex-col">
            <!-- carousel img -->
            <div class="w-full h-[450px] bg-fjRed-100">

            </div>
            <!-- carousel sort -->
            <div class="w-full h-20 mt-4 bg-fjYellow-100"></div>
          </div>
          <!-- BaseInfo w-567px -->
          <div class="h-full w-[555px] ml-3">
            <!-- price -->
            <div class="px-6 w-full h-[155px] flex flex-col bg-fjBlue-100 text-white">
              <!-- lookTimes -->
              <div class="w-full mt-2 text-right">
                {{ house.lookTime }}
              </div>
              <!-- price and totalPrice -->
              <div class="flex flex-row justify-between w-full">
                <div>
                  <span class="text-sm">参数单价：</span>
                  <span class="text-[22px]">{{ house.price }}</span>
                  <span class="text-sm">元/㎡</span>
                </div>
                <div>
                  <span class="text-[22px]">{{ house.lowTotalPrice }}-{{ house.highTotalPrice }}</span>
                  <span class="text-sm">（万/套）</span>
                </div>
              </div>
              <!-- 说明 收藏 -->
              <div class="w-full">价格说明</div>
            </div>
            <div class="px-6 w-full h-[392px] text-[#666666] text-base">
              <!-- address -->
              <div class="w-full pt-4">项目地址：{{ house.address }}</div>
              <!-- house -->
              <div class="w-full pt-4">主力户型：</div>
              <!-- 最新开盘 -->
              <div v-if="house.openTime" class="w-full py-4">最新开盘：{{ house.openTime.split('T')[0] }}</div>
              <div v-else class="w-full py-4">最新开盘：暂未开盘</div>
              <!-- 查看更多楼盘详情 -->
              <a class="w-full border-b-[1px] border-fjBlue-100">
                查看更多楼盘详情
              </a>
              <div class="w-full mt-14 h-0.5 bg-[#DDDDDD]"></div>
              <!-- phone -->
              <div class="w-full mt-6 text-xl text-black">400 960 9880 转 {{ house.number }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Api as HouseApi } from '~/api/model/houseModel';
import { getListResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'HouseInfo',
  components: {
  },
  async asyncData ({ $axios, params }) {
    let id = params.id;
    if (id.endsWith('.html')) {
      id = id.split('.')[0];
    }
    const param: any = {
      data: {
        id,
      }
    }
    const result = await $axios.$post(HouseApi.GetProject, param)
    let house: any;
    if (result.code === 200) {
      house = getListResult(result);
    }
    return { id, house }
  },
  data () {
    const id: string = '';
    const house: any = {};
    return {
      id,
      house,
    }
  },
  head() {
    const title: string = `${this.house.name} - 房匠`;
    return {
      title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ],
      script: [
        {
          innerHTML: '{"@context":"https://zhanzhang.baidu.com/contexts/cambrian.jsonld","@id":"http://sjz.jiwu.com/loupan/1290152.html","appid":"1575153492583878","title":"石家庄润江云玺房价价格,新房售楼处电话,楼盘怎么样 - 吉屋网","images":["http://img1-build.jiwu.com/album/manual/2020/11/07/145807820623.jpg","http://img4-build.jiwu.com/album/manual/2020/11/07/151240046364.jpg/750x560", "http://img6-build.jiwu.com/album/manual/2020/11/07/151300673270.jpg/750x560"],"description": "石家庄裕华众美商圈润江云玺售楼处电话号码:4007508888转64846,吉屋网为您提供该房产楼盘信息、房价走势等，全面了解润江云玺买房怎么样，是您选购新楼盘一手房的理想网站。","upDate":"2021-09-11T10:51:22"}',
          type: 'application/ld+json',
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  methods: {

  }
})
</script>
