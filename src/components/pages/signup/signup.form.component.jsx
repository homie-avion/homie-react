import React, {Fragment} from 'react'
// import {div} from 'react-bootstrap'

import Button from '../../shared/button/button.component'


const SignUpForm = (props) => {
    const {
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        isLoading,
        handleSubmit,
        button_props,
        button_props_cancel,
        mode
        } = props

    
    return (
        <form onSubmit={e => handleSubmit(e, {username, email, password, confirmPassword})}>
            <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value = {username ? username : ""}
                required = {mode === "edit" ? false : true}
                disabled = {mode === "edit" || mode === "create" ? false : true}
                placeholder ="Username"
            />


            
            <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value = {email ? email : ""}
                required = {mode === "edit" ? false : true}
                disabled = {mode === "edit" || mode === "create" ? false : true}
                placeholder ="Email"
            />
            
        
            {
                mode === "edit" || mode === "create"
                ?
                <Fragment>
                    
                    <input
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="6"
                        // value = {""}
                        required = {mode === "edit" ? false : true}
                        placeholder ={ mode === "edit" ? "New Password": "Password"}
                    />
                
                    <input
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        minLength="6"
                        // value = {""}
                        required = {mode === "edit" ? false : true}
                        placeholder = {mode === "edit" ? "Confirm New Password": "Confirm Password"}
                    />

                </Fragment>
                : ""
            }
            {
                mode === "edit" || mode === "create"
                ?
                <Fragment>
                    <Button
                        {...button_props}
                        isLoading = {isLoading}
                    />
                    {
                        button_props_cancel && 
                        <Button
                        {...button_props_cancel}
                        />
                    }
                </Fragment>
                :""
            }
        </form>
    )
}

export default SignUpForm
