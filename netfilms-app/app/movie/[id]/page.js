import React from 'react'
import { notFound } from "next/navigation";
import Movies from "@/mocks/movies.json"
import MovieContainer from '@/containers/movie'
const MoviePage = ({ params, searchParams }) => {
    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id)

    if (!movieDetail) {
        notFound();
    }
    if (searchParams.error === "true") {
        throw new Error("Something went wrong!");
    }
    return (
        <div>
            <MovieContainer movie={movieDetail} />
        </div>
    )
}

export default MoviePage
