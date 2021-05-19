import React, { useState, useContext } from "react";

import AlertContext from "../../../context/alert/alertContext";
// import {Toast as ToastB} from 'react-bootstrap';

const Toast = ({ message, title }) => {
  const alertContext = useContext(AlertContext);

  const [showToast, setShowToast] = useState(true);

  const toggleShow = () => {
    setShowToast(!showToast);

    const toasty = document.querySelectorAll(".toasty");

    if (toasty.length === 1) {
      alertContext.clearAlert();
    }
  };

  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                />
              </svg>

            </span>
            <h5>
              {title}
            </h5>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                {message}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
// return (
//     <ToastB className="toasty" style={{zIndex:10, minWidth: '200px'}} show={showToast} delay={3000} onClose={toggleShow} autohide>
//         <ToastB.Header>
//             <strong className="mr-auto">{title}</strong>
//         </ToastB.Header>
//         <ToastB.Body>{message}</ToastB.Body>
//     </ToastB>
// )
