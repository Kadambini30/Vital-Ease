import React from 'react'
import { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

function Welcom() {
  const navigate = useNavigate();
  const nextPath = '/main';

  useEffect(() => {
    let handler = () => {
      // console.log('redirecting!');
      navigate(nextPath);
    };

    document.addEventListener('mousedown', handler);
    // Cleanup function
		return () => {
			document.removeEventListener('mousedown', handler);
		};
  }, [navigate, nextPath]);
  return (
    <div className='bg-primary text-txt w-screen h-screen flex flex-col justify-normal items-center pt-56'>
        <div className='text-4xl font-semibold'>Welcome to</div>
        <div className='text-4xl font-semibold'> Vital Ease</div>
        <div className='font-medium text-xl mt-14'>Tap anywhere to continue</div>
    </div>
  )
}

export default Welcom