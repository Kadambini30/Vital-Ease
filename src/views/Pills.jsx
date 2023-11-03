import React from 'react';
import Gallery from './gallery.png'
function Pills() {
	return (
        <>
		<div className="pt-28 flex flex-col justify-evenly items-center gap-14">
			 <div><button className="w-52 h-52 bg-secondary rounded-2xl shadow-2xl">
                <div className='text-9xl text-[#2D5500] text-center pb-8'>+</div>
            </button>
             </div>
            <div>
            <button className="w-52 h-52 pl-14 bg-secondary rounded-2xl shadow-2xl">
                <img className='w-24 h-24'  src={Gallery} alt="" />
            </button>
            </div>
		</div>
        </>
	);
}

export default Pills;
