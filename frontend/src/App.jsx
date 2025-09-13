import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Donation from './pages/Donation'
import AlumniList from './pages/AlumniList'
// componenents
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Mentorship from './pages/Mentorship'

export default function App() {
  return (
    <div> 
      {/* <Navbar />  */}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/donations" element={<Donation />} /> 
          <Route path="/alumnis" element={<AlumniList />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
    
  )
}