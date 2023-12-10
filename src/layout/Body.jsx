import React from 'react'
import About from '../components/About'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'

const Body = () => {
  return (
    <div className='snap-y snap-mandatory relative w-full h-full overflow-auto'> 
        <div className='snap-center'><About/></div>
        <div className='snap-center'><Projects/></div>
        <div className='snap-center'><Technologies/></div>
    </div>
     
  )
}

export default Body
