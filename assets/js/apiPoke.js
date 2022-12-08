const apiPoke = {}

apiPoke.getPokemonDetail = pokemon => {
  return fetch(pokemon.url).then(response => response.json())
}

apiPoke.getApiPokemons = async (offset = 0, limit = 10) => {
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
