import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add()

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
