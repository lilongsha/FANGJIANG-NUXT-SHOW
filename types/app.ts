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
  province?: string;
  provinceId?: string;
  city?: string;
  cityId?: string;
  breadcrumbItems: Breadcrumb[];
  test?: any;
}