export interface ProjectModel {
  id?: string;
  name?: string;
  aliasName?: string;
  labels?: string;
  type?: string;
  buildType?: string;
  property?: string;
  decorationType?: string;
  decorationStandard?: string;
  getLandTime?: string;
  longitude?: string;
  latitude?: string;
  locationScore?: string;
  educationScore?: string;
  medicalScore?: string;
  trafficScore?: string;
  matchingScore?: string;
  address?: string;
  saleState?: string;
  openTime?: string;
  payTime?: string;
  saleAddress?: string;
  price?: string;
  lowTotalPrice?: string;
  highTotalPrice?: string;
  priceDescription?: string;
  priceDays?: string;
  updatePriceTime?: string;
  loanType?: string;
  landArea?: string;
  buildArea?: string;
  volumeRate?: string;
  greenRate?: string;
  parking?: string;
  buildingTotal?: string;
  houseTotal?: string;
  elevatorInfo?: string;
  estateCompany?: string;
  estatePrice?: string;
  estateDescription?: string;
  waterMethod?: string;
  electricityMethod?: string;
  heatMethod?: string;
  trafficInfo?: string;
  medicalInfo?: string;
  matchingInfo?: string;
  educationInfo?: string;
  otherInfo?: string;
  description?: string;
  number?: string;
  lookTime?: string;
  state?: string;
  createBy?: string;
  createTime?: string;
  updateBy?: string;
  updateTime?: string;
  orderNum?: string;
  commission?: string;
  commissionMode?: string;
  hBuildsById?: string;
  hLayoutsById?: any;
  hLicensesById?: string;
  hDeveloperByDeveloperId?: string;
  brandId?: string;
  sysProvinceByProvinceId?: string;
  sysCityByCityId?: string;
  sysAreaByAreaId?: any;
  sandImg?: string;
  firstImg?: any;
  estateCompanyById?: string;
  hResourcesById?: string;
  sysTradingAreasById?: string;
  sysMetroStationsById?: string;
  projectPriceLogEntities?: string;
  sysDictDetailBeans?: any[];
}

export interface RecommendProjectByCondition {
  cityId: string; // cityId
}

export interface HotProjectByCondition {
  cityId: string; // cityId
}

export enum Api {
  GetRecommendByCityId = '/customer-server/recommendProject/getByCityId',
  Search = '/customer-server/project/search',
  GetByCityIdAndOrder = '/customer-server/project/searchByCondition',
  GetProject = '/customer-server/project/getProject',
  GetLicensesAll = '/customer-server/license/getLicensesAll',
  GetLicense = '/customer-server/license/getLicense',
}

export const phoneNum: string = '400-750-8888'

// 楼层类型
export const floorTypeList: any[] = [
  { title: '不限' },
  { title: '低层' },
  { title: '中层' },
  { title: '高层' },
]
// 
export const hallType: any[] = [
  { title: '不限' },
  { title: '1厅' },
  { title: '2厅' },
  { title: '3厅' },
  { title: '4厅' },
  { title: '5厅' },
  { title: '5+厅' },
]
export const toiletType: any[] = [
  { title: '不限' },
  { title: '1卫' },
  { title: '2卫' },
  { title: '3卫' },
  { title: '4卫' },
  { title: '5卫' },
  { title: '5+卫' },
]
// 单价
export const priceList: any[] = [
  {title: '不限', lowPrice: null, highPrice: null},
  {title: '1万元/㎡以下', lowPrice: null, highPrice: 10000 },
  {title: '1-1.5万元/㎡', lowPrice: 10000, highPrice: 15000 },
  {title: '1.5-2万元/㎡', lowPrice: 15000, highPrice: 20000 },
  {title: '2-2.5万元/㎡', lowPrice: 20000, highPrice: 25000 },
  {title: '2.5万元/㎡以上', lowPrice: 25000, highPrice: null },
  {title: null, lowPrice: null, highPrice: null },
]
// 总价
export const totalPriceList: any[] = [
  {title: '不限', lowTotalPrice: null, highTotalPrice: null },
  {title: '30万以下', lowTotalPrice: null, highTotalPrice: 30 },
  {title: '30-50万', lowTotalPrice: 30, highTotalPrice: 50 },
  {title: '50-80万', lowTotalPrice: 50, highTotalPrice: 80 },
  {title: '80-100万', lowTotalPrice: 80, highTotalPrice: 100 },
  {title: '100-150万', lowTotalPrice: 100, highTotalPrice: 150 },
  {title: '150-200万', lowTotalPrice: 150, highTotalPrice: 200 },
  {title: '200-300万', lowTotalPrice: 200, highTotalPrice: 300 },
  {title: '300万', lowTotalPrice: 300, highTotalPrice: null },
  {title: null, lowTotalPrice: null, highTotalPrice: null },
]
// 面积
export const acreageList: any[] = [
  {title: '不限', lowAcreage: null, highAcreage: null },
  {title: '50㎡以下', lowAcreage: null, highAcreage: 50 },
  {title: '50-70㎡', lowAcreage: 50, highAcreage: 70 },
  {title: '70-90㎡', lowAcreage: 70, highAcreage: 90 },
  {title: '90-110㎡', lowAcreage: 90, highAcreage: 110 },
  {title: '110-130㎡', lowAcreage: 110, highAcreage: 130 },
  {title: '130-150㎡', lowAcreage: 130, highAcreage: 150 },
  {title: '150-200㎡', lowAcreage: 150, highAcreage: 200 },
  {title: '200㎡以上', lowAcreage: 200, highAcreage: null },
  {title: null, lowAcreage: null, highAcreage: null },
]
// 户型
export const houseType: any[] = [
  {title: '不限', },
  {title: '1室',  },
  {title: '2室',  },
  {title: '3室',  },
  {title: '4室',  },
  {title: '5室',  },
  {title: '5室+', },
]
// 类型1住宅，2公寓/类住宅，3商铺，4写字楼，5仓库
export const projectType: any[] = [
  {title: '不限', },
  {title: '住宅',  },
  {title: '公寓',  },
  {title: '商铺',  },
  {title: '写字楼',  },
  {title: '仓库',  },
  {title: '别墅',  },
  {title: '商业类',  },
]
// 状态 1在售 2待售 3售罄
export const saleState: any[] = [
  {title: '不限', },
  {title: '在售',  },
  {title: '待售',  },
  {title: '售罄',  },
]

