import Head from 'next/head'
import { getSession, useSession } from 'next-auth/client'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Brands from '../components/Brands'
import MoviesCollection from '../components/MoviesCollection'
import ShowsCollection from '../components/ShowsCollection'

function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  const [session] = useSession()

  return (
    <>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      {/* {!session ? (
        <Hero></Hero>
      ) : ( */}
        <main className="after:bg-color relative min-h-screen after:absolute after:inset-0 after:z-[-1] after:bg-home after:bg-cover after:bg-fixed after:bg-center after:bg-no-repeat">
          <Slider></Slider>
          <Brands></Brands>
          <MoviesCollection
            results={popularMovies}
            title="Popular Movies"
          ></MoviesCollection>
          <ShowsCollection
            results={popularShows}
            title="Popular Shows"
          ></ShowsCollection>
          <MoviesCollection
            results={top_ratedMovies}
            title="Top Rated Movies"
          ></MoviesCollection>
          <ShowsCollection
            results={top_ratedShows}
            title="Top Rated Shows"
          ></ShowsCollection>
        </main>
      {/* )} */}
    </>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
  ])
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ])

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  }
}
