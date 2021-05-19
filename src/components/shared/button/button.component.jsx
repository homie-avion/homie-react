import React, {Fragment} from 'react'
// import {Button as ButtonB, Spinner} from 'react-bootstrap'


const Button = ({isLoading, text, type, onClick}) => {
    return (
        <button
            className = "w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
            
            disabled={isLoading}
            type={type}
            onClick={onClick}
        
        >
            {isLoading 
            ? 
            <Fragment>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing ...
            </Fragment>
            : text} 
        </button>
    )
}

export default Button
