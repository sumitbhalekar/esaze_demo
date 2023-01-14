import {combineReducers} from 'redux';
import userDataReducer from './userdataReducer';

const rootReducer = combineReducers({
  userData: userDataReducer,
});

export default rootReducer;
