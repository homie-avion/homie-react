import React, { useContext} from 'react'

import AlertContext from '../../../context/alert/alertContext'

import Toast from './alert.component';

const AlertContainer = () => {
    const alertContext = useContext(AlertContext)
    const {alerts} = alertContext

    return (
        <div 
            aria-live="polite"
            aria-atomic="true"
            >
            <div style={{
                position : 'absolute',
                top: 0,
                right: '1vw'
            }}>
            {
                alerts.map((alert, id) => (
                    <Toast key={id} message={alert.message} title={alert.title}/>
                ))
            }
            </div>
        
        </div>
    )
}

export default AlertContainer
