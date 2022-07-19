import axios from 'axios'
import getAuthHeader from './auth-header'
import { formQueryUsingParams } from '../utils/formQueryParams'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const getProducts = async (query = {}) => {
  const queryString = Object.keys(query).length ? formQueryUsingParams(query) : ''
  const response = await axios.get(`${API_URL}products/${queryString}`)
  if (response.data.status) return response.data
}

const getProduct = async (id, query) => {
  const queryString = query ? formQueryUsingParams(query) : ''
  const response = await axios.get(`${API_URL}products/${id}/${queryString}`)
  if (response.data.status) return response.data
}

const createProduct = async (payload) => {
  const response = await axios.post(`${API_URL}products`, payload, {
    headers: getAuthHeader()
  })
  if (response.data.status) return response.data
}

const productService = {
  getProducts,
  getProduct,
  createProduct
}

export default productService;