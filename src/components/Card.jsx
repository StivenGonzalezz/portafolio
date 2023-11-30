import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({image, tittle, description, style, link}) => {
  return (
    <div className={`flex justify-around  ${style} `}>
      <a className='w-[50%] relative group' target='_blank' href={link}> <FaExternalLinkAlt className='hidden absolute group-hover:block z-10 left-32 top-16 text-3xl' /> <img className='  rounded-2xl group-hover:blur-[2px]' src={image} alt="" /></a>
      <div className='flex flex-col items-center w-[40%] justify-around'>
          <h3 className='text-2xl font-bold' >{tittle}</h3>
          <p className='pb-10 text text-gray-400 text-center'>{description}</p>
      </div>
    </div>
  )
}

export default Card
