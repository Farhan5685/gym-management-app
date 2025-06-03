   <template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      
      <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
      
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
      
            <input v-model="email" type="email" class="form-control" placeholder="email" required />
      
          </div>
          <div class="mb-3">
      
            <input v-model="password" type="password" class="form-control" placeholder="Password" required />
          </div>
  
          <div class="d-flex justify-content-between align-items-center mb-3">
      
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe" />
              <label class="form-check-label" for="rememberMe">Remember Me</label>
            </div>
            <a href="#" @click.prevent="handleForgotPassword" class="text-decoration-none">Fogot Password?</a>
          </div>
  
          <button type="submit" class="btn btn-primary w-100">Login</button>
  
          <div v-if="error" class="alert alert-danger mt-3 p-2" role="alert">
            {{ error }}
          </div>
  
          <div v-if="message" class="alert alert-success mt-3 p-2" role="alert">
            {{ message }}
          </div>
        </form>
  
        <div class="text-center mt-3">
          <p class="mb-1">Don't have an account?</p>
          <router-link to="/signup" class="btn btn-success w-100">Sign Up</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref }from 'vue'
    import { auth }from '../firebase'
  import {
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail
  } from 'firebase/auth'
    import { useUserStore } from '../store/user'
        import { useRouter } from 'vue-router'
  
  const email = ref('')
      const password=ref('')
    const rememberMe=ref(false)
  const error =ref(null)
  const message =ref(null)
  
  const userStore =useUserStore()
    const router=useRouter()
  
  async function handleLogin() {
    error.value =null
    message.value =null
  
    const persistence=rememberMe.value ? browserLocalPersistence : browserSessionPersistence
  
    try{
      await setPersistence(auth, persistence)
      const result=await signInWithEmailAndPassword(auth, email.value, password.value)
      userStore.setUser(result.user)
      router.push('/package')
    } catch (err) {
      error.value=err.message
    }
  }
  
  async function handleForgotPassword() {
    error.value = null
    message.value = null
  
    if (!email.value) {
      error.value = 'Please enter your email address first.'
      return
    }
  
    try {
      await sendPasswordResetEmail(auth, email.value)
      message.value = 'Password reset email sent. Check your inbox.'
    } catch (err) {
      error.value = err.message
    }
  }
  </script>
  