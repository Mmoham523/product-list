import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './assets/styles/reset.css'
import './assets/styles/variables.css'
import './assets/styles/main.css'
import App from './App.vue'


const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
