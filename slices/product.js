import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductService from '../services/product.service'
import { errorProcessor } from '../utils/errorProcessor'
import { setFeedback, setFeedbackObject } from './feedback'

export const getProducts = createAsyncThunk(
  '/products',
  async (query, thunkAPI) => {
    try {
      let publishedProducts;
      const products = await ProductService.getProducts(query)
      if (products.length) {
        publishedProducts = products.filter(product => product.packages.length && product.published)
      }
      if (publishedProducts.length) {
        publishedProducts.products.forEach(product => {
          product.packages = product.packages.filter(_package => _package.published)
        })
      }
      return { products: publishedProducts }
    } catch (error) {
      const { message } = errorProcessor(error)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
      thunkAPI.dispatch(setFeedback({ target: 'products', feedback: feedbackObject }))
      return thunkAPI.rejectWithValue();
    }
  }
)

export const getProduct = createAsyncThunk(
  '/products/:id',
  async ({ id, query }, thunkAPI) => {
    try {
      const product = await ProductService.getProduct(id, query)
      const publishedProduct = [product].filter(product => product.published)[0]
      if (Object.keys(publishedProduct).length) return { product: publishedProduct }
      return { product: {} }
    } catch (error) {
      const { message } = errorProcessor(error)
      const feedbackObject = thunkAPI.dispatch(setFeedbackObject(message, 'error'))
      thunkAPI.dispatch(setFeedback({ target: 'product', feedback: feedbackObject }))
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
  product: {},
  products: [],
  isLoading: false 
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => { state.products = action.payload.products },
    setProduct: (state, action) => { state.product = action.payload.product },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => { state.isLoading = true },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false
    },
    [getProducts.rejected]: (state, action) => {
      state.products = [];
      state.isLoading = false
    },

    [getProduct.pending]: (state, action) => { state.isLoading = true },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload.product;
      state.isLoading = false
    },
    [getProduct.rejected]: (state, action) => {
      state.product = {};
      state.isLoading = false
    }
  }
})

const { reducer, actions } = productSlice;
export const { setProduct, setProducts } = actions
export default reducer;