<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow p-4 w-100" style="max-width: 600px;">
      <h1 class="text-center mb-4">Dashboard</h1>

      <p v-if="user" class="text-center text-muted mb-1">
        Logged in as: <strong>{{ user.email }}</strong>
      </p>

      <div v-if="user">
        <p><strong>Package:</strong> {{ user.package?.name || 'No package selected' }}</p>
        <p><strong>Attendance this month:</strong> {{ attendanceDays }}</p>
        <p><strong>Total time spent in gym:</strong> {{ formatDuration(totalDuration) }}</p>

        <h5 class="mt-4">Recent Attendance</h5>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rec in recentAttendance" :key="rec.date">
              <td>{{ rec.date }}</td>
              <td>{{ formatTime(rec.checkInTime) }}</td>
              <td>{{ formatTime(rec.checkOutTime) }}</td>
              <td>{{ formatDuration(getDuration(rec)) }}</td>
            </tr>
          </tbody>
        </table>

        <div class="text-center mt-4">
          <button @click="logout" class="btn btn-danger px-4">
            Logout
          </button>
        </div>
      </div>

      <p v-else class="text-center text-warning">Please login to see your data.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/user'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const { user } = userStore

function logout() {
  signOut(auth).then(() => {
    userStore.clearUser()
    router.push('/login')
  })
}

function formatTime(isoStr) {
  if (!isoStr) return '-'
  const d = new Date(isoStr)
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function getDuration(rec) {
  if (!rec.checkInTime || !rec.checkOutTime) return 0
  return new Date(rec.checkOutTime) - new Date(rec.checkInTime)
}

function formatDuration(ms) {
  if (!ms || ms <= 0) return '-'
  const totalMinutes = Math.floor(ms / (1000 * 60))
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h ${minutes}m`
}

// Filter attendance for current month
const now = new Date()
const currentYear = now.getFullYear()
const currentMonth = now.getMonth()

const attendanceThisMonth = computed(() => {
  if (!user?.attendance) return []
  return user.attendance.filter((rec) => {
    const d = new Date(rec.date)
    return d.getFullYear() === currentYear && d.getMonth() === currentMonth
  })
})

const attendanceDays = computed(() => attendanceThisMonth.value.length)

const totalDuration = computed(() => {
  return attendanceThisMonth.value.reduce((acc, rec) => {
    const dur = getDuration(rec)
    return acc + dur
  }, 0)
})

const recentAttendance = computed(() => {
  // Show last 5 records in descending date order
  return attendanceThisMonth.value
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 5)
})
</script>
