import React from 'react';

function SignUp() {
	return (
		<>
			<div className="flex flex-col flex-shrink-0 justify-center items-center w-screen">
				<div className="flex flex-col flex-shrink-0 justify-center items-center pt-48 font-medium font-family text-4xl text-txt text-shadow shadow-black-500/50">
					Sign-Up
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
					<div className=" bg-[#3A620C] text-white h-4 w-64 pb-10 pt-4 font-medium  rounded-xl text-center text-xl ">
						<button> Next</button>
					</div>
				</div>
				<div className=" bg-secondary h-12 w-64 rounded-lg -ml-9 mt-16 pt-3 pb-3 text-lg flex flex-row justify-around items-center">
					<div>Have an account?</div>
					<div className="bg-txt rounded-lg text-white h-7 w-20 text-base text-center">
						<button>Sign In!</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default SignUp;
