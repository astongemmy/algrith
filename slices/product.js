import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductService from '../services/product.service'

export const getProducts = createAsyncThunk(
  '/products',
  async (query, thunkAPI) => {
    try {
      const { data } = await ProductService.getProducts(query)
      return { products: data.filter(product => product.published) }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

export const getProduct = createAsyncThunk(
  '/products/:id',
  async ({ id, query }, thunkAPI) => {
    try {
      const { data } = await ProductService.getProduct(id, query)
      return { product: data.filter(product => product.published)[0] }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

export const getProductsFromInterface = createAsyncThunk(
  '/products',
  async (query, thunkAPI) => {
    try {
      const Interface = { products: [],error: false, isDataSet: false }
      const { status, data, error } = await ProductService.getProducts(query)
      if (error) Interface.error = true
      if (status && data.length) {
        Interface.products = data.filter(product => product.packages.length && product.published)
        Interface.products.forEach(product => {
          product.packages = product.packages.filter(_package => _package.published)
        })
        if (Interface.products.length) Interface.isDataSet = true
      }
      Interface.isLoading = !Interface.isDataSet && !Interface.products.length && !Interface.error
      Interface.isAvailable = Interface.isDataSet && Interface.products.length && !Interface.error
      Interface.isNotAvailable = Interface.isDataSet && !Interface.products.length && !Interface.error
      return { productInterface: Interface }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

export const getProductFromInterface = createAsyncThunk(
  '/products',
  async ({ id, query }, thunkAPI) => {
    try {
      const Interface = { product: {}, error: false, isDataSet: false }
      const { status, data, error } = await ProductService.getProduct(id, query)
      if (error) Interface.error = true
      if (status && Object.keys(data).length && data.packages.length && data.published) {
        Interface.product = data
        Interface.isDataSet = true
      }
      Interface.isLoading = !Interface.isDataSet && !Object.keys(Interface.product).length && !Interface.error
      Interface.isAvailable = Interface.isDataSet && Object.keys(Interface.product).length && !Interface.error
      Interface.isNotAvailable = Interface.isDataSet && !Object.keys(Interface.product).length && !Interface.error
      return { productInterface: Interface }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
  product: {},
  products: [],
  productInterface: {}
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products
    },
    setProduct: (state, action) => {
      state.product = action.payload.product
    },
    setProductInterface: (state, action) => {
      state.productInterface = action.payload
    }
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
    },
    [getProducts.rejected]: (state, action) => {
      state.products = [];
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload.product;
    },
    [getProduct.rejected]: (state, action) => {
      state.product = {};
    },
    [getProductsFromInterface.fulfilled]: (state, action) => {
      state.productInterface = action.payload.productInterface;
    },
    [getProductsFromInterface.rejected]: (state, action) => {
      state.productInterface = {};
    },
    [getProductFromInterface.fulfilled]: (state, action) => {
      state.productInterface = action.payload.productInterface;
    },
    [getProductFromInterface.rejected]: (state, action) => {
      state.productInterface = {};
    }
  }
})

const { reducer, actions } = productSlice;
export const { setProduct, setProducts, setProductInterface } = actions
export default reducer;