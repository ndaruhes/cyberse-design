import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Aos
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init({
//     duration: 500,
// });

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@popperjs/core"

// FullPage
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

import Mixins from '@/mixins'


createApp(App).use(VueFullPage).use(store).use(router).mixin(Mixins).mount('#app')