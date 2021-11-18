import * as router from 'vue-router'

import home from '../pages/home.vue'
import about from '../pages/buy.vue'
import contact from '../pages/contact.vue'

const routes = [
    { path: '/', name: 'Home', component: home },
    { path: '/buy', name: 'About', component: about },
    { path: '/contact', name: 'Contact', component: contact }
]

const myRoutes = router.createRouter({
    history: router.createWebHashHistory(),
    routes
})

export default myRoutes