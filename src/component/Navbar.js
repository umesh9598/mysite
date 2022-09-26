import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='bg-gray-50 shadow-inner text-gray-900 py-2 font-mulish  md:flex items-center justify-between mx-auto '>
        <div>
            <h1 className=' px-5 text-center uppercase font-extrabold font-sans text-3xl text-[#6b21a8] hover:-translate-y-1 hover:scale-110  duration-300'>UP</h1>
        </div>
        <ul className='text-center md:flex items-center   '>
            <li className='px-5 hover:text-sky-600   '><NavLink to="/">Home</NavLink></li>
            <li className='px-5  hover:text-sky-600'><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li className='px-5  hover:text-sky-600'><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
      <hr />
      </div>
  )
}

export default Navbar;
