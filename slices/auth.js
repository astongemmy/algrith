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
      const forgot_password = await AuthService.forgotPassword({ email })
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
      const resend_verification = await AuthService.resendVerificationEmail({ email })
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
      const reset_password = await AuthService.resetPassword({ id, token, password, confirm_password })
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
      const { message, type, data } = errorProcessor(error)
      if (type === 'validation') {
        thunkAPI.dispatch(setValidationError(data))
      } else {
        const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
        thunkAPI.dispatch(setFeedback({ target: 'verification', feedback: feedbackObject }))
      }
      return thunkAPI.rejectWithValue();
    }
  }
)

export const logout = () => {
  return async (dispatch, getState) => {
    try {
      const accessToken = getState()?.auth?.user?.access_token
      const authHeader = { Authorization: `Bearer ${accessToken}` }
      await AuthService.logout(authHeader)
      const feedbackObject = dispatch(setFeedbackObject('Logged out!', 'success'))
      dispatch(setFeedback({ target: 'login', feedback: feedbackObject }))
      dispatch(setAuth({ user: null, isLoggedIn: false }))
    } catch (error) {
      const feedbackObject = dispatch(setFeedbackObject('Logged out!', 'success'))
      dispatch(setFeedback({ target: 'login', feedback: feedbackObject }))
      dispatch(setAuth({ user: null, isLoggedIn: false }))
    }
  }
}

const initialState = { isLoggedIn: false, user: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return { user: action.payload.user, isLoggedIn: action.payload.isLoggedIn };
    }
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = action.payload.user;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [resetPassword.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  }
})

const { reducer, actions } = authSlice;
export const { setAuth } = actions
export default reducer;