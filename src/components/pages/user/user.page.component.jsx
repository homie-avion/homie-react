import React, {Fragment} from 'react'
import {Card} from 'react-bootstrap'

import Button from '../../shared/button/button.component'
import SignUpForm from '../../pages/signup/signup.form.component'

const UserPage = (props) => {
    const { open,
            button_props_edit,
            button_props_delete } = props

    return (
        <div className="container">
            <Card>
                <Card.Body>
                <Card.Title>User Information</Card.Title>
                
                <SignUpForm {...props}/>
                
                {
                    open &&
                    <Fragment>
                        <Button 
                            {...button_props_edit}
                        />

                        <Button 
                            {...button_props_delete}
                        />
                    </Fragment>
                }
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserPage
