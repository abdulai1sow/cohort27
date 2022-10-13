import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
const {blog} = this.props
    return (
      <div>
        Edit
        <form action={`/blog/${blog._id}?_method=PUT`} method="post">
          <input type="text" name="title" defaultValue={blog.title} />

          <input type="text" name="body" defaultValue={blog.body} />

          <input type="text" name="author" defaultValue={blog.author} />

          <input type="checkbox" name="sponsored" id="" />

          <input type="submit" value='update' />
        </form>
      </div>
    );
  }
}
