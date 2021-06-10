import React, { useState, Fragment } from 'react'
import {Link} from 'react-router-dom'
import Button from "../../../shared/button/button.component"

const PropertyForm = (props) => {

  const { mode, property, handleSubmit, isLoading, button_props } = props;
  

  const [data, setData] = useState({});
  
  
  const handleOnChange = (event) => {
    
    if (["city_id","property_type_id","stay_period_id"].includes(event.target.name)){
      // console.log(event.target.name, event.target.getAttribute("data-anchor"))
      setData(data => ({...data, [event.target.name] : parseInt(event.target.getAttribute("data-anchor"))}))
      
      if (event.target.name === "city_id"){
        const city_name = event.target.getAttribute("data-name")
        setData(data => ({...data, 
                          "city" : city_name
                        }))
        if (Object.keys(data).includes("latitude") === false || !data["latitude"]){
          setData(data => ({...data, 
            "latitude" : parseFloat(cities_info[city_name]["latitude"])
          }))
        }
        if (Object.keys(data).includes("longitude") === false || !data["longitude"]){
          setData(data => ({...data,
            "longitude" : parseFloat(cities_info[city_name]["longitude"])
          }))
        }
      }
      
    } else{
      if (event.target.type === "number") {
        
        setData(data => ({...data, [event.target.name] : parseInt(event.target.value)}))
      } else {
        setData(data => ({...data,  [event.target.name] : event.target.value }))
      }
      
      if (event.target.name === "rent_price"){
        setData(data => ({...data, "rent_id": detect_price_id(parseFloat(event.target.value))}))
      }
      
    }
    console.log(event.target.name, event.target.value)      
    console.log(data)      
  }

  const detect_price_id = (price) => {
    if (price < 10001) {
      return 1
    } else if ( price < 15001 ){
      return 2
    } else if ( price < 20001 ){
      return 3
    } else {
      return 4
    }
  }

  const cities = ["Quezon City", "Makati City", "Mandaluyong City",
                  "San Juan City", "Taguig City", "Pasig City",
                  "Marikina City", "Parañaque City", "Pasay City",
                  "Manila City"]

  const cities_info = {
    "Quezon City" : { latitude: 14.6760, longitude: 121.0437}, 
    "Makati City" : { latitude: 14.5547, longitude: 121.0244},
    "Mandaluyong City" : { latitude: 14.5794, longitude: 121.0359},
    "San Juan City" : { latitude: 14.6019, longitude: 121.0355},
    "Taguig City" : { latitude: 14.5176, longitude: 121.0509},
    "Pasig City" : { latitude: 14.5764, longitude: 121.0851},
    "Marikina City" : { latitude: 14.6507, longitude: 121.1029},
    "Parañaque City" : {latitude: 14.4793, longitude: 121.0198},
    "Pasay City" : { latitude: 14.5378, longitude: 121.0014},
    "Manila City" : { latitude: 14.5995, longitude: 120.9842}
  }
  const property_type = ["Condominium", "Townhouse", "Dormitory"]
  const stay_period = ["Up to 6 months", "Maximum of 1 year"]

  return (
    <div className="bg-gray-50 min-h-screen h-auto flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="leading-loose">
          <form 
            onSubmit={(e) =>
              handleSubmit(e, data)
            }
            autoComplete="off"
            className=" m-4 lg:p-10 p-6 bg-white rounded shadow-xl">
            <h2 className="text-2xl font-bold">Property Info</h2>
            <div className="mt-4">
              <label className="block text-sm text-gray-900" htmlFor="name">Name</label>
              <input 
                className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                id="name" 
                name="name" 
                type="text" 
                required={ mode === "create"}
                onChange = {(e) => handleOnChange(e) }
                placeholder={property ? property.name :"i.e. John Doe's Dormitory"}
                aria-label="name"
                // value={data.name ? data.name : undefined}
                />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-900" htmlFor="rent_price">Rent per month in PHP</label>
              <input 
                className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                id="rent_price" 
                name="rent_price" 
                type="number" 
                step="0.01"
                required={ mode === "create"}
                onChange = {(e) => handleOnChange(e) }
                placeholder={property ? property.rent_price : "0.00"} 
                aria-label="rent_price"
                // value={data.rent_price ? data.rent_price : undefined}
                />
            </div>
            
            <div className="flex mt-4">
              <div className="mr-1 w-1/2">
                <label className=" block text-sm text-gray-900" htmlFor="tenant_count">No. of tenant / property</label>
                <input 
                  className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                  id="tenant_count" 
                  name="tenant_count" 
                  type="number" 
                  required = { mode === "create"}
                  onChange = {(e) => handleOnChange(e) }
                  placeholder={property ? property.tenant_count : "1"} 
                  aria-label="tenant_count"
                  // value={data.tenant_count ? data.tenant_count : undefined}
                  />
              </div>
              <div className="ml-1 w-1/2">
                <label className="block text-sm text-gray-900" htmlFor="property_count">No. of units or properties</label>
                <input 
                  className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                  id="property_count"  
                  name="property_count" 
                  type="number" 
                  required = { mode === "create"}
                  onChange = {(e) => handleOnChange(e) }
                  placeholder={property ? property.property_count : "1"} 
                  aria-label="property_count"
                  // value={data.property_count ? data.property_count : undefined}
                  />
              </div>
            </div>


            <div className="mt-4">
              <label className=" block text-sm text-gray-900" htmlFor="bldg_no">Address</label>
              <input 
                className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                id="bldg_no" 
                name="bldg_no" 
                type="text" 
                required = { mode === "create"}
                onChange = {(e) => handleOnChange(e) }
                placeholder={property ? property.bldg_no : "Bldg No."} 
                aria-label="bldg_no"
                // value={data.bldg_no ? data.bldg_no : undefined}
                />
            </div>
            <div className="mt-2">
              <label className="hidden text-sm block text-gray-900" htmlFor="street">Street</label>
              <input 
                className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                id="street" 
                name="street" 
                type="text" 
                required = { mode === "create"}
                onChange = {(e) => handleOnChange(e) }
                placeholder={property ? property.street : "Street"} 
                aria-label="street"
                // value={data.street ? data.street : undefined}
                />
            </div>
            <div className="mt-2">
              <label className="hidden text-sm block text-gray-900" htmlFor="barangay">barangay</label>
              <input 
                className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                id="barangay" 
                name="barangay" 
                type="text" 
                required = { mode === "create"}
                onChange = {(e) => handleOnChange(e) }
                placeholder={property ? property.barangay : "Barangay"}  
                aria-label="barangay"
                // value={data.barangay ? data.barangay : undefined}
                />
            </div>

            <p className=" block text-sm text-gray-900 mt-4" htmlFor="bldg_no">Coordinates in Decimal Degrees</p>
            <div className=" flex">
              <div className="mr-1 w-1/2">
                <label className="hidden block text-sm text-gray-900" htmlFor="latitude">Latitude</label>
                <input 
                  className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                  id="latitude" 
                  name="latitude" 
                  type="number" 
                  onChange = {(e) => handleOnChange(e) }
                  placeholder={property ? property.latitude :  "Latitude (N)"}
                  aria-label="latitude"
                  // value={data.latitude ? data.latitude : undefined}
                  />
              </div>
              <div className="ml-1 w-1/2">
                <label className="hidden block text-sm text-gray-900" htmlFor="longitude">Longitude</label>
                <input 
                  className="w-full px-2 py-1 font-light text-gray-700 bg-gray-100 rounded" 
                  id="longitude"  
                  name="longitude" 
                  type="number" 
                  onChange = {(e) => handleOnChange(e) }
                  placeholder={property ? property.longitude :"Longitude (E)"}
                  aria-label="longitude"
                  // value={data.longitude ? data.longitude : undefined}
                  />
              </div>
            </div>
            <p className=" block text-sm text-gray-400" htmlFor="bldg_no">*Coordinates are optional. It will be defaulted to city municipality coordinates if left blank. Visit this 
            <span ><a className="text-blue-600" target="_blank" href="https://www.latlong.net/"> site</a></span> to determine the property coordinates.</p>

            <div className="mt-4">
              <p className="text-sm block text-gray-900" >City</p>
              {
                cities.map((city, index) => {
                  let index1 = index + 1
                
                  return (
                    <div key={index1}
                      className = "ml-4"
                      >
                      <input 
                          type="radio" 
                          id={"city_id"+index1}
                          data-anchor={index1}
                          data-name={city}
                          name="city_id" 
                          required= {mode === "create" && index1 === 1}
                          checked={ property  && (index1 === property.city_id ? true : false) }
                          onChange={(e) => handleOnChange(e)}
                      />
                      <label className="text-gray-500 text-sm mb-8" htmlFor={"city_id"+index1}>  {city}</label>
                      <br/>
                    </div>
                  )

                })
              }
            </div>

            <div className="mt-4">
              <p className="text-sm block text-gray-900">Property Type</p>
              {
                property_type.map((property_local, index) => {
                  let index1 = index + 1
                
                  return (
                    
                    <div key={index1}
                      className = "ml-4"
                      >
                      <input 
                          type="radio" 
                          id={"property_type_id"+index1}
                          data-anchor={index1}
                          name="property_type_id" 
                          required={mode === "create" && index1 === 1}
                          checked={ property  && (index1 === property.property_type_id ? true : false) }
                          onChange={(e) => handleOnChange(e)}
                      />
                      <label className="text-gray-500 text-sm mb-8" htmlFor={"property_type_id"+index1}>  {property_local}</label>
                    </div>
                
                  )

                })
              }
            </div>

            <div className="mt-4">
              <p className="text-sm block text-gray-900">Length of Stay</p>
              {
                stay_period.map((stay, index) => {
                  let index1 = index + 1
                
                  return (
                    <div key={index1}
                    className = "ml-4"
                      >
                      <input 
                          type="radio" 
                          id={"stay_period_id"+index1}
                          data-anchor={index1}
                          name="stay_period_id" 
                          required={mode === "create" && index1 === 1}
                          checked={ property  && (index1 === property.stay_period_id ? true : false) }
                          onChange={(e) => handleOnChange(e)}
                      />
                      <label className="text-gray-500 text-sm mb-8" htmlFor={"stay_period_id"+index1}>  {stay}</label>
                    </div>
                  )

                })
              }
            </div>



            
            <div className="lg:mt-10 mt-6">
              {
                // <button className="px-4 py-1 text-white tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                mode === "create" ?
                  <Button {...button_props} isLoading={isLoading} />
                : 
                  <Fragment>
                    <Link 
                      to={`/properties/${data.id}`}
                      >
                      <button className="flex justify-center items-center w-full text-center px-4 py-3 rounded bg-gray-400 text-white hover:bg-gray-500 focus:outline-none my-1">
                        Cancel
                      </button>
                    </Link>
                    <Button {...button_props} isLoading={isLoading} />
                  </Fragment>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PropertyForm
