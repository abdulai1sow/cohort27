import React, { Component } from "react";
// import NewStyle from "./NewStyle";

export default class New extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>Add to your vegetables list </div>
        <br />
        <form action="/vegetables" method="POST">
          <br />
          image:<input type="text" name="image" />
          <br />
          <br />
          name:
          <input type="text" name="name" /> <br />
          <br />
          color:
          <input type="text" name="color" />
          <br />
          ready to eat
          <input type="checkbox" name="readyToEat" />
          <br />
          <input type="submit" value="create new vegie" />
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'lightgreen'
  },

}