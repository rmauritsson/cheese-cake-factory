import { combineReducers } from 'redux';
import catalogueReducer from './catalogueReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  catalogue: catalogueReducer,
  search: searchReducer,
});

export default rootReducer;
