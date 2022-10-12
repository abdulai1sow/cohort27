import React from 'react'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

export default function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formbasicEmail">
        <Form.Label>user name</Form.Label>
        <Form.Control type="text" placeholder="user name..." />
        <Form.text className="text-muted">
          We'll never share your information with anyone else.
        </Form.text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formbasicEmail">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="enter password..." />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
