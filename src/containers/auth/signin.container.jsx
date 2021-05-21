import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import AlertContext from "../../context/alert/alertContext";
import UserContext from "../../context/user/userContext";

import SignIn from "../../components/pages/signin/signin.component";

const SignInContainer = () => {
  // local states
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // contexts
  const alertContext = useContext(AlertContext);
  const userContext = useContext(UserContext);
  const history = useHistory();

  const { token, isLoading, logInUser } = userContext;

  // Reroute to page if logged in
  if (token) {
    // history.push("/journals")
    history.push("/account");
  }

  // const reRoute = () => history.push("/journals")
  const reRoute = () => history.push("/account");

  const setAlertReRoute = (message, statusCode) => {
    if (message) {
      alertContext.setAlert({
        title: message.status,
        message: message.message,
      });
    }

    if (statusCode === 200) {
      reRoute();
    }
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    logInUser(data, setAlertReRoute);
  };

  const button_props = {
    variant: "success-button",
    text: "Sign In",
    type: "submit",
    onClick: null,
  };

  // i: (<i className="fas fa-door-open"></i>)

  return (
    <SignIn
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      button_props={button_props}
    />
  );
};

export default SignInContainer;
