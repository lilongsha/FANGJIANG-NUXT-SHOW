<template>
   <div ref="menu" :class="className">
    <div v-for="(item, index) in houseMenu" v-show="item.value != current" :key="index"  class="menu-sub sm:w-1/5 lg:w-32 h-full sm:leading-10 lg:leading-[64px] text-center align-middle sm:text-sm lg:text-xl transition-all">
      <a v-if="index === 0" :href="`/${item.value}/${house.id}.html`" class="hover:text-white">{{ item.title }}</a>
      <a v-else-if="index === 1" :href="`/house/${item.value}/${house.id}.html`" class="hover:text-white">{{ item.title }}</a>
      <a v-else-if="index === 4" :href="`/${item.value}/project/${house.id}/p1`" class="hover:text-white">{{ item.title }}</a>
      <a v-else-if="index === 5" :href="`/${item.value}/project/${house.id}`" class="hover:text-white">{{ item.title }}</a>
      <a v-else-if="index === 6" :href="`/house/${item.value}/${house.id}`" class="hover:text-white">{{ item.title }}</a>
      <a v-else :href="`/house/${item.value}/${house.id}/p1`" class="hover:text-white">{{ item.title }}</a>
    </div>
    <a class="sm:hidden" :href="`tel:${phoneNum},${house.number}%23`">
      <div class="sm:hidden absolute right-0 h-full text-lg text-white font-bold leading-[64px] align-middle pr-4 flex flex-row items-center">
        <img src="~/assets/img/index/phone.png" alt="" class="w-[24px] h-[28px] mr-2 sm:hidden">
        {{ phoneNum }} 转 {{ house.number }}
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { houseMenu, phoneNum } from '~/api/model/houseModel';
export default Vue.extend({
  name: 'Bar',
  props: {
    className: {
      type: String,
      required: false,
      default: '',
    },
    house: {
      type: Object,
      required: true,
    },
    current: {
      type: String,
      required: false,
      default: '',
    }
  },
  data() {
    return { houseMenu, phoneNum }
  }

})
</script>
<style scoped>
.menu .menu-sub {
  @apply hover:bg-[#017af0] text-white;
}
</style>