import React from 'react';

function Otp() {
	return (
		<div className='flex flex-col flex-shrink-0 justify-center items-center'>
            <div className='text-center font-semibold font-family text-txt text-3xl pt-48'>Enter your name</div>
            <div className='text-center'><input className='w-64 h-14 shadow-xl mt-1 rounded-2xl text-xl bg-secondary'  type="text" /></div>
            <div className=" bg-[#3A620C] text-white h-4 w-64 pb-10 pt-4 mt-10 text-center font-medium shadow-2xl  rounded-xl text-center text-xl ">
				<button> Next</button>
			</div>
        </div>
	);
}

export default Otp;
