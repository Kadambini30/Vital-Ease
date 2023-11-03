import React from 'react'
import Ambulance from './ambulance.png'
import Header1 from '../components/Header1'

function Sos() {
  return (
    <>
    
        <div className="flex flex-col justify-evenly items-center gap-14">
            <Header1 />
            <div className='pt-4'>
        <div><button className="w-52 h-52 bg-sos rounded-2xl shadow-lg pl-10 pb-4">
          <div className='w-[140px] h-[81px]  text-orange-50 text-[70px] font-extrabold '>SOS</div>
        </button>
          <div className='mt-4 ml-1 text-lg text-txt font-semibold'>Alert Emergency Contacts</div>
        </div>
        <div>
          <button className="w-52 h-52  bg-sos rounded-lg shadow-2xl pl-10 pb-4">
            <div>
              <img className='ml-6' src={Ambulance} alt="" />
              <div className='w-[140px] h-[81px]  text-orange-50 text-[70px] font-extrabold '>SOS</div>
            </div>
          </button>
          <div className='mt-4 ml-10 text-lg text-txt font-semibold'>Call Ambulance</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Sos