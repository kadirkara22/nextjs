import FeaturedMovie from '@/components/featured-movie'
import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import Categories from '@/components/categoires'
import MoviesSection from '@/components/movies-section'
const HomeContainer = () => {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[1]} />
            <Categories categories={Genres.genres.slice(0, 5)} />
            <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={Movies.results.slice(1, 7)} />
        </div>
    )
}

export default HomeContainer
