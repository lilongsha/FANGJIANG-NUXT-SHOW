<template>
  <div>
    <span v-if="props.type === '1'" :class="props.className">住宅</span>
    <span v-if="props.type === '2'" :class="props.className">公寓</span>
    <span v-if="props.type === '3'" :class="props.className">商铺</span>
    <span v-if="props.type === '4'" :class="props.className">写字楼</span>
    <span v-if="props.type === '5'" :class="props.className">仓库</span>
    <span v-if="props.type === '6'" :class="props.className">别墅</span>
    <span v-if="props.type === '7'" :class="props.className">商业类</span>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TypeLabel',
  props: {
    type: {
      type: String,
      require: true,
      default: ''
    },
    className: {
      type: String,
      require: true,
      default: ''
    },
  }
})
</script>