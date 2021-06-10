import React, { useContext, useEffect, useState, Fragment } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";

import Dropdown from "./dropdown.component";
// import { Navbar as NavbarB, Nav} from 'react-bootstrap'

//context
import AlertContext from "../../../context/alert/alertContext";
import UserContext from "../../../context/user/userContext";
import PropertyContext from "../../../context/property/propertyContext";

const Navbar = () => {
  const alertContext = useContext(AlertContext);
  const userContext = useContext(UserContext);
  const propertyContext = useContext(PropertyContext);
  const history = useHistory();

  const { user, token, logOutUser } = userContext;
  const { unsetProperties } = propertyContext;
  
  const protected_pages = [ "/recommendations", "/properties",
                            "/property/create", "/property/edit",
                            "/search_preferences", "/account"]

  const protected_partner_pages = ["/properties", "/property/create", "/property/edit"]
  const protected_user_pages = ["/search_preferences"]




  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });


  let role
  if (user) {
    role = user.role
  } else {
    role = null
  }
  
  const reRoute = () => history.push("/");

  const handleClick = () => {
    // console.log("logout clicked");

    const status_message = {
      status: "Success",
      message: "User Logged out.",
    };

    logOutUser(setAlertReRoute, status_message);
    unsetProperties();
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

  if (token === null && protected_pages.includes(history.location.pathname)){
    history.push("/")
  }

  if (user) {
    if (user.role === "user" && protected_partner_pages.includes(history.location.pathname)) {
      history.push("/")
    }
    if (user.role === "partner" && protected_user_pages.includes(history.location.pathname)) {
      history.push("/")
    }

    if (user.role === "user" && history.location.pathname.includes("/properties")) {
      history.push("/")
    }
    
    if (user.role === "partner" && history.location.pathname.includes("/recommendations")) {
      history.push("/")
    }

  } 
  return (
    <Fragment>
      <nav className="px-4 sm:px-6 sticky top-0 z-10 bg-white" role="navigation">
        <div className="max-w-7xl mx-auto" >
          <div className="flex justify-between items-center py-6">
            <Link
              to="/"
              className="text-gray-900 text-3xl font-extrabold tracking-tight"
            >
              Homie
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <div className="md:block hidden">
              {
                !token ?
                <Fragment>
                    <Link
                    to="/partners/signup"
                    className="ml-8 whitespace-nowrap text-base font-light text-gray-500 hover:text-purple-400"
                  >
                    Be one of our partners!
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-8 whitespace-nowrap text-base font-light text-gray-500 hover:text-green-400"
                  >
                    Looking for properties? Join us.
                  </Link>
                  <Link
                    to="/signin"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500"
                  >
                    Sign In
                  </Link>
                </Fragment>
                :
                <Fragment>
                  
                  <Link
                    to={role === "user" ? "/recommendations" : "/properties"}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {role === "user" ? "Recommendations" : "Properties"}
                  </Link>
                  <Link
                    to="/account"
                    className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Account
                  </Link>
                  <a
                    onClick={()=>handleClick()}
                    className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Logout
                  </a>
                </Fragment>
              }
            </div>
          </div>
        </div>
      </nav>
      <Dropdown role={role} isOpen={isOpen} toggle={toggle} token={token} handleClick={handleClick}/>
    </Fragment>
  );
};

export default withRouter(Navbar);

