import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav style={styles.container}>
        <a href="/">HOME</a>
        <a href="/blog">BLOGS</a>
        <a href="/blog/new">CREATE NEW BLOG</a>
        <a href="/sign">SIGN/UP</a>
      </nav>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(193,235,187,0.9)'
  }
}