/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../components/Header'
// import Schedule from '../components/Schedule';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    let PROPS = [
        {
            date: ["31 OCT", "1 NOV", "2 NOV", "3 NOV"],
            day: "Yesterday",
            meds: [
                {
                    time: "9:00 AM",
                    name: "Medicine A"
                },
                {
                    time: "2:00 PM",
                    name: "Medicine E"
                },
                {
                    time: "5:00 PM",
                    name: "Medicine C"
                },
                {
                    time: "9:00 PM",
                    name: "Medicine D"
                }
            ]
        },
        {
            date: ["1 NOV", "2 NOV", "3 NOV", "4 NOV"],
            day: "Today",
            meds: [
                {
                    time: "9:00 AM",
                    name: "Medicine A"
                },
                {
                    time: "2:00 PM",
                    name: "Medicine E"
                },
                {
                    time: "5:00 PM",
                    name: "Medicine C"
                },
                {
                    time: "9:00 PM",
                    name: "Medicine D"
                }
            ]
        },
        {
            date: ["2 NOV", "3 NOV", "4 NOV", "5 NOV"],
            day: "Tomorrow",
            meds: [
                {
                    time: "9:00 AM",
                    name: "Medicine A"
                },
                {
                    time: "2:00 PM",
                    name: "Medicine E"
                },
                {
                    time: "5:00 PM",
                    name: "Medicine C"
                },
                {
                    time: "9:00 PM",
                    name: "Medicine D"
                }
            ]
        }
    ];
    // console.log(PROPS[0]);

    const [currentIndex, setCurrentIndex] = useState(1); // Start at PROPS[1]
    const [refresh, setRefresh] = useState(false); // Add this line


    const handlePreviousDay = () => {
        if (currentIndex > 0) { // Ensure we don't go below the first index
            setCurrentIndex(currentIndex - 1);
        }
        setRefresh(prev => !prev); // Add this line
    };

    const handleNextDay = () => {
        if (currentIndex < PROPS.length - 1) { // Ensure we don't go beyond the last index
            setCurrentIndex(currentIndex + 1);
        }
        setRefresh(prev => !prev); // Add this line

    };

    const navigate = useNavigate();

    const addPillPath = '/add-pill';
    const remoteMonitorPath = '/remote-monitor';
    const contactPath = '/contact';
    const emergencyPath = '/emergency';

    const [handleClickAddPill, setHandleClickAddPill] = useState(() => () => { });
    const [handleClickRemoteMonitor, setHandleClickRemoteMonitor] = useState(() => () => { });
    const [handleClickContact, setHandleClickContact] = useState(() => () => { });
    const [handleClickEmergency, setHandleClickEmergency] = useState(() => () => { });


    useEffect(() => {

        setHandleClickAddPill(() => () => {
            // console.log('redirecting to add pill page!');
            navigate(addPillPath);
        }
        );

        setHandleClickRemoteMonitor(() => () => {
            // console.log('redirecting to remote monitor page!');
            navigate(remoteMonitorPath);
        }
        );

        setHandleClickContact(() => () => {
            // console.log('redirecting to contact page!');
            navigate(contactPath);
        }
        );

        setHandleClickEmergency(() => () => {
            // console.log('redirecting to emergency page!');
            navigate(emergencyPath);
        }
        );

    }, [navigate, addPillPath, remoteMonitorPath, contactPath, emergencyPath]);

    return (
        <div className='flex flex-col items-center' key={refresh}>
            <Header />
            <div className='flex flex-col mx-14 mt-6 max-w-xs max-h-xs gap-8 text-2xl font-semibold'>
                <div className='flex flex-row gap-8 justify-between'>
                    <button className='w-[130px] h-[120px] rounded-2xl bg-secondary shrink-0 flex justify-center items-center text-center'
                        onClick={handleClickAddPill}>
                        Add Pill
                    </button>
                    <button className='w-[130px] h-[120px] rounded-2xl bg-secondary shrink-0 flex justify-center items-center text-center'
                        onClick={handleClickRemoteMonitor}>
                        Remote Monitor
                    </button>
                </div>
                <div className='flex flex-row gap-8 justify-between'>
                    <button className='w-[130px] h-[120px] rounded-2xl bg-secondary shrink-0 flex justify-center items-center text-center'
                        onClick={handleClickContact}>
                        Contact
                    </button>
                    <button className='w-[130px] h-[120px] rounded-2xl bg-sos text-white shrink-0 flex justify-center items-center text-center text-xl'
                        onClick={handleClickEmergency}>
                        EMERGENCY
                    </button>
                </div>
            </div>
            <div className="h-80 w-80 mx-7 mt-9">
                <div className="h-28 rounded-t-2xl bg-secondary shrink grow ml-16 mr-40 flex flex-col items-center">
                    <div className='w-20 h-5 p-4 bg-primary rounded-2xl mt-1 flex justify-center items-center font-medium'>
                        {PROPS[currentIndex].day}
                    </div>
                    <div className='flex gap-5 ml-20 text-sm font-semibold'>
                        <button id="previous-day" className='w-16 h-16 p-4 bg-secondary rounded-2xl mt-1 flex justify-center items-center'
                            onClick={handlePreviousDay}>
                            {PROPS[currentIndex].date[0]}
                        </button>

                        <div className='w-16 h-16 p-4 bg-primary rounded-2xl mt-1 flex justify-center items-center'>
                            {PROPS[currentIndex].date[1]}
                        </div>
                        <button id='next-day' className='w-16 h-16 p-4 bg-secondary rounded-2xl mt-1 flex justify-center items-center'
                            onClick={handleNextDay}>
                            {PROPS[currentIndex].date[2]}
                        </button>
                        <div className='w-16 h-16 p-4 bg-secondary rounded-2xl mt-1 flex justify-center items-center'>
                            {PROPS[currentIndex].date[3]}
                        </div>
                    </div>

                </div>
                <div className="h-64 rounded-2xl bg-secondary shrink-0">
                    <div>
                        {PROPS[currentIndex].meds.map((med) => (
                            <div className="flex p-2 gap-6" key={med.time}>
                                <div className="w-16 h-12 bg-primary rounded-2xl flex justify-center items-center text-base font-medium">
                                    {med.time}
                                </div>
                                <div className="h-12 bg-primary grow rounded-2xl flex justify-center items-center text-base font-medium">
                                    {med.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Schedule {...PROPS[1]} /> */}
        </div>
    )
}

export default Dashboard