import React from 'react'
import customer from './customer.png'
import help from './help.png'
import phone from './phone.png'
import Header1 from '../components/Header1'

function Contact() {
	return (
		<>  
		
			<div className="flex flex-col justify-evenly items-center">
			<Header1 />
			<div className='pt-12 flex flex-col justify-evenly items-center gap-14'>

			
				<div>
					<button className="w-60 h-36 text-xl text-txt font-semibold bg-secondary rounded-2xl shadow-2xl flex flex-col justify-evenly items-center p-4">
                    <img src={phone} alt="" />
                    <div>Customer Care</div>
					</button>
				</div>
				<div>
					<button className="w-60 h-36 text-xl text-txt font-semibold bg-secondary rounded-2xl shadow-2xl flex flex-col justify-evenly items-center p-4">
                        <img src={customer} alt="" />
                        <div>Emergency Contacts</div>
					</button>
				</div>
				<div>
					<button className="w-60 h-36 text-xl text-txt font-semibold bg-secondary rounded-2xl shadow-2xl flex flex-col justify-evenly items-center p-4">
                        <img src={help} alt="" />
                        <div>Healthcare professionals</div>
					</button>
				</div>
			</div>
			</div>
		</>
	);
}

export default Contact;
