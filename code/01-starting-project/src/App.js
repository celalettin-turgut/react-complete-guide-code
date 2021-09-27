import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const GET_MOVIES = "https://swapi.dev/api/film/";

  const fetchMovie = async () => {
    try {
      const response = await fetch(GET_MOVIES);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const transformedData = data.results.map((film) => {
        return {
          title: film.title,
          date: film.release_date,
          description: film.opening_crawl,
        };
      });
      setMovies(transformedData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {!error && <MoviesList movies={movies} />}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
