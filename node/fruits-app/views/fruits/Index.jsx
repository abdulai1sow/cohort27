const React = require("react");

class Index extends React.Component {
  render() {
    console.log(this.props.fruits);
    const { fruits } = this.props;
    return (
      <div>
        <h1>all fruits</h1>
        <a href="/fruits/new">Create New Fruit</a>

        <ul>
          {fruits.map((fruit, idx) => (
            <li>
              the <a href={`/fruits/${idx}`}> {fruit.name} </a> is {fruit.color}
              {""}
              {fruit.readyToEat
                ? `it is ready to eat`
                : ` it is not ready to eat`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
