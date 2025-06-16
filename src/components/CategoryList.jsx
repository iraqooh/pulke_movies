import MovieCard from './MovieCard';

const CategoryList = ({ title, movies }) => (
    <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
    </div>
);

export default CategoryList;