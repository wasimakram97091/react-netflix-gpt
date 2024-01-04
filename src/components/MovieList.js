import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies && (
          <div className="flex gap-5">
            {movies.map((movie) => (
              <MovieCard posterPath={movie?.poster_path} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList;
