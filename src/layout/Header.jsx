import React, { useState } from 'react'
import logo from '../assets/logo.jpeg'

const Header = () => {

  const [estilo,setEstilo] = useState("")

  window.addEventListener("scroll", function(){
      // let header = document.getElementById("header")
      if (window.scrollY>1100) {
          setEstilo("fixed")
      }else{
        setEstilo("hidden ")
      }
  })

  return (
    <div className='relative '>
      <header id='header' className={` ${estilo} text-2xs transition-all ease-in-out duration-500 w-full font-bold text-white flex z-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-sm`}>
          <nav className='w-full'>
            <ul className='flex w-full space-x-3 mt-[3%] ml-[5%]'>
              <li><a href="#about">About me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#technologies">Technologies</a></li>
            </ul>
          </nav>
          <img className='w-[10%] h-[5%] rounded-full mr-2' src={logo} alt="" />
      </header>
    </div>    
  )
}

export default Header
