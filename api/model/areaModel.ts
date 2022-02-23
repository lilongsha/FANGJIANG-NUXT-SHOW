export interface AreaModel {
  id?: string; //*
  name?: string; //*
  cityId?: string; //*
  state?: string;
}

export interface AreaByCondition {
  id?: string; // cityId
  state?: '0' | '1';
}

export enum Api {
  GetAllAreas = '/sys-server/area/getAllAreasByCityId',
}

export enum LocationApi {
  GetAllProvinces = '/sys-server/province/getAllProvinces',
  GetAllCitiesByProvinceId = '/sys-server/city/getAllCitiesByProvinceId',
  GetAllAreasByCityId = '/sys-server/area/getAllAreasByCityId',
  GetCityById = '/sys-server/city/getCityById',
}

// SYS_AREA_MISS_ID(4013, "区级参数错误：编号"),
// SYS_AREA_MISS_NAME(4014, "区级参数错误：名称"),
// SYS_AREA_MISS_CITY_ID(4015, "区级参数错误：市级编号"),
// SYS_AREA_MISS_STATE(4016, "区级参数错误：状态"),
// SYS_AREA_IS_EXIST(4017, "区级已存在"),
// SYS_AREA_IS_NOT_EXIST(4018, "区级不存在"),
