import React, {useState, useContext} from 'react'
import { useHistory} from "react-router-dom";

import PropertyForm from '../../components/pages/app/property/property_form.component'

import PropertyContext from '../../context/property/propertyContext'
import UserContext from '../../context/user/userContext'
import AlertContext from "../../context/alert/alertContext";


const CreatePropertyContainer = () => {

  const history = useHistory()
  const userContext = useContext(UserContext)
  const propertyContext = useContext(PropertyContext)
  const alertContext = useContext(AlertContext)

  const {user, token} = userContext
  const { isLoading, createProperty } = propertyContext
  
  const reRoute = () => {
    history.push("/properties")
  }

  const reRouteIfSuccess = (message, statusCode) => {
    if (message) {
      alertContext.setAlert({
        title: message.status,
        message: message.message,
      });
    }

    if (statusCode === 201) {
      reRoute()
    }
  }

  const handleSubmit = (e, data) => {

    e.preventDefault()
    data["user_id"] = user.id
    data["complete_address"] = data.bldg_no + "," + data.street + "," + data.barangay + "," + data.city
    
    // delete data.city
    console.log(data)

    createProperty(user, data, token, reRouteIfSuccess)

  }

  const button_props = {
    variant: "success-button",
    text: "Submit",
    type: "submit",
    onClick: null,
  };

  const propsSent = {
    handleSubmit,
    isLoading,
    button_props
  };

  return (
    <PropertyForm 
      {...propsSent}
    />
  )
}

export default CreatePropertyContainer
