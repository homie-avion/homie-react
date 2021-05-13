import React, {Fragment} from 'react'
import {Modal} from 'react-bootstrap'

import Button from '../../shared/button/button.component'

const ModalContentDelete = (props) => {
    const { title,
            message,
            button_props_cancel,
            button_props_delete } = props

    return (
        <Fragment>
            <Modal.Header closeButton className="border-0">
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {message}
            </Modal.Body>

            <Modal.Footer className="border-0">
                <Button
                    {...button_props_cancel}
                />
                <Button
                    {...button_props_delete}
                />
            </Modal.Footer> 
        </Fragment>
    )
}

export default ModalContentDelete
