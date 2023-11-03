import React from 'react';

export default function AddContact() {
	return (
		<>
			<div className="flex flex-col flex-shrink-0 justify-center items-center">
				<div className="text-txt text-3xl font-semibold font-family mt-28">
					Add Emergency contacts
				</div>
				<div className="w-[22.5rem] h-[28rem] bg-secondary rounded-2xl flex flex-col flex-shrink-0 justify-normal items-center gap-10 mt-10 shadow-xl pt-8">
					<div>
						<div className="text-txt font-medium">Name</div>
						<input
							type="text"
							className="bg-primary text-txt h-4 w-72 pb-10 pt-4  text-center font-medium shadow-xl  rounded-xl text-xl"
						></input>
					</div>
					<div>
						<div className="text-txt font-medium">Moblie Number</div>
						<input
							type="tel"
							className="bg-primary text-txt h-4 w-72 pb-10 pt-4  text-center font-medium shadow-xl rounded-xl text-xl"
						></input>
					</div>
					<div>
						<div className="text-txt font-medium">Relation</div>
						<input
							type="text"
							className="bg-primary text-txt h-4 w-72 pb-10 pt-4  text-center font-medium shadow-xl  rounded-xl text-xl"
						></input>
					</div>
					<button className="bg-primary w-20 h-10 text-center rounded-[10px] text-txt pb-2 font-bold text-3xl ml-48 shadow-xl">
						+
					</button>
				</div>
			</div>
		</>
	);
}
