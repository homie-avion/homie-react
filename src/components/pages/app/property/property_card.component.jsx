import React from "react";
import { Link } from 'react-router-dom'

const PropertyCard = ({ property, user }) => {
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
  // ?random="

  const city_name =
    complete_address.split(", ")[complete_address.split(", ").length - 1];

  // console.log(complete_address.split(", "));
  return (
    <div className="flex flex-col mb-6">
      <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <img
              src={`https://picsum.photos/id/${id}/640/360.jpg`}
              alt="Just a flower"
              className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                {"Property"}
              </div>
              <h2 className="flex-auto text-lg font-medium">{name}</h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4  text-sm text-gray-600">
              <div className="flex-1 inline-flex items-center">
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
              </div>
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="">{new Date(created_at).toDateString()}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <button className="mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span className="text-green-400 hover:text-green-500 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-home"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                  </span>
                  <span> {tenant_count} Units Available</span>
                </button>
              </div>
              <Link to={user.role === "user" ? 
                `/recommendations/${id}`
                :
                `/properties/${id}`
                }>
                <button
                  className="mb-2 md:mb-0 bg-blue-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-blue-400"
                  type="button"
                  aria-label="like"
                >
                  Look
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
