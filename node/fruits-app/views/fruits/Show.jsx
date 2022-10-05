const React = require('react')

class Show extends React.Component{
  render() {
    console.log(this.props);
    const fruit = this.props //recieveing the data from fruit.js
    const presentDate = this.props.date
    return (
      <div style={{backgroundColor: 'royalblue'}}>
        <h1>show page</h1>
        {/* //jsx expression */}
        <h3>
          the fruit name is {fruit.name} and the color is {fruit.color}
        </h3>
        <h4>
          {fruit.readyToEat
            ? "Its is ready to eat"
            : "It is not ready to eat... Cant touch this"}
        </h4>
        <h6> year: {presentDate}</h6>
      </div>
    );
  }
}

module.exports = Show