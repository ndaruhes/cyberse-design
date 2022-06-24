import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

// FullPage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'


createApp(App).use(VueFullPage).use(store).use(router).mount('#app')
