import axios from 'axios';
import Fuse from 'fuse.js'
import nlp from 'compromise'
import { TMDB_API_KEY, TMDB_BASE_URL } from './config';

const tmdb = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
        api_key: TMDB_API_KEY,
    },
});

export const getGenres = async () => {
    try {
        const response = await tmdb.get('/genre/movie/list');
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
};

export const searchMovies = async (query, filters = {}, sort = 'popularity.desc', page = 1) => {
    try {
        if (!query) return []

        // Parse natural language query
        const doc = nlp(query)
        const extractedQuery = doc.terms().out('text') || query

        // TMDb search
        const response = await tmdb.get('/search/multi', {
            params: {
                query: extractedQuery,
                with_genres: filters.genre,
                primary_release_year: filters.year,
                'vote_average.gte': filters.rating,
                sort_by: sort,
                page,
            }
        })

        let results = response.data.results.filter((item) => item.media_type === 'movie')

        // Fuzzy search for misspellings
        if (results.length < 5) {
            const fuse = new Fuse(results, {
                keys: ['title', 'overview'],
                threshold: 0.4,
            })
            results = fuse.search(query).map(({ item }) => item)
            return results
        }

    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await tmdb.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};

export const getMovieCredits = async (id) => {
    try {
        const response = await tmdb.get(`/movie/${id}/credits`);
        return response.data;
    } catch (error) {
        console.error('Error fetching credits:', error);
        return null;
    }
};

export const getMovieVideos = async (id) => {
    try {
        const response = await tmdb.get(`/movie/${id}/videos`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

export const getWatchProviders = async (id) => {
    try {
        const response = await tmdb.get(`/movie/${id}/watch/providers`);
        return response.data.results.US; // Adjust for region
    } catch (error) {
        console.error('Error fetching providers:', error);
        return null;
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await tmdb.get('/movie/popular');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

export const getNowPlayingMovies = async () => {
    try {
        const response = await tmdb.get('/movie/now_playing');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        return [];
    }
};

export const getMoviesByCategory = async (category) => {
    try {
        let endpoint = '/movie/popular'
        let params = {}
        if (category.startsWith('with_genres')) {
            endpoint = '/discover/movie'
            params.with_genres = category.split('=')[1]
        } else {
            endpoint = {
                'trending-now': '/movie/popular',
                'new-releases': '/movie/now_playing',
                'top-rated': '/movie/top_rated',
            }[category] || '/movie/popular';   
        }
        const response = await tmdb.get(endpoint, { params });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching category movies:', error);
        return [];
    }
};

export const getSimilarMovies = async (id) => {
    try {
        const response = await tmdb.get(`/movie/${id}/similar`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching similar movies:', error);
        return [];
    }
};

