import axios from 'axios'
import getAuthHeader from "./auth-header";
import { errorProcessor } from "../utils/errorProcessor";
import { formQueryUsingParams } from "../utils/formQueryParams";

const API_URL = process.env.NEXT_PUBLIC_API_URL

const getProducts = async (query = {}) => {
  const queryString = Object.keys(query).length ? formQueryUsingParams(query) : ''
  try {
    const res = await axios.get(`${API_URL}products/${queryString}`)
    if (res.data.status) {
      return {
        status: true,
        message: res.data.message,
        data: res.data.data
      }
    }
  } catch (error) {
    return errorProcessor(error)
  }
}

const getProduct = async (id, query) => {
  const queryString = query ? formQueryUsingParams(query) : ''
  try {
    const res = await axios.get(`${API_URL}products/${id}/${queryString}`)
    if (res.data.status) {
      return {
        status: true,
        message: res.data.message,
        data: res.data.data
      }
    }
  } catch (error) {
    return errorProcessor(error)
  }
}

const createProduct = async (payload) => {
  try {
    const res = await axios.post(`${API_URL}products`, payload, {
      headers: getAuthHeader()
    })
    if (res.data.status) {
      return {
        status: true,
        message: res.data.message,
        data: res.data.data
      }
    }
  } catch (error) {
    return errorProcessor(error)
  }
}

const productService = {
  getProducts,
  getProduct,
  createProduct
}

export default productService;