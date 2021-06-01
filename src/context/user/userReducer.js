import { SET_USER, SET_LOADING, SET_MESSAGE } from "../types";

const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.data.user,
        preferences: action.payload.data.preferences,
        token: action.payload.token,
        isLoading: false,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
