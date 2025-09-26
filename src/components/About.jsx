import React from "react";
import brand_img from "../assets/brand_img.png";

const About = () => {
  return (
    <div
      id="About"
      className="container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col items-center text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        About <span className="font-light">Our Brand</span>
      </h1>
      <p className="text-gray-500 max-w-lg mb-12">
        Passionate About Properties, Dedicated to Your Vision
      </p>
   
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      
        <img
          src={brand_img}
          alt="Brand"
          className="w-full max-w-md lg:max-w-lg rounded-2xl "
        />
   
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-10">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
            <div>
              <p className="text-4xl font-semibold text-gray-800">10+</p>
              <p className="font-light text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">12+</p>
              <p className="font-light text-gray-600">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">20+</p>
              <p className="font-light text-gray-600">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-800">25+</p>
              <p className="font-light text-gray-600">Ongoing Projects</p>
            </div>
          </div>

        
          <p className="text-gray-600 max-w-xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

      
          <div>
            <a
              href="#Learn More"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl text-white font-medium shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
