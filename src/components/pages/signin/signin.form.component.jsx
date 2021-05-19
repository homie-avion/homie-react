import React from 'react'
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
        <form onSubmit={(e) => handleSubmit(e, {email, password})}>
            
            <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled = {isLoading}
                placeholder = "Email"
            />
        
    
        
            <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                required
                disabled = {isLoading}
                placeholder = "Password"
            />
            
            <Button
                {...button_props}
                isLoading = {isLoading}
            />
        </form>
    )
}

export default SignInForm
