import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import heroesReducer from './heroes/heroesSlice';
import currentHeroReducer from './currentHero/currentHeroSlice';

// root Reducer
const rootReducer = combineReducers({
  heroes: heroesReducer,
  currentHero: currentHeroReducer,
});

// Redux store
const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(logger, thunk),
);

export default store;
