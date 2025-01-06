import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Courses from './pages/Courses'
import Signup from './components/Signup.jsx'
import Contact from './components/Contact.jsx'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx'


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to="/signup" />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />

    </>

  )
}

export default App