import { SearchMovie } from "./Components/SearchMovie"
import { movies } from "./database/movies"
import { MovieCard } from "./Components/MovieCard"

function App() {

  return (
    <section className="flex flex-col p-0 m-0 bg-gradient-to-l from-[#38A2D7] to-[#561139]">
      <SearchMovie />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movies) => {
          return (
            <MovieCard key={movies.id} {...movies} />
          )
        })}
      </section>
    </section>
  )
}

export default App