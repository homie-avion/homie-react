import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import SignInForm from './signin.form.component'

const SignIn = (props) => {

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                <h1>Insert image here</h1>
                </Col>
                
                <Col className="sign-up-form">
                    <Card>
                        <Card.Body>
                            <SignInForm 
                                {...props}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn
