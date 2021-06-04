import React from 'react'

import PropertyCard from './property_card.component'
const PropertyList = ({properties}) => {

  // const { properties } = props
  return (
    <div className="">
      {
        properties.map((property,index) => (
          // console.log(single_journal)
          // console.log(index)
          // console.log(property)
          <PropertyCard key={index} property={property}/>
        ))
      }
    </div>
  )
}

export default PropertyList
