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
        <body className="h-auto w-auto flex items-center flex-col ">

        </body>
      </div>
      <Footer />
    </div>
  )
}

export default About;
