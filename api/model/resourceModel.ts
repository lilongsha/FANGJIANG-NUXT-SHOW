export enum Api {
  GetResourcesList = '/nhouse-server/resource/getResourcesList', // 获取项目资源分组列表 projectId
  GetResources = '/nhouse-server/resource/getResources', // 获取项目某个分类下的资源 projectId sort
}

// 1：户型 2：沙盘 3：预售证 4：效果图 5：实景图 6：视频 7：VR
export const resourceSort: any = {
  '1': {value: 1, title: '户型'},
  '2': {value: 2, title: '沙盘'},
  '3': {value: 3, title: '预售证'},
  '4': {value: 4, title: '效果图'},
  '5': {value: 5, title: '实景图'},
  '6': {value: 6, title: '视频'},
}