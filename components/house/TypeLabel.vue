<template>
  <div>
    <span v-if="sort === '1'" :class="className">住宅</span>
    <span v-if="sort === '2'" :class="className">公寓</span>
    <span v-if="sort === '3'" :class="className">商铺</span>
    <span v-if="sort === '4'" :class="className">写字楼</span>
    <span v-if="sort === '5'" :class="className">仓库</span>
    <span v-if="sort === '6'" :class="className">别墅</span>
    <span v-if="sort === '7'" :class="className">商业类</span>
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