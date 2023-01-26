import { createStore } from 'vuex'
import { packages } from './packages.module'

const store = createStore({
  modules: {
    packages,
  },
})

export default store
