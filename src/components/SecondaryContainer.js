import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((state) => state.movies);
  // console.log(movies.nowPlayingMovie);
  // console.log(movies.popularMovies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
