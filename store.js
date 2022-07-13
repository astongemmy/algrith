import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistStore } from 'redux-persist';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import authReducer from './slices/auth';
import messageReducer from './slices/message';
import reviewReducer from './slices/review';
import checkoutReducer from './slices/checkout';

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({
  auth: authReducer,
  message: messageReducer,
  review: reviewReducer,
  checkout: checkoutReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

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