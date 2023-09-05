import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../slices/appSlices';
import localForage from 'localforage';
import { persistReducer, persistStore } from 'redux-persist'; // Import persistStore

const persistConfig = {
  key: 'myApp',
  storage: localForage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: {
    appReducer: persistedReducer,
  },
});

export const persistor = persistStore(store); // Export persistor