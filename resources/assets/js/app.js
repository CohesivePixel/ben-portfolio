import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

require('assets/scss/main.scss');

Event = new Vue();

export let common = {
    active: 0,
    complete: 6,
    vertical: 0,
    colour: {
      vibrant: '',
      lightVibrant: '',
      lightMuted: ''
    }
};

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
