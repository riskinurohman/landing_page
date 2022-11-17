import Vue from 'vue'
import App from './App.vue'
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "primevue/resources/themes/lara-light-purple/theme.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import PrimeVue from 'primevue/config'
Vue.use(PrimeVue)

import InputText from "primevue/inputtext"
Vue.component("InputText", InputText)

import Rating from 'primevue/rating'
Vue.component("Rating", Rating)

import Button from "primevue/button"
Vue.component("Button", Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
