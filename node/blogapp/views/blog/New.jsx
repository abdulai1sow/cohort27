import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        New
        <form action="/blog" method="POST">
          <input type="text" name="title" placeholder='title' />
          
          <input type="text" name="body" placeholder='pen to paper' />
          
          <input type="text" name="author" placeholder='author' />
          
          <button>like</button>
         
          input
          <input type="checkbox" name='sponsored' />

          <input type="submit" value='post blog' />
        </form>
      </div>
    );
  }
}
