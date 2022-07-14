import { createSlice } from "@reduxjs/toolkit";

export const setFeedbackObject = (message, type) => {
  return { message, type }
}

const initialState = {};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    setFeedback: (state, action) => {
      state[action.payload.target] = action.payload.feedback
    },
    clearFeedback: () => {
      return {};
    },
  },
});

const { reducer, actions } = feedbackSlice;
export const { setFeedback, clearFeedback } = actions
export default reducer;