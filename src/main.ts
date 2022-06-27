import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { I18nInstall } from '@/i18n/I18nInstall'

const bootstrap = async () => {
  // Create a vue instance
  const app = createApp(App)

  // Pass store to the app:
  app.use(store)

  // Pass router to the app:
  app.use(router)

  // create i18n
  await I18nInstall(app)

  app.mount('#app')
}

bootstrap();
