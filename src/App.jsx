import React from 'react';
import Landing from './views/Landing'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import Otp from './views/Otp'
import { useState } from "react";
import Test from './views/Test';
// import TLogo from './views/text-Logo.png'
import "./App.css";
/*
State based Routing
How to use:
    * Add view to common/views/
    * export in common/views/index.js
    * add key:value to viewMap
*/
const viewMap = {
  landing: <Landing/>,
  signup:<SignUp/>,
  signin:<SignIn/>,
  otp:<Otp/>,
};

function App() {
  const [view, setView] = useState("otp");
  return (
    <div className='bg-primary w-screen h-screen'>
        {/* <div><img className='h-26 w-28 pl-4 pt-4' src={TLogo} alt="" /></div> */}
    {/* {viewMap[view]} */}
    <Test />
    </div>
  );
}

export default App;


