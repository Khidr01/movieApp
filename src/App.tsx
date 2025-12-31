import { movies } from "./database/movies"

function App() {

  return (
    <>
      {movies.map((movie) => {
        return <li className="text-red-400" key={movie.id}>
          <pre>
          {movie.title}<br></br>
          {movie.year}<br></br>
          {movie.genre}<br></br>
          {movie.director}<br></br>
          {movie.rating}<br></br>
          <img src={movie.poster}></img><br></br>
          {movie.description}<br></br>
          </pre>
          <br></br>
        </li>
      })}
    </>
  )
}

export default App
