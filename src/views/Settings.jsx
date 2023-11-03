import React from 'react';

function Settings() {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-txt font-semibold text-4xl pt-28 font-family ">
				Settings
			</div>
			<div className=" w-[22rem] h-[36rem] bg-secondary rounded-2xl mt-8 shadow-xl">
				<div className="  flex flex-col justify-evenly gap-3 items-center pt-10">
                    <div className='text-xl font-semibold'>Health Profile</div>
					<input
						type="text"
						placeholder="Add Logs"
						className="bg-primary  text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl placeholder-txt"
					/>
                    <div className='text-xl mt-14 font-semibold'>Account Settings</div>
					<button className="bg-primary  text-txt h-16 w-72 pt-04  font-medium shadow-xl  rounded-xl text-xl ">
						Change email
					</button>
					<button className="bg-primary  text-txt h-16 w-72 pt-04  font-medium shadow-xl  rounded-xl text-xl ">
						Change password
					</button>
					<div className="bg-primary text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
						<div className="mt-4 ">Notifications</div>
						<div className="   flex flex-col justify-between items-strech pl-2">
							<div className="w-[54.28px] h-[31px] relative top-4 left-4">
								<div className="w-[54.28px] h-[31px] left-0 top-0 absolute bg-secondary rounded-[15px]" />
								<div className="w-[24.67px] h-[25px] left-[4px] top-[3px] absolute bg-orange-50 rounded-full" />
							</div>
						</div>
					</div>
					<button className="bg-primary  text-sos h-16 w-72 pt-04  font-medium shadow-xl  rounded-xl text-xl ">
						Delete Account
					</button>
					
					
				</div>
			</div>
		</div>
	);
}

export default Settings;
