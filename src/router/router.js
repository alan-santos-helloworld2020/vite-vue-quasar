import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../pages/Home.vue'
import Sobre from '../pages/Sobre.vue'

const routes = [
    { path: '/',name:"Home", component: Home },
    { path: '/sobre',name:"Sobre", component: Sobre },
    
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


  export default router;