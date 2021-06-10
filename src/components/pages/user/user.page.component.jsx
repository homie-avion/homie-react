import React, { Fragment } from "react";

import Button from "../../shared/button/button.component";
import SignUpForm from "../../pages/signup/signup.form.component";

const UserPage = (props) => {
  const { open, button_props_edit, button_props_delete } = props;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className="bg-white px-6 py-6 rounded shadow-lg text-black w-full mt-16">
          <h1 className="mb-8 text-3xl text-center font-bold">User Information</h1>

          <SignUpForm {...props} />

          {open && (
            <div className = "flex justify-end">
              <div className="ml-4 w-max" >
                <Button {...button_props_delete} />
              </div>
              <div className="ml-4 w-max">
                <Button {...button_props_edit} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
