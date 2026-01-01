import { movies } from "./database/movies"
import { MovieCard } from "./Components/MovieCard"

function App() {

  return (
    <section className="grid grid-cols-4">
      {movies.map((movies) => {
        return (
          <MovieCard {...movies} />
        )
      })}
    </section>
  )
}

export default App
