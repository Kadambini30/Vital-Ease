import React from 'react'
import logo from '../views/logo2.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
        
	const navigate = useNavigate();
	const settingsPath = '/settings';

	const [handleNextSettings, setHandleNextSettings] = useState(() => () => { });

	useEffect(() => {
		setHandleNextSettings(() => () => {
			// console.log('redirecting to dashboard page!');
			navigate(settingsPath);
		});

	}, [navigate, settingsPath]);
    return (
        <div className='flex justify-between mt-[28px] mx-[31px] w-80'>
            <img className='h-[33px] w-[111px] ' src={logo} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" onClick={handleNextSettings}>
                <path d="M19.2708 45.8333L18.4375 39.1666C17.9861 38.993 17.5604 38.7847 17.1604 38.5416C16.7604 38.2986 16.3701 38.0382 15.9896 37.7604L9.79167 40.3645L4.0625 30.4687L9.42708 26.4062C9.39236 26.1632 9.375 25.9284 9.375 25.702V24.2979C9.375 24.0715 9.39236 23.8368 9.42708 23.5937L4.0625 19.5312L9.79167 9.63538L15.9896 12.2395C16.3715 11.9618 16.7708 11.7013 17.1875 11.4583C17.6042 11.2152 18.0208 11.0069 18.4375 10.8333L19.2708 4.16663H30.7292L31.5625 10.8333C32.0139 11.0069 32.4396 11.2152 32.8396 11.4583C33.2396 11.7013 33.6299 11.9618 34.0104 12.2395L40.2083 9.63538L45.9375 19.5312L40.5729 23.5937C40.6076 23.8368 40.625 24.0715 40.625 24.2979V25.702C40.625 25.9284 40.5903 26.1632 40.5208 26.4062L45.8854 30.4687L40.1562 40.3645L34.0104 37.7604C33.6285 38.0382 33.2292 38.2986 32.8125 38.5416C32.3958 38.7847 31.9792 38.993 31.5625 39.1666L30.7292 45.8333H19.2708ZM25.1042 32.2916C27.1181 32.2916 28.8368 31.5798 30.2604 30.1562C31.684 28.7326 32.3958 27.0138 32.3958 25C32.3958 22.9861 31.684 21.2673 30.2604 19.8437C28.8368 18.4201 27.1181 17.7083 25.1042 17.7083C23.0556 17.7083 21.3278 18.4201 19.9208 19.8437C18.5139 21.2673 17.8111 22.9861 17.8125 25C17.8125 27.0138 18.5153 28.7326 19.9208 30.1562C21.3264 31.5798 23.0542 32.2916 25.1042 32.2916Z" fill="black" />
            </svg>
        </div>
    )
}

export default Header