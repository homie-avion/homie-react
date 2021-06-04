import React, {useEffect, useState, useContext} from 'react'

import Property from '../../components/pages/app/property/property.component'

import UserContext from '../../context/user/userContext'
import PropertyContext from '../../context/property/propertyContext'

const PropertyContainer = () => {
  const[page, setPage] = useState(1)

  const userContext = useContext(UserContext)
  const propertyContext = useContext(PropertyContext)

  const {user, preferences, token} = userContext
  const {properties, message, isLoading, getProperties } = propertyContext

  useEffect(()=>{
    // console.log(user)
    // console.log(token)
    if (token && Object.keys(preferences).length != 0) {
      // console.log(preferences)
      getProperties(page, preferences,token)
    }
    
  }, [preferences])

  return (

    <Property
      properties = {properties}
    />

  )
}

export default PropertyContainer
