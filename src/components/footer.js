import React from 'react'
import { FaGithub, FaLinkedin, FaInstagramSquare, FaInstagram, FaDribbble } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='border-t border-indigo-900/50 px-8 md:px-24 lg:px-52 p-8 gap-4 flex flex-col mx-auto'>
      <div className='flex flex-row items-center justify-between'>
        <p className='text-xl font-bold'>
          <span className=' md:text-xl text-base text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500'> Rafael Lorenzo </span>
        </p>
        <div className='text-indigo-100 md:text-2xl flex gap-3'>
          <a href='https://www.linkedin.com/in/rafael-lorenzo-671527243/'>
            <FaLinkedin className='hover:text-indigo-500 transition-all duration-300' />
          </a>
          <a href='https://github.com/rafaelrnzo'>
            <FaGithub className='hover:text-indigo-500 transition-all duration-300' />
          </a>
          <a href='https://instagram.com/rafaellrnzo'>
            <FaInstagram className='hover:text-indigo-500 transition-all duration-300' />
          </a>
          <a href='https://dribbble.com/UjanEs'>
            <FaDribbble className='hover:text-indigo-500 transition-all duration-300' />
          </a>
        </div>
      </div>
      <p className='text-indigo-100 text-semibold text-sm'>©2024 Rafael.</p>
    </footer>
  )
}
