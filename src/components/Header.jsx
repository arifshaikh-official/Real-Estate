import React from "react";
import Navbar from "./Navbar";
const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <div className="container  text-center mx-auto px-4 py-6 ">
                <h2 className=" text-4xl md:text-6xl lg:text-8xl font-semibold text-white">
                    Explore homes that
                    <h2>fit your dreams</h2>
                </h2>
                <div className="mt-17 text-white space-x-8">
                    <a className="border border-white px-8 py-3 rounded" href="">Projects</a>
                    <a className="bg-blue-500 px-8 py-3 rounded" href="">Contacts</a>

                </div>
            </div>
        </div>
    )
}

export default Header
