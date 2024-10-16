import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import java from '../assets/java.png';
import sql from '../assets/sql.png';
import Mongo from '../assets/mongo.png';
import Particles from './magicui/Particles';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";



const Skills = () => {
        const { theme } = useTheme();
        const [color, setColor] = useState("#ffffff");
      
        useEffect(() => {
          setColor(theme === "dark" ? "#000000" : "#ffffff");
        }, [theme]);
  return (
    <div name='skills' className='w-full h-screen custom-gradient text-gray-300 relative'>
    {/* Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400 '>Skills</p>
            <p className='py-4'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                <img className='w-20 mx-auto mt-6' src={CSS} alt="HTML icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={JavaScript} alt="HTML icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={ReactImg} alt="HTML icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={java} alt="HTML icon" />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={Node} alt="HTML icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={Mongo} alt="HTML icon" />
                <p className='my-4'>MONGO DB</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-6' src={sql} alt="HTML icon" />
                <p className='my-4'>SQL</p>
            </div>
            
        </div>
    </div>
     <Particles
        className="absolute inset-0 "
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
  </div>
  );
};

export default Skills;