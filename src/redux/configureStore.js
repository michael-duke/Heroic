import {
  getDefaultMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import heroesReducer from './heroes/heroesSlice';

// root Reducer
const rootReducer = combineReducers({
  heroes: heroesReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store;
