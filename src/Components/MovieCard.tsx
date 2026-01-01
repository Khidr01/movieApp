import { type movieSchema } from "../database/movies";

/** You should accept props to render dynamic data */
export function MovieCard(props: movieSchema) {

    return (
        <article className="w-64 h-84 bg-[#f1f1f1] p-0.5 m-1 rounded-md hover:scale-105 transition duration-300">
            <img src={props.poster} className="w-full h-64 hover:scale-90 transition duration-300 hover:blur-xs" alt="poster of the film" />
            <div className="flex flex-col justify-center text-center">
                <h2 className="text-black-600">{props.title}</h2>
                <p className="text-black-600">{props.year}</p>
                <p className="text-black-600">{props.rating}</p>
            </div>
        </article>
    )
}