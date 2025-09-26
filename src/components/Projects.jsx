import React from 'react'
import left_arrow from '../assets/left_arrow.svg'
import right_arrow from '../assets/right_arrow.svg'


import project_image_1 from '../assets/project_img_1.jpg'
import project_image_2 from '../assets/project_img_2.jpg'
import project_image_3 from '../assets/project_img_3.jpg'
import project_image_4 from '../assets/project_img_4.jpg'



const Projects = () => {
    return (

        <div className='flex flex-col justify-center items-center container 
                        mx-auto p-13 mt-9 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects'>
            <h1 className='text-4xl font-bold  mb-2'>Projects    <span className='font-light'>Completed</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 '>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>

            {/* <div className='flex justify-end items-end mb-8 w-full '>
                <button className='p-3 bg-gray-200 mr-2 rounded cursor-pointer '  >
                    <img src={left_arrow} alt="Previous" />
                </button>
                <button className='p-3 bg-gray-200 mr-2 rounded cursor-pointer'>
                    <img src={right_arrow} alt="Next" />
                </button>
            </div> */}

            {/* Projects Slidebar */}

            <div className="flex flex-row justify-center gap-6 max-w-full">
                
                <div className='text-center bg-blue-200 '>
                    <img src={project_image_1} alt="Project 1" className="h-100 object-cover" />
                    <h1 className='text-2xl font-semibold'>Serenity Suites </h1>
                    <h5 className='text-gray-800 max-w-80 text-center mb-5 '>$2,50,000 | Chicago </h5>
                </div>

                <div className='text-center bg-blue-200 '>
                    <img src={project_image_2} alt="Project 1" className="h-100 object-cover" />
                    <h1 className='text-2xl font-semibold'>Vista Verde </h1>
                    <h5 className='text-gray-800 max-w-80 text-center mb-5 '>$2,50,000 | San Francisco </h5>
                </div>

               <div className='text-center bg-blue-200 '>
                    <img src={project_image_3} alt="Project 1" className="h-100 object-cover" />
                    <h1 className='text-2xl font-semibold'>Central Square </h1>
                    <h5 className='text-gray-800 max-w-80 text-center mb-5 '>$2,50,000  |  Los Angeles </h5>
                </div>

               <div className='text-center bg-blue-200 '>
                    <img src={project_image_4} alt="Project 1" className="h-100 object-cover" />
                    <h1 className='text-2xl font-semibold'>Skyline Haven</h1>
                    <h5 className='text-gray-800 max-w-80 text-center mb-5 '>$2,50,000 | California</h5>
                </div>

            </div>
            </div>

    )
}

export default Projects
