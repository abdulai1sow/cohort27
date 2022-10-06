const React = require('react')

class Index extends React.Component {
  render() {
    const {pokemons} = this.props
    console.log(`s00000///${pokemons}`);
    return (
      <div>
        <h1>see all the pokemon</h1>
        <ul>
          console.log(pokemons.map((pokemon)))
          {pokemons.map((pokemon, idx) => (
            <li key={idx}>
              I bring you <a href="{`/pokemons/${idx}`}">{ pokemon.name}</a>
              {/* <img src="{pokemon.img}" alt="pokemons" /> */}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
// const myStyle = {
//   color: "#ffffff",
//   backgroundColor: "#000000",
// };

module.exports = Index;