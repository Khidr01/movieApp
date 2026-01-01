import { movies } from "../database/movies";
import { useState } from "react";

export function SearchMovie() {
    const [searchInput, setSearchInput] = useState<string>("");

    function setInputSearch(e: React.FormEvent) {
        // Send the data to somewhere and clear the search input
        e.preventDefault();
        movies.map((movie) => {
            let color = "";

            if (movie.rating < 2.5) {
                color = "text-red-900";
            } else if (movie.rating >= 2.5 && movie.rating < 5) {
                color = "text-red-500";
            } else if (movie.rating >= 5 && movie.rating < 7.5) {
                color = "text-yellow-500";
            } else {
                color = "text-green-500";
            }
            if (movie.title === searchInput) {
                return (
                    <article className="group w-64 h-84 bg-[#f1f1f1] p-0.5 m-1 rounded-md hover:scale-105 transition duration-300 font-mono">
                        <img src={movie.poster} className="w-full h-64 group-hover:scale-90 transition duration-300 group-hover:blur-[2px]" alt="poster of the film" />
                        <div className="flex flex-col justify-center text-center">
                            <h2 className="text-black">{movie.title}</h2>
                            <p className="text-black">{movie.year}</p>
                            <p className={color}>{movie.rating}</p>
                        </div>
                    </article>
                )
            } else {
                return "No result";
            }
        });
        setSearchInput("");
    }

    return (
        <form className="flex flex-col items-center mt-6" onSubmit={setInputSearch}>
            <input placeholder="Search for your film" type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} className="w-200 h-10 text-cyan-100 border-2 border-solid border-l-blue-50 rounded-3xl font-mono"></input>
            <button className="font-mono border-2 border-solid p-2 m-3 rounded-3xl hover:scale-105" type="submit">search</button>
        </form>
    )
}