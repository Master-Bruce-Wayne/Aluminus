import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Donation from './pages/Donation'
import AlumniList from './pages/AlumniList'
// componenents
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div> 
      <Navbar /> 
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/donation" element={<Donation />} /> 
          <Route path="/alumnis" element={<AlumniList />} />
        </Routes>
      </main>
      <Footer />
    </div>
    
  )
}