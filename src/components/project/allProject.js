import React from 'react'
import { SiMysql, SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush, FaFigma, FaPhp } from "react-icons/fa";
import ShowProject from '../showProject';
import projects from '../../data/project';

export default function AllProject() {

  return (
    <project className="h-auto w-full py-16">
      <div className='flex flex-col gap-4 h-auto'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          {
            projects.map((item) =>
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
