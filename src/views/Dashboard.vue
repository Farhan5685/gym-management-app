
<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow p-4 w-100" style="max-width: 500px;">
        <h1 class="text-center mb-4">Dashboard</h1>
        <p v-if="user" class="text-center text-muted">
          Logged in as: <strong>{{ user.email }}</strong>
        </p>
        <p v-else class="text-center text-warning">Please login to see your data.</p>
        <div class="text-center mt-4">
          <button
            v-if="user"
            @click="logout"
            class="btn btn-danger px-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useUserStore } from '../store/user'
  import { auth } from '../firebase'
  import { signOut } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  
  const userStore = useUserStore()
  const router = useRouter()
  
  const { user } = userStore
  
  async function logout() {
    await signOut(auth)
    userStore.clearUser()
    router.push('/login')
  }
  </script>
  