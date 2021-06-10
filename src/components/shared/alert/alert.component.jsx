import React, { useState, useContext, Fragment } from "react";

// import AlertContext from "../../../context/alert/alertContext";
// import {Toast as ToastB} from 'react-bootstrap';

const Toast = ({ message, title }) => {
  // const alertContext = useContext(AlertContext);

  const [showAlert, setShowAlert] = useState(true);

  return (
    <Fragment>
      {
        showAlert && (
          <div className="fixed lg:w-80 lg:right-10 sm:right-0 sm:w-screen right-0 w-screen text-white px-6 py-4 border-0 rounded my-2 bg-blue-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <p className="inline-block align-middle mr-8">
              <b className="capitalize">{title}!</b> 
            </p>
            <p>
              {message}
            </p>
            <button
              className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
              onClick={() => setShowAlert(!showAlert)}
            >
              <span>×</span>
            </button>
          </div>

        )
      }
    </Fragment>
  );
};

export default Toast;

