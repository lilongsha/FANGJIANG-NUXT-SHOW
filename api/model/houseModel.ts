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