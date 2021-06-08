import React from 'react'

import PropertyCard from './property_card.component'
const PropertyList = ({properties , user}) => {

  // const { properties } = props
  if (properties.length != 0){
    return (
      <div className="">
        {
          properties.map((property,index) => (
            // console.log(single_journal)
            // console.log(index)
            // console.log(property)
            <PropertyCard key={index} property={property} user={user}/>
          ))
        }
      </div>
    )
  } else {
    return (
      <div>
      None
      </div>
    )
  }
}

export default PropertyList
