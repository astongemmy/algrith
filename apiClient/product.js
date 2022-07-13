const axios = require('axios');

export default function apiClient() {
  const getProducts = async (query = {}) => {
    let query_string = Object.keys(query).length ? formQueryUsingParams(query) : ''
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'products/' + query_string)
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
    let query_string = query ? formQueryUsingParams(query) : ''
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'products/' + id + '/' + query_string)
      if (res.data.status) {
        return {
          status: true,
          message: res.data.message,
          data: res.data.data
        }
      }
    } catch (error) {
      console.log(error)
      // return errorProcessor(error)
    }
  }

  const formQueryUsingParams = (params) => {
    let query_string
    if (Object.keys(params).length) {
      query_string = Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')
    }
    return `?${query_string}`
  }  
  
  const errorProcessor = (error) => {
    const { message, data } = error?.response?.data
    const errorObject = { status: false, message }
    if (message.toLowerCase().includes('validation')) {
      errorObject.data = {
        validationError : { ...flattenObject(extractFieldAndMessage(data)) }
      }
      return errorObject
    } else {
      errorObject.data = {}
      return errorObject
    }
  }
  const extractFieldAndMessage = (data) => {
    return data.map(field => {
      const fieldObject = {}
      fieldObject[field.param] = field.msg
      return fieldObject
    })
    
  }
  const flattenObject = (obj) => {
    return Object.assign(
      {},
      ...function _flatten(o) {
        return [].concat(...Object.keys(o)
          .map(k =>
            typeof o[k] === 'object' ?
              _flatten(o[k]) :
              ({ [k]: o[k] })
          )
        );
      }(obj)
    )
  }

  return {
    getProducts,
    getProduct
  }
}