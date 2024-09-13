'use client'

import { getPokemonList } from '@/utils/pokemon-api'
import { SetStateAction, useEffect, useState } from 'react'

import Card from './ui/Card'
import Pagination from './ui/Pagination'

interface Pokemon {
  name: string
  url: string
}

export default function StartPage() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const PAGE_LIMIT = 25
  const MAX_POKEMONS = 151

  async function fetchPokemonList() {
    const offset = (currentPage - 1) * PAGE_LIMIT
    if (offset < MAX_POKEMONS) {
      const list = await getPokemonList(PAGE_LIMIT, offset)
      setPokemonList(list)
    } else {
      setPokemonList([])
    }
  }

  function getPokemonId(object: Pokemon): string {
    const splitUrl = object.url.split('/')
    return splitUrl[splitUrl.length - 2]
  }

  useEffect(() => {
    setIsLoading(true)
    fetchPokemonList()
    setIsLoading(false)
  }, [currentPage])

  const totalPages = Math.ceil(MAX_POKEMONS / PAGE_LIMIT)
  const isDisableNext = currentPage >= totalPages

  let filteredPokemonList
  if (searchTerm) {
    filteredPokemonList = pokemonList.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  } else {
    filteredPokemonList = pokemonList
  }

  function handleSearch(event: { target: { value: SetStateAction<string> } }) {
    setSearchTerm(event.target.value)
  }

  if (isLoading) {
    ;<div role="status" aria-live="polite">
      <p className="text-center text-blue-600">Loading data....</p>
    </div>
  }
  return (
    <main className="min-h-screen p-4">
      <header className="mb-8 flex flex-col items-start">
        <h1 className="pb-2 text-4xl font-extrabold">Gotta Click em All!</h1>
        <div className="relative mt-4 w-full max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search Pokémon
          </label>
          <input
            id="search"
            type="text"
            className="peer block w-60 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder="Search Pokémon..."
            onChange={handleSearch}
            value={searchTerm}
            aria-label="Search Pokémon"
          />
        </div>
      </header>
      <section aria-labelledby="pokemon-list">
        <div className="container mx-auto p-8">
          {filteredPokemonList.length === 0 ? (
            <p
              className="text-center text-red-600"
              role="status of pokemon search"
              aria-live="polite"
            >
              No match found
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
              {filteredPokemonList.map((pokemon: Pokemon) => (
                <Card
                  key={pokemon.name}
                  pokemon={pokemon}
                  getPokemonId={getPokemonId}
                />
              ))}
            </div>
          )}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isDisableNext={isDisableNext}
          />
        </div>
      </section>
    </main>
  )
}
