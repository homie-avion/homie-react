import React, {useState, useContext} from 'react'

import AlertContext from '../../../context/alert/alertContext'
import {Toast as ToastB} from 'react-bootstrap';

const Toast = ({message, title}) => {

    const alertContext = useContext(AlertContext)

    const [showToast, setShowToast] = useState(true);

    const toggleShow = () => {
        setShowToast(!showToast)

        const toasty = document.querySelectorAll(".toasty")
        
        if (toasty.length  === 1){
            alertContext.clearAlert()
        }
    }

    return (
        <ToastB className="toasty" style={{zIndex:10, minWidth: '200px'}} show={showToast} delay={3000} onClose={toggleShow} autohide>
            <ToastB.Header>
                <strong className="mr-auto">{title}</strong>
            </ToastB.Header>
            <ToastB.Body>{message}</ToastB.Body>
        </ToastB>
    )
}

export default Toast
