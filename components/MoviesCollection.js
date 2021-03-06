import MovieThumbnail from './MovieThumbnail'

function MoviesCollection({ results, title }) {
  return (
    <section className="relative mx-auto my-10 flex max-w-[1400px] flex-col space-y-2 px-8">
      <h2 className="font-semibold">{title}</h2>
      <div className="-m-2 flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 scrollbar-hide">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result}></MovieThumbnail>
        ))}
      </div>
    </section>
  )
}

export default MoviesCollection
