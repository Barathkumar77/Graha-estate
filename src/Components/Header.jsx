import React, { useState } from "react";
import logo from "/public/logo_graha-1-.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
  
      <div
        className="relative h-screen bg-cover bg-center pl-12 pt-32 lg:pl-48 lg:pt-48"
        style={{
          backgroundImage:
            "url('https://demo.moxcreative.com/graha/wp-content/uploads/sites/35/2021/05/3d-rendering-beautiful-contemporary-house-near-resort-and-river-at-sunset.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Awesome Design <br />
            and The Way to <br />
            Get Home.
          </h1>
          <p className="text-sm lg:text-lg mb-6 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="text-white py-3 px-8 rounded hover:bg-red-600 border-2">
            Discover More
          </button>
        </div>
      </div>
    <div className="p-5 flex justify-between items-center absolute top-0 w-full z-20">
        <img src={logo} alt="logo" className="w-32" />
        <button
          className="text-white text-2xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black bg-opacity-80 lg:relative lg:flex lg:w-auto lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-white text-lg p-4 lg:p-0">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Service</li>
            <li className="hover:text-red-500 cursor-pointer">Portfolio</li>
            <li className="hover:text-red-500 cursor-pointer">Properties</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
            <li className="hover:text-red-500 cursor-pointer">Page</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
