<template>
  <div class="w-full h-full">
    <div id="myChart" class="w-full h-full"></div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LineEchart',
  props: {
    option: {
      type: Object,
      require: true,
      default: () => {}
    }
  },
  data () {
    return {};
  },
  mounted () {
    this.echartsInit()
  },
  methods: {
    echartsInit () {
      if (!this.option) {
        return;
      }
      // 找到容器
      const myChart = this.$echarts.init(document.getElementById('myChart'))
      // 开始渲染
      myChart.setOption(this.option)
    },
  }
});
</script>
