import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Emergency() {
	const navigate = useNavigate();
	const addEmergencyContactsPath = '/add-emergency-contacts';
	const welcomePath = '/welcome';

	const [handleAddEmergencyContacts, setHandleAddEmergencyContacts] = useState(() => () => { });
	const [handleWelcome, setHandleWelcome] = useState(() => () => { });

	useEffect(() => {

		setHandleAddEmergencyContacts(() => () => {
			// console.log('redirecting to otp page!');
			navigate(addEmergencyContactsPath);
		});

		setHandleWelcome(() => () => {
			// console.log('redirecting to otp page!');
			navigate(welcomePath);
		});

	}, [navigate, addEmergencyContactsPath, welcomePath]);
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-txt font-semibold text-4xl pt-32 font-family ">
				Emergency Contacts
			</div>
			<div className=" w-[24rem] h-80 bg-secondary rounded-2xl mt-8 shadow-xl">
				<div className=" w-[24rem] h-60 flex flex-col justify-evenly gap-1 items-center">
					<div className="bg-primary text-txt h-16 w-72 pt-0  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
							<div className='mt-4 '>Relation 1</div>
							<div className=' border-l-2 border-[#1B3004]  flex flex-col justify-between items-normal pl-2'>
								<div className='mt-1'>Name 1</div>
								<div>+91 987654xxx</div>
							</div>
					</div>
					<div className="bg-primary text-txt h-16 w-72 pt-04  text-center font-medium shadow-xl  rounded-xl text-xl flex flex-row justify-around align-center">
                    <div className='mt-4 '>Relation 2</div>
							<div className=' border-l-2 border-[#1B3004]  flex flex-col justify-between items-normal pl-2'>
								<div className='mt-1'>Name 2</div>
								<div>+91 987654xxx</div>
							</div>
                    </div>
				</div>
				<button className="bg-primary text-txt h-4 w-40 pb-10 pt-2 ml-14 text-center font-xl font-semibold shadow-xl  rounded-lg text-xl"
					onClick={handleAddEmergencyContacts}>
						Add more
						<span className="font-extrabold ml-2 text-2xl">+</span>
				</button>
			</div>
			<button className=" bg-[#3A620C] text-white w-56 h-10  pb-10 pt-4 mt-10  font-medium shadow-2xl  rounded-xl text-center text-xl "
				onClick={handleWelcome}>
				Next
			</button>
		</div>
	);
}

export default Emergency;
