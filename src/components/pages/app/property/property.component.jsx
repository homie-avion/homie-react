import React from 'react'
import PropertyList from './property_list.component'
const Property = (props) => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      <div className="container h-screen max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold">Recommendations</h1>
          
        </div>
        <PropertyList {...props}/>
      </div>
    </div>
  )
}

export default Property
