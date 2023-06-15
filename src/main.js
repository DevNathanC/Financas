import { createApp } from 'vue'
import App from './App.vue'
import './components/reset.css'
import router from './routes'


createApp(App).use(router).mount('#app')
