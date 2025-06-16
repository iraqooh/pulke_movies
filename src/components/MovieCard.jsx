import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://placehold.co/600x400/000000/FFF';

    return (
    <Link to={`/movie/${movie.id}`} className="group">
        <div className="relative overflow-hidden rounded-lg shadow-md">
        <LazyLoadImage
            src={posterUrl}
            alt={movie.title}
            effect="blur"
            className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-end p-2">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-sm font-semibold">{movie.title}</h3>
            <p className="text-xs">Rating: {movie.vote_average?.toFixed(1)}</p>
            </div>
        </div>
        </div>
    </Link>
    );
};

export default MovieCard;