// export const houseMenu: any[] = [
//   {title: '楼盘户型', value: 'layout'},
//   {title: '楼盘动态', value: 'dynamic'},
//   {title: '热门问题', value: 'question'},
//   {title: '楼盘周边', value: 'around'},
//   {title: '价格走势', value: 'price'},
// ]
export const houseMenu: any[] = [
  {title: '楼盘首页', value: 'house'},
  {title: '楼盘详情', value: 'infomation'},
  {title: '楼盘动态', value: 'dynamic'},
  {title: '楼盘问答', value: 'discuss'},
  {title: '楼盘资讯', value: 'info'},
  {title: '楼盘视频', value: 'video'},
  {title: '历史价格', value: 'price'},
]

// 1毛坯；2简装；3精装；4毛坯与简装；5毛坯与精装
export const decorationType: any = {
  1: {title: '毛坯', value: '1'},
  2: {title: '简装', value: '2'},
  3: {title: '精装', value: '3'},
  4: {title: '毛坯与简装', value: '4'},
  5: {title: '毛坯与精装', value: '5'}
}

// 被动式，装配式，浇筑式，部分装配式，部分浇筑式
export const buildType: any = {
  1: {title: '被动式', value: '1'},
  2: {title: '装配式', value: '2'},
  3: {title: '浇筑式', value: '3'},
  4: {title: '部分装配式', value: '4'},
  5: {title: '部分浇筑式', value: '5'}
}

export function getHouseType(house: any) {
  const layouts: any[] = house.hLayoutsById;
  // 获取主力户型
  if (!layouts || layouts.length < 1) {
    return '暂无数据';
  }
  const flagObj: any = {};
  layouts.forEach((item) => {
    if (item.saleState !== '1' || !item.room || !item.area) {
      return;
    }
    if (flagObj[item.room + '-' + item.area]) {
      flagObj[item.room + '-' + item.area] = flagObj[item.room + '-' + item.area] + 1;
    } else {
      flagObj[item.room + '-' + item.area] = 1;
    }
  })
  const keys = Object.keys(flagObj);
  if (keys.length < 1) {
    return '暂无数据';
  }
  let result: string = '';
  for(let i = 0; i < keys.length; i++) {
    layouts.push({ rooms: keys[i].split('-')[0], value: flagObj[keys[i]] });
    if (Object.keys(flagObj).length > 2) {
      continue;
    }
    result = result + keys[i].split('-')[0] + '室(' + keys[i].split('-')[1] + '㎡)        '
  }
  return result;
}

export async function getProject($axios: any, projectId: string, store: any, route: any, redirect: any) {
  const param: any = {
    data: {
      id: projectId,
    },
  }
  const accessToken =store.state.app.accessToken;
  const tokenType = store.state.app.tokenType
  let result;
  try {
    if(tokenType + ' ' + accessToken) {
      $axios.setHeader('Authorization', tokenType + ' ' + accessToken)
    }
    result = await $axios.$post(Api.GetProject, param)
    
  } catch (error) {
    if (result?.code === 401) {
      redirect('/login?redirect='+ route.path)
    }
  } finally {
    $axios.setHeader('Authorization', '')
  }
  return result;
}

export const projectTypeShow: any[] = [
  '未知',
  '住宅',
  '公寓',
  '商铺',
  '写字楼',
  '仓库',
  '别墅',
  '商业类',
]