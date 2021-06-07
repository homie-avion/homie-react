import { SET_PROPERTIES, SET_PROPERTY, SET_MESSAGE, SET_LOADING} from '../types';

const PropertyReducer = (state, action) => {
  switch (action.type){
    case SET_PROPERTIES:
      return {
        ...state,
        // properties : action.payload.data ? [] : [...state.properties, action.payload.data],
        page: action.payload.page,
        properties : action.payload.data,
        isloading: false
      };
    case SET_PROPERTY:
      return {
        ...state,
        property_id: action.payload.id,
        property: action.payload.data,
        isloading: false
      }
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