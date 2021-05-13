import {
    SHOW_MODAL,
    HIDE_MODAL
} from '../types'

const ModalReducer = (state, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {
                ...state,
                show: true,
                modalBody: action.payload.modalBody
            }
        case HIDE_MODAL:
            return {
                ...state,
                show: false,
                modalBody: null
            }
        default:
            return state
    }
}

export default ModalReducer