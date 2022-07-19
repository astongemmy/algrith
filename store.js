import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistStore } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import authReducer from './slices/auth';
import messageReducer from './slices/message';
import reviewReducer from './slices/review';
import checkoutReducer from './slices/checkout';
import productReducer from './slices/product'
import feedbackReducer from './slices/feedback'
import validationReducer from './slices/validation'

const reducers = combineReducers({
  auth: authReducer,
  message: messageReducer,
  review: reviewReducer,
  checkout: checkoutReducer,
  product: productReducer,
  feedback: feedbackReducer,
  validation: validationReducer
})

const config = getPersistConfig({
  key: 'root',
  storage,
  blacklist: ['feedback', 'message', 'validation'],
  rootReducer: reducers
})

const persistedReducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
  devTools: true,
})
const persistor = persistStore(store)
module.exports = { store, persistor }