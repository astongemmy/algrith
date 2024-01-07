import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  autoHide: true,
  message: ''
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertMessage: (state, { payload: { message, autoHide = true } }) => {
      return {
        ...state,
        autoHide,
        message,
      };
    },
    clearAlertMessage: (state) => {
      state.message = '';
    },
  },
});

const { reducer, actions } = alertSlice;

export const {
  clearAlertMessage,
  setAlertMessage
} = actions;

export default reducer;