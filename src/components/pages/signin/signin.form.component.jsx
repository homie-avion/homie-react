import React from 'react'
import {Form} from 'react-bootstrap'
import Button from '../../shared/button/button.component'

const SignInForm = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        handleSubmit,
        button_props
    } = props

    return (
        <Form onSubmit={(e) => handleSubmit(e, {email, password})}>
            <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled = {isLoading}
                />
            </Form.Group>
        
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="6"
                    required
                    disabled = {isLoading}
                />
            </Form.Group>
            <Button
                {...button_props}
                isLoading = {isLoading}
            />
        </Form>
    )
}

export default SignInForm
