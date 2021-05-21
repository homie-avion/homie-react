import React, { Fragment } from "react";
// import {div} from 'react-bootstrap'

import Button from "../../shared/button/button.component";

const SignUpForm = (props) => {
  const {
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
    button_props_cancel,
    mode,
  } = props;

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, { username, email, password, confirmPassword })
      }
    >
      {
        (mode === "edit" | mode ==="show") ? <label htmlFor="username" className="block text-sm font-medium text-gray-400 mt-3 mb-2 pl-3">Username</label> : ""
      }
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        type="text"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username ? username : ""}
        required={mode === "edit" ? false : true}
        disabled={mode === "edit" || mode === "create" ? false : true}
        placeholder="Username"
      />
      {
        (mode === "edit" | mode ==="show") ? <label htmlFor="email" className="block text-sm font-medium text-gray-400 mt-3 mb-2 pl-3">Email</label> : ""
      }
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4"
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email ? email : ""}
        required={mode === "edit" ? false : true}
        disabled={mode === "edit" || mode === "create" ? false : true}
        placeholder="Email"
      />

      {mode === "edit" || mode === "create" ? (
        <Fragment>
          {
            (mode === "edit" | mode ==="show") ? <label htmlFor="password" className="block text-sm font-medium text-gray-400 mt-3 mb-2 pl-3">Password</label> : ""
          }
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            minLength="6"
            // value = {""}
            required={mode === "edit" ? false : true}
            placeholder={mode === "edit" ? "New Password" : "Password"}
          />

          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength="6"
            // value = {""}
            required={mode === "edit" ? false : true}
            placeholder={
              mode === "edit" ? "Confirm New Password" : "Confirm Password"
            }
          />
        </Fragment>
      ) : (
        ""
      )}
      {
        mode === "edit" && 
          <div className="flex justify-end">
            <div className="ml-4 w-max">
              <Button {...button_props} isLoading={isLoading} />
            </div>
            {
            button_props_cancel && 
            <div className="ml-4 w-max">
              <Button {...button_props_cancel} />
              </div>
            }
          </div>
      }
      {
        mode === "create" &&
          <Button {...button_props} isLoading={isLoading} />
      }
    </form>
  );
};

export default SignUpForm;
