import DestinationsService from '../services/destinations.service'
const destinations_res_state = {
  success: false,
  error: false,
  loading: false,
}
export const destinations = {
  namespaced: true,
  state: {
    travel_destinations: [],
    destinations_res_state,
  },
  getters: {
    travel_destinations: (state) => {
      return state.travel_destinations
    },
  },
  mutations: {
    PACKAGES_RESULTS(state, data) {
      state.travel_destinations = data
    },
    UPDATE_LOADING_STATE(state, apiState) {
      console.log('apiState', apiState)
      state.loading_state = apiState
    },
  },
  actions: {
    get_destinations({ commit }, count) {
      commit('UPDATE_LOADING_STATE', {
        ...destinations_res_state,
        loading: true,
      })
      return DestinationsService.getDestinations(count).then(
        (res) => {
          commit('PACKAGES_RESULTS', res.data)
          commit('UPDATE_LOADING_STATE', {
            ...destinations_res_state,
            loading: false,
            success: true,
          })
          return Promise.resolve(res)
        },
        (error) => {
          commit('UPDATE_LOADING_STATE', {
            ...destinations_res_state,
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
