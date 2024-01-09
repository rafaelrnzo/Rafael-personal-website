import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProjectHome from '../components/home/projectHome'
import AllProject from '../components/project/allProject'

export default function Project() {
  return (
    <div className=' h-auto w-full'>
      <div className=" container mx-auto px-8 md:px-24 lg:px-52  py-5 h-fit  ">
        <Header />
        <body className="h-auto w-auto flex items-center flex-col md:py-12 py-4 gap-4">
          <div className='flex flex-col gap-2 justify-center items-center  w-full '>

            <p className="md:text-4xl text-3xl font-bold text-indigo-100"><span className='text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500'> Projects </span></p>
            <p className="md:text-base text-base font-bold text-indigo-100/50">recent projects that i've been working for</p>
          </div> 
          <div>
            <AllProject/>
          </div>

        </body>
      </div>
      <Footer />
    </div>
  )
}
