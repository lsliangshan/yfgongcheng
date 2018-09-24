import Vue from 'vue'
import Router from 'vue-router'
import {
	BrowserUtil
} from '../utils/index'
let _isPc = BrowserUtil.isPc()
let _path = ''

Vue.use(Router)

export const HomeRouter = {
	path: '/',
	name: 'home',
	components: {
		HomeRouter: () =>
			import (`../components/${_isPc ? 'pc': 'm'}/Home.vue`)
	}
}

export default new Router({
	mode: 'history',
	routes: [
		HomeRouter
	]
})