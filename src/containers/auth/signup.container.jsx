import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'

import UserContext from '../../context/user/userContext'
import AlertContext from '../../context/alert/alertContext'

import SignUp from '../../components/pages/signup/signup.component'

const SignUpContainer = () => {

    const alertContext = useContext(AlertContext)
    const userContext = useContext(UserContext)
    const history = useHistory();

    const {token, isLoading, signUpUser} = userContext

    if (token){
        history.push("/journals")
    }

    const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    
    const [mode , setMode] = useState("create")

    const reRoute = () => history.push("/")

    const handleSubmit = (e, data) =>{
        e.preventDefault()
        if (data.password !== data.confirmPassword){
            // set alert passwords did not match
            alertContext.setAlert({title: "Error", message: "Passwords did not match."})
        } else {
            signUpUser({
                username: data.username,
                password: data.password,
                email: data.email
            },
                setAlertReRoute
            )
        }
    }

    const setAlertReRoute = (message, statusCode) => {
        if (message){
            alertContext.setAlert({title: message.status, message: message.message})
        }

        if (statusCode === 200){
            reRoute()
        }
    }

    const button_props = {
        variant: "primary",
        text: "Sign Up",
        type: "submit",
        onclick: null
    }

    const propsSent = {
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
        mode,
        setMode
    }


    return (
       <SignUp
            {...propsSent}
       />
    )
}

export default SignUpContainer
