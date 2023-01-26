import PackagesService from '../services/packages.service'

export const packages = {
  namespaced: true,
  state: {
    travel_packages: [],
  },
  getters: {
    travel_packages: (state) => {
      return state.travel_packages
    },
  },
  mutations: {
    PACKAGES_RESULTS(state, data) {
      state.travel_packages = data
    },
  },
  actions: {
    get_packages({ commit }, count) {
      return PackagesService.getPackages(count).then(
        (res) => {
          commit('PACKAGES_RESULTS', res)
          return Promise.resolve(res)
        },
        (error) => {
          return Promise.reject(error)
        }
      )
    },
  },
}
