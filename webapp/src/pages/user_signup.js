import { useState } from "react"


// components
import UserSignUpForm from '../components/user_signup_form'

// Bootstrap
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signup = () => {

  return (
    <Container className="mt-5" fluid="sm">
      <Row>
        <Col>
          <UserSignUpForm />
        </Col>
      </Row>
        
    </Container>
  )
}

export default Signup