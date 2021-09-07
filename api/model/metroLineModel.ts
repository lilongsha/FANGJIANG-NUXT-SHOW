export interface MetroStationModel {
  id?: string;
  name?: string;
  longitude?: string;
  latitude?: string;
  state?: string;
  cityId?: string;
}

export interface MetroLineModel {
  id?: string;
  name?: string;
  cityId?: string;
  startStation?: string;
  endStation?: string;
  state?: string;
  stations?: MetroStationModel[];
}

export interface MetroLineByCondition {
  cityId: string; // cityId
  state?: '0' | '1';
}

export interface MetroStationByCondition {
  lineId: string; // lineId
  state?: '0' | '1';
}

export enum Api {
  GetAllLines = '/sys-server/metroLine/getAllLines',
  GetStations = '/sys-server/metroStation/getStations',
}
