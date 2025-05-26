<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h2 class="mb-4 text-center">Sign Up</h2>
    <form @submit.prevent="handleSignup" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          required
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
          minlength="6"
        />
        <div class="form-text">Password must be at least 6 characters.</div>
      </div>

      <button type="submit" class="btn btn-primary w-100">Sign Up</button>

      <p v-if="error" class="text-danger mt-3 text-center">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)

const userStore = useUserStore()
const router = useRouter()

async function handleSignup() {
  error.value = null
  try {
    console.log("Signing up with email:", email.value)
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log("Signup success:", result.user)
    userStore.setUser(result.user)
    router.push('/package')  // changed redirect to package page as per your flow
  } catch (err) {
    console.error("Signup error:", err)
    error.value = err.message
  }
}
</script>
