<template>
  <div v-if="loading" class="z-[100] fixed top-0 left-0 w-[100%] h-[100%] flex flex-row items-center justify-center">
    <div class="acir">
      <img src="~/assets/img/blue-logo.png" alt="">
    </div>
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
      default: 'w-full h-full fixed top-0'
    },
    width: {
      type: String,
      default: '16px'
    },
    height: {
      type: String,
      default: '200px'
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
  .acir {
    height: 120px;
    width: 120px;
    border: 3px solid transparent;
    border-top-color: rgba(1, 94, 234);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: spin 1.7s linear infinite;
  }

  .acir::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    right: 5px;
    border-radius: 50px;
    border: 3px solid transparent;
    border-top-color: rgba(1, 94, 234);
    animation: spin 0.6s linear infinite reverse;
  }

  .acir img {
    width: 60%;
    height: 60%;
    animation: spin 1.7s linear infinite reverse;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>