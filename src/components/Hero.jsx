import React from "react";
import Typed from "react-typed";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white bg-[#0c173b]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center  flex flex-col items-center justify-center">
        <p className="text-white font-bold p-2">
          GET FEEDBACK ON YOUR PROGRESS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl text-[#00df9a] font-bold md:py-6">
          T-SCRIPTY
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Swift and Reliable 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
           strings={["[A]", "[B]", "[C]"]}
           typespeed={120}
           backspeed={140}
           loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your school progress</p>
        <button className='bg-[#1ac096] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'onClick={()=> navigate('/signup')} >Get Started</button>
        <div className="mb-24"></div>
      </div>
    </div>
  );
};

export default Hero;
