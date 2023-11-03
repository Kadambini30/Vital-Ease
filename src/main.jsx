import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './views/Landing'
import Presign from './views/Presign'
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import Otp from './views/Otp'
import ErrorPage from './ErrorPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Dashboard from './views/Dashboard.jsx'


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
    path: "main",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
