import { getPokemon } from '@/utils/pokemon-api'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    pokemon: string
  }
}

export default async function PokemonPage({ params }: PageProps) {
  const { pokemon, error } = await getPokemon(params.pokemon)

  if (error) notFound()

  console.log({ pokemon })
}
