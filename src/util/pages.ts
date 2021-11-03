import * as router from 'vue-router'

import home from '../pages/home.vue'
import about from '../pages/buy.vue'

const routes = [
    { path: '/', name: 'Home', component: home },
    { path: '/buy', name: 'About', component: about },
]

const myRoutes = router.createRouter({
    history: router.createWebHashHistory(),
    routes
})

export default myRoutes