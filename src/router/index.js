import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import Navgation from '@/components/views/Navgation'
import Footer from '@/components/views/Footer'

Vue.use(Router)

export default new Router({

    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/first',
        name: 'First',
        component: First
    }, {
        path: '/second',
        name: 'Second',
        component: Second
    }, {
        path: '/navgation',
        name: 'Navgation',
        component: Navgation
    }, {
        path: '/footer',
        name: 'Footer',
        component: Footer
    }]
})