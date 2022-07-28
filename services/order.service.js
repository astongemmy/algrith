import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL

const placeOrder = async (payload) => {
  const response = await axios.post(`${API_URL}orders`, {...payload})
  if (response.data.status) return response.data
}

const orderService = {
  placeOrder
}

export default orderService;