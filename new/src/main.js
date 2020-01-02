import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'amfe-flexible'
import $ from 'jquery'
import axios from 'axios'
Vue.prototype.$axios = axios
// 滑动时间
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import { Button } from 'cube-ui'
import Vant from 'vant';
import 'vant/lib/index.css';
import {Toast} from 'vant';
import { Sticky } from 'vant';
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex';
import store from './vuex/store'
Vue.use(Vuex);
Vue.use(Mint);
Vue.use(Toast);
Vue.use(Sticky);
Vue.use(Vant);

Vue.use(Button)

new Vue({
  router,
  // sto,
  store,
  render: h => h(App)
}).$mount('#app')
