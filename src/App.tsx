import { movies } from "./database/movies"
import { MovieCard } from "./Components/MovieCard"

function App() {

  return (
    <section className="grid grid-cols-4">
      {movies.map((movies) => {
        return <li className="text-red-400" key={movies.id}>
          <MovieCard {...movies} />
        </li>
      })}
    </section>
  )
}

export default App
