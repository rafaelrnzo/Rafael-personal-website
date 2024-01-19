import React from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

function About() {
  const location = useLocation();

  return (
    <div className=' h-auto w-full'>
      <div className=" container mx-auto px-8 md:px-24 lg:px-52  py-5 h-fit ">
        <Header />
        <main className="h-auto w-auto flex items-center flex-col py-12">
          <div className='w-full h-auto justify-start '>
            <div className='justify-center flex flex-col lg:items-center gap-2'>
              <p className="md:text-4xl text-3xl font-bold text-indigo-100"><span className='text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500'> About Me </span></p>

              <p className='md:text-center lg:px-32 md:text-lg'>I am a software engineer & also a UI/UX designer. I am an expert in the field of Frontend Web Developer, and also Mobile development. I can use various frameworks such as React, React Native, Flutter, Laravel, etc. I can also create attractive UI designs using Figma.</p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default About;
