import React from "react";
import MoviesHeader from "../Components/MoviesHeader";
import ResultCard from "../Components/ResultCard";
import { useSelector } from "react-redux";
import { BiMovie } from "react-icons/bi";

function Movies() {
  const { searchMovies } = useSelector((state) => state.search);

  return (
    <div className="MoviesMain h-full bg-black">
      <MoviesHeader />

      <div className="resultSection mx-auto flex flex-col justify-center w-full sm:w-3/4">
        {searchMovies && searchMovies.length > 0 ? (
          searchMovies.map((movie, index) => {
            return <ResultCard key={index} movie={movie} />;
          })
        ) : (
          <p className="text-white text-8xl w-full h-screen bg-black flex justify-center items-center sm:text-56xl">
            <BiMovie />
          </p>
        )}
      </div>
    </div>
  );
}

export default Movies;
