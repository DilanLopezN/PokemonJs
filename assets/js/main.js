const limit = 10
const offset = 0
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`

function getPokemon(pokemons) {
  return `
    <li class="pokemonContent">
          <span class="pokemonNumber">#001</span>
          <span class="pokemonName">${pokemons.name}</span>
          <div class="pokemonDetails">
            <ol class="pokemonTypes">
              <li class="type">grass</li>
              <li class="type">poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt=""
            />
          </div>
        </li>`
}

const pokemonId = document.getElementById('pokemonId')

fetch(url)
  .then(response => response.json())
  .then(jsonBody => jsonBody.results)
  .then(pokemonsList => {
    for (let i = 0; i < pokemonsList.length; i++) {
      const pokemons = pokemonsList[i]
      pokemonId.innerHTML += getPokemon(pokemons)
    }
  })
