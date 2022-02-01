import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import appReducer from './reducer';
import logger from 'redux-logger';

const myMiddleware = store => next => action => {
  console.log('My middleware!', action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddleware,
  logger,
];

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   app: persistReducer(persistConfig, appReducer),
// });


const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);