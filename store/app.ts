import { AppState, Breadcrumb } from "../types/app";

const state = ():AppState =>({
  province: '',
  provinceId: '',
  city: '',
  cityId: '',
  breadcrumbItems: [],
  test: [],
})

const mutations = {
  BREADCRUMB_ADD(state: AppState, item: Breadcrumb):void {
    if (item.href && item.href !== '/') {
      state.breadcrumbItems.push(item)
    }
  },
  BREADCRUMB_ADD_ALL(state: AppState, items: Breadcrumb[]):void {
    state.breadcrumbItems = items;
  },
  BREADCRUMB_REMOVE(state: AppState, href: string):void {
    if (href !== '/') {
      state.breadcrumbItems = state.breadcrumbItems.filter((item: Breadcrumb) => item.href !== href)
    }
  },
  BREADCRUMB_RE_SET(state: AppState):void {
    state.breadcrumbItems = [];
  },
  PROVINCE_SET(state: AppState, province: string):void {
    state.province = province;
  },
  PROVINCE_CLEAR(state: AppState):void {
    state.province = '';
  },
  PROVINCE_ID_SET(state: AppState, provinceId: string):void {
    state.provinceId = provinceId;
  },
  PROVINCE_ID_CLEAR(state: AppState):void {
    state.provinceId = '';
  },
  CITY_SET(state: AppState, city: string):void {
    state.city = city;
  },
  CITY_CLEAR(state: AppState):void {
    state.city = '';
  },
  CITY_ID_SET(state: AppState, cityId: string):void {
    state.cityId = cityId;
  },
  CITY_ID_CLEAR(state: AppState):void {
    state.cityId = '';
  },
  TEST_SET(state: AppState, test: string):void {
    state.test.push(test);
  },
  TEST_SET_ALL(state: AppState, test: any):void {
    state.test = test;
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