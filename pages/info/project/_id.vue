<template>
  <div class="mx-auto lg:container">
      <span>info/p1{ params }</span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'InfoList',
  components: {},
  asyncData({ route }){
    const params = route.params?.id;
    return { params }
  },
  data () {},
  methods: {}
})
</script>