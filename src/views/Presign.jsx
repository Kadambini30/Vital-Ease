import React from 'react';
import Logo2 from './text-logo.png';

function presignup() {
	return (
		<div className="flex flex-col items-center h-5/6 justify-center gap-3">
			<img src={Logo2} className="w-45 h-30 mb-6" alt="" />
			<div>
				<button className="rounded-lg bg-secondary w-60 h-16 text-lg font-semibold	">
					Sign up
				</button>
			</div>
			<div className="flex flex-row justify-center items-center">
				<div className="bg-black w-24 h-px"></div>
				<div className="text-lg font-semibold mx-2">OR</div>
				<div className="bg-black w-24 h-px"></div>
			</div>
			<div>
				<button className="rounded-lg bg-secondary w-60 h-16 text-lg font-semibold	">
					Sign up
				</button>
			</div>
		</div>
	);
}

export default presignup;
