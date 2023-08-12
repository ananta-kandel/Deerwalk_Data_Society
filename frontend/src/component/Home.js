import React from 'react'
// text-[#137598]
import deerwalkblue from "../images/DWITblue.png"
import datasocity from "../images/DDS.png"

const Home = () => {

  return (
    <>
      <div className="demo-wrap">
        <div className='flex justify-center '>
          <div>
            <img className="h-[6rem] mt-[6rem] md:pr-[2rem] pr-[1rem]" src={deerwalkblue} alt="deerwalk logo" />
          </div>
          <div className='middle-section'>
          </div>
          <div>
            <img className="h-[6rem] mt-[6rem] md:pl-[2rem] pl-[2rem]" src={datasocity} alt="deerwalk logo" />
          </div>
        </div>
        {/* for middle text */}
        <div className='flex justify-center md:mt-[3rem] items-center' >
          <div className=" bg-[#243c5a] m-[2rem] p-[2rem] opacity-[.88]  text-white md:text-[4rem] text-[1.5rem] rounded-lg">
            <p className="font-lora md:pl-[8rem]">Deerwalk Data Society</p>
            <p className='font-lato md:pl-[2rem]' style={{ color: "red" }}>Translating And Transforming Data</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home;