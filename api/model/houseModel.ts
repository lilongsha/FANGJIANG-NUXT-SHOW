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
  hLayoutsById?: string;
  hLicensesById?: string;
  hDeveloperByDeveloperId?: string;
  brandId?: string;
  sysProvinceByProvinceId?: string;
  sysCityByCityId?: string;
  sysAreaByAreaId?: string;
  sandImg?: string;
  firstImg?: string;
  estateCompanyById?: string;
  hResourcesById?: string;
  sysTradingAreasById?: string;
  sysMetroStationsById?: string;
  projectPriceLogEntities?: string;
}

export interface RecommendProjectByCondition {
  cityId: string; // cityId
}

export interface HotProjectByCondition {
  cityId: string; // cityId
}

export enum Api {
  GetRecommendByCityId = '/nhouse-server/recommendProject/getByCityId',
  GetByCityIdAndOrder = '/nhouse-server/project/searchByCondition',
}

// 单价
export const priceList: any[] = [
  {title: '不限', lowPrice: null, heightPrice: null},
  {title: '1万元/㎡以下', lowPrice: null, heightPrice: 10000 },
  {title: '1-1.5万元/㎡', lowPrice: 10000, heightPrice: 15000 },
  {title: '1.5-2万元/㎡', lowPrice: 15000, heightPrice: 20000 },
  {title: '2-2.5万元/㎡', lowPrice: 20000, heightPrice: 25000 },
  {title: '2.5万元/㎡以上', lowPrice: 25000, heightPrice: null },
  {title: null, lowPrice: null, heightPrice: null },
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
  {title: '50㎡以下', lowAcreage: null, highAcreage: 30 },
  {title: '50-70㎡', lowAcreage: 30, highAcreage: 50 },
  {title: '70-90㎡', lowAcreage: 50, highAcreage: 80 },
  {title: '90-110㎡', lowAcreage: 80, highAcreage: 100 },
  {title: '110-130㎡', lowAcreage: 100, highAcreage: 150 },
  {title: '130-150㎡', lowAcreage: 150, highAcreage: 200 },
  {title: '150-200㎡', lowAcreage: 200, highAcreage: 300 },
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
]
// 状态 1在售 2待售 3售罄
export const saleState: any[] = [
  {title: '不限', },
  {title: '在售',  },
  {title: '待售',  },
  {title: '售罄',  },
]