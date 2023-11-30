import React from 'react'
import Card from './Card'
import ricklopedia from '../assets/ricklopedia.png'

const Projects = () => {
  return (
    <div className='h-[75vh] w-full text-white flex flex-col items-center justify-between'>
        <h2 className='text-6xl' id='projects'>
            Projects
        </h2>
        <div className='flex flex-col space-y-12'>
          <Card tittle="Ricklopedia" style="flex-row-reverse" description="Ricklopedia is a personal project created with react in which I use the rick and morty api, showing filtered and random characters." image={ricklopedia} link={"https://rick-morty-steel.vercel.app"}/>
          <Card tittle="ESP32 Smart Home" description="Using an ESP32(wifi-module) as a receptor brings you a remotre controll from your phone, where you would turn off/on your ligths and more." image="data:image/png;base64,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"/>
          <Card tittle="WOK" style="flex-row-reverse" description="Work in progress" image="data:image/png;base64,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"/>
        </div>
    </div>
  )
}

export default Projects