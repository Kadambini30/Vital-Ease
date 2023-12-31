import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Otp() {

	const navigate = useNavigate();
	const dashboardPath = '/main';

	const [handleNextDashboard, setHandleNextDashboard] = useState(() => () => { });

	useEffect(() => {
		setHandleNextDashboard(() => () => {
			// console.log('redirecting to dashboard page!');
			navigate(dashboardPath);
		});

	}, [navigate, dashboardPath]);

	return (
		<div className="flex flex-col flex-shrink-0 justify-center items-center">
			<div className="pt-40 font-semibold font-family text-4xl text-txt ">
				OTP Verification
			</div>
			<div className="pt-10 font-semibold font-family text-xl text-txt ">
				Enter the OTP sent to +91xxxxxxxx
			</div>
			<div className="w-[24rem] h-80 bg-secondary rounded-2xl flex flex-col flex-shrink-0 justify-normal items-center gap-10 mt-4">
				<div className='flex flex-row justify-evenly items-start  gap-4 mt-6 ml-4 mr-4'>
					<div className="bg-primary rounded-2xl w-[4.5rem] h-[4.5rem]">
						<input className='text-center text-3xl text-txt w-[4.5rem] h-[4.5rem]' type="text" />
					</div>
					<div className="bg-primary rounded-2xl w-[4.5rem] h-[4.5rem]">
						<input className='text-center text-3xl text-txt w-[4.5rem] h-[4.5rem]' type="text" />
					</div>
					<div className="bg-primary rounded-2xl w-[4.5rem] h-[4.5rem]">
						<input className='text-center text-3xl text-txt w-[4.5rem] h-[4.5rem]' type="text" />
					</div>
					<div className="bg-primary rounded-2xl w-[4.5rem] h-[4.5rem]">
						<input className='text-center text-3xl text-txt w-[4.5rem] h-[4.5rem]' type="text" />
					</div>
				</div>
				<div>
					<div className='font-semibold font-family text-xl text-txt'>Didn’t receive OTP yet?</div>
					<div className='text-center mt-2'><button className='bg-primary w-40  rounded-md text-lg text-txt'>Resend Code</button></div>
				</div>
				<div>
					<button className='w-60 h-16 rounded-xl text-xl font-medium text-primary bg-[#39610C]'
						onClick={handleNextDashboard}>
						Verify OTP & Proceed
					</button>
				</div>
			</div>
		</div>
	);
}

export default Otp;
