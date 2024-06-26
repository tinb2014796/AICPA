//import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import route from './router';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas,faTwitter,faFontAwesome)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vuetify/dist/vuetify.min.css'
import { Bar, Line } from 'vue-chartjs'

const vuetify = createVuetify({
  components,
  directives,
})
createApp(App).use(vuetify).use(route).component('font-awesome-icon', FontAwesomeIcon).component('bar-chart', Bar).component('line-chart', Line).mount('#app')