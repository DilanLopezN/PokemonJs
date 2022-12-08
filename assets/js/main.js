function convertPokemonTypes(pokemonTypes) {
  return pokemonTypes.map(
    typeSlot => `<li class="type">${typeSlot.type.name}</li>`
  )
}

function getPokemon(pokemons) {
  return `
    <li class="pokemonContent">
          <span class="pokemonNumber">${pokemons.order}</span>
          <span class="pokemonName">${pokemons.name}</span>
          <div class="pokemonDetails">
            <ol class="pokemonTypes">
              ${convertPokemonTypes(pokemons.types).join('')}
            </ol>
            <img
              src="${pokemons.sprites.other.dream_world.front_default}"
              alt=""
            />
          </div>
        </li>`
}

const pokemonId = document.getElementById('pokemonId')

apiPoke.getApiPokemons().then((pokemonsList = []) => {
  pokemonId.innerHTML += pokemonsList.map(getPokemon).join('')
})
