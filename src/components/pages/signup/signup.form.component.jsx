import React, {Fragment} from 'react'
import {Form} from 'react-bootstrap'

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
        <Form onSubmit={e => handleSubmit(e, {username, email, password, confirmPassword})}>

            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value = {username ? username : ""}
                    required = {mode === "edit" ? false : true}
                    disabled = {mode === "edit" || mode === "create" ? false : true}
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email ? email : ""}
                    required = {mode === "edit" ? false : true}
                    disabled = {mode === "edit" || mode === "create" ? false : true}
                />
            </Form.Group>
        
            {
                mode === "edit" || mode === "create"
                ?
                <Fragment>
                    <Form.Group controlId="password">
                        <Form.Label>{mode !== "show" ? "New Password": "Password"}</Form.Label>
                        <Form.Control 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            minLength="6"
                            // value = {""}
                            required = {mode === "edit" ? false : true}
                        />
                    </Form.Group>

                    <Form.Group controlId="confirmpassword">
                        <Form.Label>{mode !== "show" ? "Confirm New Password": "Confirm Password"}</Form.Label>
                        <Form.Control 
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            minLength="6"
                            // value = {""}
                            required = {mode === "edit" ? false : true}
                        />
                    </Form.Group>
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
        </Form>
    )
}

export default SignUpForm
