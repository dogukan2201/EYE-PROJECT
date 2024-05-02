import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logoutHandle } from '../Redux/AuthSlice';
import { logOut } from '../Firebase/firebase';
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu ekledik
import { addData } from '../Firebase/firebase';
import { setWatchList } from '../Redux/WatchListSlice';

function MainHeader() {
  const { user } = useSelector((state) => state.auth);
  const { watchList } = useSelector((state) => state.watchList);
  
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook'unu ekledik

  const handleLogOut = async () => {
    await addData(watchList,user.email)
    await logOut();
    dispatch(setWatchList([]));
    dispatch(logoutHandle());
    navigate('/login');
  };

  return (
    <div className='NavBar w-full mx-auto px-4 flex justify-between items-center text-white bg-black h-28 border-b-2 border-white'>
      <div className='left flex justify-around items-center  w-1/3 lg:w-1/4'>
        <div className='logo flex items-center text-xl md:text-3xl'>
          <Link to='/'>
            <FaEye />
          </Link>
          <Link to='/'>EYE</Link>
        </div>
        <div className='Pages text-base md:text-2xl'>
          <Link to='/movies'>Movies</Link>
        </div>
      </div>

      <div className='LoginSign flex justify-center mr-10 text-base md:text-xl'>
        {user ? (
          <button onClick={handleLogOut} className='bg-red-700 ml-3 w-20'>LogOut</button>
        ) : (
          <>
            <p className='bg-black w-20 h-8 flex items-center justify-center border-r-2 border-white'>
              <Link to='/login'>Login</Link>
            </p>
            <p className='bg-red-700 w-20 h-8 flex items-center justify-center'>
              <Link to='/sign'>Sign Up</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default MainHeader;
