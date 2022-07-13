import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _package: {},
  requirements: {}
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
  }
});

const { reducer, actions } = checkoutSlice;
export const { setCheckout } = actions
export default reducer;