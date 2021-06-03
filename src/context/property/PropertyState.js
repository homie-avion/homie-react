import {useReducer} from "react";

import PropertyContext from './propertyContext'
import PropertyReducer from './propertyReducer'

import {SET_PROPERTIES, SET_MESSAGE, SET_LOADING} from '../types'

import url from "../url";

const PropertyState = (props) => {
  const initialState = {
    properties: [],
    message: false,
    isLoading: false,
  }

  const [state, dispatch] = useReducer(PropertyReducer, initialState)
  // .city_id%255B%255D=1&city_id%255B%255D=2&property_type_id=&rent_id=1731&stay_period_id=987?page=1
  const getProperties = async(page, preferences, token) => {
    setIsLoading();

    let query_params_input = Object.keys(preferences).map((key) => {
      return {[key+"_id"] : preferences[key]}
    })
    const query_params = new URLSearchParams({...query_params_input, page:page})
    console.log(`${url}/recommendations?${query_params}`)
    let res ;
    try {
      res = await fetch(`${url}/recommendations?${query_params}`,{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    console.log(result)
    dispatch({
      type: SET_PROPERTIES,
      payload: result.data
    })

  }

  const setMessage = (data) => {
    dispatch({ type: SET_MESSAGE, payload: data });
  };

  // set loading to true
  const setIsLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const clearMessage = () => {
    dispatch({ type: SET_MESSAGE, payload: null });
  };

  return (
    <PropertyContext.Provider
      value= {{
        properties: state.properties,
        message: state.message,
        isLoading: state.isLoading,
        getProperties,
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  )
}

export default PropertyState;