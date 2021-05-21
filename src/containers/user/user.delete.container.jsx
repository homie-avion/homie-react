import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'

import ModalContentDelete from '../../components/layout/modalContent/delete.component'

import AlertContext from '../../context/alert/alertContext'
import ModalContext from '../../context/modal/modalContext'
import UserContext from '../../context/user/userContext'

const UserDelete = () => {

    const alertContext = useContext(AlertContext)
    const modalContext = useContext(ModalContext)
    const userContext = useContext(UserContext)
    const history = useHistory();

    const {hideModal} = modalContext
    const {token, deleteUserAccount} = userContext

    const reRoute = () => history.push("/")

    const setAlertReRoute = (message, statusCode) => {
        if (message){
            alertContext.setAlert({title: message.status, message: message.message})
        }
        if (statusCode === 200){
            reRoute()
        }
    }

    const cbDeleteModal = () => {
        deleteUserAccount(token, setAlertReRoute)
        hideModal()
    }

    const button_props_delete = {
        variant: "delete-button",
        text: "Delete",
        type: "submit",
        onClick: cbDeleteModal,
        isLoading: null,
    }
    
    const cbHideModal = () => hideModal()

    const button_props_cancel = {
        variant: "secondary-button",
        text: "Cancel",
        type: "button",
        onClick: cbHideModal ,
        isLoading: null,
    }

    const props = {
        button_props_cancel,
        button_props_delete,
        title: "Delete Account",
        message: `Are you sure you want to delete your account?`,
        hideModal: hideModal
    }
    return (
        <ModalContentDelete {...props}/>
    )
}

export default UserDelete
