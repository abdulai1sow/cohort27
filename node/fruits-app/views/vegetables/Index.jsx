const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    // console.log(this.props = vegetables);
    return (
      <div>
        <h1>all vegetables</h1>
        
        <a href="/vegetables/new">create vegetable</a>
        <ul>
          {vegetables.map((vegetable, idx) => (
            <li key={idx}>
              the <a href={`/vegetables/${idx}`}>{vegetable.name}</a> is{" "}
              {vegetable.color}
              {vegetable.readyToEat
                ? `it is ready to eat`
                : ` it is not ready to eat`}
              {''}
          <img src={vegetable.image} width='100'/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
