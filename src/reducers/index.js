import photosReducer from './photos-reducer';
import quotesReducer from './quotes-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  photosReducer: photosReducer,
  quotesReducer: quotesReducer
});

export default rootReducer;