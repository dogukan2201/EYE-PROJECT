import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearchMovies } from '../Redux/SearchResultSlice';
import { MdMovieCreation } from "react-icons/md";

function MoviesHeader() {
    const [searchMovie, setSearchMovie] = useState('');
    const [result,setResult] = useState([])
    const { user } = useSelector((state) => state.auth);
    const { watchList } = useSelector((state) => state.watchList);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSearchMovie(e.target.value);
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODgzZjQyYjJlOTZmZWU0MTQwZjkwYWU1NWVmYThiOCIsInN1YiI6IjY1ZWYxODEwZTcyZmU4MDE4NTVjYjA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpuLFyAkZNdu_8Zc2x-kxyRv86ISXgQUZWp_5LKwRlk'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&query=${e.target.value}&language=en-US&page=1` , options)
            .then(response => response.json())
            .then((data) => {dispatch(setSearchMovies(data.results))})            
            .catch(err => console.error(err));
    };

    return (
<header className='MoviesHeaderMain w-full h-24 flex items-center justify-between text-white bg-black px-4 mb-8'>
    <div className='Logo flex items-center text-2xl sm:text-4xl'>
        <Link to={'/'}><FaEye /></Link>
        <Link to={'/'}>EYE</Link>
    </div>
    <div className='search flex items-center'>
        <form onSubmit={handleSearch} className='flex items-center text-black text-l sm:text-xl'>
            <input
                type='text'
                value={searchMovie}
                onChange={handleChange}
                placeholder='Search movies...'
                className='rounded-l p-2 focus:outline-none w-full sm:w-40 md:w-60 lg:w-80 xl:w-96'
            />
            <button type='submit' className='bg-red-700 text-white p-2'>Search</button>
            {user ?(
            <button className="flex  justify-center items-center  rounded-full bg-red-700 text-white text-xl px-3 py-1 ml-2"><MdMovieCreation />
            {watchList === [] ? 0 : watchList.length}</button>):null}
        </form>
    </div>
</header>


    );
}

export default MoviesHeader;
