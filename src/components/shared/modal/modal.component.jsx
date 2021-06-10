import React, { useContext, Fragment } from "react";
// import {Modal as ModalB} from 'react-bootstrap'

import ModalContext from "../../../context/modal/modalContext";

import UserDelete from "../../../containers/user/user.delete.container";

const Modal = () => {
  const modalContext = useContext(ModalContext);
  const { show, modalBody } = modalContext;
  const modalContentDict = {
    DeleteUser: <UserDelete />,
  };
  return (
    <Fragment>
      {show && (
        <div className="bg-opacity-25 backdrop-filter backdrop-blur-lg justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              
                {modalContentDict[modalBody]}
        
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
