const pokemonId = document.getElementById('pokemonId')
const limit = 5
let offset = 0
function loadPokemonItens(offset, limit) {
  apiPoke.getApiPokemons(offset, limit).then((pokemonsList = []) => {
    const loadMoreButton = document.getElementById('loadMore')
    loadMoreButton.addEventListener('click', () => {
      offset += limit
      loadPokemonItens(offset, limit)
    })

    const newHtml = pokemonsList

      .map(
        pokemons => `
            <li class="pokemonContent ${pokemons.type}">
                <span class="pokemonNumber">${pokemons.number}</span>
                <span class="pokemonName">${pokemons.name}</span>
                <div class="pokemonDetails">
                  <ol class="pokemonTypes">
                    ${pokemons.types
                      .map(type => `<li class="type ${type}">${type}</li>`)
                      .join('')}
                  </ol>
                  <img
                    src="${pokemons.photo}"
                    alt=""
                  />
                </div>
              </li>
    `
      )
      .join('')
    pokemonId.innerHTML += newHtml
  })
}

loadPokemonItens()
