export interface Breadcrumb {
  title: string;
  icon?: string;
  href?: string;
}

export interface BreadcrumbState {
  breadcrumbItems: Breadcrumb[]
}