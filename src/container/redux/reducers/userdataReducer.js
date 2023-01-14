import {USER_DATA_ADDED} from '../action_types';

const initialState = {
  userData: '',
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_ADDED:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
