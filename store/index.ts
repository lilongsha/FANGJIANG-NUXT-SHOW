import { BaseListResult, BasePageResult } from '~/api/model/baseModel';
import { getDataResult } from '~/utils/response/util';
import { Api as ProjectApi } from '@/api/model/houseModel';
import { Api as LinkApi } from '@/api/model/linkModel';

export const actions = {
  async nuxtServerInit (store: any, context: any) {
    await store.commit('app/PROVINCE_SET', '河北省')
    await store.commit('app/PROVINCE_ID_SET', '130000')
    await store.commit('app/CITY_SET', '石家庄市')
    await store.commit('app/CITY_ID_SET', '130100')
    const hotProjectParam: any = {
      data: {
        cityId: store.state.app.cityId
      },
      page: {
        pageNum: 0,
        pageSize: 10,
      },
      sort: {
        desc: ['orderNum'],
      },
    }
    const hotProjectResult:BasePageResult<any> = await context.app.$axios.$post(ProjectApi.GetByCityIdAndOrder, hotProjectParam);
    let hotProjects: any[] = [];
    if (hotProjectResult.code === 200) {
      hotProjects = getDataResult(hotProjectResult);
    }
    await store.commit('app/HOT_PROJECT_SET', hotProjects)
    const linkParam: any = {
      data: {
        page: context.route.path,
        provinceId: store.state.app.provinceId,
        cityId: store.state.app.cityId,
        areaId: store.state.app.areaId,
      },
    }
    const link:BaseListResult<any> = await context.app.$axios.$post(LinkApi.GetLinks, linkParam);
    let links: any[] = [];
    if (link.code === 200) {
      links = getDataResult(link);
    }
    await store.commit('app/LINK_SET', links)
  }
}