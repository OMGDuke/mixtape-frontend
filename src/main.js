import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/fontawesome-free-brands';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueFire from 'vuefire';

import App from './App.vue';
import router from './router';

import './registerServiceWorker';

library.add(faSpotify);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueFire);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
