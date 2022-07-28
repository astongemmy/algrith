import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL

const confirmPayment = async ({ user_id = '', reference = '' }) => {
  const response = await axios.post(`${API_URL}payment/confirm/`, {user_id, reference})
  if (response.data.status) return response.data
}

const paymentService = {
  confirmPayment
}

export default paymentService;