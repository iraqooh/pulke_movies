import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import FilterPanel from '../components/FilterPanel';
import { searchMovies, getGenres, getSimilarMovies } from '../api/tmdb';
import InfiniteScroll from 'react-infinite-scroll-component'

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [filters, setFilters] = useState({ genre: '', year: '', rating: '' });
    const [sort, setSort] = useState('popularity.desc');
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [similarMovies, setSimilarMovies] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getGenres().then(setGenres);
        setMovies([])
        setPage(1)
        setError(null)
        searchMovies(query, filters, sort, 1).then((results) => {
            if (results.length === 0) {
                setError('No results found. Try a different search term.')
                getSimilarMovies(27205).then(setSimilarMovies)
            } else {
                setMovies(results)
                setHasMore(results.length > 0)
            }
        }).catch(() => {
            setError('An error occurred while searching. Please try again later.')
        })
    }, [query, filters, sort]);

    const loadMore = () => {
        searchMovies(query, filters, sort, page + 1).then((newMovies) => {
            setMovies((prev) => [...prev, ...newMovies])
            setPage((prev) => prev + 1)
            setHasMore(newMovies.length > 0)
        })
    }

    return (
        <div className="container mx-auto p-4">
            <FilterPanel genres={genres} filters={filters} setFilters={setFilters} setSort={setSort} />
            {error ? (
                <div className="">
                    <p className="text-red-500">{error}</p>
                    { similarMovies.length > 0 && (
                        <CategoryList title="You Might Like" movies={similarMovies} />
                    )}
                </div>
            ) : movies.length ? (
                <InfiniteScroll dataLength={movies.length} next={loadMore} hasMore={hasMore} loader={<p className='text-center'>Loading...</p>}>
                    <CategoryList title={`Search Results for "${query}"`} movies={movies} />
                </InfiniteScroll>
            ) : (
                <p className="text-gray-600 dark:text-gray-400">No results found.</p>
            )}
        </div>
    );
};

export default Search;