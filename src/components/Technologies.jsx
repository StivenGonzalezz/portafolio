import React from 'react'
import javaIcon from "../assets/javaIcon.webp"
import javascIcon from "../assets/javascIcon.webp"
import html from "../assets/htmlIcon.webp"
import css from "../assets/cssIcon.webp"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"

const Technologies = () => {
  return (
    <div id='technologies' className=' h-full w-full text-6xl justify-evenly pt-[10vh]'>
      <h2 className='text-white text-center' >Technologies</h2>
      <div className='grid grid-cols-3 h-[80vh] gap-5 items-center py-[15vh] px-[5vh]'>
        <img src={javaIcon} alt="" />
        <img src={html} alt="" />
        <img src={javascIcon} alt="" />
        <img src={css} alt="" />
        <img src={react} alt="" />
        <img src={tailwind} alt="" />
      </div>
      
    </div>
  )
}

export default Technologies
