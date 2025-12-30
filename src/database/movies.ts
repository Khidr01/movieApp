// First create a type for the movie.
// You know TypeScript needs types.
// This is something like a Schema for the database

export interface movieSchema {
    id: number;
    title: string;
    year: number;
    genre: string;
    director: string;
    rating: number;
    poster: string;
    description: string;
}

export const movies: movieSchema[] = [
    {
        id: 1,
        title: "The Last Horizon",
        year: 2023,
        genre: "Sci-Fi",
        director: "Emma Rodriguez",
        rating: 8.2,
        poster: "https://picsum.photos/seed/movie1/300/450",
        description: "A crew of astronauts discovers a mysterious signal from the edge of the galaxy that could change humanity's future forever."
    },
    {
        id: 2,
        title: "Midnight in Cairo",
        year: 2022,
        genre: "Thriller",
        director: "Hassan Al-Mahmoud",
        rating: 7.5,
        poster: "https://picsum.photos/seed/movie2/300/450",
        description: "An intelligence agent races against time to stop an international conspiracy unfolding in the streets of Cairo."
    },
    {
        id: 3,
        title: "The Baker's Daughter",
        year: 2021,
        genre: "Drama",
        director: "Sophie Chen",
        rating: 8.7,
        poster: "https://picsum.photos/seed/movie3/300/450",
        description: "A young woman inherits her grandmother's bakery and discovers a family secret that spans three generations."
    },
    {
        id: 4,
        title: "Code Red",
        year: 2023,
        genre: "Action",
        director: "Marcus Johnson",
        rating: 6.9,
        poster: "https://picsum.photos/seed/movie4/300/450",
        description: "When a hacker threatens to shut down the city's infrastructure, a retired cop must come out of retirement for one last mission."
    },
    {
        id: 5,
        title: "Whispers in the Woods",
        year: 2022,
        genre: "Horror",
        director: "Yuki Tanaka",
        rating: 7.8,
        poster: "https://picsum.photos/seed/movie5/300/450",
        description: "A group of friends on a camping trip encounter something ancient and malevolent lurking in the forest."
    },
    {
        id: 6,
        title: "Love at First Byte",
        year: 2023,
        genre: "Romance",
        director: "Isabella Rossi",
        rating: 7.1,
        poster: "https://picsum.photos/seed/movie6/300/450",
        description: "Two rival app developers fall in love while competing for the same startup funding."
    },
    {
        id: 7,
        title: "The Piano Thief",
        year: 2021,
        genre: "Mystery",
        director: "Pierre Dubois",
        rating: 8.4,
        poster: "https://picsum.photos/seed/movie7/300/450",
        description: "A detective investigates the theft of a priceless piano that leads him into the dark world of art smuggling."
    },
    {
        id: 8,
        title: "Galactic Guardians",
        year: 2023,
        genre: "Sci-Fi",
        director: "James Carter",
        rating: 7.6,
        poster: "https://picsum.photos/seed/movie8/300/450",
        description: "Earth's last defense force battles an alien invasion with experimental technology and courage."
    },
    {
        id: 9,
        title: "Cooking with Fire",
        year: 2022,
        genre: "Comedy",
        director: "Maria Garcia",
        rating: 6.8,
        poster: "https://picsum.photos/seed/movie9/300/450",
        description: "A celebrity chef's life spirals out of control when a food critic gives him a devastating review."
    },
    {
        id: 10,
        title: "Echoes of Tomorrow",
        year: 2023,
        genre: "Drama",
        director: "David Kim",
        rating: 8.9,
        poster: "https://picsum.photos/seed/movie10/300/450",
        description: "A time traveler struggles with the consequences of changing the past while trying to save his family."
    }
];