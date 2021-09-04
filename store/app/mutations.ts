import { Breadcrumb } from "./type"

const breadcrumbM = {
  addBreadcrumb(state: any, item: Breadcrumb) {
    state.breadcrumbItems.push(item)
  },
  removeBreadcrumb(state: any, href: string) {
    state.breadcrumbItems = state.breadcrumbItems.filter((item: Breadcrumb) => item.href !== href)
  }
}

export default breadcrumbM;