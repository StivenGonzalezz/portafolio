import React, { useEffect } from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"
import logo from '../assets/logo.jpeg'
import useDeviceDetector from '../hook/useDeviceDetector'
  import Aos from "aos";
  import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const device = useDeviceDetector()
  useEffect(() => {
    }, [])
    console.log(device)
    const tamanio = device.width
  return (
    <div id='about' className={`flex flex-col items-center text-white px-[5%] py-[10%] space-y-16 h-full w-full`}>
        <img className='rounded-full h-[75%] w-[75%] animate-scale-up-center' src={logo} alt="" />
        <h1 data-aos="fade-right" className='text-6xl'>About me</h1>
        <p data-aos="fade-left" className='text-3xl pl-10 mt-7 leading-relaxed'> Hi, my name is stiven a junior web developer, I am a student of systems engineering and computer science, I like everything related to web development and creation of intelligent systems, </p>
        <a data-aos="fade-up" className='' href="#projects">
            <MdOutlineKeyboardDoubleArrowUp className='text-7xl'/>
        </a>
    </div>
  )
}

export default About
