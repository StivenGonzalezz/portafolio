import React from 'react'
import Card from './Card'
import ricklopedia from '../assets/ricklopedia.png'
import es32 from '../assets/esp32.webp'
import wok from '../assets/wok.jpeg'


const Projects = () => {
  return (
    <div className='h-[80vh] w-full text-white flex flex-col items-center justify-evenly'>
        <h2 className='text-6xl' id='projects'>
            Projects
        </h2>
        <div className='flex flex-col space-y-24'>
          <Card tittle="Ricklopedia" style="flex-row-reverse" description="Ricklopedia is a personal project created with react in which I use the rick and morty api, showing filtered and random characters." image={ricklopedia} link={"https://rick-morty-steel.vercel.app"}/>
          <Card tittle="ESP32 Smart Home" description="Using an ESP32(wifi-module) as a receptor brings you a remotre controll from your phone, where you would turn off/on your ligths and more." image={es32}/>
          <Card tittle="WOK" style="flex-row-reverse" description="Work in progress" image={wok}/>
        </div>
    </div>
  )
}

export default Projects
