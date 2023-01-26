import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

//Bootstrap 5 resources
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

//custom style sheet
import './style.css'

const app = createApp(App)
app.use(Vuex)
app.use(store)

app.mount('#app')
