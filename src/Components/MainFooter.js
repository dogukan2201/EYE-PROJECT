import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function MainFooter() {
  return (
    <footer className="bg-black text-white py-4 h-auto sm:h-24 flex flex-col sm:flex-row items-center">
      <div className="container mx-auto px-4 flex justify-between">
        <div className='logo flex items-center mb-4 sm:mb-0'>
          <Link to={'/'}><FaEye /></Link>
          <Link to={'/'}>EYE</Link>
        </div>
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <li><Link to={'/'}>Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p className="mt-4 sm:mt-0">&copy; 2024 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default MainFooter;
