export default function ({ route, store }) {
  const curPath = route.name;
  switch(curPath) {
    case 'index':
      store.commit('app/TITLE_SET', '搜房源')
      store.commit('app/URL_SET', '/search')
      store.commit('app/BREADCRUMB_RE_SET', '新房')
      break;
    case 'house-list-p':
      store.commit('app/TITLE_SET', '新房')
      store.commit('app/URL_SET', '')
      break;
    case 'info-list-p':
      store.commit('app/TITLE_SET', '资讯')
      store.commit('app/URL_SET', '')
      break;
    case 'info-id':
      store.commit('app/TITLE_SET', '资讯')
      store.commit('app/URL_SET', '')
      break;
    case 'calculator-home':
      store.commit('app/TITLE_SET', '房贷计算器')
      store.commit('app/URL_SET', '')
      break;
    case 'calculator-result':
      store.commit('app/TITLE_SET', '房贷计算器')
      store.commit('app/URL_SET', '')
      break;
    case 'house-id':
        store.commit('app/TITLE_SET', '房匠新房')
        store.commit('app/URL_SET', '')
        break;
    case 'house-infomation-id':
      store.commit('app/TITLE_SET', '新房详情信息')
      store.commit('app/URL_SET', '')
      break;
    case 'discuss-list': 
      store.commit('app/TITLE_SET', '新房问答')
      store.commit('app/URL_SET', '')
      break;
    case 'discuss-id': 
      store.commit('app/TITLE_SET', '新房问答详情')
      store.commit('app/URL_SET', '')
      break;
    case 'dynamic-list': 
      store.commit('app/TITLE_SET', '新房动态')
      store.commit('app/URL_SET', '')
      break;
    case 'about': 
      store.commit('app/TITLE_SET', '关于我们')
      store.commit('app/URL_SET', '')
      break;
    case 'about-joinUs': 
      store.commit('app/TITLE_SET', '加入我们')
      store.commit('app/URL_SET', '')
      break;
    case 'video': 
      store.commit('app/TITLE_SET', '视频')
      store.commit('app/URL_SET', '')
      break;
    case 'video-list': 
      store.commit('app/TITLE_SET', '视频列表')
      store.commit('app/URL_SET', '')
      break;
    case 'video-id': 
      store.commit('app/TITLE_SET', '视频')
      store.commit('app/URL_SET', '')
      break;
    default:
      store.commit('app/BREADCRUMB_RE_SET')
      store.commit('app/URL_SET', '')
  }
}