<template>
  <div v-if="loading" :class="boxClass" class="absolute top-0 z-50 flex flex-row items-center justify-center space-x-4 bg-gray-400 spinner bg-opacity-20">
    <div :style="{background: color, width, height}" class="rounded-full rect1"></div>
    <div :style="{background: color, width, height}" class="rounded-full rect2"></div>
    <div :style="{background: color, width, height}" class="rounded-full rect3"></div>
    <div :style="{background: color, width, height}" class="rounded-full rect4"></div>
    <div :style="{background: color, width, height}" class="rounded-full rect5"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Loading',
  props: {
    color: {
      type: String,
      default: '#015eea'
    },
    boxClass: {
      type: String,
      default: 'w-full h-full'
    },
    width: {
      type: String,
      default: '6px'
    },
    height: {
      type: String,
      default: '16px'
    }
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
})
</script>
<style scoped>
.spinner > div {
  display: inline-block;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>