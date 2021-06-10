
import React, {useState, Fragment} from 'react'

import MapWithMarkers from './map.js'

import Button from '../../shared/button/button.component'

const MapComponent = (props) => {

  const { latitude, longitude } = props
  const [selectedChoice, setSelectedChoice] = useState("Location")
  const choices = ["Location","Amenities"]


  const handleClick = (e) => {
    setSelectedChoice(e.target.innerText)
  }

  const button_props = {
    "Location": {
      variant: "primary-button",
      text: "Location",
      type: "button",
      onClick: handleClick,
    },
    "Amenities": {
      variant: "success-button",
      text: "Amenities",
      type: "button",
      onClick: handleClick,
    }
  }
  return (
    <Fragment>

      <div className = "flex w-1/2 mb-2">
        
        <div className="mr-2">
          <Button {...button_props["Location"]}/>
        </div>
        <div className="mr-2">
          <Button {...button_props["Amenities"]}/>
        </div>
    
      </div>

      <MapWithMarkers 
        center={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
        zoom={16}
        location={selectedChoice}
      />
    </Fragment>
  
  )
}

export default MapComponent
