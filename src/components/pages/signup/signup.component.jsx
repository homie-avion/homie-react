import React from "react";
// import {Container, Row, Col, Card} from 'react-bootstrap'

import SignUpForm from "./signup.form.component";

const SignUp = (props) => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">

            <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                <h1 class="mb-8 text-3xl text-center font-bold">Sign up</h1>
                <SignUpForm {...props} />
                <div class="text-center text-sm text-gray-500 mt-4">
                    By signing up, you agree to the <a className="no-underline border-b border-grey-dark text-gray-400" href="#">
                    Terms of Service
                    </a> and <a className="no-underline border-b border-grey-dark text-gray-400" href="#">
                    Privacy Policy
                    </a>
                </div>
                
            </div>
            <div class="text-gray-500 mt-6">
                Already have an account? <a class="no-underline border-b border-blue text-blue-500" href="../login/">Log in
                </a>.
            </div>
        </div>
    </div>
  );
};

export default SignUp;
