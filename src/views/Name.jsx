import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Name() {
	const navigate = useNavigate();
	const agePath = '/add-age';

	const [handleEnterAge, setHandleEnterAge] = useState(() => () => { });

	useEffect(() => {

		setHandleEnterAge(() => () => {
			// console.log('redirecting to otp page!');
			navigate(agePath);
		});
	}, [navigate, agePath]);
	
	return (
		<div className='flex flex-col flex-shrink-0 justify-center items-center'>
			<div className='text-center font-semibold font-family text-txt text-3xl pt-48'>Enter your name</div>
			<div className='text-center'><input className='w-64 h-14 shadow-xl mt-1 rounded-2xl text-xl bg-secondary' type="text" /></div>
			<button className=" bg-[#3A620C] text-white h-4 w-64 pb-10 pt-4 mt-10  font-medium shadow-2xl  rounded-xl text-center text-xl "
				onClick={handleEnterAge}>
				Next
			</button>
		</div>
	);
}

export default Name;
