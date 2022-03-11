import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'

const app = createApp(App)
app.component('date-picker', Datepicker)
app.use(router)
app.mount('#app')
