import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './managements/stores'
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp(App)

app.use(router)
app.use(stores)
app.use(VueSweetalert2)

app.mount('#app')
