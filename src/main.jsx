import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './views/Landing'
import Presign from './views/Presign'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import Otp from './views/Otp'
import Stash from './views/Stash.jsx'
import Devices from './views/Devices.jsx'
import Settings from './views/Settings.jsx'
import ErrorPage from './ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Dashboard from './views/Dashboard.jsx'
import Welcom from './views/Welcom.jsx'
import Sos from './views/Sos.jsx'
import Pills from './views/Pills.jsx'
import Name from './views/Name.jsx'
import EmergencyContacts1 from './views/EmergencyContacts1.jsx'
import Emergency from './views/Emergency.jsx'
import AddContact from './views/AddContact.jsx'
import AddAge from './views/AddAge.jsx'
import Contact from './views/Contact.jsx'
// import Devices from './views/Devices.jsx'
// import Settings from './views/Settings.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sign-in-or-sign-up",
    element: <Presign />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "otp",
    element: <Otp />,
  },
  {
    path: "stash",
    element: <Stash />,
  },
  {
    path: "stats",
    element: <Dashboard />,
  },
  {
    path: "paired-devices",
    element: <Devices />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "main",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
