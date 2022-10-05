const React = require('react')

class New extends React.Component{
  render() {
    return (
      <div>
        <h1>Add new Fruit</h1>

        <form action="/fruits" method='POST'>
          name: <input type="text" name="name" />
          <br />
          <br />
          color: <input type="text" name="color" />
          <br />
          Ready to eat: <input type="checkbox" name="readyToEat" />
          <br />
          <input type="submit" value='Create new fruit' />
        </form>
      </div>
    );
  }
}

module.exports = New