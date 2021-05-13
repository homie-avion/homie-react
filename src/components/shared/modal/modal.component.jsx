import React, { useContext} from 'react'
import {Modal as ModalB} from 'react-bootstrap'

// import UserContext from '../../../context/user/userContext'
import ModalContext from '../../../context/modal/modalContext'

//
import JournalForms from '../../layout/forms/journals/journal.form.component'
import TaskForms from '../../layout/forms/tasks/task.form.component'

import JournalDelete from '../../../containers/journal/journal.delete.container'
import TaskDelete from '../../../containers/task/task.delete.container'
import UserDelete from '../../../containers/user/user.delete.container'

const Modal = () => {

    const modalContext = useContext(ModalContext)
    const {show, modalBody, hideModal} = modalContext
    const modalContentDict = {
        JournalForms : <JournalForms/>,
        JournalFormsEdit : <JournalForms/>,
        DeleteJournal : <JournalDelete/>,
        TaskForms :  <TaskForms/>,
        TaskFormsEdit : <TaskForms/>,
        DeleteTask : <TaskDelete/>,
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