import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import PaymentService from '../services/payment.service'
import { setFeedback, setFeedbackObject } from './feedback'
import { errorProcessor } from '../utils/errorProcessor'


export const confirmPayment = createAsyncThunk(
  'payment/confirm',
  async ({user_id, reference}, thunkAPI) => {
    try {
      const { data } = await PaymentService.confirmPayment({user_id, reference})
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Payment confimed successfully!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'confirm_payment', feedback: feedbackObject }))
      return { confirmed: data.status }
    } catch (error) {
      const { message, type, data } = errorProcessor(error)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
      thunkAPI.dispatch(setFeedback({ target: 'confirm_payment', feedback: feedbackObject }))
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
  _package: {},
  requirements: {},
  confirmed: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckout: (state, action) => {
      return {
        _package: action.payload._package,
        requirements: action.payload.requirements
      }
    }
  },
  extraReducers: {
    [confirmPayment.pending]: (state, action) => { state.isLoading = true },
    [confirmPayment.rejected]: (state, action) => { state.isLoading = false },
    [confirmPayment.fulfilled]: (state, action) => {
      state.confirmed = action.payload.confirmed
      state.isLoading = false
    },
  }
});

const { reducer, actions } = checkoutSlice;
export const { setCheckout } = actions
export default reducer;