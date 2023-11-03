import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddAge() {
    const navigate = useNavigate();
	const emergencyContactsPath = '/emergency-contacts';

	const [handleEmergencyContacts, setHandleEmergencyContacts] = useState(() => () => { });

	useEffect(() => {

		setHandleEmergencyContacts(() => () => {
			// console.log('redirecting to otp page!');
			navigate(emergencyContactsPath);
		});
	}, [navigate, emergencyContactsPath]);
    return (
        <div className='flex flex-col flex-shrink-0 justify-center items-center'>
            <div className='text-center font-semibold font-family text-txt text-3xl pt-48'>Age</div>
            <div className='text-center'>
                <input className='w-60 h-60 shadow-xl mt-1 rounded-full text-center text-6xl bg-secondary' type="text" placeholder="age?"/>
            </div>
            <button className=" bg-[#3A620C] text-white h-4 w-64 pb-10 pt-4 mt-10  font-medium shadow-2xl  rounded-xl text-center text-xl "
                onClick={handleEmergencyContacts}>
                Next
            </button>
        </div>
    );
}

export default AddAge;
