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
            <li key={idx}>
              the <a href={`/fruits/${fruit._id}`}> {fruit.name} </a> is {fruit.color}
              {""}
              {fruit.readyToEat
                ? `it is ready to eat`
                : ` it is not ready to eat`}
              
                {/* using method override to delete because of the form */}
              <form action={`/fruits/${fruit._id}?_method=DELETE`} method='post'>
                <input type="submit" value='Delete' />
              </form>

              <a href={`/fruits/${fruit._id}/edit`}>Edit this fruit</a>

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
