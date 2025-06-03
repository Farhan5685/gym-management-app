<template>
    <div class="container py-5">
      <h1 class="mb-4 text-center">Choose Your Package</h1>
      <div class="row g-4 justify-content-center">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="col-12 col-sm-6 col-md-4"
        >
          <div
            class="card h-100 shadow-sm"
            role="button"
            @click="selectPackage(pkg)"
          >
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ pkg.name }}</h5>
              <p class="card-text text-muted">{{ pkg.duration }}</p>
              <h3 class="mt-auto">{{ pkg.price }}</h3>
              <button
                class="btn btn-primary mt-3"
                @click.stop="selectPackage(pkg)"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/store/user'
  
  const router = useRouter()
  const userStore = useUserStore()
  
  const packages = ref([
    { id: 1, name: 'Basic Plan', duration: '1 Month', price: '$30' },
    { id: 2, name: 'Pro Plan', duration: '3 Months', price: '$80' },
    { id: 3, name: 'Elite Plan', duration: '6 Months', price: '$150' },
  ])
  
  function selectPackage(pkg) {
    userStore.setPackage(pkg)
    router.push('/attendance')
  }
  </script>
  
  <style scoped>
  .card {
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  </style>
  