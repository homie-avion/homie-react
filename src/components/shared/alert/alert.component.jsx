import React, { useState, useContext, Fragment } from "react";

// import AlertContext from "../../../context/alert/alertContext";
// import {Toast as ToastB} from 'react-bootstrap';

const Toast = ({ message, title }) => {
  // const alertContext = useContext(AlertContext);

  const [showAlert, setShowAlert] = useState(true);

  // const toggleShow = () => {
  //   setShowToast(!showToast);

  //   const toasty = document.querySelectorAll(".toasty");

  //   if (toasty.length === 1) {
  //     alertContext.clearAlert();
  //   }
  // };

  return (
    <Fragment>
      {
        showAlert && (
          <div className="absolute w-screen text-white px-6 py-4 border-0 rounded mb-4 bg-blue-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">{title}!</b> {message}
            </span>
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
// return (
//     <ToastB className="toasty" style={{zIndex:10, minWidth: '200px'}} show={showToast} delay={3000} onClose={toggleShow} autohide>
//         <ToastB.Header>
//             <strong className="mr-auto">{title}</strong>
//         </ToastB.Header>
//         <ToastB.Body>{message}</ToastB.Body>
//     </ToastB>
// )
