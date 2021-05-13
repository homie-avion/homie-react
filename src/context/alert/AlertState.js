import {useReducer} from 'react'

import AlerContext from './alertContext'
import AlertReducer from './alertReducer'

import {
    SET_ALERT,
    CLEAR_ALERT
} from '../types'

const AlertState = (props) => {

    const initialState = {
        alerts : []
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (alert) =>{
        dispatch({type: SET_ALERT,
                  payload: alert})
    }

    const clearAlert = () => dispatch({type:CLEAR_ALERT })

    return (
        <AlerContext.Provider
            value={{
                alerts: state.alerts,
                setAlert,
                clearAlert,
            }}
        >
            {props.children}
        </AlerContext.Provider>

    )
}

export default AlertState