import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ role , isOpen, toggle, token, handleClick }) => {
  const classNameLink = "h-12 flex items-center justify-end whitespace-nowrap text-base font-light text-gray-600 hover:text-gray-900 px-4"
  
  return (
    <div
      className={ isOpen ? "fixed w-screen inset-x-0 top-22 grid grid-rows-2 items-center bg-white px-6" : "hidden" }
      onClick={toggle}
    >
    {
      !token ?
        <Fragment>
          <Link
            to="/partners/signup"
            className= {classNameLink}
          >
            Be one of our partners!
          </Link>
          <Link
            to="/signup"
            className={classNameLink}
          >
            Looking for properties? Join us.
          </Link>
          <Link
            to="/signin"
            className={classNameLink}
          >
            Sign In
          </Link>
        </Fragment>
      :
        <Fragment>
          <Link
            to={role === "user" ? "/recommendations" : "/properties"}
            className={classNameLink}
          >
            {role === "user" ? "Recommendations" : "Properties"}
          </Link>
          <Link
            to="/account"
            className={classNameLink}
          >
            Account
          </Link>
          <a
            onClick={()=>handleClick()}
            className={classNameLink}
          >
            Logout
          </a>
        </Fragment>
      
    }
    </div>
  );
};

export default Dropdown;
