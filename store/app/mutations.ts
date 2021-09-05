import { Breadcrumb } from "./type"

const breadcrumbM = {
  addBreadcrumb(state: any, item: Breadcrumb) {
    if (item.href && item.href !== '/') {
      state.breadcrumbItems.push(item)
    }
  },
  addAllBreadcrumb(state: any, items: Breadcrumb[]) {
    state.breadcrumbItems = items;
  },
  removeBreadcrumb(state: any, href: string) {
    if (href !== '/') {
      state.breadcrumbItems = state.breadcrumbItems.filter((item: Breadcrumb) => item.href !== href)
    }
  },
  reset(state: any) {
    state.breadcrumbItems = [];
  }
}

export default breadcrumbM;

// { title: '首页', href: '/', icon: 'home'}, { title: '新房', href: '/house', icon: 'house'},{ title: '列表', href: '/house/list', icon: 'list'}