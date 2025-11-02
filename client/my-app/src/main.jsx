import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from './components/landing_page/landingPage.jsx'
import LoginPage from './components/auth/login/loginPage.jsx'
import SignupPage from './components/auth/signup/signupPage.jsx'
import MainPage from './components/main_page/mainPage.jsx'
import ProtectedRoute from './components/auth/protectedRoutes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/main_page",
    element: (
      <ProtectedRoute>
        <MainPage/>
      </ProtectedRoute>
    )
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
