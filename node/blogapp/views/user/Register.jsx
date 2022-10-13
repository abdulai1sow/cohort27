import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Register extends Component {
  render() {
    return (
      <>
        <form action="">
          <div> 
            <input type="text" name='name' placeholder='name'/>
          </div>
          <div> 
            <input type="email" email='email' placeholder='email'/>
          </div>
          <div> 
            <input type="password" name='password' placeholder='password' />
          </div>
      </form>
      </>
    );
  }
}


