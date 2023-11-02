import React from 'react'
import Logo from './logo.png'
function Landing() {
  return (
    <div className='bg-primary w-screen h-screen'>
      <div className=' flex flex-col items-center h-full w-full pl-6	pb-36 justify-center'><img className='h-27 w-36' src={Logo} alt="" /></div>
    </div>
  )
}

export default Landing