import {useReducer} from "react";

import PropertyContext from './propertyContext'
import PropertyReducer from './propertyReducer'

import {SET_PROPERTIES, SET_PROPERTY, SET_MESSAGE, SET_LOADING} from '../types'

import url from "../url";

const PropertyState = (props) => {
  const initialState = {
    page : null,
    properties: [],
    property_id: null,
    property: {},
    message: false,
    isLoading: false,
  }

  const [state, dispatch] = useReducer(PropertyReducer, initialState)
  // .city_id%255B%255D=1&city_id%255B%255D=2&property_type_id=&rent_id=1731&stay_period_id=987?page=1
  const getProperties = async(page, preferences, token) => {
    setIsLoading();

    let f_preferences = {}
    for (const key in preferences){
      if (preferences[key].length === 0) {
        continue
      } else {
        f_preferences[key+"_id"] = preferences[key]
      }
    }

    f_preferences = {...f_preferences, page: page}
    console.log(f_preferences)
    console.log(`${url}/recommendations$`)
    let res ;
    try {
      res = await fetch(`${url}/recommendations`,{
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(f_preferences),
      })
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    console.log(result)
    dispatch({
      type: SET_PROPERTIES,
      payload: {
        page: page,
        data: result.data
      }
    })

  }

  const getProperty = async(id, token) => {
    setIsLoading();

    console.log(`${url}/recommendations`)
    let res ;
    try {
      res = await fetch(`${url}/property/${id}`,{
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
    } catch (error) {
      console.log(error);
    }

    const result = await res.json();
    console.log(result)
    dispatch({
      type: SET_PROPERTY,
      payload: {
        id: id,
        data: result.data
      }
    })
  }

  const unsetProperties = () => {
    dispatch({ type: SET_PROPERTIES, payload: {data: [], page: null} });
    dispatch({ type: SET_PROPERTY, payload:  {data: {}, id: null} });
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
        page: state.page,
        properties: state.properties,
        property_id: state.property_id,
        property: state.property,
        message: state.message,
        isLoading: state.isLoading,
        getProperties,
        getProperty,
        unsetProperties
      }}
    >
      {props.children}
    </PropertyContext.Provider>
  )
}

export default PropertyState;