import React from 'react';
import Landing from './views/Landing'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import Name from './views/Name'
import AddContact from './views/AddContact'
import Otp from './views/Otp'
import Emergency from './views/Emergency'
import EmergencyContacts1 from './views/EmergencyContacts1'
import Welcom from './views/Welcom'
import Pills from './views/Pills'
import Contacts from './views/Contact'
import Sos from './views/Sos'
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
  name:<Name/>,
  addcontact:<AddContact/>,
  emergency:<Emergency/>,
  emergencycontacts1:<EmergencyContacts1/>,
  welcom:<Welcom/>,
  pills:<Pills/>,
  contacts:<Contacts/>,
  sos:<Sos/>
};

function App() {
  const [view, setView] = useState("sos");
  return (
    <div className='bg-primary w-screen h-screen'>
        {/* <div><img className='h-26 w-28 pl-4 pt-4' src={TLogo} alt="" /></div> */}
    {/* {viewMap[view]} */}
    <Test />
    </div>
  );
}

export default App;


