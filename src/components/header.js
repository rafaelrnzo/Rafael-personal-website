import React from 'react'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Particle from './home/particle';

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex flex-row justify-center md:justify-between">
      {/* <Particle/> */}
      <navItem className="flex flex-row gap-10 font-semibold md:text-base text-sm">
        <NavLink to='/' className={`${location.pathname === '/' ? 'text-indigo-500' : 'text-white'}  transition-all duration-300  hover:text-indigo-600/50`}>
          Home
        </NavLink>
        <NavLink to='/about' className={`${location.pathname === '/about' ? 'text-indigo-500' : 'text-white'}  transition-all duration-300  hover:text-indigo-600/50`}>
          About
        </NavLink>
        <NavLink to='/project' className={`${location.pathname === '/project' ? 'text-indigo-500' : 'text-white'}  transition-all duration-300  hover:text-indigo-600/50`}>
          Project
        </NavLink>
      </navItem>
    </header> 
  )
}
