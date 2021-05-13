import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'

import AlertContext from '../../context/alert/alertContext'
import UserContext from '../../context/user/userContext'

import SignIn from '../../components/pages/signin/signin.component'

const SignInContainer = () => {
    // local states
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    // contexts
    const alertContext = useContext(AlertContext)
    const userContext = useContext(UserContext)
    const history = useHistory();

    const {token, isLoading, logInUser} = userContext

    if (token){
        history.push("/journals")
    }

    const reRoute = () => history.push("/journals")

    const setAlertReRoute = (message, statusCode) => {
        if (message){
            alertContext.setAlert({title: message.status, message: message.message})
        }

        if (statusCode === 200){
            reRoute()
        }
    }

    const handleSubmit = (e, data) =>{
        e.preventDefault()
        logInUser(data, setAlertReRoute)
    } 

    const button_props = {
        variant: "primary",
        text: "Sign In",
        type: "submit",
        onclick: null
    }

    // i: (<i className="fas fa-door-open"></i>)

    return (
        <SignIn
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            isLoading={isLoading}
            handleSubmit = {handleSubmit}
            button_props = {button_props}
        />  
    )
}

export default SignInContainer
