import React from 'react';
//import { FaBolt } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 text-white text-xl font-bold">
            {/* <FaBolt className="text-blue-500" /> */}
             <img src={logo} alt="Logo" />
           
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <p className="text-center text-sm text-gray-500">
        Copyright 2024 © Arif. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
