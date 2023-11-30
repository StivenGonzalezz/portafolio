import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import logo from '../assets/logo.jpeg'

const About = () => {
  return (
    <div className='flex flex-col items-center text-white px-[10%] py-[25%] space-y-16'>
        <img className='rounded-full h-[75%] w-[75%]' src={logo} alt="" />
        <h1 className='text-6xl'>About me</h1>
        <p className='text-3xl pl-10 mt-7 leading-relaxed'> Hi, my name is stiven a junior web developer, I am a student of systems engineering and computer science, I like everything related to web development and creation of intelligent systems, </p>
        <a className='' href="#projects">
            <IoIosArrowDown className='text-7xl'/>
        </a>
    </div>
  )
}

export default About
