import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dialog_loading: false,
        drawer_left: true,
        snackbar: {
            show: false,
            type: null,
            message: null,
            timeout: 1000
        }
    },
    mutations: {
        message({snackbar}, {show = true, type, message}) {
            snackbar.show = show;
            snackbar.type = type;
            snackbar.message = message
        }
    },
    actions: {

    }
})
