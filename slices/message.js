import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload.message, type: action.payload.type };
    },
    clearMessage: () => {
      return { message: '', type: '' };
    },
  },
});

const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions
export default reducer;