<template>
  <span :class="className">{{ projectTypeShow[sort] }}</span>
</template>
<script>

import { projectTypeShow } from '~/api/model/houseModel';
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
    return { projectTypeShow };
  },
  mounted () {
  },
  methods: {
  }
}
</script>