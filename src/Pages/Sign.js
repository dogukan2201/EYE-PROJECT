import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook, FaImdb } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { signUp } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginHandle } from '../Redux/AuthSlice';

function SignUp() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = await signUp(email,password)
    dispatch(loginHandle(user))
    if (user !== false && user !== undefined) { // Kullanıcı false veya undefined değilse
      setMail('')
      setPassword('')
      navigate('/',{replace:true})}
  };

  return (
    <div className='h-screen w-screen'>
      <Toaster/>
      <div className='loginMain flex flex-col justify-center items-center h-screen'>
        <div className='logindiv flex flex-col gap-y-4 justify-around rounded mx-auto shadow-md w-full sm:w-2/5 md:w-1/3 lg:w-1/4 h-full sm:h-3/5 md:h-1/2 lg:h-2/5'>
          <div className='Logo flex items-center justify-center text-4xl text-white'>
            <Link to={'/'}>
              <FaEye />
            </Link>
            <Link to={'/'}>EYE</Link>

          </div>

          <div className='flex flex-col items-center justify-center text-xl mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col items-center space-y-4 text-black'>
                <input
                className='input rounded p-1 border border-gray-300 h-7 sm:w-full md:w-80 lg:w-80'
                placeholder='e-mail'
                  type='email'
                  onChange={(event) => setMail(event.target.value)}
                  value={email}
                />
            
                <input
                className='input rounded p-1 border border-gray-300 h-7 sm:w-full md:w-80 lg:w-80'
                placeholder='password'
                  type='password'
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <button className='bg-red-700 text-white p-2 w-3/5 h-7 flex items-center justify-center' type='submit'>
                  Sign Up
                </button>
                <div className='flex flex-col justify-center mx-auto text-white'>
                  <div className='loginWith flex items-center justify-center space-x-4 text-xl mx-auto'>
                    <button>
                      <BiLogoGmail />
                    </button>
                    <button>
                      <FaFacebook />
                    </button>
                    <button>
                      <FaImdb />
                    </button>
                  </div>
                </div>
                <div className='text-white flex flex-col justify-center items-center'>
                  <p>Already a member?</p>
                  <div className='flex'>
                    <Link to={'/login'}>Login</Link>
                    <button className='bg-red-700 ml-3 w-16'>
                      <Link to={'/'}>Home</Link>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
