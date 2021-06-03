import { SET_PROPERTIES, SET_MESSAGE, SET_LOADING} from '../types';

const PropertyReducer = (state, action) => {
  switch (action.type){
    case SET_PROPERTIES:
      return {
        ...state,
        // properties : action.payload.data ? [] : [...state.properties, action.payload.data],
        properties : action.payload,
        isloading: false
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
      return state
  }
}

export default PropertyReducer