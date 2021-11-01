import { createApp } from 'vue'
import App from './App.vue'
import BaseComponent from './components/global'
import "./assets/tailwind.css"


let app = createApp(App)
app.use(BaseComponent)
app.mount('#app')
