export default function apiClient() {
  const registerUser = async (payload) => {
    try {
      const res = await window.axios.post(process.env.NEXT_PUBLIC_API_URL + 'auth/register', payload)
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

  const authenticateUser = async (payload) => {
    try {
      const res = await window.axios.post(process.env.NEXT_PUBLIC_API_URL + 'auth/login', payload)
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

  const passwordResetRequest = async (payload) => {
    try {
      const res = await window.axios.post(process.env.NEXT_PUBLIC_API_URL + 'auth/forgot-password', payload)
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
  
  const resendVerificationEmail = async (payload) => {
    try {
      const res = await window.axios.post(process.env.NEXT_PUBLIC_API_URL + 'auth/resend-verification-token', payload)
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
  
  const resetPassword = async (payload, { id, token }) => {
    try {
      const res = await window.axios.post(process.env.NEXT_PUBLIC_API_URL + 'auth/reset-password/' + id + '/' + token, payload)
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
  
  const verifyUser = async ({ id, token }) => {
    try {
      const res = await window.axios.get(process.env.NEXT_PUBLIC_API_URL + 'auth/verify/' + id + '/' + token)
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
    registerUser,
    authenticateUser,
    passwordResetRequest,
    resetPassword,
    verifyUser,
    resendVerificationEmail
  }
}