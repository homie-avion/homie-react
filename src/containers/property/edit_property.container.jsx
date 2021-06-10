import React, { useEffect, useContext} from 'react'
import {useHistory, useParams} from "react-router-dom";

import PropertyForm from '../../components/pages/app/property/property_form.component'

import PropertyContext from '../../context/property/propertyContext'
import UserContext from '../../context/user/userContext'
import AlertContext from "../../context/alert/alertContext";


const EditPropertyContainer = () => {
  
  const {id} = useParams()
  const history = useHistory()
  const userContext = useContext(UserContext)
  const propertyContext = useContext(PropertyContext)
  const alertContext = useContext(AlertContext)

  const { user, token } = userContext
  const { property, isLoading, getProperty, editProperty } = propertyContext

  useEffect(() => {
    if (Object.keys(property).length === 0){
      getProperty(id,token)
    }
  },[])
  
  const reRoute = () => {
    history.push(`/properties/${id}`)
  }

  const reRouteIfSuccess = (message, statusCode) => {
    if (message) {
      alertContext.setAlert({
        title: message.status,
        message: message.message,
      });
    }
    // console.log(statusCode)
    if (statusCode === 200) {
      reRoute()
    }
  }

  const handleSubmit = (e, data) => {
    e.preventDefault()
    
    const check_address = ["bldg_no", "street", "barangay", "city"]
    const filteredArray = Object.keys(data).filter(value => check_address.includes(value));

    if (Object.keys(data).length > 0  && filteredArray.length > 0) {
      data["complete_address"] =  ( data.bldg_no ? data.bldg_no : property.bldg_no ) + ", " + 
                                  ( data.street ? data.street : property.street ) + ", " + 
                                  ( data.barangay ? data.barangay : property.barangay ) + ", " + 
                                  ( data.city ? data.city : property.city )
    }
      
    // delete data.city
    console.log(data)

    editProperty(id, data, token, reRouteIfSuccess)

  }

  const button_props = {
    variant: "success-button",
    text: "Submit",
    type: "submit",
    onClick: null,
  };

  const propsSent = {
    mode : "edit",
    handleSubmit,
    isLoading,
    button_props,
    property
  };

  return (
    <PropertyForm 
      {...propsSent}
    />
  )
}

export default EditPropertyContainer
