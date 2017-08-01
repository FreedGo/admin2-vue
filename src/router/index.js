import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import Layout from '../components/layout/index.vue'
import login from '../components/session/login.vue'
import cookie from 'js-cookie';

Vue.use(Router);

var router = new Router({
	routes: [
		// {path: '/', name: 'Hello', component: Hello},
		{
			path: '/',
			component: Layout,
			redirect:'/home',
			children:[
				{
					path:'/home',
					component:home
				}
			]
		},
		{
			path:'/login',
			name:'login',
			component:login
		}
	],
});
router.beforeEach((to,from,next)=>{
	if (to.path === '/login'){
		next()
	}else {
		if (cookie.get('PHPSESSID')){
			next()
		}else{
			alert('您还没有登录');
			router.replace('/login')
		}
	}
})
export default router;
