import PackagesService from '../services/packages.service'
const packages_res_state = {
  success: false,
  error: false,
  loading: false,
}
export const packages = {
  namespaced: true,
  state: {
    travel_packages: [],
    packages_res_state,
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
    UPDATE_LOADING_STATE(state, apiState) {
      state.loading_state = apiState
    },
  },
  actions: {
    get_packages({ commit }, count) {
      commit('UPDATE_LOADING_STATE', {
        ...packages_res_state,
        loading: true,
      })
      return PackagesService.getPackages(count).then(
        (res) => {
          commit('PACKAGES_RESULTS', res.data)
          commit('UPDATE_LOADING_STATE', {
            ...packages_res_state,
            loading: false,
            success: true,
          })
          return Promise.resolve(res)
        },
        (error) => {
          commit('UPDATE_LOADING_STATE', {
            ...packages_res_state,
            error: true,
            loading: false,
            success: false,
          })
          return Promise.reject(error)
        }
      )
    },
  },
}
