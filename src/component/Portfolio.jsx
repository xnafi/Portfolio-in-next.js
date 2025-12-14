import React from "react";
import Image from "next/image";

import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

function Portfolio() {
  return (
    <section
      className="w-[90%] mx-auto flex flex-col text-center mt-10"
      id="portfolio"
    >
      {/* Section Heading */}
      <div className="mb-10">
        <h4 className="text-xs tracking-widest uppercase text-gray-400">
          My Recent Work
        </h4>
        <span className="text-2xl font-bold">Projects</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fleet Stack – Super Admin */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image
            src={work5}
            alt="Fleet Stack Admin Dashboard"
            className="w-full"
          />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">
              Fleet Stack – Super Admin Dashboard
            </h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>
                Built a large-scale fleet management admin dashboard using
                Next.js 16 and React 19.
              </li>
              <li>
                Implemented a component-driven architecture using shadcn/ui and
                Radix UI primitives.
              </li>
              <li>
                Developed complex forms with React Hook Form and Zod validation.
              </li>
              <li>
                Integrated interactive charts using ApexCharts and Recharts for
                analytics and reporting.
              </li>
              <li>
                Built role-based admin interfaces with reusable tables, dialogs,
                filters, and bulk actions.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">Next.js 16</span>
              <span className="px-2 py-1 bg-slate-700 rounded">React 19</span>
              <span className="px-2 py-1 bg-slate-700 rounded">shadcn/ui</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Radix UI</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Zod</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Leaflet</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://fleet-stack.vercel.app/super-admin"
                className="hover:underline"
              >
                Live Demo
              </a>
              <span className="text-gray-500">Private Repo</span>
            </div>
          </div>
        </div>
        {/* E-Real State */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work1} alt="E-Real State project" className="w-full" />
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
          <Image src={work2} alt="Scroll animation NPM" className="w-full" />
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
          <Image src={work3} alt="EWS Corporate Website" className="w-full" />
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
          <Image src={work4} alt="Lambo Showcase" className="w-full" />
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
        {/* Phone Garage */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image
            src={work6}
            alt="Phone Garage project"
            className="w-full"
          />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">Phone Garage</h2>

            <ul className="text-xs text-gray-400 space-y-1 list-disc list-inside">
              <li>Full-stack phone sales application with Firebase backend</li>
              <li>Built authentication, protected routes, and role guards</li>
              <li>CRUD operations for products and order management</li>
              <li>Responsive layout optimized for mobile and desktop</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">React</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Firebase</span>
              <span className="px-2 py-1 bg-slate-700 rounded">
                Responsive UI
              </span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://phone-garage-fc937.web.app/"
                className="hover:underline"
              >
                Live Demo
              </a>
              <a
                target="_blank"
                href="https://github.com/xnafi/Phone-garage-client"
                className="hover:underline"
              >
                GitHub Client
              </a>
              <a
                target="_blank"
                href="https://github.com/xnafi/Phone-garage-server"
                className="hover:underline"
              >
                GitHub Server
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
