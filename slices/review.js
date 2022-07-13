import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviewPackageId: (state, action) => {
      return { package_id: action.payload._id };
    }
  }
});

const { reducer, actions } = reviewSlice;
export const { setReviewPackageId } = actions
export default reducer;