function getPokemon(pokemons) {
  return `
    <li class="pokemonContent ${pokemons.type}">
          <span class="pokemonNumber">${pokemons.number}</span>
          <span class="pokemonName">${pokemons.name}</span>
          <div class="pokemonDetails">
            <ol class="pokemonTypes">
              ${pokemons.types
                .map(type => `<li class="type">${type}</li>`)
                .join('')}
            </ol>
            <img
              src="${pokemons.photo}"
              alt=""
            />
          </div>
        </li>`
}

const pokemonId = document.getElementById('pokemonId')

apiPoke.getApiPokemons().then((pokemonsList = []) => {
  pokemonId.innerHTML += pokemonsList.map(getPokemon).join('')
})
