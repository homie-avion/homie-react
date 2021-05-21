import React, {Fragment} from 'react'
// import {Button as ButtonB, Spinner} from 'react-bootstrap'


const Button = ({isLoading, text, type, variant, onClick}) => {
    return (
        <button
            className = {variant}
            
            disabled={isLoading}
            type={type}
            onClick={onClick}
        
        >
            {
            isLoading 
            ? 
            <Fragment>
            <div className="mr-2 inline-block rounded animate-spin ease duration-300 w-5 h-5 border-2 border-white"></div> Processing ...
            </Fragment>
            : 
            <Fragment>
                { text}
            </Fragment>
            } 
        </button>
    )
}

export default Button
