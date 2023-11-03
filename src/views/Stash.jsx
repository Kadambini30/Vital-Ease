import React from 'react'
import walk from './bx_walk.png'
function Stash() {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="text-txt font-semibold text-4xl pt-28 font-family ">
        Device 1
    </div>
    <div className=" w-[22rem] h-[36rem] bg-secondary rounded-2xl mt-8 shadow-xl">
        <div className="  flex flex-col justify-evenly gap-3 items-center pt-10">
        <div className='w-[109px] h-[106px] bg-orange-50 rounded-full pt-8 pl-8'><img src={walk} alt="" /></div>
        <div className='flex flex-col justify-content items-center'>
        <div className='text-xl font-semibold'>Steps</div>
        
        </div>
            <div className='text-xl mt-14 font-semibold'></div>
            <button className="bg-primary  text-txt h-16 w-72 pt-04  font-medium shadow-xl  rounded-xl text-xl ">
                Blood Oxygen
            </button>
            <button className="bg-primary  text-txt h-16 w-72 pt-04  font-medium shadow-xl  rounded-xl text-xl ">
                Blood glucose
            </button>
            <div className="bg-primary text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
                <div className="mt-4 ">All Devices</div>
                
                
            </div>
            
            
            
        </div>
    </div>
</div>
  )
}

export default Stash