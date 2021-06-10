/*global google*/
import React, { useState,useEffect } from "react";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript
} from '@react-google-maps/api';


// const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh"
};

const lib = ["places"];



const MapWithMarkers = (props) =>{

  const types = ["Medical", "School", "Grocery"]
  const {zoom, center, apiKey, location} = props
  const [coordsResult, setCoordsResult] = useState({"Amenities" : []})

  useEffect(()=>{
    console.log(coordsResult)
  }, [coordsResult])

  const onMapLoad = (map) => {
    // let coords = []

      var targetLocation = new google.maps.LatLng(center.lat, center.lng)
      let coords = {};
      for (const type of types) {

        console.log(type)
        coords[type] = []
        let request = {
          location:targetLocation,
          radius:1000,
          types: [type]
          // query: "hospital",
          // fields: ["name", "geometry"]
        };
        // console.log(center.lat, map.center.lat())
        let service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              coords[type].push(results[i]);
            }
            setCoordsResult(coordsResult => ( { Amenities : coordsResult["Amenities"].concat(coords[type])}))
          }
        });
      }

    }


  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      libraries={lib}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        onLoad={map => onMapLoad(map)}
      >
        {
          location === "Location" &&
            <Marker
              key={"center"}
              position={center}
            />
        }

        {
          location === "Amenities" &&
            
              coordsResult["Amenities"].map((marker,i) => (
                <Marker
                  key={i}
                  position={marker.geometry.location}
                
                  icon={{
                    url: marker.icon,
                    origin: new window.google.maps.Point(0, 0),
                    // anchor: new window.google.maps.Point(15, 15),
                    scaledSize: new window.google.maps.Size(30, 30),
                  }}
                >
                {

                  // <InfoWindow 
                  //   options={{ maxWidth: 300 }}
                  //   position={marker.geometry.location}
                  //   style={{backgroundColor: "transparent"}}
                  //   >
                    
                  //       <span>{marker.name}</span>
                      
                  // </InfoWindow>
                }
                </Marker>
            ))
      }
      </GoogleMap>
    </LoadScript>
  )
  
  
}

export default MapWithMarkers;