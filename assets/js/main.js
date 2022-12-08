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

apiPoke.getApiPokemons().then((pokemonsList = []) => {
  pokemonId.innerHTML += pokemonsList.map(getPokemon).join('')
})
