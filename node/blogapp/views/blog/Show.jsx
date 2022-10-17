import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    console.log(this.props.blog);
    const { blog } = this.props
    const presentDate = this.props.date
    return (
      <div>
        Show page
        <p>{blog.body}</p>
        <h4>{blog.author}</h4>
        <div className="likes">
          <h6>4{blog.likes} </h6>
          <input type="checkbox" name="sponsored" id="" />
          <p>{blog.timestamps} time</p>
        </div>
      </div>
    );
  }
}
