import React from 'react'
import Card from './Card'
import ricklopedia from '../assets/ricklopedia.png'
import es32 from '../assets/esp32.webp'
import wok from '../assets/wok.jpeg'


const Projects = () => {
  return (
    <div className='h-full w-full text-white flex flex-col items-center justify-evenly '>
        <h2 data-aos="zoom-out" className='text-6xl pt-[5vh]' id='projects'>
            Projects
        </h2>
        <div className='flex flex-col space-y-24 mt-[5vh]'>
          <div data-aos="zoom-in-left"><Card tittle="Ricklopedia" style="flex-row-reverse" description="Ricklopedia is a personal project created with react in which I use the rick and morty api, showing filtered and random characters." image={ricklopedia} link={"https://rick-morty-steel.vercel.app"}/></div>
          <div data-aos="zoom-in-right"><Card tittle="ESP32 Smart Home" description="Using an ESP32(wifi-module) as a receptor brings you a remotre controll from your phone, where you would turn off/on your ligths and more." image={es32}/></div>
          <div data-aos="zoom-in-left"><Card tittle="WOK" style="flex-row-reverse" description="Work in progress" image={wok}/></div>
        </div>
    </div>
  )
}

export default Projects
