import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify, {
  lang: {
    locales: { zhHans },
    current: 'zh-Hans'
  },
  theme: {
    primary: '#000',
    done: '#4caf50'
  }
})
