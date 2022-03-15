import { message } from 'ant-design-vue';
import * as Cookies from 'js-cookie';
export default function({ $axios, redirect, _router, store, route }) {
    // 基本配置
    // $axios.defaults.timeout = 10000;

    // 请求拦截
    $axios.onRequest(config => {

        // 可设置同意的请求配置
        // config.headers.token = '项目的tolen';

        return config;
    })

    // 响应拦截

    $axios.onResponse(res => {

        // 可做一些状态的判断，如: 请求失败、token过时 ...
        // console.log('result:', res);
        return res;
    });

    $axios.onError(error => {
        const curPath = route.path;

        // 可以一些错误处理
        const code = parseInt(error.response && error.response.status)
        if (code === 401) {
            if (curPath === '/login') {
                message.error({ content: '登录失败， 请重试', duration: 3})
            } else {
                Cookies.remove('CityId')
                Cookies.remove('MessageOk')
                Cookies.remove('Password')
                Cookies.remove('AreaId')
                Cookies.remove('PhoneOk')
                Cookies.remove('ExpiresIn')
                Cookies.remove('RealName')
                Cookies.remove('Avatar')
                Cookies.remove('UserId')
                Cookies.remove('Gender')
                Cookies.remove('State')
                Cookies.remove('NickName')
                Cookies.remove('UserName')
                Cookies.remove('Access_Token')
                Cookies.remove('Scope')
                Cookies.remove('RefreshToken')
                Cookies.remove('ProvinceId')
                Cookies.remove('Token_Type')
                store.commit('app/AccessToken', '')
                store.commit('app/ExpiresIn', '')
                store.commit('app/RefreshToken', '')
                store.commit('app/Scope', [])
                store.commit('app/TokenType', '')
                store.commit('app/UserId', '')
                store.commit('app/Avatar', '')
                store.commit('app/NickName', '')
                store.commit('app/Gender', '')

                redirect('/login?redirect=' + curPath);
            }
        }
        return error;
    })

}