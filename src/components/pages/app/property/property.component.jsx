import React from "react";
import {Link} from 'react-router-dom'

import PropertyList from "./property_list.component";


const Property = (props) => {
  const { user } = props;
  return (
    <div className="bg-gray-50 min-h-screen h-auto flex flex-col">
      <div className="container min-h-screen h-auto max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center h-16 mb-4">
          <h1 className="text-2xl font-bold">
            {user.role === "user" ? "Recommendations" : "My Properties"}
          </h1>
          {user.role !== "user" && (
            <Link to="/create_property">
              <button
                type="button"
                className="h-10 px-4 py-2 font-semibold rounded-full bg-blue-600 hover:bg-blue-400 text-white flex items-center"
              >
                <p className="mr-2">Create New</p>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </Link>
          )}
        </div>
        <PropertyList {...props} />
      </div>
    </div>
  );
};

export default Property;
