<template>
  <div>
    <span>首页</span>
    <span>新房详情</span>
    <span>{{ id }}</span>
    <span>{{ result }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
  },
  async asyncData ({ $axios, params }) {
    const param: any = {
      data: {
        ids: ['1414849563948355584', '1414849804638490624']
      }
    }
    const id = params.id
    const result = await $axios.$post('/sys-server/dictDetail/getSysDictDetailsByArray', param)
    return { id, result }
  },
  data () {
    return {
      query: {
        id: ''
      }
    }
  },
  methods: {

  }
})
</script>
