import React from 'react'
import datasocity from "../images/DDS.png"
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <div>
       <div className='flex justify-center '>
        <div className='w-[50%] flex flex-col justify-center items-center' >
        <p className='white-line'></p>
        <img className=' h-[5rem] w-[6rem]' src={datasocity} alt="DDS logo"/>
        <p className='font-lato pt-[1rem] text-white md:text-[2rem] text-[1rem] text-center'>Stay Updated with the latest insights,event, and many more from Data Society</p>
        </div>
    </div>
    {/* for social media  */}
    <div className='flex justify-center'>
       <BsFacebook className='m-[1rem]'/>
       <BsFacebook className='m-[1rem]'/>
       <BsFacebook className='m-[1rem]'/>
       <BsFacebook className='m-[1rem]'/> 
    </div>
    <div className='flex justify-center'>
        <p className='font-inter py-[1rem] text-white md:text-[1.5rem] text-[1rem] text-center'>Developed and Maintain by Deerwalk Data Society</p>
    </div>
    </div>
    </>
  )
}

export default Footer;