import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg';
import realEstate from '../assets/projects/realestate.jpg'
import Particles from './magicui/Particles';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";



const Project = () => {
    
        const { theme } = useTheme();
        const [color, setColor] = useState("#ffffff");
      
        useEffect(() => {
          setColor(theme === "dark" ? "#000000" : "#ffffff");
        }, [theme]);
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 custom-gradient py-14 relative'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-2'>
            <p className='text-4xl  font-bold inline border-b-4 text-gray-300 border-yellow-400'>
             Project
            </p>
            <p className='py-5'> Check out my recent Project</p>
            </div>

            {/* cointainer*/}
           
             <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{ backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div'>
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>

                        <span className='text-2xl font bold text-white tracking-wider'>
                            React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                
                                    <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div'>
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>

                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                
                                    <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div'>
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>

                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                
                                    <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div'>
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>

                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                               
                                    <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${realEstate})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto  content-div'>
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>

                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                
                                    <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                            </div>
                        
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#090d11] group container rounded-md flex justify-center items-center mx-auto  content-div'>
                    {/* Hover Effect */}

                    <div className='opacity-0 group-hover:opacity-100'>

                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                
                                    <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                            </div>
                        
                    </div>
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
  )
}

export default Project