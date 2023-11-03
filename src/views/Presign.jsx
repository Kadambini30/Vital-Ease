import React from 'react';
import Logo2 from './text-logo.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Presignup() {
	const navigate = useNavigate();
	const signUpPath = '/sign-up';
	const signInPath = '/sign-in';

	const [handleNextSignUp, setHandleNextSignUp] = useState(() => () => { });
	const [handleNextSignIn, setHandleNextSignIn] = useState(() => () => { });


	useEffect(() => {
		setHandleNextSignUp(() => () => {
			// console.log('redirecting to sign up page!');
			navigate(signUpPath);
		});

		setHandleNextSignIn(() => () => {
			// console.log('redirecting to sign in page!');
			navigate(signInPath);
		});
	}, [navigate, signUpPath, signInPath]);
	return (
		<div className='h-screen w-screen my-auto'>
			<div className="flex flex-col items-center h-5/6 justify-center gap-3">
				<img src={Logo2} className="w-45 h-30 mb-6" alt="" />
				<div>
					<button className="rounded-lg bg-secondary w-60 h-16 text-lg font-semibold"
						onClick={handleNextSignUp}>
						Sign up
					</button>
				</div>
				<div className="flex flex-row justify-center items-center">
					<div className="bg-black w-24 h-px"></div>
					<div className="text-lg font-semibold mx-2">OR</div>
					<div className="bg-black w-24 h-px"></div>
				</div>
				<div>
					<button className="rounded-lg bg-secondary w-60 h-16 text-lg font-semibold"
						onClick={handleNextSignIn}>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}

export default Presignup;
