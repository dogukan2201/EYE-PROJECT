import React, { useState } from "react";
import { FaImdb } from "react-icons/fa";
import { IoIosAdd, IoIosRemoveCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { addWatchList, deleteWatchList } from "../Redux/WatchListSlice";
import { useEffect } from "react";

function ResultCard({ movie }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { watchList } = useSelector((state) => state.watchList);
  const [isAdd, setIsAdd] = useState(false);
  const movieName = movie.title;

  const handleAdd = () => {
    dispatch(addWatchList(movieName));
    setIsAdd(true);
  };

  const handleDelete = () => {
    dispatch(deleteWatchList(movieName));
    setIsAdd(false);
  };

  useEffect(() => {
    const isInWatchList = watchList.some((item) => item === movieName);
    setIsAdd(isInWatchList);
  }, [watchList, movieName]);

  return (
    <div className="resultMain flex items-center justify-between text-white bg-black p-6 border-b-8 border-black">
      <div className="poster h-52 w-full sm:w-52 flex justify-center items-center">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.poster_path}`}
          className="w-full h-52 sm:h-80 object-cover"
        />
      </div>

      <div className="information flex flex-col ml-4 justify-center w-full sm:w-2/4">
        <p className="text-l sm:text-3xl font-bold">{movie.title}</p>
        <p className="text-l sm:text-2xl">
          {movie.release_date.substring(0, 4)}
        </p>
        <p className="flex text-l sm:text-3xl items-center">
          <FaImdb />
          {movie.vote_average.toString().substring(0, 3)}
        </p>

        {user ? (
          isAdd ? (
            <button
              onClick={handleDelete}
              className="text-l sm:text-2xl flex items-center"
            >
              <IoIosRemoveCircle className="mr-1 text-3xl" />
              REMOVE
            </button>
          ) : (
            <button
              onClick={handleAdd}
              className="text-l sm:text-2xl flex items-center"
            >
              <IoIosAdd className="mr-1 text-3xl" />
              ADD
            </button>
          )
        ) : null}
      </div>

      <div className="explanation max-h-96 overflow-y-auto w-80 ml-4">
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default ResultCard;
