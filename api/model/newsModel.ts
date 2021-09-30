export enum Api {
  GetNewsByCity = '/nhouse-server/news/getNewsByCity',
  GetNewsByProject = '/nhouse-server/news/getNewsByProject',
}

export const NEWS_SORT = [
  {key: '0', value: '全部资讯'},
  {key: '1', value: '拿地资讯'},
  {key: '2', value: '开盘资讯'},
  {key: '3', value: '楼市政策'},
  {key: '4', value: '房贷利率'},
  {key: '5', value: '区域规划'},
  {key: '6', value: '区域房价'},
  {key: '7', value: '实探楼盘'},
]