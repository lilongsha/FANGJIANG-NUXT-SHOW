import { BaseListResult, BasePageResult } from '~/api/model/baseModel';
import { getDataResult } from '~/utils/response/util';
import { Api as ProjectApi } from '@/api/model/houseModel';
import { Api as LinkApi } from '@/api/model/linkModel';

const getRooms = (rooms: any[]) => {
  // 是否放到asyncData
  const roomObj: any = {};
  if (rooms && rooms.length > 0) {
    rooms.forEach((item) => {
      const room = item.room;
      roomObj[room] = room;
    })
  }
  const roomArray: any[] = Object.keys(roomObj)
  if (!roomArray) {
    return '暂无数据'
  }
  const result: string = roomArray.toString().replace(',', '室/')
  if (result) {
    return result + '室'
  }
  return '暂无数据'
}
const getRoomArea = (rooms: any[]) => {
  // 是否放到asyncData
  const areaObj: any = {};
  if (rooms && rooms.length > 0) {
    rooms.forEach((item) => {
      const area = item.area;
      areaObj[area] = area;
    })
  }
  const areaArray = Object.keys(areaObj)
  if (areaArray.length > 0) {
    return '建面约' + areaArray[0] + '-' + areaArray[areaArray.length - 1] + '㎡'
  }
  return '暂无数据'
}

export const actions = {
  async nuxtServerInit (store: any, context: any) {
    let accessToken;
    let tokenType;
    let nickName;
    let avatar;
    let userId;
    let userName;
    let gender;
    const cookie = ' ' + context.req.headers.cookie
    const arr = cookie.split(';')
    if (arr && arr.length > 0) {
      arr[0] = arr[0] + ' ';
      arr.forEach((e) => {
        const i = e.split('=')
        if (i[0] === ' Access_Token') {
            accessToken = i[1];
        }
        if(i[0] === ' Token_Type') {
            tokenType = i[1]
        }
        if(i[0] === ' NickName') {
          nickName = i[1]
        }
        if(i[0] === ' Avatar') {
          avatar = i[1]
        }
        if(i[0] === ' UserId') {
          userId = i[1]
        }
        if(i[0] === ' UserName') {
          userName = i[1]
        }
        if(i[0] === ' Gender') {
          gender = i[1]
        }
      })
    }
    await store.commit('app/PROVINCE_SET', '河北省')
    await store.commit('app/PROVINCE_ID_SET', '130000')
    await store.commit('app/CITY_SET', '石家庄市')
    await store.commit('app/CITY_ID_SET', '130100')
    await store.commit('app/UserId', userId)
    await store.commit('app/UserName', userName)
    await store.commit('app/NickName', nickName)
    await store.commit('app/Avatar', avatar)
    await store.commit('app/AccessToken', accessToken)
    await store.commit('app/TokenType', tokenType)
    await store.commit('app/Gender', gender)
    const hotProjectParam: any = {
      data: {
        cityId: store.state.app.cityId
      },
      page: {
        pageNum: 0,
        pageSize: 10,
      },
      sort: {
        desc: ['orderNum', 'createTime'],
      },
    }
    const hotProjectResult:BasePageResult<any> = await context.app.$axios.$post(ProjectApi.GetByCityIdAndOrder, hotProjectParam);
    let hotProjects: any[] = [];
    if (hotProjectResult?.code === 200) {
      hotProjects = getDataResult(hotProjectResult);
      hotProjects.forEach((item) => {
        const rooms = getRooms(item.hLayoutsById);
        item.rooms = rooms;
        const roomAreas = getRoomArea(item.hLayoutsById);
        item.roomAreas = roomAreas;
      });
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
    if (link?.code === 200) {
      links = getDataResult(link);
    }
    await store.commit('app/LINK_SET', links)

    const userAgent = context.req.headers['user-agent'] || '';
    let isMobile;
    if (/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(userAgent.toLowerCase())) {
        // 跳转移动端页面
        isMobile = true;
    } else {
      isMobile = false;
    }
    store.commit('app/IS_MOBILE', isMobile)
  }
}