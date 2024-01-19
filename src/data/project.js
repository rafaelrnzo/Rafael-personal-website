import { SiMysql, SiNextdotjs, SiPhp, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaCode, FaReact, FaLaravel, FaBootstrap, FaGitAlt, FaMobileAlt, FaPaintBrush, FaFigma, FaPhp } from "react-icons/fa";

const projects = [
  {
    title: 'Canteen App',
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548435/CanteenApp.png',
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
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548904/SushiApp.png',
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
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548454/InventoryWeb.jpg',
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
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705623209/MeeTrack.jpg',
    desc: 'Create UI/UX designs in Figma',
    tech: [
      <FaFigma />,
    ],
    linkUrl: 'https://www.linkedin.com/in/rafael-lorenzo-671527243/',
    type: 'web'
  },
  {
    title: 'Opensea Clone',
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705564279/openseaClone.png',
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
    title: 'IoT Charging App',
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548560/ChargingApp.png',
    desc: 'Make IoT app with Flutter',
    tech: [
      <RiFlutterFill />,
      <FaFigma />,
    ],
    link: 'https://github.com/rafaelrnzo/SPKLU',
    type: 'web'
  },
  {
    title: 'Smartory App Design',
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548491/InventoryDesign.png',
    desc: 'Design Mobile App UI with Figma',
    tech: [
      <FaFigma />,
    ],
    type: 'design'
  },
  {
    title: 'Smartclass IoT Application',
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548548/SmartclassApp.png',
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
    image: 'https://res.cloudinary.com/dwuuwldcw/image/upload/v1705548503/IsojaApp.png',
    desc: 'IoT Mobile App build with Flutter',
    tech: [
      <RiFlutterFill />,
      <FaFigma />,
    ],
    type: 'mobile'
  },

]

export default projects;