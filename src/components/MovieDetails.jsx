import { LazyLoadImage } from 'react-lazy-load-image-component';
import YouTube from 'react-youtube';

const MovieDetails = ({ movie, credits, videos, providers }) => {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Poster';
    const trailer = videos?.find((video) => video.type === 'Trailer' && video.site === 'YouTube');

    return (
    <div className="container mx-auto p-4 text-gray-900 dark:text-white">
        <div className="flex flex-col md:flex-row gap-6">
        <LazyLoadImage src={posterUrl} alt={movie.title} className="w-64 rounded-lg" />
        <div className="flex-1">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{movie.release_date}</p>
            <p className="mt-2">{movie.overview}</p>
            <div className="mt-4">
            <p>Genres: {movie.genres?.map((g) => g.name).join(', ')}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Rating: {movie.vote_average?.toFixed(1)}/10</p>
            </div>
            <div className="mt-4">
            <h2 className="text-xl font-semibold">Cast</h2>
            <p>{credits?.cast?.slice(0, 5).map((c) => c.name).join(', ')}</p>
            </div>
            {trailer && (
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Trailer</h2>
                <YouTube videoId={trailer.key} className="w-full max-w-lg" />
            </div>
            )}
            {providers && (
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Watch Now</h2>
                <ul>
                {providers.flatrate?.map((p) => (
                    <li key={p.provider_id}>{p.provider_name}</li>
                ))}
                </ul>
            </div>
            )}
        </div>
        </div>
    </div>
    );
};

export default MovieDetails;