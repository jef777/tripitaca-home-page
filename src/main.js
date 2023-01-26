import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

const app = createApp(App)
app.use(Vuex)
app.use(store)

app.mount('#app')
