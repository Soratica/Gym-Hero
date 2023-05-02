import { useState } from "react"

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserSignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" 
                      onChange={(e) => setEmail(e.target.value)} 
                      value={email}
                      />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
                      onChange={(e) => setPassword(e.target.value)} 
                      value={password}
                      />
      </Form.Group>
      <Button type="submit">Sign Up</Button>
      
    </Form>
  )
}

export default UserSignUpForm