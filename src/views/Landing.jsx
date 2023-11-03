import React from 'react'
import Logo from './logo.png'
import { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const nextPath = '/sign-in-or-sign-up';

  let nextPage = () => {
    // return redirect('/sign-in-or-sign-up');
    navigate(nextPath);
  }
  useEffect(() => {
    let handler = () => {
      // console.log('redirecting!');
      nextPage();
    };

    document.addEventListener('mousedown', handler);
    // Cleanup function
		return () => {
			document.removeEventListener('mousedown', handler);
		};
  }, []);

  return (
    <div className='bg-primary w-screen h-screen'>
      <div className=' flex flex-col items-center h-full w-full pl-6	pb-36 justify-center'>
        <img className='h-27 w-36' src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Landing