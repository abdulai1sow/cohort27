const React = require("react");

class Show extends React.Component {
  render() {
    console.log(this.props.vegetable);
    const { vegetable } = this.props; //recieveing the data from fruit.js
    const presentDate = this.props.date;
    return (
      <div style={{ backgroundColor: "lightgreen" }}>
        <h1>vegetable table</h1>
        {/* //jsx expression */}
        <h2>the product name is {vegetable.name}</h2>
        <h3> the color is {vegetable.color}</h3>
        <h4>
          {vegetable.readyToEat
            ? "Its is ready to eat"
            : "It is not ready to eat... Cant touch this"}
        </h4>
        <h6> year: {presentDate}</h6>
      </div>
    );
  }
}

module.exports = Show;  
