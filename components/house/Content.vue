<template>
  <div class="w-4/5 h-48 p-2 mx-auto bg-white">
    <!-- content -->
    <div class="flex flex-row w-full h-40">
      <!-- img -->
      <div class="w-1/4 h-full">
        <img :src="image" :alt="name" class="object-cover w-full h-full">
      </div>
      <!-- info -->
      <div class="w-1/2 h-full pl-4">
        <!-- title -->
        <div>
          <a :href="`/house/${houseId}.html`" target="_blank" class="w-full text-lg text-black">{{ name }}</a>
        </div>
        <div class="mt-2">
          <span>{{ area }} | {{ address }}</span>
        </div>
        <div class="mt-2">
          <span>{{ layout }} | {{ buildArea }}</span>
        </div>
        <div class="w-full mt-2">
          <span v-for="(item, index) in labels" :key="index" class="text-blue-600 bg-blue-300"></span>
        </div>
        <div class="w-full">
          <a :href="`tel:${phoneNum},${number}%23`">
            <span>咨询热线：</span>
            <span class="text-lg text-fjBlue-100">{{ phoneNum }} 转 {{ number }}</span>
          </a>
        </div>
      </div>
      <div v-if="price !== 'null'" class="w-1/4">
        <span class="text-xl font-bold text-fjRed-100">{{ price }}</span>
        <span>元/㎡</span>
      </div>
      <div v-else><span class="text-xl font-bold text-fjRed-100">暂无数据</span></div>
    </div>
    <!-- 咨询电话 -->
  </div>
</template>

<script>
import Vue from 'vue'
import { phoneNum } from '~/api/model/houseModel'

export default Vue.extend({
  name: 'HouseContent',
  props: {
    name: {
      type: String,
      require: true,
      default: ''
    },
    image: {
      type: String,
      require: true,
      default: ''
    },
    houseId: {
      type: String,
      require: true,
      default: ''
    },
    price: {
      type: String,
      require: true,
      default: ''
    },
    area: {
      type: String,
      require: true,
      default: ''
    },
    address: {
      type: String,
      require: true,
      default: ''
    },
    layout: {
      type: String,
      require: true,
      default: ''
    },
    buildArea: {
      type: String,
      require: true,
      default: ''
    },
    labels: {
      type: Array,
      require: true,
      default: () => []
    },
    number: {
      type: String,
      require: true,
      default: '',
    }
  },
  data () {
    return {phoneNum};
  },
  mounted () {
    
  },
  methods: {
    
  }
});
</script>