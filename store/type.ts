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
  city?: string;
  breadcrumbItems: Breadcrumb[]
}