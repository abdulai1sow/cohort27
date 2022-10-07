const React = require('react')
import Styles from './IndexStyle'

class Index extends React.Component {
  render() {
    const {pokemons} = this.props
    return (
      <div style={Styles.container}>
        <h1>see all the pokemon</h1>
        <ul>
          {pokemons.map((pokemon, id) => (
            <li key={id}>
              I bring you <a style={Styles.a} href={`/pokemons/${id}`}>{ pokemon.name}</a>
              <img src = {pokemon.img} alt="pokemon" />  
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


module.exports = Index;