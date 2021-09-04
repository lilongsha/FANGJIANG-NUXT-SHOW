import { Breadcrumb } from "./type"

const breadcrumbM = {
  addBreadcrumb(state: any, item: Breadcrumb) {
    if (item.href && item.href !== '/') {
      state.breadcrumbItems.push(item)
    }
  },
  removeBreadcrumb(state: any, href: string) {
    if (href !== '/') {
      state.breadcrumbItems = state.breadcrumbItems.filter((item: Breadcrumb) => item.href !== href)
    }
  }
}

export default breadcrumbM;