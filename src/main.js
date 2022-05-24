import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
.use(Quasar)
.use(router)
.mount('#app')
