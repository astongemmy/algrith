import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

import validationReducer from './slices/validation';
import checkoutReducer from './slices/checkout';
import feedbackReducer from './slices/feedback';
import messageReducer from './slices/message';
import productReducer from './slices/product';
import reviewReducer from './slices/review';
import alertReducer from './slices/alert';
import authReducer from './slices/auth';

const reducers = combineReducers({
  validation: validationReducer,
  feedback: feedbackReducer,
  checkout: checkoutReducer,
  product: productReducer,
  message: messageReducer,
  review: reviewReducer,
  alert: alertReducer,
  auth: authReducer
});

const config = getPersistConfig({
  blacklist: ['feedback', 'message', 'validation', 'alert'],
  rootReducer: reducers,
  key: 'root',
  storage,
});

const persistedReducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
      ],
    }
  }),
  devTools: true
});

const persistor = persistStore(store);

module.exports = { store, persistor };