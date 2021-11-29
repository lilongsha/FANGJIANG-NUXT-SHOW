<template>
  <div>
    <span v-if="props.sort === '1'" :class="props.className">住宅</span>
    <span v-if="props.sort === '2'" :class="props.className">公寓</span>
    <span v-if="props.sort === '3'" :class="props.className">商铺</span>
    <span v-if="props.sort === '4'" :class="props.className">写字楼</span>
    <span v-if="props.sort === '5'" :class="props.className">仓库</span>
    <span v-if="props.sort === '6'" :class="props.className">别墅</span>
    <span v-if="props.sort === '7'" :class="props.className">商业类</span>
  </div>
</template>
<script>

export default {
  name: 'TypeLabel',
  props: {
    sort: {
      type: String,
      require: true,
      default: ''
    },
    className: {
      type: String,
      require: true,
      default: ''
    },
  },
  data () {
    return {};
  },
  mounted () {
  },
  methods: {
  }
}
</script>