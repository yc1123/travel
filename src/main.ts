import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import './registerServiceWorker'
import './styles/border.css'
import './styles/normalize.css'

Vue.config.productionTip = false
fastclick(document.body, {
	touchBoundary: 10,
	tapDelay: 5
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
