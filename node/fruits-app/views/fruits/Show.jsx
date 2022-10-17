const React = require('react')
 
class Show extends React.Component{
  render() {
    console.log(this.props);
    const { fruit } = this.props //recieveing the data from fruit.js
    console.log(fruit);
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

const styles = {
  container: {
    backgroundColor: "royalblue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: "32px",
    color: "#fff",
  },
  ulContainer: {
    backgroundColor: "#fff",
    padding: "15px",
  },
  createFruitBtn: {
    backgroundColor: "#fff",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
  },
  item: {
    padding: "10px",
    listStyleType: "none",
  },
};

module.exports = Show