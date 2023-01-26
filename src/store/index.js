import { createStore } from 'vuex'
import { packages } from './packages.module'
import { destinations } from './destinations.module'

const store = createStore({
  modules: {
    packages,
    destinations,
  },
})

export default store
