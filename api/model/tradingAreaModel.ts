export interface TradingAreaModel {
  id?: string;
  name?: string;
  description?: string;
  longitude?: string;
  latitude?: string;
  radius?: string;
  provinceId?: string;
  provinceById?: string;
  cityId?: string;
  cityById?: string;
  areaId?: string;
  areaById?: string;
}

export interface TradingAreaByCondition {
  provinceId: string; // provinceId
  cityId: string; // cityId
  areaId?: string; // areaId
  name?: string; // trading name
  state?: '0' | '1';
}

export enum Api {
  GetAllTradingAreas = '/sys-server/trading/getAllTrading',
}
