<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">Fit Pro Gym</router-link>

      <button
        class="navbar-toggler"
        type="button"
        :class="{ collapsed: !isNavVisible }"
        @click="toggleNavbar"
        aria-controls="navbarNav"
        :aria-expanded="isNavVisible.toString()"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        :class="{ show: isNavVisible }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              to="/dashboard"
              class="nav-link"
              :class="{ active: isActive('/dashboard') }"
              @click="closeNavbar"
            >Dashboard</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link
              to="/package"
              class="nav-link"
              :class="{ active: isActive('/package') }"
              @click="closeNavbar"
            >Package</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link
              to="/attendance"
              class="nav-link"
              :class="{ active: isActive('/attendance') }"
              @click="closeNavbar"
            >Attendance</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link
              to="/login"
              class="nav-link"
              :class="{ active: isActive('/login') }"
              @click="closeNavbar"
            >Login</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link
              to="/signup"
              class="nav-link"
              :class="{ active: isActive('/signup') }"
              @click="closeNavbar"
            >Signup</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../store/user'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const route = useRoute()

const user = computed(() => userStore.user)
const isNavVisible = ref(false)

function toggleNavbar() {
  isNavVisible.value = !isNavVisible.value
}

function closeNavbar() {
  isNavVisible.value = false
}

function isActive(path) {
  return route.path === path
}
</script>
