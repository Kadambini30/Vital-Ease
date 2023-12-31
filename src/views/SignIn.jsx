import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

	const navigate = useNavigate();
	const signUpPath = '/sign-up';
	const otpPath = '/otp';

	const [handleNextSignUp, setHandleNextSignUp] = useState(() => () => { });
	const [handleNextOtp, setHandleNextOtp] = useState(() => () => { });


	useEffect(() => {
		setHandleNextSignUp(() => () => {
			// console.log('redirecting to sign up page!');
			navigate(signUpPath);
		});

		setHandleNextOtp(() => () => {
			// console.log('redirecting to otp page!');
			navigate(otpPath);
		});
	}, [navigate, signUpPath, otpPath]);

	return (
		<>
			<div className="flex flex-col flex-shrink-0 justify-center items-center w-screen">
				<div className="flex flex-col flex-shrink-0 justify-center items-center pt-48 font-medium font-family text-4xl text-txt text-shadow shadow-black-500/50">
					Sign-In
				</div>
				<div className=" text-center font-family pt-16  text-lg ">
					Enter Your Phone Number
				</div>
				<div className="mr-6  flex flex-col justify-center gap-8 items-center">
					<div>
						<input
							className="bg-secondary mt-2 h-14 w-64 p-6 placeholder-txt border-0 rounded-xl"
							type="tel"
							placeholder="+91"
						/>
					</div>
					<button className=" bg-[#3A620C] text-white h-4 w-64 pb-10 pt-4 font-medium  rounded-xl text-center text-xl "
						onClick={handleNextOtp}>
						Next
					</button>
				</div>
				<div className=" bg-secondary h-12 w-64 rounded-lg -ml-9 mt-16 pt-3 pb-3 text-lg flex flex-row justify-around items-center">
					<div className='text-center text-base'>Don’t have an account?</div>
					<button className="bg-txt rounded-lg text-white h-7 w-20 text-base text-center"
						onClick={handleNextSignUp}>
						Sign Up!
					</button>
				</div>
			</div>
		</>
	);
}
export default SignUp;
