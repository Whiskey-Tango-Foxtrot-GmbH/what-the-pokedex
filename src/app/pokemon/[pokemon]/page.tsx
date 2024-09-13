import { getPokemon } from '@/utils/pokemon-api'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    pokemon: string
  }
}
interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface PokemonAbilities {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export default async function PokemonPage({ params }: PageProps) {
  const { pokemon, error } = await getPokemon(params.pokemon)

  if (error) notFound()

  return (
    <main className="flex flex-col justify-center px-6">
      <h2 className="px-4 text-start text-xl font-bold">
        {pokemon.name[0].toUpperCase()}
        {pokemon.name.slice(1)}
      </h2>
      <article className="container mx-auto flex flex-col px-4 md:flex-row">
        <section className="w-full shrink-0 md:w-1/3">
          <Image
            className="shrink-0 object-fill"
            src={pokemon.sprites.front_default}
            alt={`Image of ${pokemon.name}`}
            width={180}
            height={180}
          />
          <section>
            <h3 className="py-2 font-bold">Type</h3>
            <ul className="flex flex-wrap gap-2">
              {pokemon.types.map((obj: PokemonType) => (
                <li
                  key={obj.type.name}
                  className="rounded-full border border-red-300 bg-red-500 px-4 py-1 text-white"
                >
                  {obj.type.name}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="py-2 font-bold">Abilities</h3>
            <ul className="flex flex-wrap gap-2">
              {pokemon.abilities.map((obj: PokemonAbilities) => (
                <li
                  key={obj.ability.name}
                  className="rounded-full border border-amber-200 bg-amber-600 px-4 py-1 text-amber-100"
                >
                  {obj.ability.name}
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className="w-full md:w-2/3 md:pl-4">
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            itaque iure, non rerum veniam quibusdam eaque nostrum eius
            praesentium iusto amet voluptatum cumque harum impedit delectus
            autem aut? Illum libero provident dignissimos quo ipsam molestias
            inventore illo atque similique quia eveniet ducimus debitis, minima
            assumenda hic amet? Nisi cupiditate quasi architecto autem vero
            laboriosam sint, nostrum enim. Animi quo repellendus quidem. Dicta
            repudiandae obcaecati soluta facere ex fugit quis unde.
          </p>
          <div className="flex flex-col space-y-4">
            <p>
              <strong>Weight:</strong> {pokemon.weight} lbs
            </p>
            <p>
              <strong>Height:</strong> {pokemon.height} ft
            </p>
            <p>
              <strong>Rank:</strong> # {pokemon.order}
            </p>
          </div>
        </section>
      </article>
    </main>
  )
}
