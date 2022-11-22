import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faBehance, faDribbble, faFlickr, faGit, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMagnifyingGlass, faBullhorn, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'

library.add(faTwitter, faInstagram, faBehance, faDribbble, faFlickr, faGit, faLinkedin, faPinterest, faBars, faMagnifyingGlass, faBullhorn, faBriefcase, faUser, faBookmark)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
