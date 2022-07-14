import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL

const register = async ({ first_name, last_name, email, password }) => {
  const response = await axios.post(`${API_URL}auth/register`, {
    first_name,
    last_name,
    email,
    password,
  })
  if (response.data.status) return response.data
}

const authenticate = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}auth/login`, {
    email,
    password
  })
  if (response.data.status) return response.data
}

const forgotPassword = async ({ email }) => {
  const response = await axios.post(`${API_URL}auth/forgot-password`, { email })
  if (response.data.status) return response.data
}

const resendVerificationEmail = async ({ email }) => {
  const response = await axios.post(`${API_URL}auth/resend-verification-token`, { email })
  if (response.data.status) return response.data
}

const resetPassword = async ({ id, token, password, confirm_password}) => {
  const response = await axios.post(`${API_URL}auth/reset-password/${id}/${token}`, {
    password,
    confirm_password
  })
  if (response.data.status) return response.data
}

const verifyUser = async ({ id, token }) => {
  const response = await axios.get(`${API_URL}auth/verify/${id}/${token}`)
  if (response.data.status) return response.data
}

const logout = async (authHeader) => {
  const response = await axios.get(`${API_URL}auth/logout`, {
    headers: authHeader
  })
  if (response.data.status) return response.data
}

const authService = {
  register,
  authenticate,
  forgotPassword,
  resendVerificationEmail,
  resetPassword,
  verifyUser,
  logout
}

export default authService;