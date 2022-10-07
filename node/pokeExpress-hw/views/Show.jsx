const React = require('react')


class Show extends React.Component{
  render() {
    const {pokemons} = this.props
    return (
      <div>
        <h1>one pokemon</h1>

        <h3>my name is { pokemons.name}</h3>
        <h3>I look like { pokemons.img}</h3>
      </div>
    )
  }
}

module.exports = Show