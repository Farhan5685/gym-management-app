import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// ✅ Import the auth state listener
import { initAuthListener } from './auth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// ✅ Call the auth state listener (must be after Pinia is set up)
initAuthListener()

app.mount('#app')
