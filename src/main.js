import Vue from 'vue'
import './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/store'
import './plugins/vuetify'
import axios from 'axios'
import jsSHA from 'jssha/src/sha1'

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';
Vue.prototype.$hash = (password) => {
  const HASH = new jsSHA('SHA-1', 'TEXT');
  HASH.update(password);
  return HASH.getHash('HEX')
};

import App from './App'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
