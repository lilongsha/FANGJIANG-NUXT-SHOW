<template>
<div v-if="!isHidden" class="">
  <div :class="(getIsHome? 'bg-index-menu ': 'bg-white ') + (getIsUserInfo? 'bg-[#F5F5F5] ' : ' ')" class="fixed flex flex-row w-full h-20 z-[60] sm:hidden">
    <!-- <div class="">
      <sidenav-left />
    </div> -->
    <div class="container mx-auto text-center">
      <sidenav-center />
    </div>
    <!-- <div class="">
      <sidenav-right />
    </div> -->
  </div>
  <div class="w-full h-14 lg:hidden"></div>
  <div class="fixed top-0 z-50 flex flex-row flex-shrink-0 w-screen px-4 bg-white shadow-sm h-14 lg:hidden">
    <div class="flex flex-row w-1/4 h-full">
      <a href="/" rel="nofollow">
        <img class="object-cover w-14 h-14" src="~/assets/img/blue-logo.png" />
      </a>
    </div>
    <div class="flex flex-row items-center w-1/2 h-full" @click="goSearch">
      <svg 
        v-show="getIsSearch"
        t="1631870449894" 
        class="w-5 h-5 icon" 
        viewBox="0 0 1024 1024" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        p-id="7414" 
        data-spm-anchor-id="a313x.7781069.0.i1" 
        width="128"
        height="128">
        <path d="M716.799825 213.997948c-139.189966-139.189966-364.224911-139.189966-503.415877 0-139.189966 139.189966-139.189966 364.224911 0 503.414877s364.225911 139.189966 503.415877 0 139.189966-364.837911 0-503.414877zM136.124967 794.059806c-181.499956-181.499956-181.499956-476.435884 0-657.934839 181.498956-181.499956 476.434884-181.499956 657.934839 0 181.499956 181.498956 181.499956 476.434884 0 657.934839-181.499956 182.111956-475.822884 182.111956-657.934839 0z m869.479787 211.544948c-25.139994 24.526994-64.996984 24.526994-90.136978 0l-90.135977-90.136978c-24.526994-24.526994-24.526994-64.995984 0-90.135977 24.526994-24.526994 64.995984-24.526994 90.135977 0l90.136978 90.135977c25.139994 25.139994 25.139994 65.609984 0 90.136978z" p-id="7415" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#999999"></path>
      </svg>
      <span class="w-full ml-2 text-black" :class="getIsSearch ? '' : 'text-lg font-bold text-center'">{{ getTitle }}</span>
    </div>
    <div class="flex flex-row items-center justify-end w-1/4 h-full overflow-hidden">
      <span class="mr-1 overflow-hidden text-base text-black sm:text-xs whitespace-nowrap">
        {{ getLocation }}
      </span>
      <svg
        class="w-4 h-4 text-black"
        fill="currentColor"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1821"
        width="128"
        height="128"
      >
        <path
          d="M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z"
          p-id="1822"
          data-spm-anchor-id="a313x.7781069.0.i0"
          class="selected"
        ></path>
      </svg>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import SidenavCenter from './components/SidenavCenter.vue'

export default Vue.extend({
  name: 'AppSidenav',
  components: { SidenavCenter },
  data () {
    const timeout: any = undefined;
    return {
      showSearch: '0',
      searchText: '',
      list: [],
      timeout,
    }
  },
  computed: {
    getLocation() {
      return this.$store.state.app.city;
    },
    getTitle() {
      return this.$store.state.app.title;
    },
    getIsSearch() {
      return this.$store.state.app.url === '/search';
    },
    getIsHome() {
      return this.$route.path === '/'
    },
    getIsUserInfo() {
      return this.$route.path.includes('/userInfo')
    },
    isHidden() {
      const login = this.$route.path.includes('/login');
      const phoneInfo = this.$route.path.includes('/PhoneUserInfo') 
      const brand = this.$route.path.includes('/brand') 
      return login || brand || phoneInfo;
    },
  },
  methods: {
    goSearch() {
      if (this.$store.state.app.url) {
        this.$router.push(this.$store.state.app.url);
      }
    },
  }
})
</script>