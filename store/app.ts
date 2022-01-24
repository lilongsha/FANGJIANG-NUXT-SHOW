import { AppState, Breadcrumb, LoginBack } from "../types/app";

const state = ():AppState =>({
  province: '',
  provinceId: '',
  city: '',
  cityId: '',
  area: '',
  areaId: '',
  breadcrumbItems: [],
  hotProject: [],
  link: [],
  test: [],
  title: '',
  url: '',
})

const back = ():LoginBack => ({
  accessToken: '',
  expiresIn: '',
  refreshToken: '',
  scope: [],
  tokenType: '',
})

const mutations = {
  AccessToken(back: LoginBack, access: string):void {
    back.accessToken = access;
  },
  ExpiresIn(back: LoginBack, expiresIn: string):void {
    back.expiresIn = expiresIn;
  },
  RefreshToken(back: LoginBack, refresh: string):void {
    back.refreshToken = refresh;
  },
  Scope(back: LoginBack, scope: any[]):void {
    back.scope = scope;
  },
  TokenType(back: LoginBack, tokenType: string):void {
    back.tokenType = tokenType;
  },
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
  AREA_SET(state: AppState, area: string):void {
    state.area = area;
  },
  AREA_CLEAR(state: AppState):void {
    state.area = '';
  },
  AREA_ID_SET(state: AppState, areaId: string):void {
    state.areaId = areaId;
  },
  AREA_ID_CLEAR(state: AppState):void {
    state.areaId = '';
  },
  HOT_PROJECT_SET(state: AppState, hotProject: any[]):void {
    state.hotProject = hotProject;
  } ,
  LINK_SET(state: AppState, link: any[]): void {
    state.link = link;
  },
  TEST_SET(state: AppState, test: string):void {
    state.test.push(test);
  },
  TEST_SET_ALL(state: AppState, test: any):void {
    state.test = test;
  },
  TITLE_SET(state: AppState, title: string):void {
    state.title = title;
  },
  URL_SET(state: AppState, url: string):void {
    state.url = url;
  }
}

const actions = {

}

export default {
  back,
 namespaced:true,
 state,
 mutations,
 actions
}