import React, { useContext, useEffect, useState, Fragment } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";

import Dropdown from './dropdown.component'
// import { Navbar as NavbarB, Nav} from 'react-bootstrap'

//context
import AlertContext from "../../../context/alert/alertContext";
import UserContext from "../../../context/user/userContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
                console.log('i resized');
            }
        };
        window.addEventListener('resize', hideMenu);
    
        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    })

    const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext);
    const history = useHistory();

    const { token, logOutUser } = userContext;

    const reRoute = () => history.push("/");

    const handleClick = () => {
        console.log("logout clicked");

        const status_message = {
        status: "Success",
        message: "User Logged out.",
        };

        logOutUser(setAlertReRoute, status_message);
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

    return (
    <Fragment>
        <nav
            className="max-w-7xl mx-auto px-4 sm:px-6"
            role="navigation"
        >
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
                <Link to="/" className="text-gray-900 text-3xl font-extrabold tracking-tight">
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
                    <Link to="/signin" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Sign In
                    </Link>
                    <Link to="/signup" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
        <Dropdown isOpen={isOpen} toggle={toggle} />
    </Fragment>

    );
};

export default withRouter(Navbar);

// <NavbarB collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <div className="container d-flex">
//         <NavbarB.Brand as={Link} to="/"><h2><i className="far fa-calendar-check"></i> TaskTracker</h2></NavbarB.Brand>
//         <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
//         <NavbarB.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto">
//             {
//                 token ?
//                 <Fragment>
//                     <Nav.Link as={Link} to="/journals">Journals</Nav.Link>
//                     {
//                     <Nav.Link as={Link} to="/account">Account</Nav.Link>
//                     }
//                     <Nav.Link onClick={()=>handleClick()}>Logout</Nav.Link>
//                 </Fragment>
//                 :
//                 <Fragment>
//                     <Nav.Link as={Link} to="/about">About</Nav.Link>
//                     <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
//                     <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
//                 </Fragment>
//             }
//             </Nav>
//         </NavbarB.Collapse>

//     </div>
// </NavbarB>
