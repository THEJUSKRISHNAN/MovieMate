import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-black px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="text-white md:text-4xl font-bold text-2xl">
          <Link to="/">MovieMate</Link>
        </div>

        
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        
        <div className="hidden md:flex gap-8 text-white">
          <Link to="/" className="px-4 py-2 rounded hover:bg-opacity-10 transition text-4xl font-bold">Home</Link>
          <Link to="/favorites" className="px-4 py-2 rounded hover:bg-opacity-10 transition text-4xl font-bold">Favourite</Link>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white px-4">
          <Link to="/" className="px-4 py-2 rounded hover:bg-white hover:bg-opacity-10 transition" onClick={toggleMenu}>Home</Link>
          <Link to="/favorites" className="px-4 py-2 rounded hover:bg-white hover:bg-opacity-10 transition" onClick={toggleMenu}>Favourite</Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
