export const actions = {
  async nuxtServerInit (store: any, context: any) {
    await store.commit('app/PROVINCE_SET', '河北省')
    await store.commit('app/PROVINCE_ID_SET', '130000')
    await store.commit('app/CITY_SET', '石家庄市')
    await store.commit('app/CITY_ID_SET', '130100')
    console.log(context.req.headers.host);
  }
}