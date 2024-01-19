import React from 'react'
import { SiMysql, SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush, FaFigma, FaPhp } from "react-icons/fa";
import ShowProject from '../showProject';
import projects from '../../data/project';

export default function ProjectHome() {
  const featuredProject = [
    {
      title: 'Canteen App',
      image: 'https://media.licdn.com/dms/image/D562DAQHLjCfa1Pgacw/profile-treasury-image-shrink_800_800/0/1702909776524?e=1705370400&v=beta&t=pXHwZO21Tt6FBD_3dm0OHr77mNlAurCjXV1bPWctdOo',
      desc: 'Canteen Application for school',
      tech: [
        <FaReact />,
        <FaLaravel />,
        <SiTailwindcss />,
        <FaFigma />
      ],
      link: 'https://github.com/rafaelrnzo/USK_Junior_Coder_Final'
    },
    {
      title: 'SushiGo',
      image: 'https://media.licdn.com/dms/image/D562DAQF77vXrMYT7Sw/profile-treasury-image-shrink_800_800/0/1704257606209?e=1705370400&v=beta&t=IT9HIWIZ4zh3xamEL613Kp3u9kcdZeZYDPmWSMMP4xQ',
      desc: 'Slicing UI with Flutter',
      tech: [
        <RiFlutterFill />,
        <FaFigma />
      ],
      link: 'https://github.com/rafaelrnzo/sushiApp'
    },
    {
      title: 'Smartory',
      image: 'https://media.licdn.com/dms/image/D562DAQEPnaJeFv8Yow/profile-treasury-image-shrink_800_800/0/1703163050114?e=1705370400&v=beta&t=FmDUXvgXPFH7fdUK8cCgr45AS051-YV4z2U_t9Jj6a4',
      desc: 'Make Inventory System with PHP',
      tech: [
        <SiPhp />,
        <FaBootstrap />,
        <SiMysql />
      ],
      link: 'https://github.com/rafaelrnzo/sushiApp'
    },

  ]

  return (
    <project className="h-auto w-full py-16">
      <div className='flex flex-col gap-4 h-auto'>
        <span className=' md:text-4xl text-2xl font-extrabold text-transparent text-clip bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 '>My Projects</span>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          {
            projects.filter((item, idx) =>
              idx < 3
            ).map((item) =>
              <ShowProject
                title={item.title}
                image={item.image}
                desc={item.desc}
                tech={item.tech}
                link={item.link}

              />

            )
          }
        </div>
      </div>
    </project>
  )
}
