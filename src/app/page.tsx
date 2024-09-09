import { getPokemonList } from '@/utils/pokemon-api'

export default async function StartPage() {
  const pokemonList = await getPokemonList()

  console.log({ pokemonList })

  return (
    <>
      <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
        <li className="mb-2">
          Get started by editing{' '}
          <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </>
  )
}
