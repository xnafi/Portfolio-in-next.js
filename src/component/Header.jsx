/* eslint-disable react/no-unescaped-entities */
import React from "react";
// import cv from './assets/cv.pdf'
import me from "./assets/me.png";
import { FaFacebookSquare, FaGitSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <>
      {/********************************Name And Cv Section **************************************/}

      <header className="flex flex-col w-100 h-100 mt-10 lg:mt-24 xl:mt-28 text-center">
        <div className="">
          <h2 className="text-xs font-thin"> Hello I'm</h2>
          <h1 className="text-2xl font-bold">FORHAD KHAN</h1>
          <h2 className="text-sm font-medium">I'm Frontend Developer</h2>
        </div>
        <div className="flex mt-6 justify-center space-x-3">
          <a
            href="https://drive.google.com/file/d/13GhQyqLmKvdSJ33KYQBLANS-kwMS6QA5/view"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs border p-2 rounded-lg hover:bg-slate-600"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="text-xs border p-2 rounded-lg bg-slate-600 hover:bg-transparent"
          >
            Lets Talk
          </a>
        </div>

        {/********************************Header Social Section **************************************/}

        <div className="flex flex-col md:flex-row justify-between text-center items-center px-36">
          <div className="flex-row flex space-x-5 text-3xl mt-5  lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-x-0 lg:text-base md:mt-auto w-40 space-y-3 md:flex justify-center items-baseline text-center">
            <a href="https://www.facebook.com/Fk.nafi" target="_blank">
              <FaFacebookSquare />{" "}
            </a>
            <a href="https://www.linkedin.com/in/forhadkhandev" target="_blank">
              <FaLinkedin />{" "}
            </a>
            <a href="https://github.com/xnafi" target="_blank">
              <FaGitSquare />{" "}
            </a>
          </div>

          {/********************************Header Image Section **************************************/}

          <div className=" mt-10 xl:mt-8 bg-gray-900 w-60 lg:w-96 rounded-t-full">
            <Image src={me} alt="my-image" className="w-full" />
          </div>

          {/********************************Header Scroll Section **************************************/}

          <div className="md:flex hidden md:mt-auto w-40 transition rotate-90">
            <a href="#footer" className="text-xs pl-4 animate-pulse">
              {" "}
              Scroll Down
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
