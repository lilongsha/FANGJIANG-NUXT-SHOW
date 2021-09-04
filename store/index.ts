import breadcrumbS from './app/state'
import breadcrumbM from './app/mutations'
export const state = () => ({
  counter: 0,
  ...breadcrumbS,
})

export const mutations = {
  increment(state: any) {
    state.counter++
  },
  ...breadcrumbM,
}