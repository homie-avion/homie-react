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
    if (token && user && Object.keys(preferences).length != 0) {
      // console.log(preferences)
      getProperties(user, page, preferences, token)
    }
    
  }, [preferences])

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [properties])

  return (

    <Property
      properties = {properties}
      isLoading = {isLoading}
      user = {user}
    />

  )
}

export default PropertyContainer
