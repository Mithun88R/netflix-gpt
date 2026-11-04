import { API_OPTIONS } from "../utils/constants";

// Implementation for fetching TMDB movie details
// search movie details from TMDB API
const fetchMovieDetails = async (movieName) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const response = await data.json();
    console.log("response", response);
    return response.results;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export default fetchMovieDetails;
