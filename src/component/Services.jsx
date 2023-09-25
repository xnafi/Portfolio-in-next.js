/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FcMultipleDevices, FcIdea, FcPositiveDynamic } from 'react-icons/fc';






function Services() {
  return (
    <section
      className="w-[90%] mx-auto justify-center h-100 flex flex-col text-center lg:mt-20 mb-10 lg:mb-28"
      id="services"
    >
      <div className="mt-10">
        <h4 className="text-xs">What I Offer</h4>
        <span className="text-2xl font-bold">Services</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:mt-28 mt-20 justify-center items-baseline space-y-7 px-1 lg:px-10">
        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <div className=" bg-gray-700 w-20 h-20 flex justify-center items-center text-center rotate-45">
            <AiFillThunderbolt className="text-3xl rotate-[-48deg] animate-pulse text-yellow-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">FAST</h2>
            <span className=" text-xs lg:text-sm font-thin text-justify">
              Fast load times and lag free interaction, my highest priority.
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <div className=" bg-gray-700 w-20 h-20 flex justify-center items-center rotate-45">
            <FcMultipleDevices className="text-3xl rotate-[-48deg] animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Responsive</h2>
            <span className="text-xs lg:text-sm font-thin text-justify">
              My layouts will work on any device, big or small
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <div className=" bg-gray-700 w-20 h-20 flex justify-center items-center rotate-45">
            <FcIdea className="text-3xl rotate-[-48deg] animate-pulse text-yellow-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Intuitive</h2>
            <span className="text-xs lg:text-sm font-thin text-justify">
              Strong preference for easy to use, intuitive UX/UI.
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-10">
          <div className=" bg-gray-700 w-20 h-20 flex justify-center items-center rotate-45">
            <FcPositiveDynamic className="text-3xl rotate-[-48deg] animate-pulse text-yellow-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Dynamic</h2>
            <span className="text-xs lg:text-sm font-thin text-justify">
              Websites don't have to be static, I love making pages come to
              life.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services