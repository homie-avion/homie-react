import React, { useState, useContext } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";

import UserContext from "../../context/user/userContext";
import AlertContext from "../../context/alert/alertContext";

import SignUp from "../../components/pages/signup/signup.component";

const SignUpContainer = () => {
  const alertContext = useContext(AlertContext);
  const userContext = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { token, isLoading, signUpUser } = userContext;

  if (token) {
    history.push("/");
  }

  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const [mode, setMode] = useState("create");

  const reRoute = () => {
    history.push("/")
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      // set alert passwords did not match
      alertContext.setAlert({
        title: "Error",
        message: "Passwords did not match.",
      });
    } else {

      let role, role_id
      if (location.pathname === "/signup"){
        role = "user"
        role_id = 1
      } else {
        role = "partner"
        role_id = 2
      }

      data["role"] = role

      signUpUser(
        {
          username: data.username,
          password: data.password,
          email: data.email,
          confirm_password: data.confirmPassword,
          role: data.role,
          role_id: role_id
        },
        setAlertReRoute
      );
    }
  };

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

  const button_props = {
    variant: "success-button",
    text: "Sign Up",
    type: "submit",
    onclick: null,
  };

  const propsSent = {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handleSubmit,
    button_props,
    mode,
    setMode,
  };

  return <SignUp {...propsSent} />;
};

export default SignUpContainer;
