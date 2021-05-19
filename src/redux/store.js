
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const contactsPersistConfig = {
  key: 'data',
  storage,
  blacklist: ['phones'],
};

const store = configureStore({
  reducer:
    persistReducer(contactsPersistConfig, rootReducer, applyMiddleware(thunk)),
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
