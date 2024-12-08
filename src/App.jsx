import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Profile from './pages/Profile'
import My_Appointment from './pages/My_Appointment'
import Appointment from './pages/Appointment'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


const App = () => {
  return (
  <>
  <div className="mx-4 sm:mx-[10%]">
      <Navbar></Navbar>
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:speciality" element={<Doctors/>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/my-profile" element={<Profile></Profile>} />
        <Route path="/my-appointments" element={<My_Appointment></My_Appointment>} />
        <Route path="/appointnent/:docId" element={<Appointment></Appointment>} />
      </Routes>
      <Footer></Footer>
  </div>
  
  
  </>
  )
}

export default App