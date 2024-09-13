const POKEMON_API_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit?: number, offset?: number) {
  const response = await fetch(
    `${POKEMON_API_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`
  )
  const data = await response.json()
  return data.results
}

export async function getPokemon(name: string) {
  const response = await fetch(`${POKEMON_API_URL}/pokemon/${name}`)
  let pokemon = null
  let error = false

  if (!response.ok) {
    error = true
  } else {
    pokemon = await response.json()
  }

  return { pokemon, error }
}
