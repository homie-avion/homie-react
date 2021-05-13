import React, { useContext} from 'react'
import {Modal as ModalB} from 'react-bootstrap'

import ModalContext from '../../../context/modal/modalContext'


import UserDelete from '../../../containers/user/user.delete.container'

const Modal = () => {

    const modalContext = useContext(ModalContext)
    const {show, modalBody, hideModal} = modalContext
    const modalContentDict = {
        DeleteUser : <UserDelete/>
    }
    return (
        <ModalB show={show} onHide={hideModal} centered>
            {
                modalContentDict[modalBody]
            }
        </ModalB>
    )
}

export default Modal