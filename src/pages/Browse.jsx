import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import { getMoviesByCategory } from '../api/tmdb';

const Browse = () => {
const { category } = useParams();
const [movies, setMovies] = useState([]);

useEffect(() => {
    getMoviesByCategory(category).then(setMovies);
}, [category]);

return <CategoryList title={category.replace('-', ' ')} movies={movies} />;
};

export default Browse;