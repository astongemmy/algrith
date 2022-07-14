import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const validationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setValidationError: (state, action) => {
      return { ...action.payload }
    },
    clearValidationError: () => {
      return {};
    },
  },
});

const { reducer, actions } = validationSlice;
export const { setValidationError, clearValidationError } = actions
export default reducer;