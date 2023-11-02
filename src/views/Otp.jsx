import React from 'react';

function Otp() {
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
					<input type="tel" className="bg-primary rounded-2xl text-center text-3xl font-semibold w-[4.5rem] h-[4.5rem]"></input>
					<input type="tel" className="bg-primary rounded-2xl text-center text-3xl font-semibold w-[4.5rem] h-[4.5rem]"></input>
					<input type="tel" className="bg-primary rounded-2xl text-center text-3xl font-semibold w-[4.5rem] h-[4.5rem]"></input>
					<input type="tel" className="bg-primary rounded-2xl text-center text-3xl font-semibold w-[4.5rem] h-[4.5rem]"></input>
				</div>
                <div>
                    <div className='font-semibold font-family text-xl text-txt'>Didn’t receive OTP yet?</div>
                    <div className='text-center mt-2'><button className='bg-primary w-40  rounded-md text-lg text-txt'>Resend Code</button></div>
                </div>
                <div>
                    <button className='w-60 h-16 rounded-xl text-xl font-medium text-primary bg-[#39610C]'>Verify OTP & Proceed</button>
                </div>
			</div>
		</div>
	);
}

export default Otp;
