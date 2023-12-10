import React, { useEffect } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import logo from '../assets/logo.jpeg'
import useDeviceDetector from '../hook/useDeviceDetector'

const About = () => {
  const device = useDeviceDetector()
  useEffect(() => {
    }, [])
    console.log(device)
    const tamanio = device.width
  return (
    <div id='about' className={`flex flex-col items-center text-white px-[5%] py-[10%] space-y-16 h-full w-full`}>
        <img className='rounded-full h-[75%] w-[75%]' src={logo} alt="" />
        <h1 className='text-6xl'>About me</h1>
        <p className='text-3xl pl-10 mt-7 leading-relaxed'> Hi, my name is stiven a junior web developer, I am a student of systems engineering and computer science, I like everything related to web development and creation of intelligent systems, </p>
        <a className='' href="#projects">
            <MdOutlineKeyboardDoubleArrowUp className='text-7xl'/>
        </a>
    </div>
  )
}

export default About
