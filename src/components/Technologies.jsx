import React from 'react'
import javaIcon from "../assets/javaIcon.webp"
import javascIcon from "../assets/javascIcon.webp"
import html from "../assets/htmlIcon.webp"
import css from "../assets/cssIcon.webp"
import react from "../assets/react.png"

const Technologies = () => {
  return (
    <div className='h-[80vh] text-6xl text-white text-center justify-evenly py-[5vh]'>
      <h2 >Technologies</h2>
      <div className='grid w-[65vw] h-[10vh] grid-cols-3 gap-8 items-center mt-[15vh] ml-[8vh]'>
        <img src={javaIcon} alt="" />
        <img src={html} alt="" />
        <img src={javascIcon} alt="" />
        <img src={css} alt="" />
        <img src={react} alt="" />
      </div>
      
    </div>
  )
}

export default Technologies
