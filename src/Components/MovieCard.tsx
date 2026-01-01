import { type movieSchema } from "../database/movies";

/** You should accept props to render dynamic data */
export function MovieCard(props: movieSchema) {

    let color = "";

    if(props.rating < 2.5) {
        color = "text-red-900";
    } else if(props.rating >= 2.5 && props.rating < 5) {
        color = "text-red-500";
    } else if(props.rating >= 5 && props.rating < 7.5) {
        color = "text-yellow-500";
    } else {
        color = "text-green-500";
    }

    return (
        <article className="group w-64 h-84 bg-[#f1f1f1] p-0.5 m-1 rounded-md hover:scale-105 transition duration-300 font-mono">
            <img src={props.poster} className="w-full h-64 group-hover:scale-90 transition duration-300 group-hover:blur-[2px]" alt="poster of the film" />
            <div className="flex flex-col justify-center text-center">
                <h2 className="text-black">{props.title}</h2>
                <p className="text-black">{props.year}</p>
                <p className={color}>{props.rating}</p>
            </div>
        </article>
    )
}