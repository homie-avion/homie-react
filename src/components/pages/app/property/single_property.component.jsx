import React, { useState } from 'react'
import Button from '../../../shared/button/button.component'

import MapComponent from '../../../shared/map/map.component'

const SingleProperty = ({property , role , button_props_delete, isLoading}) => {
  const {
    id,
    name,
    rent_price,
    tenant_count,
    property_count,
    bldg_no,
    street,
    barangay,
    complete_address,
    picture_urls,
    latitude,
    longitude,
    like_count,
    watch_list_count,
    homie_value,
    cost_living_index,
    flood_index,
    posted,
    user_id,
    city_id,
    rent_id,
    stay_period_id,
    property_type_id,
    created_at,
    updated_at,
  } = property;
  // const 
  
  const [picNo, setPicNo] = useState(1)
  // console.log(picture_urls)

  var formatter = Intl.NumberFormat('en-US')

  const city_name =
    complete_address.split(", ")[complete_address.split(", ").length - 1];

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e.target.attributes["data-target"].value)
    setPicNo(parseInt(e.target.attributes["data-target"].value))
    
    // console.log(picNo, e.target.attributes["data-target"].value)
  }


  return (
    <div className="bg-gray-50 min-h-screen h-auto flex flex-col">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4 mb-10">
          <div className="md:flex-1 px-4">
            <div 
              x-data="{ image: 1 }" 
              // x-cloak
              >
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <img
                  src={
                    `https://picsum.photos/id/${id + picNo}/640/360.jpg`
                  }
                  alt="random"
                  className="bg-no-repeat bg-center w-full h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
                />
              </div>

              <div className="flex -mx-2 mb-4">
              
              {
                picture_urls.map((value, index) =>{
                  console.log(index, picNo)
                  return (<div key={index + 1} className="flex-1 px-2">
                      <button 
                        style={{backgroundImage:`url(https://picsum.photos/id/${ id + index + 1}/186/128.jpg)`}}
                        // x-on:click="image = i" :className="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" 
                        onClick = {(e) => handleClick(e)}
                        data-target={index + 1}
                        className={"bg-no-repeat bg-center focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center " +
                          (picNo === (index + 1) ? "ring-4 ring-indigo-400 ring-inset" : "")}
                        >
                      </button>
                    </div>)
                    
                  })
                }
                
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4 ">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{name}</h2>
            <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">{name.split("'")[0]}</a></p>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">&#8369;</span>
                  <span className="font-bold text-indigo-600 text-3xl">{formatter.format(rent_price)} / mo</span>
                </div>
              </div>
              {
                // <div className="flex-1">
                //   <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                //   <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                // </div>

              }
            </div>

            <p className="text-gray-500 mb-4">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.</p>
            <div className="flex-1 inline-flex items-center mb-4">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              </svg>
              <p className="">{city_name}</p>
              <br/>
            </div>
            <p className="text-gray-500">{complete_address}</p>

            <div className="flex justify-end py-4 space-x-4">
              {
                role === "user" ?
                  <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                    Chat with our Partner
                  </button>
                :
                  // Edit and Delete property button
                  
                  
                  <div className="w-1/3">
                    <Button {...button_props_delete} isLoading={isLoading} />
                  </div>
                  
              }
            </div>
          </div>
        </div>

        <div className= " mb-10 rounded-lg">
          <MapComponent latitude={latitude} longitude={longitude}/>
        </div>
      </div>
    </div>
  )
}

export default SingleProperty
