<!-- <template>
    <nav class="navbar">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
      <router-link to="/package">Package</router-link>
      <router-link to="/attendance">Attendance</router-link>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    gap: 20px;
    padding: 10px;
    background-color: #f3f3f3;
  }
  .router-link-active {
    font-weight: bold;
    color: #42b983;
  }
  </style>
   -->
   <template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand">Fit Pro GYm</router-link>
  
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link
                to="/dashboard"
                class="nav-link"
                :class="{ active: isActive('/dashboard') }"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item" v-if="user">
              <router-link
                to="/package"
                class="nav-link"
                :class="{ active: isActive('/package') }"
                >Package</router-link
              >
            </li>
            <li class="nav-item" v-if="user">
              <router-link
                to="/attendance"
                class="nav-link"
                :class="{ active: isActive('/attendance') }"
                >Attendance</router-link
              >
            </li>
            <li class="nav-item" v-if="!user">
              <router-link
                to="/login"
                class="nav-link"
                :class="{ active: isActive('/login') }"
                >Login</router-link
              >
            </li>
            <li class="nav-item" v-if="!user">
              <router-link
                to="/signup"
                class="nav-link"
                :class="{ active: isActive('/signup') }"
                >Signup</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useUserStore } from '../store/user'
  import { useRoute } from 'vue-router'
  
  const userStore = useUserStore()
  const route = useRoute()
  
  const user = computed(() => userStore.user)
  
  // Helper to add 'active' class based on current route path
  function isActive(path) {
    return route.path === path
  }
  </script>
  