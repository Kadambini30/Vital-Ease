/* eslint-disable react/prop-types */
import React from 'react'

// define type for medicine object that as 2 keys: time and name
// type Medicine = {
//     time: string,
//     name: string
// }

// define type for props that has 3 keys: date, day, and meds and day is either yesterday, today or tomorrow
// type Prop = {
//     date: string,
//     day: string,
//     meds: Medicine[]
// }

function Schedule(props) {
    return (
        <div className="h-80 w-80 mx-7 mt-9">
            <div className="h-28 rounded-t-2xl bg-secondary shrink grow ml-16 mr-40 flex flex-col items-center">
                <div className='w-20 h-5 p-4 bg-primary rounded-2xl mt-1 flex justify-center items-center font-medium'>
                    {props.day}
                </div>
                <div className='flex gap-5 ml-20 text-sm font-semibold'>
                    <div className='w-16 h-16 p-4 bg-secondary rounded-2xl mt-1 flex justify-center items-center'>
                        {props.date[0]}
                    </div>

                    <div className='w-16 h-16 p-4 bg-primary rounded-2xl mt-1 flex justify-center items-center'>
                        {props.date[1]}
                    </div>
                    <div className='w-16 h-16 p-4 bg-secondary rounded-2xl mt-1 flex justify-center items-center'>
                        {props.date[2]}
                    </div>
                    <div className='w-16 h-16 p-4 bg-secondary rounded-2xl mt-1 flex justify-center items-center'>
                        {props.date[3]}
                    </div>
                </div>
                
            </div>
            <div className="h-64 rounded-2xl bg-secondary shrink-0">
                <div>
                    {props.meds?.map((med) => (
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
    );
}

export default Schedule