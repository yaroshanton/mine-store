
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const contactsPersistConfig = {
  key: 'data',
  storage,
  blacklist: ['form', 'phones'],
};

const store = configureStore({
  reducer:
    persistReducer(contactsPersistConfig, rootReducer),
  devTools: process.env.NODE_ENV === 'development',

});

const persistor = persistStore(store);

export default { store, persistor };
