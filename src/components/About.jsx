import React from 'react'
import brand_img from '../assets/brand_img.png'




const About = () => {
  return (

    <div id='About' className='flex flex-col justify-center items-center container 
    mx-auto p-13 mt-9 md:px-20 lg:px-32 w-full overflow-hidden'>
      <h1 className='text-4xl font-bold  mb-2'>About <span className='font-light'>Our Brand </span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 '>Passionate About Properties, Dedicated to your vision</p>

      <div className='flex flex-row items-start mr-25 md:items-start'>
        <img src={brand_img} alt="" className='w-full ml-9 max-w-lg' />

        <div className='flex flex-col items-center ml-15 w-full md:items-start mt-10 md:gap-15'>
          <div className='grid grid-cols-2 w-full ml-15 2xl:pr-20'>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>10+</p>
              <p className='font-light text-gray-600'>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>12+</p>
              <p className='font-light text-gray-600'>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>20+</p>
              <p className='font-light text-gray-600'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-semibold text-gray-800'>25+</p>
              <p className='font-light text-gray-600'>Ongoing Projects</p>
            </div>
          </div>
          <div>
            <p className='mx-15 text-1xl text-gray-500 font-medium '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.</p>

            <div className='flex flex-col text-center items-center justify-center mt-18 mr-8'>
              <a href="#Learn More" className='bg-blue-500 px-7 py-3 rounded text-white font-light '>Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
