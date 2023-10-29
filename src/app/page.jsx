import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponse } from '@/libs/api-libs'

import seedrandom from 'seedrandom'

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  const rng = seedrandom()
  let Random = rng() * 193
  console.log(rng());
  console.log(Random);

  recAnime = { data: recAnime.slice(Random, Random + 8) }


  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recAnime} />
      </section>
    </>
  )
}

export default Page