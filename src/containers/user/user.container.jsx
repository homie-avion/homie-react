import React,{useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'

import AlertContext from '../../context/alert/alertContext'
import UserContext from '../../context/user/userContext'
import ModalContext from '../../context/modal/modalContext'

import UserPage from '../../components/pages/user/user.page.component'

const UserContainer = () => {
    // history
    const history = useHistory();
    // contexts
    const userContext = useContext(UserContext)
    const alertContext = useContext(AlertContext)
    const modalContext = useContext(ModalContext)

    const {user, token, isLoading, updateUserAccount} = userContext
    const {showModal} = modalContext

    // local components
    const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const [mode , setMode] = useState("show")
    const [open, setOpen] = useState("true")

    useEffect(()=>{
        setEmail(user.email)
        setUsername(user.username)
        // eslint-disable-next-line
    }, [user])

    const reRoute = () => history.push("/")

    const setAlertUpdateUserAccount = (message, statusCode) => {
        if (message){
            alertContext.setAlert({title: message.status, message: message.message})
        }
    }

    const cleanData = (data) => {

        for (var propName in data) {
            if (data[propName] === null || data[propName] === undefined) {
            delete data[propName];
            }
        }
        return data
    }
    // save button callack
    const handleSubmit = (e, data) =>{
        e.preventDefault()
        data = cleanData(data)
        console.log(data)

        if ("password" in data && "confirmPassword" in data ) {
            if (data.password !== data.confirmPassword){
                // set alert passwords did not match
                alertContext.setAlert({title: "Error", message: "Passwords did not match."})
                return
            }
        }
        updateUserAccount(data,token, setAlertUpdateUserAccount)
        setMode("show")
        setOpen(!open)
    }

    // edit and cancel-edit button callback
    const handleClickEdit = (e) =>{
        e.preventDefault()
        setOpen(!open)
        if (open) {
            setMode("edit")
        } else{
            setMode("show")
        }
    }
    // delete button callback
    const handleClickDelete = (e) => {
        e.preventDefault()
        showModal({modalBody: "DeleteUser"})
    }

    // Inside edit
    const button_props ={
        variant: "primary",
        text: "Save",
        type: "submit"
    }

    const button_props_cancel ={
        variant: "secondary",
        text: "Cancel",
        type: "button",
        onClick: handleClickEdit
    }

    // Inside user page
    const button_props_edit ={
        variant: "primary",
        text: "Edit Account",
        type: "button",
        onClick: handleClickEdit
    }

    const button_props_delete = {
        variant: "danger",
        text: "Delete Account",
        type: "button",
        onClick: handleClickDelete
    }

    let props = {
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
        button_props_edit,
        button_props_delete,
        mode,
        setMode,
        open,
        setOpen
    }
    return (
        <UserPage 
            {...props}
        />
    )
}

export default UserContainer
