<template>
  <div class="w-screen h-screen">
    <!-- 96 -->
    <!-- <div class="w-full h-40 bg-white"></div> -->
    <!-- 64 -->
    <div class="absolute z-50 flex flex-row w-full h-14 bg-white top-20 border border-[#999]" >
      <!-- 区域 -->
      <div class="w-36">
        <div class="h-14 leading-[4rem] text-center align-middle flex flex-row justify-center items-center border-r border-[#999]"  @click="checkArea">
          <div v-if="select.areaId === ''" class="text-[#333333] text-[18px]">请选择</div>
          <div v-else class="text-fjBlue-100 text-[18px]">{{ areas[select.areaIndex].name }}</div>
          <svg
            class="w-5 h-5 text-[#333333]"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1821"
            width="128"
            height="128"
          >
            <path
              d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
              p-id="1822"
              data-spm-anchor-id="a313x.7781069.0.i0"
              class="selected"
            ></path>
          </svg>
        </div>
        <div v-show="showArea === 1" class="absolute z-50 flex flex-row w-full bg-white top-[63px] border border-[#999]" >
          <div v-show="showArea === 1" class="flex flex-row flex-wrap w-screen px-4 py-1 space-y-1 bg-white relative top-[-1px] transition-all" >
            <div v-for="item in areas" :key="item.id" class="w-16 mr-10 overflow-hidden text-left first:mt-1" :class="select.areaId === item.id ? 'text-fjBlue-100' : ''" @click="checkAreaId(item.id)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 类型 -->
      <div class="w-36">
        <div class="h-14 leading-[4rem] text-center align-middle flex flex-row justify-center items-center border-r border-[#999]"  @click="checkType">
          <div v-if="select.typeIndex === -1 || select.typeIndex === 0" class="text-[#333333] text-[18px]">请选择</div>
          <div v-else class="text-fjBlue-100 text-[18px]">{{ projectType[select.typeIndex].title }}</div>
          <svg
            class="w-5 h-5 text-[#333333]"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1821"
            width="128"
            height="128"
          >
            <path
              d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
              p-id="1822"
              data-spm-anchor-id="a313x.7781069.0.i0"
              class="selected"
            ></path>
          </svg>
        </div>
        <div v-show="showType === 1" class="absolute z-50 flex flex-row w-full bg-white top-[63px] left-0 border border-[#999]" >
          <div class="flex flex-row flex-wrap w-full px-4 py-1 space-y-1 bg-white relative top-[-1px] transition-all" >
            <div v-for="(item, index) in projectType" :key="index" class="w-16 mr-10 overflow-hidden text-center first:mt-1" :class="select.typeIndex === index ? 'text-fjBlue-100' : ''" @click="checkTypeId(index)">{{item.title}}</div>
          </div>
        </div>
      </div>
      <!-- 价格 -->
      <div class="w-36">
        <div class="h-14 leading-[4rem] text-center align-middle flex flex-row justify-center items-center border-r border-[#999]"  @click="checkType">
          <div v-if="select.typeIndex === -1 || select.typeIndex === 0" class="text-[#333333] text-[18px]">请选择</div>
          <div v-else class="text-fjBlue-100 text-[18px]">{{ projectType[select.typeIndex].title }}</div>
          <svg
            class="w-5 h-5 text-[#333333]"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1821"
            width="128"
            height="128"
          >
            <path
              d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
              p-id="1822"
              data-spm-anchor-id="a313x.7781069.0.i0"
              class="selected"
            ></path>
          </svg>
        </div>
        <div v-show="showType === 1" class="absolute z-50 flex flex-row w-full bg-white top-[63px] left-0 border border-[#999]" >
          <div class="flex flex-row flex-wrap w-full px-4 py-1 space-y-1 bg-white relative top-[-1px] transition-all" >
            <div v-for="(item, index) in projectType" :key="index" class="w-16 mr-10 overflow-hidden text-center first:mt-1" :class="select.typeIndex === index ? 'text-fjBlue-100' : ''" @click="checkTypeId(index)">{{item.title}}</div>
          </div>
        </div>
      </div>
      <!-- label -->
      <div></div>
      <!--  -->
      <div></div>
    </div>
    <div id="fj-map" class="absolute left-0 w-full top-20" style="height:calc(100% - 80px)"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { AreaByCondition, AreaModel, Api as AreaApi } from '~/api/model/areaModel';
import { projectType } from '~/api/model/houseModel';
import { BaseListResult } from '~/api/model/baseModel';
import MapLoader from '~/plugins/loadMap'
import { getDataResult } from '~/utils/response/util';

export default Vue.extend({
  name: 'Map',
  async asyncData({ $axios, store }) {
  // 区域参数
    const areaData: AreaByCondition = {
      id: store.state.app.cityId,
      state: '1',
    };
    const areaParam: any = {
      data: areaData
    };
    const areaResult:BaseListResult<AreaModel> = await $axios.$post(AreaApi.GetAllAreas, areaParam)
    let areas: any[] = [];
    if (areaResult.code === 200) {
      areas = getDataResult(areaResult);
    }

    return {
      areas,
    }
  },
  data () {
    const map: any = undefined;
    const showArea: number = 0;
    const areaId: string = '';
    const areaIndex: number = -1;
    const areas: [] = [];
    const showType: number = 0;
    const typeIndex: number = -1;
    return {
      map,
      areas,
      showArea,
      projectType,
      showType,
      select: {
        areaId,
        areaIndex,
        typeIndex,
      }
    }
  },
  mounted() {
    MapLoader().then(AMap => {
      this.map = new AMap.Map("fj-map", {
        zoom: 11,
      })
      const that = this;
      AMap.plugin(['AMap.Scale', 'AMap.HawkEye', 'AMap.ToolBar', 'AMap.ControlBar'], function () {// 异步同时加载多个插件
        const scale = new AMap.Scale();
        that.map.addControl(scale);
        const toolbar = new AMap.ToolBar();
        that.map.addControl(toolbar);
        const controlBar = new AMap.ControlBar({
          position: {
            top: '160px',
            right: '10px',
          }
        });
        that.map.addControl(controlBar);
      });
    })
  },
  methods: {
    checkArea() {
      this.showArea = 1 - this.showArea;
      this.showType = 0;
    },
    checkAreaId(id: string) {
      if (this.select.areaId === id) {
        this.select.areaId = '';
        this.select.areaIndex = -1;
      } else {
        this.select.areaId = id;
        for(let i = 0; i < this.areas.length; i++) {
          if ((this.areas[i] as any).id === id) {
            this.select.areaIndex = i;
          }
        }
      }
    },
    checkType() {
      this.showType = 1 - this.showType;
      this.showArea = 0;
    },
    checkTypeId(id: number) {
      if (this.select.typeIndex === id) {
        this.select.typeIndex = -1;
      } else {
        this.select.typeIndex = id;
      }
    }
  }
})
</script>