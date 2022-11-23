import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faInstagram, faBehance, faDribbble, faFlickr, faGit, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMagnifyingGlass, faBullhorn, faBriefcase, faDesktop, faEarthAfrica, faChevronLeft, faChevronRight, faWrench, faCartShopping, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark, faCalendarCheck, faClock, faLifeRing } from '@fortawesome/free-regular-svg-icons'

library.add(faTwitter, faInstagram, faBehance, faDribbble, faFlickr, faGit, faLinkedin, faPinterest, faBars, faMagnifyingGlass, faBullhorn, faBriefcase, faUser, faBookmark, faCalendarCheck, faEarthAfrica, faDesktop, faClock, faChevronLeft, faChevronRight, faLifeRing, faWrench, faMobileScreenButton, faCartShopping)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
