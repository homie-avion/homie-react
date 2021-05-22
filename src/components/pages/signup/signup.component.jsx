import React from "react";
import { useLocation, Link } from "react-router-dom";
// import {Container, Row, Col, Card} from 'react-bootstrap'

import SignUpForm from "./signup.form.component";

const SignUp = (props) => {
  const location = useLocation();

  let header
  if (location.pathname === "/signup"){
    header = "Looking for properties? Join us."
    props["button_props"]["variant"] = "success-button"
  } else {
    header = "Be one of our partners!"
    props["button_props"]["variant"] = "partners-button"
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-bold">{header}</h1>
          <SignUpForm {...props} />
          <div className="text-center text-sm text-gray-500 mt-4">
            By signing up, you agree to the{" "}
            <a
              className="no-underline border-b border-grey-dark text-gray-400"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="no-underline border-b border-grey-dark text-gray-400"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            className="no-underline border-b border-blue text-blue-500"
            to="/signin"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
