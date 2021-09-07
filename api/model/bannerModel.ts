export interface BannerModel {
  id?: string;
  title?: string;
  keyword?: string;
  description?: string;
  address?: string;
  cityId?: string;
  hProjectId?: string;
  state?: string;
  createBy?: string;
  createTime?: string;
  updateBy?: string;
  updateTime?: string;
}

export interface BannerByCondition {
  cityId: string; // cityId
}

export enum Api {
  GetBanners = '/nhouse-server/banner/getBanners',
}