import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'

import SingleProperty from '../../components/pages/app/property/single_property.component'

import UserContext from '../../context/user/userContext'
import PropertyContext from '../../context/property/propertyContext'


const SinglePropertyContainer = () => {
  const {id} = useParams()
  const userContext = useContext(UserContext)
  const propertyContext = useContext(PropertyContext)

  const {token} = userContext
  const {property, message, isLoading, getProperty} = propertyContext
  
  useEffect(()=>{
    // console.log(user)
    // console.log(token)
    if (token) {
      // console.log(preferences)
      getProperty(id, token)
    }
    
  }, [id])

  if (Object.keys(property).length > 0){

    return (
      <SingleProperty  property = {property}/>
    )
  } else {
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
