export interface Breadcrumb {
  title: string;
  param?: object;
  icon?: string;
  href?: string;
}

export interface BreadcrumbState {
  breadcrumbItems: Breadcrumb[]
}