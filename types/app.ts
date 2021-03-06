export interface Breadcrumb {
  title: string;
  param?: object;
  icon?: string;
  href?: string;
}

export interface Location {
  province?: string;
  city?: string;
}

export interface AppState {
  gender?: string,
  province?: string;
  provinceId?: string;
  city?: string;
  cityId?: string;
  area?: string;
  areaId?: string;
  breadcrumbItems: Breadcrumb[];
  hotProject: any[];
  link: any[];
  test?: any;
  title: string;
  url: string;
  userId: string;
  userName: string;
  accessToken?: string,
  expiresIn?: string,
  refreshToken?: string,
  scope: any[],
  tokenType?: string,
  nickName?: string,
  avatar?: string,
  isMobile?: boolean,
}

export interface LoginBack {
  accessToken?: string;
  expiresIn?: string;
  refreshToken?: string;
  scope?: any[];
  tokenType?: string;
  nickName?: string;
  avatar?: string;
}