import React from 'react'
import profile_image_1 from '../assets/profile_img_1.png'
import profile_image_2 from '../assets/profile_img_2.png'
import profile_image_3 from '../assets/profile_img_3.png'

const Testimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center container 
                        mx-auto p-13 mt-5 md:px-20 lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-4xl font-bold  mb-2'>Customer  <span className='font-light'>Testimonials </span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8 '>Real Stories from Those Who Found Home with Us</p>

            <div className='flex flex-wrap gap-9 mt-3 justify-center md:justify-start'>
                {/* Card 1 */}
                <div className='bg-white border border-gray-200   rounded-lg  w-80 p-6 max-w-sm flex flex-col items-center text-center'>
                    <img className='w-24 h-24 rounded-full mb-4' src={profile_image_1} alt="Profile 1" />
                    <h1 className='text-lg font-semibold'>Donald Jackman</h1>
                    <h4 className='text-gray-500'>Marketing Manager</h4>
                    <span className="text-red-500 text-xl mt-2">★★★★★</span>

                    <p className='mt-4 text-1xl text-gray-700'>
                        From the very first meeting, they understood my vision and helped me find the perfect property.
                        Their attention to detail and commitment to client satisfaction is unmatched.
                    </p>
                </div>

                {/* Card 2 */}
                <div className='bg-white border border-gray-200 rounded-lg shadow-md w-80 p-6 max-w-sm flex flex-col items-center text-center'>
                    <img className='w-24 h-24 rounded-full mb-4' src={profile_image_2} alt="Profile 2" />
                    <h1 className='text-lg font-semibold'>Richard Nelson</h1>
                    <h4 className='text-gray-500'>UI/UX Designer</h4>
                    <span className="text-red-500 text-xl mt-2">★★★★</span>
                    <p className='mt-4 text-1xl text-gray-700'>
                        From the very first meeting, they understood my vision and helped me find the perfect property.
                        Their attention to detail and commitment to client satisfaction is unmatched.
                    </p>
                </div>

                {/* Card 3 */}
                <div className='bg-white border border-gray-200 rounded-lg shadow-md w-80 p-6 max-w-sm flex flex-col items-center text-center'>
                    <img className='w-24 h-24 rounded-full mb-4' src={profile_image_3} alt="Profile 3" />
                    <h1 className='text-lg font-semibold'>James Washington</h1>
                    <h4 className='text-gray-500'>Co-Founder</h4>
                    <span className="text-red-500 text-xl mt-2">★★★★★</span>
                    <p className='mt-4 text-1xl text-gray-700'>
                        From the very first meeting, they understood my vision and helped me find the perfect property.
                        Their attention to detail and commitment to client satisfaction is unmatched.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
