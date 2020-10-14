import { USER_LOGIN_SUCCESS } from '../constants/userConstants';

const INITIAL_STATE = {
  isAuthenticated: null,
  loading: true,
  user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    default:
      return state;
  }
};

export default userReducer;
