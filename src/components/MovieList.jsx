import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies List:", movies);
  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto  overflow-y-hidden scrollbar-hide">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie?.title}
              poster_path={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
