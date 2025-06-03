<template>
    <div class="container py-5 max-w-md mx-auto">
      <h2 class="mb-4 text-center">Attendance Check-In / Check-Out</h2>
      <div class="text-center space-y-4">
        <button
          class="btn btn-success"
          :disabled="checkedIn"
          @click="checkIn"
        >
          Check In
        </button>
        <button
          class="btn btn-danger"
          :disabled="!checkedIn || checkedOut"
          @click="checkOut"
        >
          Check Out
        </button>
        <div v-if="checkedIn && !checkedOut">
          Checked in at: {{ formatTime(checkInTime) }}
        </div>
        <div v-if="checkedOut">
          Checked out at: {{ formatTime(checkOutTime) }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/store/user'
  
  const router = useRouter()
  const userStore = useUserStore()
  
  const today = new Date().toISOString().slice(0, 10) // 'YYYY-MM-DD'
  
  const attendanceToday = computed(() => {
    if (!userStore.user?.attendance) return null
    return userStore.user.attendance.find(a => a.date === today) || null
  })
  
  const checkedIn = computed(() => !!attendanceToday.value?.checkInTime)
  const checkedOut = computed(() => !!attendanceToday.value?.checkOutTime)
  
  const checkInTime = attendanceToday.value?.checkInTime || null
  const checkOutTime = attendanceToday.value?.checkOutTime || null
  
  function formatTime(isoStr) {
    if (!isoStr) return ''
    const d = new Date(isoStr)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  
  function checkIn() {
    const now = new Date().toISOString()
    userStore.addAttendanceRecord({
      date: today,
      checkInTime: now,
      checkOutTime: null,
    })
  }
  
  function checkOut() {
    const now = new Date().toISOString()
    userStore.updateAttendanceRecord(today, {
      checkOutTime: now,
    })
    router.push('/dashboard')
  }
  </script>
  