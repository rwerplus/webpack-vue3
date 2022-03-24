import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// Create a vue instance
const app = createApp(App);

// Pass store to the app:
app.use(store);

// Pass router to the app:
app.use(router);

app.mount('#app');