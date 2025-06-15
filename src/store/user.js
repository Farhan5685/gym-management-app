// src/store/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  function setUser(userData) {
    user.value = userData
  }

  function clearUser() {
    user.value = null
  }

  function setPackage(pkg) {
    if (user.value) {
      user.value.package = pkg
    }
  }
//xhgexk is the user loggedin or not
  function addAttendanceRecord(record) {
    if (!user.value) return

    if (!user.value.attendance) {
      user.value.attendance = []
    }

    // Check if record for the date already exists to avoid duplicates
    const existingIndex = user.value.attendance.findIndex(r => r.date === record.date)
    if (existingIndex === -1) {
      user.value.attendance.push(record)
    }
  }

  function updateAttendanceRecord(date, updateData) {
    if (!user.value || !user.value.attendance) return

    const record = user.value.attendance.find(r => r.date === date)
    if (record) {
      Object.assign(record, updateData)///here rexord is for xrunt value and upodae is use to set new value
    }
  }

  return {
    user,
    setUser,
    clearUser,
    setPackage,
    addAttendanceRecord,
    updateAttendanceRecord,
  }
})
