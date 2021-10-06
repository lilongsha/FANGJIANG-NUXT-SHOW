export enum Api {
  GetDynamicNews = '/nhouse-server/dynamicNews/getDynamicNews',
  GetDynamicNew = '/nhouse-server/dynamicNews/getDynamicNew',
}

// 1: 楼盘开盘 2：工程进度 3：项目封顶 4：项目交房 5：优惠活动 6：加推楼栋 7：在售楼栋 8：楼栋售罄 9：特价信息
export const sort = [
  { value: '0', title: '楼盘动态', color: 'bg-fjBlue-100' },
  { value: '1', title: '楼盘开盘', color: 'bg-fjBlue-100' },
  { value: '2', title: '工程进度', color: 'bg-fjBlue-100' },
  { value: '3', title: '项目封顶', color: 'bg-fjBlue-100' },
  { value: '4', title: '项目交房', color: 'bg-fjBlue-100' },
  { value: '5', title: '优惠活动', color: 'bg-fjBlue-100' },
  { value: '6', title: '加推楼栋', color: 'bg-fjBlue-100' },
  { value: '7', title: '在售楼栋', color: 'bg-fjBlue-100' },
  { value: '8', title: '楼栋售罄', color: 'bg-fjBlue-100' },
  { value: '9', title: '特价信息', color: 'bg-fjBlue-100' },
]

export async function getDynamicNews($axios: any, projectId: string, pageSize = 2, pageNum = 0) {
  const param: any = {
    data: {
      projectId,
    },
    page: {
      pageSize,
      pageNum,
    }
  }
  return await $axios.$post(Api.GetDynamicNews, param)
}

export async function getDynamicNew($axios: any, id: string) {
  const param: any = {
    data: {
      id,
    },
  }
  return await $axios.$post(Api.GetDynamicNew, param)
}