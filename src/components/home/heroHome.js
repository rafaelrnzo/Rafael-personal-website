import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';

export default function HeroHome() {

  return (
    <hero className=" flex flex-col gap-6 h-screen justify-center items-start w-full">

      <div className='gap-2 flex flex-col'>
        <p className="md:text-5xl text-3xl font-bold text-indigo-100">Hi!, i'm <span className='text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500'> Rafael Lorenzo </span></p>
        <Typed
          strings={[
            'Frontend Web Developer.',
            'Mobile Developer.',
            'UI/UX Designer.']}
          typeSpeed={30}
          backSpeed={40}
          loop >
          <input type="text" className='w-full bg-transparent text-indigo-100 md:text-4xl text-2xl font-semibold font-mono' disabled />
        </Typed>
      </div>
      <div className='gap-2 flex flex-col'>
        <p className="md:text-2xl font-normal text-indigo-100 ">i'm Software Engineer based in Jakarta, Indonesia.</p>
      </div>
      <div className='gap-4 flex md:flex-row flex-col'>
        <NavLink to={'/project'} className="hover:scale-105">
          <div className='p-3 px-5 bg-indigo-500 rounded-md shadow-md shadow-indigo-500/50'>
            <p className='text-black md:text-base font-bold text-xs'>Look My Project</p>
          </div>
        </NavLink>
        <NavLink to={'/project'} className="hover:scale-105">
          <div className='p-3 px-5 bg-indigo-900/40 rounded-md '>
            <p className='md:text-base text-xs font-bold text-indigo-100'>More about me</p>
          </div>
        </NavLink>
      </div>
      <div className='gap-4 flex flex-row'>
        <a href='https://www.linkedin.com/in/rafael-lorenzo-671527243/' className=' shadow-indigo-500/50 flex-row flex items-center gap-2 text-indigo-100/50 hover:text-indigo-500'>
          <FaFileAlt className='md:text-xl' />
          <p className='text-indigo-100/50 md:text-lg text-xs font-semibold hover:text-indigo-500'>Resume</p>
        </a>
        <a href='https://www.linkedin.com/in/rafael-lorenzo-671527243/' className=' shadow-indigo-500/50 flex-row flex items-center gap-2 text-indigo-100/50 hover:text-indigo-500'>
          <FaLinkedin className='md:text-xl' />
          <p className='text-indigo-100/50 md:text-lg text-xs font-semibold hover:text-indigo-500'>LinkedIn</p>
        </a>
        <a href='https://github.com/rafaelrnzo' className=' shadow-indigo-500/50 flex-row flex items-center gap-2 text-indigo-100/50 hover:text-indigo-500'>
          <FaGithub className='md:text-xl' />
          <p className='text-indigo-100/50 md:text-lg text-xs font-semibold hover:text-indigo-500'>Github</p>
        </a>
      </div>
    </hero>
  )
}
