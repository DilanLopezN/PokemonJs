const apiPoke = {}

apiPoke.getApiPokemons = async (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`
  try {
    const response = await fetch(url)
    const jsonBody = await response.json()
    return jsonBody.results
  } catch (error) {
    return console.error(error)
  }
}
