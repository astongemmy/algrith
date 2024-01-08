import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

import alertReducer from './slices/alert';

const reducers = combineReducers({
  alert: alertReducer
});

const config = getPersistConfig({
  blacklist: ['alert'],
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