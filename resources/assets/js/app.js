// DONE: Create forward- aand backward buttons
// TODO: Mobile Version
// DONE: Fix swapping-resize bug on chrome
// DONE: Determine aspect ratio, set globally and define components based on that
// LEAVE IT: Add SVG to Mobile
// DONE: Remove Ben-Ey from mobile
// DONE: Add title and text to mobile
// TODO: Add social icons to mobile
// DONE: Set slide correctly when switching from landscape to portrait
// TODO: Loading screen {use plugin for that}
// DONE: Fix animations

import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

require('assets/scss/main.scss');

Event = new Vue();

export let common = {
    active: 0,
    complete: 6,
    vertical: 0,
    portrait: false,
    mobileTextHeight: 0,
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
