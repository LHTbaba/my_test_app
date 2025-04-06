import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
import share from "./utils/share.js"
Vue.config.productionTip = false
App.mpType = 'app'
Vue.mixin(share)
const app = new Vue({
	...App,
	share
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
