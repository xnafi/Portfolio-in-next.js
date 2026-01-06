import React from "react";
import me from "./assets/me.png";
import { FaAward, FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Image from "next/image";

function About() {
  return (
    <section
      className="w-100 justify-center h-100 flex flex-col text-center lg:mt-20 items-center mt-20"
      id="about"
    >
      <div className="mt-0 lg:mt-10">
        <h4 className="text-xs">Get To Know</h4>
        <span className="text-2xl font-bold">About Me</span>
      </div>

      {/* ************************About Left********************** */}

      <div className="flex justify-center lg:justify-between px-0 lg:px-32 mt-16 flex-col lg:flex-row w-full">
        <div className="lg:w-2/4 w-full flex justify-center self-center">
          <div className="absolute w-60 h-60 lg:h-80 lg:w-80 rounded-xl bg-yellow-600"></div>
          <div>
            <Image
              src={me}
              alt="Forhad Khan - Front-End Developer"
              className="h-60 w-60 lg:h-80 lg:w-80 rounded-xl relative transition-all rotate-12 hover:rotate-0 hover:duration-100"
              priority
            />
          </div>
        </div>

        {/* ************************About Right********************** */}

        <div className="lg:flex lg:flex-col space-y-4 lg:w-3/4 flex mt-10 lg:mt-0 flex-col px-5">
          {/* Stats Cards */}
          <div className="inline-flex flex-row w-full justify-between lg:justify-center space-x-4">
            <div className="inline-flex justify-center cursor-pointer space-y-3 text-center items-center flex-col w-40 h-40 bg-slate-900 rounded-xl">
              <span>
                <FaAward />
              </span>
              <div>
                <h5 className="text-md font-bold">Experience</h5>
                <span className="text-xs font-bold">4+ Years</span>
              </div>
            </div>

            <div className="inline-flex justify-center cursor-pointer space-y-3 text-center items-center flex-col w-40 h-40 bg-slate-900 rounded-xl">
              <span>
                <FaUserFriends />
              </span>
              <div>
                <h5 className="text-md font-bold">Teams</h5>
                <span className="text-xs font-bold">
                  Remote & <br /> Cross-Functional
                </span>
              </div>
            </div>

            <div className="inline-flex justify-center cursor-pointer space-y-3 text-center items-center flex-col w-40 h-40 bg-slate-900 rounded-xl">
              <span>
                <MdWork />
              </span>
              <div className="leading-1">
                <h5 className="text-md font-bold">Projects</h5>
                <span className="text-xs font-bold">90+ Completed</span>
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="flex justify-center text-left xl:px-20 px-2 text-sm lg:text-md">
            <span>
              I’m Forhad Khan, a Frontend Developer with strong production-level experience building
scalable and high-performance web applications. <br/> <br/>

I specialize in React, Next.js, and TypeScript, translating complex UI/UX designs into
pixel-perfect, reusable, and accessible components. My work focuses on clean architecture,
component-driven development, and performance optimization.<br/> <br/>

I’ve worked with remote teams at Elegant Web Studio, Al Jaami Technologies, and Remostarts,
contributing to modular frontend architectures, shared component libraries, and
animation-driven user experiences. Through performance-focused improvements, I’ve helped
applications achieve up to 35% faster load times.<br/> <br/>

My technical toolkit includes React, Next.js, TypeScript, Tailwind CSS, SASS, Redux Toolkit,
TanStack Query, Framer Motion, GSAP, React Hook Form, Firebase, Stripe integration, and
SEO-focused Next.js development.<br/> <br/>

I enjoy building intuitive digital products that balance design accuracy, performance,
and long-term scalability.<br/><br/>

Open to Frontend / React / Next.js opportunities

            </span>
          </div>

          {/* CTA */}
          <div className="justify-start flex xl:px-20">
            <a
              href="#contact"
              className="text-xs border px-7 py-2 lg:px-10 lg:py-3 rounded-lg bg-slate-600 hover:bg-transparent transition"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
