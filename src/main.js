// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Notifications from 'vue-notification'
import App from './App'
import LeanixVuePlugin from './plugins/LeanixVuePlugin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faSyncAlt, faExternalLinkAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TableComponent from 'vue-tabl'

library.add(faDownload)
library.add(faSyncAlt)
library.add(faExternalLinkAlt)
library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(LeanixVuePlugin)
Vue.use(Notifications)
Vue.use(TableComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
