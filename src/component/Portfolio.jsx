import React from "react";
import Image from "next/image";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.gif";
import work3 from "./assets/work3.gif";
import work4 from "./assets/work4.gif";
import work5 from "./assets/work5.gif";

function Portfolio() {
  return (
    <section
      className="w-[90%] mx-auto flex flex-col text-center mt-10"
      id="portfolio"
    >
      {/* Section Heading */}
      <div className="mb-20">
        <h4 className="text-xs tracking-widest uppercase text-gray-400">
          My Recent Work
        </h4>
        <span className="text-2xl font-bold">Projects</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* E-Real State */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work4} alt="E-Real State project" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">E-Real State</h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Developed a dynamic real-estate platform using Next.js</li>
              <li>Implemented advanced property filtering and analytics</li>
              <li>Integrated Framer Motion animations for better UX</li>
              <li>Increased user engagement on listings by ~20%</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">Next.js</span>
              <span className="px-2 py-1 bg-slate-700 rounded">
                Framer Motion
              </span>
              <span className="px-2 py-1 bg-slate-700 rounded">Recharts</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://e-realstate.vercel.app"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* scroll-animation-framer-motion */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work5} alt="Scroll animation NPM" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">
              scroll-animation-framer-motion
            </h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Built a reusable scroll-triggered animation library</li>
              <li>Developed using TypeScript, Vite, and Rollup</li>
              <li>Supports fade, slide, and zoom animation presets</li>
              <li>Published on NPM with 1000+ developer downloads</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">TypeScript</span>
              <span className="px-2 py-1 bg-slate-700 rounded">
                Framer Motion
              </span>
              <span className="px-2 py-1 bg-slate-700 rounded">Vite</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://www.npmjs.com/package/scroll-animation-framer-motion"
                className="hover:underline"
              >
                NPM Package
              </a>
            </div>
          </div>
        </div>

        {/* EWS Corporate */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work1} alt="EWS Corporate Website" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">EWS – Corporate Website</h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Developed a modern corporate website using Next.js</li>
              <li>Implemented scroll-triggered animations for navigation</li>
              <li>Built responsive branding and media sections</li>
              <li>Optimized for SEO and performance best practices</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">Next.js</span>
              <span className="px-2 py-1 bg-slate-700 rounded">
                Tailwind CSS
              </span>
              <span className="px-2 py-1 bg-slate-700 rounded">SEO</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://corporate-2-0.vercel.app"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Lambo Showcase */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work2} alt="Lambo Showcase" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">Lambo Showcase</h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Built an immersive automotive showcase concept</li>
              <li>Implemented custom particle effects and page transitions</li>
              <li>Integrated Google Maps API for dealership locations</li>
              <li>Focused on performance and visual engagement</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">Next.js</span>
              <span className="px-2 py-1 bg-slate-700 rounded">GSAP</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Maps API</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://lambo-showcase.vercel.app"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* BuyBox Savvy */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work3} alt="BuyBox Savvy" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">BuyBox Savvy</h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Contract-based e-commerce comparison platform</li>
              <li>Built responsive UI with React and Firebase</li>
              <li>Integrated authentication and data handling</li>
              <li>Deployed and optimized for production on Netlify</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">React</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Firebase</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Netlify</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://buybox-savvy.netlify.app/"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ATS Text */}
      <p className="sr-only">
        Frontend projects built with React, Next.js, TypeScript, Tailwind CSS,
        Framer Motion, Firebase, MongoDB, GSAP, and modern performance-focused
        frontend tooling. Includes open-source NPM packages and production
        client projects.
      </p>
    </section>
  );
}

export default Portfolio;
