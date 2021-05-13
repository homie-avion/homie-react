import {useReducer} from 'react'

import ModalContext from './modalContext'
import ModalReducer from './modalReducer'

import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../types'

const ModalState = props => {
    const initialState = {
        show: false,
        modalBody: null
    }
    const [state, dispatch] = useReducer(ModalReducer, initialState)

    const showModal = ({modalBody}) => {
        dispatch({type: SHOW_MODAL,
                  payload: {modalBody}})
    }

    const hideModal = () => dispatch({type: HIDE_MODAL})

    return (
        <ModalContext.Provider
            value={{
                show: state.show,
                modalBody: state.modalBody,
                showModal,
                hideModal
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )

}

export default ModalState