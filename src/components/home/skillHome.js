import React from 'react'
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

export default function SkillHome() {
  return (
    <skill className="h-auto w-full py-16">
      <div className='flex gap-4 flex-col'>
        <span className='md:text-4xl text-2xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 '>Skills</span>
        <div className='grid lg:grid-cols-2 gap-4 grid-cols-1'>
          <div className='border-indigo-500 border rounded-lg gird grid-cols-2'>
            <div className='md:p-6 p-4 flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <FaCode className='text-indigo-500 md:text-xl' />
                <p className='md:text-xl font-bold text-indigo-100'>Web Development</p>
              </div>
              <div>
                <p className='text-sm md:text-base '>I have experience in the field of full stack web development, I have skills with several programming languages such as PHP, Javascript, and have framework skills including ReactJs, NextJs, Laravel, and CSS libraries such as Tailwind and Bootstrap</p>
              </div>
              <div className='flex gap-3 text-indigo-200 md:text-2xl text-xl self-end'>
                <FaReact />
                <SiNextdotjs />
                <FaLaravel />
                <SiTailwindcss />
                <FaBootstrap />
                <FaGitAlt />
              </div>
            </div>
          </div>
          <div className='border-indigo-500 border rounded-lg gird grid-cols-2'>
            <div className='md:p-6 p-4 flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <FaPaintBrush className='text-indigo-500 md:text-xl' />
                <p className='md:text-xl font-bold text-indigo-100'>UI/UX Design</p>
              </div>
              <div>
                <p className='text-sm md:text-base'>I have the skills to design displays for mobile applications and website displays, I am proficient in using Figma software, I have a modern design and good layout by paying attention to the client's needs. I understand good color composition</p>
              </div>
              <div className='flex gap-3 text-indigo-200 md:text-2xl text-xl self-end'>
                <IoLogoFigma />
              </div>
            </div>
          </div>
          <div className='border-indigo-500 border rounded-lg gird grid-cols-2'>
            <div className='md:p-6 p-4 flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <FaMobileAlt className='text-indigo-500 md:text-xl' />
                <p className='md:text-xl font-bold text-indigo-100'>Mobile Development</p>
              </div>
              <div>
                <p className='text-sm md:text-base'>I have expertise in creating mobile applications using React Native and Flutter. I can create a frontend display by following the design. I can create an API integrated application</p>
              </div>
              <div className='flex gap-3 text-indigo-200 md:text-2xl text-xl self-end'>
                <TbBrandReactNative />
                <RiFlutterFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </skill>
  )
}
