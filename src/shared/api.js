import axios from 'axios';
const API_KEY = 'api_key=f2276557f452d5e4f3dac26aab188cd0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const API = {
  async fetchTrendingMovies() {
    const response = await axios(`${BASE_URL}/trending/all/week?${API_KEY}`);
    return response.data;
  },

  async fetchMovieById(movieId) {
    const response = await axios(`${BASE_URL}/movie/${movieId}?${API_KEY}`);
    return response.data;
  },

  async fetchSearchMovie(searhMovie) {
    const response = await axios(
      `${BASE_URL}/search/movie?query=${searhMovie}&${API_KEY}&page=1`
    );
    return response.data.results;
  },

  async fetchActorsCredits(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/credits?${API_KEY}`
    );
    return response.data.cast;
  },

  async fetchMovieReviews(movieId) {
    const response = await axios(
      `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  },
};
