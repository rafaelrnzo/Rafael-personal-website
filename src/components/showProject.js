import React from 'react'
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush, FaGithub, FaGlobe } from "react-icons/fa";

export default function ShowProject(props) {
  return (
    <div className='border border-indigo-900/50 p-4 rounded-md h-auto justify-between gap-6 flex flex-col hover:border-indigo-500 group transition-all duration-300'>
      <div className='gap-2 flex flex-col'>

        <div className='h-48 w-full'>
          <img src={props.image} className='rounded-lg object-cover h-full w-full' />
        </div>
        <div>
          <p className='text-xl font-bold text-indigo-100 group-hover:text-indigo-500'>{props.title}</p>
          <p className='text-base'>{props.desc} </p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex gap-2 text-indigo-100 text-xl'>
          {props.tech}
        </div>
        <div className='flex gap-2 '>
          <a href={props.link}>
            {
              props.link ?
                <FaGithub className='text-xl text-indigo-100/50 hover:text-indigo-100 transition-all duration-300' />
                : null
            }
          </a>
          <a href={props.linkUrl}> {
            props.linkUrl ?
              <FaGlobe className='text-xl text-indigo-100/50 hover:text-indigo-100 transition-all duration-300' /> : null
          }
          </a>
        </div>

      </div>

    </div>
  )
}
