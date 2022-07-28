import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import OrderService from '../services/order.service'
import { setFeedback, setFeedbackObject } from './feedback'

export const placeOrder = createAsyncThunk(
  'order/create',
  async (payload, thunkAPI) => {
    try {
      const { data } = await OrderService.placeOrder(payload)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject('Order placed successfully!', 'success'))
      thunkAPI.dispatch(setFeedback({ target: 'order_placement', feedback: feedbackObject }))
      return { order: data }
    } catch (error) {
      const { message } = errorProcessor(error)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
      thunkAPI.dispatch(setFeedback({ target: 'order_placement', feedback: feedbackObject }))
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
  orders: [],
  order: {},
  isLoading: false
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => {
      return {
        order: action.payload.order,
        orders: action.payload.orders
      }
    }
  },
  extraReducers: {
    [placeOrder.pending]: (state, action) => { state.isLoading = true },
    [placeOrder.rejected]: (state, action) => { state.isLoading = false },
    [placeOrder.fulfilled]: (state, action) => {
      state.order = action.payload.order
      state.isLoading = false
    },
  }
});

const { reducer, actions } = orderSlice;
export const { setOrder } = actions
export default reducer;