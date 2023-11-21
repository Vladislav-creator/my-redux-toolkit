import { configureStore } from '@reduxjs/toolkit';
import  todoReducer  from './todoSlice';
export default configureStore ({
  reduser: {
todos: todoReducer,
  },

})
// import { filterReducer } from './filterSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const rootReducer = combineReducers({
//   todos: todoReducer,
//   // filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedRootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        
//       },
//     }),
// });

// export const persistor = persistStore(store);