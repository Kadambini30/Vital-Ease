import React from 'react'
import logo from '../views/logo2.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    
	const navigate = useNavigate();
	const dashboardPath = '/main';

	const [handleNextDashboard, setHandleNextDashboard] = useState(() => () => { });

	useEffect(() => {
		setHandleNextDashboard(() => () => {
			// console.log('redirecting to dashboard page!');
			navigate(dashboardPath);
		});

	}, [navigate, dashboardPath]);

	
    return (
        <div className='flex justify-between mt-[28px] mx-[31px] w-80'>
            <img className='h-[33px] w-[111px] ' src={logo} alt="" />
            <div className='text-[#2D5500] text-3xl font-semibold' onClick={handleNextDashboard}>x</div>
        </div>
    )
}

export default Header