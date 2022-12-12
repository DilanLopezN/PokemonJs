const apiPoke = {}

function convertPokeDetails(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map(typeSlot => typeSlot.type.name)
  const [type] = types
  pokemon.types = types
  pokemon.type = type
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

apiPoke.getPokemonDetail = pokemon => {
  return fetch(pokemon.url)
    .then(response => response.json())
    .then(convertPokeDetails)
}

apiPoke.getApiPokemons = async (offset = 0, limit = 2) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`

  try {
    return fetch(url)
      .then(response => response.json())
      .then(jsonBody => jsonBody.results)
      .then(pokemons => pokemons.map(apiPoke.getPokemonDetail))
      .then(detailsReq => Promise.all(detailsReq))
      .then(pokemonsDetails => pokemonsDetails)
  } catch (error) {
    console.error(error)
  }
}
