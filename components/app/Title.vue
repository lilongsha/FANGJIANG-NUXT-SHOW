<template>
    <div class="w-full lg:pt-10 sm:hidden">
      <!-- name and saleState -->
      <div class="w-full sm:flex sm:flex-col">
        <a :href="`/house/${house.id}.html`" style="color: inherit" class="font-bold sm:text-xl lg:text-3xl">{{ house.name }}</a>
        <span v-if="house.aliasName" class="lg:ml-4">别名：{{ house.aliasName }}</span>
      </div>
      <div class="flex flex-row items-center sm:mt-2 lg:mt-4">
        <HouseStateLabel :state="house.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm'" class=" sm:mr-0.5 lg:mr-1" />
        <HouseTypeLabel :sort="house.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></HouseTypeLabel>
        <span class="sm:ml-2 lg:ml-4"></span>
        <span v-for="(item, index) in house.labels.split(',')" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs sm:mr-0.5 lg:mr-1">{{ item }}</span>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Title',
  props: {
    house: {
      type: Object,
      required: true,
    },
  },
  data() {
    const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
    return { colors }
  }

})
</script>