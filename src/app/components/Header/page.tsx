import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className="flex items-center p-2 justify-between bg-green-300">
        <div>
          <Image
            src="/globe.svg"
            alt="FarmHub Logo"
            width={60}
            height={60}
            className="w-16 h-16"
            priority
          />
        </div>

        <div className="gap-4 hidden md:flex md:items-center text-black">
          {/* Home List */}
          <div className="flex items-center">
            <h1>Home</h1>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          <div className="flex items-center relative bg-blue-500 group cursor-pointer">
            {/* Blog List */}
            <div rel="noopener noreferrer">
              Blog
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col bg-yellow-400 py-2 px-2 text-white">
              <a href="" className="px-2 py-2 bg-amber-300">
                HTML/CSS
              </a>

              <div className="absolute left-[100%] top-6 bg-blue-600 px-2 py-2">
                <a href="">Senior Best Practices</a>
                <a href="">Mid Level Best Practices sdfivij</a>
              </div>

              <a href="" className="px-2 py-2 bg-red-400">
                React/JS/Next
              </a>
              <a href="" className="px-2 py-2 bg-black">
                Backend
              </a>
              <a href="" className="px-2 py-2 bg-black">
                Security
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <h1>Home</h1>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          <div className="flex items-center">
            <h1>Home</h1>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          <div className="flex items-center">
            <h1>Home</h1>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="flex items-center">
            <h1>Home</h1>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="flex items-center">
            <h1>Home</h1>
          </div>

          <div>
            <button className="bg-red-700 px-4 py-2 rounded-lg">
              Get icon Touch
            </button>
          </div>
        </div>

        <div className="md:hidden bg-red-500">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default page;
