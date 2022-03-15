<template>
  <div class="font-sans">
    <AppSidenav />
    <div class="">
      <AppHeader />
      <nuxt />
      <div v-if="!isHidden" class="lg:hidden px-[14px] py-2 bg-white grid grid-cols-1 justify-items-center items-center shadow-lg rounded-full fixed bottom-[100px] right-[20px] text-fjRed-100 z-[50] w-[58px] h-[56px]" @click="clickUser"><img src="~/assets/img/info.png" alt="" class="w-[24px] h-[32px]"></div>
      <AppFooter class="sticky"/>
      
    </div>
    <!-- <div class="fixed right-0 top-auto flex flex-col w-10 bg-black h-60">工具条</div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Layout',
  components: {
  },
  asyncData() {
    return {
      isHome: false,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isHidden() {
      return this.$route.path.includes('/PhoneUserInfo') || this.$route.path.includes('/login');
    },
  },
  methods: {
    
    clickUser() {
      const tokenType = this.$store.state.app.tokenType;
      const accessToken = this.$store.state.app.accessToken;
      const path = this.$route.path;
      if (tokenType && accessToken) {
        this.$router.push('/PhoneUserInfo?redirect=' + path);
      } else {
        this.$router.push('/login?redirect=' + path);
      }
    }
  }
})
</script>
