import React, {useEffect, useContext} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import Spinner from '../../components/shared/spinner/spinner.component'
import SingleProperty from '../../components/pages/app/property/single_property.component'

import UserContext from '../../context/user/userContext'
import PropertyContext from '../../context/property/propertyContext'
import AlertContext from "../../context/alert/alertContext"

const SinglePropertyContainer = () => {
  const {id} = useParams()
  const history = useHistory()

  const userContext = useContext(UserContext)
  const propertyContext = useContext(PropertyContext)
  const alertContext = useContext(AlertContext)

  const { user, token } = userContext
  const { property, message, isLoading, getProperty , deleteProperty} = propertyContext
  const { role } = user

  useEffect(()=>{
    // console.log(user)
    // console.log(token)
    if (token) {
      // console.log(preferences)
      getProperty(id, token)
    }
    
  }, [id])

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
    // console.log(statusCode)
    if (statusCode === 201 || statusCode === 200) {
      reRoute()
    }
  }

  const handleDelete = () => {
    console.log(id)
    deleteProperty(user, id, token, reRouteIfSuccess)
  }

  const button_props_delete = {
    variant: "delete-button",
    text: "Delete",
    type: "submit",
    onClick: handleDelete,
  }

  const propSent = {
    property,
    role,
    button_props_delete, 
    isLoading
  }
  if (isLoading){
    return (
      <div className="bg-gray-50 min-h-screen h-auto flex flex-col">
        <div className="container min-h-screen h-auto max-w-3xl mx-auto p-4">
          <div className="flex justify-between items-center h-16 mb-4">
            <Spinner/>
          </div>
        </div>
      </div>
    )
  } else if (Object.keys(property).length > 0){

    return (
        <SingleProperty  
          {...propSent} />
    )
  } else {
    
    if (token === null) {
      history.push("/")
    }
    return (
      <div className="bg-gray-50 min-h-screen h-auto flex flex-col">
        <div className="container min-h-screen h-auto max-w-3xl mx-auto p-4 flex justify-center items-center">
          <h3>None</h3>
        </div>
      </div>
    )
  }
}

export default SinglePropertyContainer
