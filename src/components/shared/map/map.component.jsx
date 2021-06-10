
import React, {useState} from 'react'

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
      variant: "success-button",
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
    <div>

      <div className = "flex justify-evenly">
        {
          choices.map((choice, key) => {
            return <Button key={key} {...button_props[choice]}/>
          })
        }
      </div>

      <MapWithMarkers 
        center={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
        zoom={16}
        apiKey={process.env.REACT_APP_GOOGLE_KEY}
        location={selectedChoice}
      />
    </div>
  
  )
}

export default MapComponent
