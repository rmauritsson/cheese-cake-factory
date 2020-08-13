import { combineReducers } from 'redux';
import catalogueReducer from './catalogueReducer';

const rootReducer = combineReducers({
  catalogue: catalogueReducer,
});

export default rootReducer;
