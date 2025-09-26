import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='absolute top-0 left-0 w-full z-10 bg-transparent'>
      <div className='container mx-auto flex justify-between items-center px-4 py-6 md:px-20 lg:px-32'>
        <img src={logo} alt="Company logo" />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-white'>
          <li><a href="#Header" className="hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonials" className="hover:text-gray-400">Testimonials</a></li>
        </ul>

        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

        {/* Mobile Toggle */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-white text-2xl'>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-zinc-800 bg-opacity-90 px-4 py-6'>
          <ul className='flex flex-col gap-6 text-white'>
            <li><a href="#Header" className="hover:text-gray-400">Home</a></li>
            <li><a href="#About" className="hover:text-gray-400">About</a></li>
            <li><a href="#Projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#Testimonials" className="hover:text-gray-400">Testimonials</a></li>
            <li><button className='bg-white text-black  px-6 py-2 rounded-full'>Sign up</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;