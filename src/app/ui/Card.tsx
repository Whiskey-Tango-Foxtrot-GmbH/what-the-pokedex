import Image from 'next/image'
import Link from 'next/link'

interface Pokemon {
  name: string
  url: string
}

interface PageProps {
  pokemon: Pokemon
  getPokemonId: (object: Pokemon) => string
}

export default function Card({ pokemon, getPokemonId }: PageProps) {
  return (
    <Link
      key={pokemon.name}
      href={`/pokemon/${pokemon.name}`}
      className="flex size-40 flex-col items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-white text-center text-xl shadow-md transition-transform hover:scale-105 hover:border-red-400 hover:shadow-2xl"
      aria-label={`View details for ${pokemon.name}`}
    >
      <Image
        className="object-contain"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
          pokemon
        )}.png`}
        alt={`Image of ${pokemon.name}`}
        width={180}
        height={180}
      />
    </Link>
  )
}
