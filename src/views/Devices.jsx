import React from 'react';

function Devices() {
	return (
		<>
			<div className="flex flex-col flex-shrink-0 justify-center items-center">
				<div className="text-txt text-3xl font-semibold font-family mt-28">
					Paired Devices
				</div>
				<div className="w-[22.5rem] h-[28rem] bg-secondary rounded-2xl flex flex-col flex-shrink-0 justify-normal items-center gap-10 mt-10 shadow-xl pt-8">
					<div className="bg-primary text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
						<div className="mt-4 ">Device 1</div>
						<div className=" border-l-2 border-[#1B3004]  flex flex-col justify-between items-normal pl-2">
                        <div className="w-[54.28px] h-[31px] relative left-4 top-4">
								<div className="w-[54.28px] h-[31px] left-0 top-0 absolute bg-secondary rounded-[15px]" />
								<div className="w-[24.67px] h-[25px] left-[24.67px] top-[3px] absolute bg-orange-50 rounded-full" />
							</div>
						</div>
					</div>
					<div className="bg-primary text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
						<div className="mt-4 ">Device 2</div>
						<div className=" border-l-2 border-[#1B3004]  flex flex-col justify-between items-normal pl-2">
							<div className="w-[54.28px] h-[31px] relative top-4 left-4">
								<div className="w-[54.28px] h-[31px] left-0 top-0 absolute bg-secondary rounded-[15px]" />
								<div className="w-[24.67px] h-[25px] left-[4px] top-[3px] absolute bg-orange-50 rounded-full" />
							</div>
						</div>
					</div>
					<div className="bg-primary text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
						<div className="mt-4 ">Device 3</div>
						<div className=" border-l-2 border-[#1B3004]  flex flex-col justify-between items-normal pl-2">
							<div className="w-[54.28px] h-[31px] relative top-4 left-4">
								<div className="w-[54.28px] h-[31px] left-0 top-0 absolute bg-secondary rounded-[15px]" />
								<div className="w-[24.67px] h-[25px] left-[24.67px] top-[3px] absolute bg-orange-50 rounded-full" />
							</div>
						</div>
					</div>
					<div className="bg-primary text-txt mr-28 h-4 w-40 pb-10 pt-2 text-center font-xl font-semibold shadow-xl  rounded-lg text-xl">
						<button>
							Add more
							<span className="font-extrabold ml-2 text-2xl">+</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Devices;
