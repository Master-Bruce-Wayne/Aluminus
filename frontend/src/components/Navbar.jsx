import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
const active = (isActive) =>
isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'

return (
<header className="border-b bg-white">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="text-xl font-bold">Aluminus</Link>


<nav className="space-x-6">
<NavLink to="/" className={({isActive})=>active(isActive)} end>Home</NavLink>
<NavLink to="/mentorship" className={({isActive})=>active(isActive)}>Mentorship</NavLink>
<NavLink to="/alumni" className={({isActive})=>active(isActive)}>Alumni</NavLink>
<NavLink to="/donate" className={({isActive})=>active(isActive)}>Donate</NavLink>
<NavLink to="/about" className={({isActive})=>active(isActive)}>About</NavLink>
</nav>


<div className="flex items-center gap-3">
<Link to="/contact" className="px-4 py-2 border rounded hover:bg-gray-100">Contact</Link>
<Link to="/admin" className="px-4 py-2 bg-blue-600 text-white rounded">Admin</Link>
</div>
</div>
</header>
)
}