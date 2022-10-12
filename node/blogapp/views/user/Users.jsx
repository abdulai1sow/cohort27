import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Users extends Component {
  render() {
    const { UserModel } = this.props
    console.log(this.props.user)
    return (
      <div>
        {UserModel.map((user, idx) => (
          <li>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>
          </li>
        ))}
        
      </div>
    );
  }
}
