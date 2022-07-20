// 需要引入的路由对象模块
import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../pages/Home/Home.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
import Login from "../pages/Search/Subcomponents/Login/Login.vue"


// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 注
    // 1.配置所有（多个）路由   所以routes
    // 2.路由什么类型  对象类型
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () =>
                import ('../pages/Home/Home'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: () =>
                import ('../pages/Order/Order'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: () =>
                import ('../pages/Profile/Profile'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: () =>
                import ('../pages/Search/Search'),
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: () =>
                import ('../pages/Search/Subcomponents/Login/Login'),
        }
    ]
})