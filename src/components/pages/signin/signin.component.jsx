import React from "react";
// import {Container, Row, Col, Card} from 'react-bootstrap'
import SignInForm from "./signin.form.component";

const SignIn = (props) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-bold">Sign In</h1>
          <SignInForm {...props} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
