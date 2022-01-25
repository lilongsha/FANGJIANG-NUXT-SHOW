<template>
    <div>
        <div class="h-20"></div>
        <input v-model="token" type="text">
        <input v-model="type" type="text">
        <div>
            {{ result }}
            <br>
        </div>
        <button @click="clickPro">喜欢的项目</button>
        <div>{{ path }}</div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { CurrentApi } from '~/api/user/userApi';
export default Vue.extend({
    name: 'User',
    asyncData ({ req, route }) {
        const path = route.path;
        let token;
        let type;
        // let user = ''
        // let userInfo;
        const cookie = ' ' + req.headers.cookie
        // cookie = cookie + "\xa0"
        const arr = cookie.split(';')
        if (arr && arr.length > 0) {
            arr[0] = arr[0] + ' ';
            arr.forEach((e) => {
                const i = e.split('=')
                if (i[0] === ' Access_Token') {
                    token = i[1];
                }
                if(i[0] === ' Token_Type') {
                    type =i[1]
                }
            })
        }
        let result;
        
        return {
            token,type,result, path
        }
    },
    data() {
        let result: any;
        return {
            token: '',
            type: '',
            path: '',
            result,
        }
    },
    methods: {
        async clickPro() {
            if (this.token && this.type) {
            const h = this.type + ' ' + this.token
            if (h) {
                await this.$axios.setHeader('Authorization', h)
            }
            const param = {
                page: {
                    pageNum: 0,
                    pageSize: 10,
                },
            }
            this.result = await this.$axios.$post(CurrentApi.SelectFavorite, param)
        }
        }
    }
})
</script>