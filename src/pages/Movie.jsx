import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import { getMovieDetails, getMovieCredits, getMovieVideos, getWatchProviders } from '../api/tmdb';

const Movie = () => {
const { id } = useParams();
const [movie, setMovie] = useState(null);
const [credits, setCredits] = useState(null);
const [videos, setVideos] = useState(null);
const [providers, setProviders] = useState(null);

useEffect(() => {
    getMovieDetails(id).then(setMovie);
    getMovieCredits(id).then(setCredits);
    getMovieVideos(id).then(setVideos);
    getWatchProviders(id).then(setProviders);
}, [id]);

if (!movie) return <p>Loading...</p>;

return <MovieDetails movie={movie} credits={credits} videos={videos} providers={providers} />;
};

export default Movie;