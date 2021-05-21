import React, { useContext, useEffect, Fragment } from "react";

import AlertContext from "../../../context/alert/alertContext";

import Toast from "./alert.component";

const AlertContainer = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  useEffect(() => {
	//your code goes here
    return () => {
      //your cleanup code codes here
      setTimeout(() => alertContext.clearAlert(), 5000)
    };
  },[alerts]);

  return (
    <Fragment>
      {alerts.length > 0 && (
        <div className="fixed inset-0 z-60 mt-20 h-auto outline-none focus:outline-none">
          {alerts.map((alert, id) => (
            <Toast key={id} message={alert.message} title={alert.title} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default AlertContainer;
