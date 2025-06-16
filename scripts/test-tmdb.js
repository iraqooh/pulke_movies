import axios from "axios";
const TMDB_API_KEY = import.meta.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const testSearch = async () => {
    try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
        params: {
        api_key: TMDB_API_KEY,
        query: 'Inception',
        },
    });
    console.log('Search Results:', response.data.results.slice(0, 2));
    } catch (error) {
    console.error('Search Error:', error.message);
    }
};

const testMovieDetails = async () => {
    try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/27205`, {
        params: {
        api_key: TMDB_API_KEY,
        },
    });
    console.log('Movie Details:', {
        title: response.data.title,
        id: response.data.id,
    });
    } catch (error) {
    console.error('Details Error:', error.message);
    }
};

const runTests = async () => {
    console.log('Testing TMDb API...');
    await testSearch();
    await testMovieDetails();
};

runTests();