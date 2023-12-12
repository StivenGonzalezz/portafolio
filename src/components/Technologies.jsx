import React from 'react'
import javaIcon from "../assets/javaIcon.webp"
import javascIcon from "../assets/javascIcon.webp"
import html from "../assets/htmlIcon.webp"
import css from "../assets/cssIcon.webp"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import git from "../assets/git.svg"
import sceneBuilder from "../assets/sceneBuilder.webp"
import terminal from "../assets/terminal.webp"
import arduino from "../assets/arduino.png"
import Aos from "aos";
import 'aos/dist/aos.css'

const Technologies = () => {

 

  return (
    <div id='technologies' className=' h-full w-full text-6xl justify-evenly pt-[10vh]'>
      <h2 data-aos="zoom-out" className='text-white text-center' >Technologies</h2>
      <div className='grid grid-cols-3 h-[80vh] gap-5 items-center py-[15vh] px-[5vh]'>
        <img data-aos="zoom-in" src={javaIcon} alt="" />
        <img data-aos="zoom-in" src={html} alt="" />
        <img data-aos="zoom-in" src={javascIcon} alt="" />
        <img data-aos="zoom-in" src={css} alt="" />
        <img data-aos="zoom-in" src={react} alt="" />
        <img data-aos="zoom-in" src={tailwind} alt="" />
        <img data-aos="zoom-in" src={git} alt="" />
        <img data-aos="zoom-in" src={sceneBuilder} alt="" />
        <img data-aos="zoom-in" src={terminal} alt="" />
        <img data-aos="zoom-in" src={arduino} alt="" />
        
      </div>
      
    </div>
  )
}

export default Technologies
