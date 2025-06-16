import { useEffect, useState } from "react";
import CategoryList from '../components/CategoryList'
import { getPopularMovies, getNowPlayingMovies, getMoviesByCategory } from '../api/tmdb'

const Home = () => {
    const [popular, setPopular] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [actionMovies, setActionMovies] = useState([])

    useEffect(() => {
        getPopularMovies().then(setPopular)
        getNowPlayingMovies().then(setNowPlaying)
        getMoviesByCategory('with_genres=28').then(setActionMovies)
    }, [])

    return (
        <div className="">
            <CategoryList title="Trending Now" movies={popular} />
            <CategoryList title="Now Playing" movies={nowPlaying} />
            <CategoryList title="Action Movies" movies={actionMovies} />
        </div>
    )
}

export default Home