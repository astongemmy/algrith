import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../services/auth.service'
import { setFeedback, setFeedbackObject } from './feedback'
import { setValidationError } from './validation'
import { errorProcessor } from '../utils/errorProcessor'

export const register = createAsyncThunk(
  'auth/register',
  async ({ first_name, last_name, email, password }, thunkAPI) => {
    try {
      const register = await AuthService.register({ first_name, last_name, email, password })
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Registration successful!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'register', feedback: feedbackObject }))
      return { user: register.data }
    } catch (error) {
      const { message, type, data } = errorProcessor(error)
      if (type === 'validation') {
        thunkAPI.dispatch(setValidationError(data))
      } else {
        const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
        thunkAPI.dispatch(setFeedback({ target: 'register', feedback: feedbackObject }))
      }
      return thunkAPI.rejectWithValue();
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const auth = await AuthService.authenticate({ email, password })
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Logged in!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'login', feedback: feedbackObject }))
      return { user: auth.data }
    } catch (error) {
      const { message, type, data } = errorProcessor(error)
      if (type === 'validation') {
        thunkAPI.dispatch(setValidationError(data))
      } else {
        const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
        thunkAPI.dispatch(setFeedback({ target: 'login', feedback: feedbackObject }))
      }
      return thunkAPI.rejectWithValue();
    }
  }
)

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async ({ email }, thunkAPI) => {
    try {
      await AuthService.forgotPassword({ email })
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Password reset email sent!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'forgot_password', feedback: feedbackObject }))
    } catch (error) {
      const { message, type, data } = errorProcessor(error)
      if (type === 'validation') {
        thunkAPI.dispatch(setValidationError(data))
      } else {
        const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
        thunkAPI.dispatch(setFeedback({ target: 'forgot_password', feedback: feedbackObject }))
      }
      return thunkAPI.rejectWithValue();
    }
  }
)

export const resendVerificationEmail = createAsyncThunk(
  'auth/resend-verification',
  async ({ email }, thunkAPI) => {
    try {
      await AuthService.resendVerificationEmail({ email })
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Verification email sent!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'resend_verification', feedback: feedbackObject }))
    } catch (error) {
      const { message, type, data } = errorProcessor(error)
      if (type === 'validation') {
        thunkAPI.dispatch(setValidationError(data))
      } else {
        const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
        thunkAPI.dispatch(setFeedback({ target: 'resend_verification', feedback: feedbackObject }))
      }
      return thunkAPI.rejectWithValue();
    }
  }
)

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async ({ id, token, password, confirm_password }, thunkAPI) => {
    try {
      await AuthService.resetPassword({ id, token, password, confirm_password })
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Password reset successful!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'reset_password', feedback: feedbackObject }))
    } catch (error) {
      const { message, type, data } = errorProcessor(error)
      if (type === 'validation') {
        thunkAPI.dispatch(setValidationError(data))
      } else {
        const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
        thunkAPI.dispatch(setFeedback({ target: 'reset_password', feedback: feedbackObject }))
      }
      return thunkAPI.rejectWithValue();
    }
  }
)

export const verifyUser = createAsyncThunk(
  'auth/verify',
  async ({ id, token }, thunkAPI) => {
    try {
      let feedbackObject = thunkAPI.dispatch(setFeedbackObject('Processing verification request...', 'pending'))
      thunkAPI.dispatch(setFeedback({ target: 'verification', feedback: feedbackObject }))      
      const verification = await AuthService.verifyUser({ id, token })
      feedbackObject = thunkAPI.dispatch(setFeedbackObject(verification.message, 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'verification', feedback: feedbackObject }))
    } catch (error) {
      const { message } = errorProcessor(error)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
      thunkAPI.dispatch(setFeedback({ target: 'verification', feedback: feedbackObject }))
      return thunkAPI.rejectWithValue();
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState()?.auth?.user?.access_token
      const authHeader = { Authorization: `Bearer ${accessToken}` }
      await AuthService.logout(authHeader)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Logged out!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'login', feedback: feedbackObject }))
    } catch (error) {
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Logged out!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'login', feedback: feedbackObject }))
      return thunkAPI.rejectWithValue();
    }
  }
)

const resetAll = (state) => {
  state.isLoggedIn = false
  state.isLoading = false
  state.user = null
}

const setUserOnly = (state, action) => {
  state.user = action.payload.user
  state.isLoggedIn = false
  state.isLoading = false
}

const setAllAndResetIsLoading = (state, action) => {
  state.user = action.payload.user
  state.isLoggedIn = true
  state.isLoading = false
}

const initialState = { isLoggedIn: false, user: null, isLoading: false }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return { user: action.payload.user, isLoggedIn: action.payload.isLoggedIn };
    }
  },
  extraReducers: {
    [register.pending]: (state, action) => { state.isLoading = true },
    [register.fulfilled]: (state, action) => { setUserOnly(state, action) },
    [register.rejected]: (state, action) => { resetAll(state) },

    [login.pending]: (state, action) => { state.isLoading = true },
    [login.fulfilled]: (state, action) => { setAllAndResetIsLoading(state, action) },
    [login.rejected]: (state, action) => { resetAll(state) },
    
    [logout.pending]: (state, action) => { state.isLoading = true },
    [logout.fulfilled]: (state, action) => { resetAll(state) },
    [logout.rejected]: (state, action) => { resetAll(state) },
    
    [resetPassword.pending]: (state, action) => { state.isLoading = true },
    [resetPassword.fulfilled]: (state, action) => { resetAll(state) },
    [resetPassword.rejected]: (state, action) => { resetAll(state) }
  }
})

const { reducer, actions } = authSlice;
export const { setAuth } = actions
export default reducer;