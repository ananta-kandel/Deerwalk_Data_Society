import React from 'react'
import eventpic from "../images/background.jpg"
const Hero = () => {
  return (
    <>
    <nav className='h-[2rem] bg-[#00A09C] p-[2rem] flex justify-center sticky top-0  z-10 items-center shadow'>
        <ul className='text-white flex font-lato md:text-[1.5rem] text-[1rem]'> 
            <li className='md:p-[2rem] p-[10px]'>Home</li>
            <li className='md:p-[2rem] p-[10px]'>About us</li>
            <li className='md:p-[2rem] p-[10px]'>Our Teams</li>
            <li className='md:p-[2rem] p-[10px]'>Contact Us</li>
        </ul>
    </nav>
    <div className='md:flex  md:m-[2rem] text-white md:w-[90vw]'>
       <div className='md:w-[50%] h-[50vh] overflow-scroll bg-[#00A09C] rounded-[1rem] md:m-[5rem] m-[2rem]'>
          <h1 className='text-center font-lato text-[2rem] m-[10px]'>Deerwalk Data Society</h1>
          <p className='text-center font-lato text-[1.5rem] m-[10px]'>We are a group of students who are passionate about learning and exploring the latest developments in the field. We conduct workshops on a wide range of tech topics, from basic coding to cutting-edge AI, so that the students of DWIT can gain new skills and deepen their knowledge. Whether you're just starting out or are already an experienced tech expert, DWIT Software Club is the perfect place to learn, grow, and connect with others who share your interests.</p>
       </div>
       <div className='md:w-[50%] h-[100%] border-[1px] rounded-[2rem] md:m-[5rem] m-[2rem] overflow-hidden'>
          <img src={eventpic} alt="image"></img>
       </div>
    </div>
    </>
  )
}

export default Hero;
