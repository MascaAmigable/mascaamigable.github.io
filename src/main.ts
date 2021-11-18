import { createApp } from 'vue'
import app from './app.vue'

import router from './util/pages'

const project = createApp(app)
project.use(router)
project.mount('#app')