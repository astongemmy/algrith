import { setAuth } from '../slices/auth'
import { store } from '../store'

export default function getAuthHeader() {
  const token = store.getState()?.auth?.user?.access_token
  if (token) return { Authorization: `Bearer ${token}` }
  return store.dispatch(setAuth({ user: null, isLoggedIn: false }))
}