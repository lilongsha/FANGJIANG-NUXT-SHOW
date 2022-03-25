<template>
    <div class="w-full lg:pt-10 sm:hidden">
      <div class="flex flex-row items-center justify-between w-full">
        <div>
          <!-- name and saleState -->
          <div class="flex items-end w-full sm:flex-col lg:flex-row">
            <a :href="`/house/${house.id}.html`" style="color: inherit" class="font-bold sm:text-xl lg:text-3xl"><h1>{{ house.name }}</h1></a>
            <h2 v-if="house.aliasName" class="lg:ml-4">别名：{{ house.aliasName }}</h2>
          </div>
          <div class="flex flex-row items-center sm:mt-2 lg:mt-4">
            <HouseStateLabel :state="house.saleState" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm'" class=" sm:mr-0.5 lg:mr-1" />
            <HouseTypeLabel :sort="house.type" :class-name="'px-1 py-0.5 font-normal text-white rounded-sm bg-fjBlue-100'"></HouseTypeLabel>
            <span class="sm:ml-2 lg:ml-4"></span>
            <span v-if="house.sysDictDetailBeans && house.sysDictDetailBeans.length > 0"><span v-for="(item, index) in house.sysDictDetailBeans" :key="index" :class="colors[index % 5]" class="px-1 py-0.5 text-xs sm:mr-0.5 lg:mr-1">{{ item.value }}</span></span>
            
          </div>
        </div>
        <div class="text-right">
          <img v-if="isFavorite === '1'" class="h-8 w-9" src="~/assets/svg/favorite.svg" @click="deleteFav">
          <img v-else class="h-8 w-9" src="~/assets/svg/fav.svg" @click="addFav">
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { message } from 'ant-design-vue';
import { CurrentApi } from '~/api/user/userApi';
export default Vue.extend({
  name: 'Title',
  props: {
    house: {
      type: Object,
      required: true,
    },
    favorite: {
      type: String,
      required: false,
      default: '0'
    }
  },
  data() {
    const isFavorite = this.favorite;
    const colors: string[] = ['bg-fjBlue-100 bg-opacity-20 text-fjBlue-100', 'bg-purple-200 text-purple-400', 'bg-red-200 text-red-400', 'bg-fuchsia-200 text-fuchsia-400', 'bg-gray-200 text-gray-400', 'bg-indigo-200 text-indigo-400'];
    return { colors, isFavorite }
  },
  methods: {
    async addFav() {
      const accessToken = this.$store.state.app.accessToken;
      const tokenType = this.$store.state.app.tokenType
      const houseId: string = this.house.id
      const param =  {
        data: {
          projectId: houseId
        }
      }
      if (tokenType && accessToken) {
        this.$axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        let result;
        try {
          result = await this.$axios.$post(CurrentApi.AddFavoriteProject, param)
          if (result?.code === 200) {
            message.success({ content: '关注成功', duration: 3})
            this.isFavorite = '1'
          }
        } catch (error) {
          if (result?.code === 401) {
            this.$router.push('/login?redirect='+ this.$route.path)
          }else {
            message.error({ content: '关注失败', duration: 3})
          }
        } finally {
            this.$axios.setHeader('Authorization', '')
        }
      } else {
        this.$router.push('/login?redirect=' + this.$route.path + '.html')
      }
      
    },
    async deleteFav() {
      const accessToken = this.$store.state.app.accessToken;
      const tokenType = this.$store.state.app.tokenType
      const houseId: string = this.house.id
      const param =  {
        data: {
          projectId: houseId
        }
      }
      if (tokenType && accessToken) {
        this.$axios.setHeader('Authorization', tokenType + ' ' + accessToken)
        let result;
        try {
          result = await this.$axios.$post(CurrentApi.DeleteFavorite, param)
          if (result?.code === 200) {
            message.success({ content: '取消关注', duration: 3})
            this.isFavorite = '0'
          }
          
        } catch (error) {
          if (result?.code === 401) {
            this.$router.push('/login?redirect='+ this.$route.path + '.html')
          }else {
            message.error({ content: '取消失败', duration: 3})
          }
        } finally {
          this.$axios.setHeader('Authorization', '')
        }
      } else {
        this.$router.push('/login?redirect=' + this.$route.path + '.html')
      }
      
    }
  }

})
</script>