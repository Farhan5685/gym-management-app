// src/auth.js
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useUserStore } from './store/user'

export function initAuthListener() {
  const userStore = useUserStore()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Restore minimal user info
      userStore.setUser({
        email: user.email,
        uid: user.uid
        // add more fields if needed
      })
    } else {
      userStore.clearUser()
    }
  })
}
