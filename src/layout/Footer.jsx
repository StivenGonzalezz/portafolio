import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  
  return (
    <div className='h-[5vh]'>
      <ul className='flex justify-evenly ' >
        <li><a href="https://github.com/StivenGonzalezz"><FaGithub className='text-white text-5xl'/></a></li>
        <li><a href="https://www.linkedin.com/in/stiven-gonzalez-217526281/"><FaLinkedin className='text-white text-5xl'/></a></li>
        <li><a href="mailto:grstiven1004@gmail.com"><MdMarkEmailUnread className='text-white text-6xl'/></a></li>
      </ul>
    </div>
  )
}

export default Footer
