import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './slices';
import rootSaga from './sagas';

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware:any) => 
    getDefaultMiddleware({
      thunk: false, // Disable the thunk middleware
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware)
  ,
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;