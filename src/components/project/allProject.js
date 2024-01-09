import React from 'react'
import { SiMysql, SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush, FaFigma, FaPhp } from "react-icons/fa";
import ShowProject from '../showProject';

export default function AllProject() {
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
      link: 'https://github.com/rafaelrnzo/USK_Junior_Coder_Final',
      type: 'web'
    },
    {
      title: 'SushiGo',
      image: 'https://media.licdn.com/dms/image/D562DAQF77vXrMYT7Sw/profile-treasury-image-shrink_800_800/0/1704257606209?e=1705370400&v=beta&t=IT9HIWIZ4zh3xamEL613Kp3u9kcdZeZYDPmWSMMP4xQ',
      desc: 'Slicing UI with Flutter',
      tech: [
        <RiFlutterFill />,
        <FaFigma />
      ],
      link: 'https://github.com/rafaelrnzo/sushiApp',
      type: 'web'
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
      link: 'https://github.com/rafaelrnzo/sushiApp',
      type: 'web'
    },
    {
      title: 'Meetrack Web Design',
      image: 'https://media.licdn.com/dms/image/D562DAQHR4GLsd3Z_kQ/profile-treasury-image-shrink_800_800/0/1704801949265?e=1705410000&v=beta&t=8CEMzokjkPWT2t0F-kghkvTnDELe5PB5AN8rbPGBRWk',
      desc: 'Create UI/UX designs in Figma',
      tech: [
        <FaFigma />,
      ],
      linkUrl: 'https://www.linkedin.com/in/rafael-lorenzo-671527243/',
      type: 'web'
    },
    {
      title: 'Opensea Clone',
      image: 'https://media.licdn.com/dms/image/D562DAQHjgJ6Tgt7cvQ/profile-treasury-image-shrink_800_800/0/1704786228525?e=1705392000&v=beta&t=5xO5GJKzUj8gybB2UfivSAV3cZjpe1IYKVeEDpet8ag',
      desc: 'Clone Opeansea design with ReactJs',
      tech: [
        <FaReact />,
        <SiTailwindcss />,
      ],
      link: 'https://github.com/rafaelrnzo/opensea-clone',
      linkUrl: "https://el-clone-opensea.vercel.app/",
      type: 'web'
    },
    {
      title: 'Smartory App Design',
      image: 'https://media.licdn.com/dms/image/D562DAQFNxgm8r5QZug/profile-treasury-image-shrink_800_800/0/1703163632535?e=1705392000&v=beta&t=MxOzNYXRoNj3eUu1EduOSmYArlHa86Z0BtnHuO-GA68',
      desc: 'Design Mobile App UI with Figma',
      tech: [
        <FaFigma />,
      ],
      type: 'design'
    },
    {
      title: 'Smartclass IoT Application',
      image: 'https://media.licdn.com/dms/image/D562DAQHMWRDs0qK8gg/profile-treasury-image-shrink_800_800/0/1704167383165?e=1705399200&v=beta&t=APRzCJm6S991kKfYMpcu_OpX6Czsi0u6At1U-ohEa4k',
      desc: 'IoT Mobile App build with Flutter',
      tech: [
        <RiFlutterFill />,
        <FaFigma />,
      ],
      link: 'https://github.com/rafaelrnzo/opensea-clone',
      type: 'mobile'
    },
    {
      title: 'Remote IoT Speaker App',
      image: 'https://media.licdn.com/dms/image/D562DAQGWk7ZNG-YlwQ/profile-treasury-image-shrink_800_800/0/1704251731434?e=1705402800&v=beta&t=2jKU7ds3-ELysaGcLyjF92MOi58eRnx_1N4klHZEi_s',
      desc: 'IoT Mobile App build with Flutter',
      tech: [
        <RiFlutterFill />,
        <FaFigma />,
      ],
      type: 'mobile'
    },

  ]

  return (
    <project className="h-auto w-full py-16">
      <div className='flex flex-col gap-4 h-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          {
            featuredProject.map((item) =>
              <ShowProject
                title={item.title}
                image={item.image}
                desc={item.desc}
                tech={item.tech}
                link={item.link}
                linkUrl={item.linkUrl}
              />
            )
          }
        </div>
      </div>
    </project>
  )
}
