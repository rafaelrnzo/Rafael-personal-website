import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from './components/header';
import HeroHome from './components/home/heroHome';


import SkillHome from './components/home/skillHome';
import TechEmblem from './components/home/techEmblem';
import ShowProject from './components/showProject';
import ProjectHome from './components/home/projectHome';
import Footer from './components/footer';

function App() {
  const location = useLocation();

  return (
    <div className=' h-auto w-full'>
      <div className=" container mx-auto px-8 md:px-24 lg:px-52  py-5 h-fit ">
        <Header />
        <body className="h-auto w-auto flex items-center flex-col ">
          <HeroHome />
          <SkillHome />
          <TechEmblem />
          <ProjectHome />

        </body>
      </div>
      <Footer/>
    </div>
  );
}

const SkillEmblem = (props) => {
  return (
    <div className=' border border-indigo-900/50 rounded-lg p-4 flex justify-center text-indigo-200 md:text-6xl text-4xl hover:bg-indigo-900/50 '>
      {props.children}


    </div>
  )
}

export default App;
