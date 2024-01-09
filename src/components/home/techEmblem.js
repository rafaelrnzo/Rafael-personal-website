import React from 'react'
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill, RiJavascriptFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";

export default function TechEmblem() {
  return (
    <techstack className="h-auto flex flex-col w-full gap-4">
      <span className='md:text-4xl text-2xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 '>Tech Stack</span>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        <SkillEmblem children={<FaReact />} />
        <SkillEmblem children={<FaLaravel />} />
        <SkillEmblem children={<SiNextdotjs />} />
        <SkillEmblem children={<TbBrandReactNative />} />
        <SkillEmblem children={<RiFlutterFill />} />
        <SkillEmblem children={<FaGitAlt />} />
        <SkillEmblem children={<SiJavascript />} />
        <SkillEmblem children={<SiPhp />} />
        <SkillEmblem children={<SiTypescript />} />
        <SkillEmblem children={<SiMysql />} />
        <SkillEmblem children={<SiTailwindcss />} />
        <SkillEmblem children={<FaBootstrap />} />
        <SkillEmblem children={<IoLogoFigma />} />
      </div>

    </techstack>
  )
}

const SkillEmblem = (props) => {
  return (
    <div className=' border border-indigo-900/50 rounded-lg p-4 flex justify-center text-indigo-200 md:text-6xl text-4xl hover:bg-indigo-900/50 '>
      {props.children}


    </div>
  )
}
