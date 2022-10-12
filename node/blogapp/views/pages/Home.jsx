import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav";


export default class Home extends Component {
  render() {
    return (
      
      <div >
        <Nav className='container'>
          <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blog">BLOGS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="./register/">REGISTER</Nav.Link>
          </Nav.Item>
        </Nav>

        <div >
          <h1>
          home
          </h1>
        </div>

       </div>
    );
  }
}

