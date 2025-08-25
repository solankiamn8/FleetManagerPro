import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api.js'

const AuthCtx = createContext(null)
export const useAuth = () => useContext(AuthCtx)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'))

  useEffect(() => {
    if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    else delete api.defaults.headers.common['Authorization']
  }, [token])

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    setToken(data.token)
    setUser(data.user)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }
  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload)
    setToken(data.token)
    setUser(data.user)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  }
  const logout = () => {
    setToken(null); setUser(null)
    localStorage.removeItem('token'); localStorage.removeItem('user')
  }

  return <AuthCtx.Provider value={{ token, user, login, register, logout }}>{children}</AuthCtx.Provider>
}
