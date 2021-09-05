import { AppState, Breadcrumb } from "../type";

const state = ():AppState =>({
  province: '河北省',
  city: '石家庄市',
  breadcrumbItems: [],
})

const mutations = {
  BREADCRUMB_ADD(state: any, item: Breadcrumb) {
    if (item.href && item.href !== '/') {
      state.breadcrumbItems.push(item)
    }
  },
  BREADCRUMB_ADD_ALL(state: any, items: Breadcrumb[]) {
    state.breadcrumbItems = items;
  },
  BREADCRUMB_REMOVE(state: any, href: string) {
    if (href !== '/') {
      state.breadcrumbItems = state.breadcrumbItems.filter((item: Breadcrumb) => item.href !== href)
    }
  },
  BREADCRUMB_RE_SET(state: any) {
    state.breadcrumbItems = [];
  }
}

const actions = {
}

export default {
 namespaced:true,
 state,
 mutations,
 actions
}