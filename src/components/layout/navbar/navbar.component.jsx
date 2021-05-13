import React, {useContext, Fragment} from 'react'
import { useHistory, withRouter, Link } from 'react-router-dom'

import { Navbar as NavbarB, Nav} from 'react-bootstrap'

//context
import AlertContext from '../../../context/alert/alertContext'
import UserContext from '../../../context/user/userContext'

const Navbar = () => {

    const alertContext = useContext(AlertContext)
    const userContext = useContext(UserContext)
    const history = useHistory();

    const {token, logOutUser} = userContext

    const reRoute = () => history.push("/")


    const handleClick = () => {
        console.log("logout clicked")

        const status_message = {
            status: "Success",
            message: "User Logged out."
        }

        logOutUser(setAlertReRoute, status_message)
    }

    const setAlertReRoute = (message, statusCode) => {
        if (message){
            alertContext.setAlert({title: message.status, message: message.message})
        }

        if (statusCode === 200){
            reRoute()
        }
    }

    

    return (
       
        <NavbarB collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container d-flex">
                <NavbarB.Brand as={Link} to="/"><h2><i className="far fa-calendar-check"></i> TaskTracker</h2></NavbarB.Brand>
                <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarB.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    {
                        token ?
                        <Fragment>
                            <Nav.Link as={Link} to="/journals">Journals</Nav.Link>
                            {
                            <Nav.Link as={Link} to="/account">Account</Nav.Link>
                            }
                            <Nav.Link onClick={()=>handleClick()}>Logout</Nav.Link>
                        </Fragment>
                        :
                        <Fragment>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                            <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                        </Fragment>
                    }
                    </Nav>
                </NavbarB.Collapse>
            
            </div>
        </NavbarB>

    )
}

export default withRouter(Navbar)
