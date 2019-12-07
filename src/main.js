import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import storeOptions from './store/store.js'
import firebase from 'firebase'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(Vuex)
Vue.use(VueAwesomeSwiper, {})
const store = new Vuex.Store(storeOptions);

var firebaseConfig = {
  apiKey: "AIzaSyDaCptLooeTs5ETjv4as21RqFSoTmOS6vQ",
  authDomain: "kodilan-d27d8.firebaseapp.com",
  databaseURL: "https://kodilan-d27d8.firebaseio.com",
  projectId: "kodilan-d27d8",
  storageBucket: "kodilan-d27d8.appspot.com",
  messagingSenderId: "823323015050",
  appId: "1:823323015050:web:750b8811779a2ee59c3a73",
  measurementId: "G-9HLTRX6QG3"
};
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
