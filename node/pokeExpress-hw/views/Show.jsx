const React = require('react')


class Show extends React.Component{
  render() {
    const {pokemons} = this.props
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>
          {pokemons.name}
          <img src={pokemons.img} alt="poke" />
        </h2>

        <a href="/pokemons">
          <button> Back</button>
        </a>
      </div>
    );
  }
}

module.exports = Show