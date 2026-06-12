import React from "react";
import Image from "next/image";

import work1 from "./assets/work1.png";
import work2 from "./assets/maczen.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/doctor.png";
import work5 from "./assets/work4.png";
import work6 from "./assets/work5.png";

function Portfolio() {
  return (
    <section
      className="w-full mx-auto flex flex-col text-center mt-10 max-w-[1440px] px-4 lg:px[2rem]"
      id="projects"
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
            src={work1}
            alt="Fleet Stack Admin Dashboard"
            className="w-full"
          />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">
              Fleet Stack – Super Admin Dashboard
            </h2>

            <ul className="text-xs text-gray-400 space-y-1">
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

            <div className="flex gap-4 text-xs mt-3 justify-start items-end">
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

        {/* MacZen BD */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image
            src={work2}
            alt="MacZen BD - Apple Premium Retail Platform"
            className="w-full"
          />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">
              MacZen BD – Apple Premium Retail
            </h2>

            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                Production e-commerce platform for a premium Apple retailer —
                Next.js storefront, admin dashboard, and React Native mobile
                app.
              </li>
              <li>
                Storefront includes product variant selection (colour, storage,
                configuration), cart and checkout flow, order tracking, EMI
                calculator, and Cloudinary image delivery.
              </li>
              <li>
                Admin dashboard supports full product CRUD with image upload,
                order processing, blog editor, and promotional offer management.
              </li>
              <li>
                React Native mobile app (Expo SDK 53) with in-app chatbot
                connected to live product API for real-time pricing and stock
                availability.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">Next.js</span>
              <span className="px-2 py-1 bg-slate-700 rounded">
                React Native
              </span>
              <span className="px-2 py-1 bg-slate-700 rounded">Expo</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Prisma</span>
              <span className="px-2 py-1 bg-slate-700 rounded">PostgreSQL</span>
              <span className="px-2 py-1 bg-slate-700 rounded">
                TanStack Query
              </span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://maczenbd.com"
                className="hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* scroll-animation-framer-motion */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work3} alt="Scroll animation NPM" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">
              scroll-animation-framer-motion
            </h2>

            <ul className="text-xs text-gray-400 space-y-1">
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

        {/* Daktar Khana */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image
            src={work4}
            alt="Daktar Khana - Clinic Queue System"
            className="w-full"
          />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">
              Daktar Khana – Clinic Queue System
            </h2>

            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                Built a clinic queue management portfolio app: online
                appointment booking with serial number assignment, real-time
                waiting room display board, and multi-role doctor/compounder
                dashboard.
              </li>
              <li>
                Implemented WebSocket-based real-time sync so queue updates from
                the dashboard instantly reflect on all connected screens with
                current and next patient names.
              </li>
              <li>
                Built a device-based rate limiting system (one appointment per
                device per day) and ordered queue engine to prevent duplicate or
                out-of-order entries.
              </li>
              <li>Multi-role RBAC supporting Doctor, Compounder</li>
              <li>Dashboard password 132580</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
              <span className="px-2 py-1 bg-slate-700 rounded">Next.js</span>
              <span className="px-2 py-1 bg-slate-700 rounded">WebSocket</span>
              <span className="px-2 py-1 bg-slate-700 rounded">Prisma</span>
              <span className="px-2 py-1 bg-slate-700 rounded">PostgreSQL</span>
              <span className="px-2 py-1 bg-slate-700 rounded">RBAC</span>
            </div>

            <div className="flex gap-4 text-xs mt-3">
              <a
                target="_blank"
                href="https://doctor-tirthankar.vercel.app"
                className="hover:underline"
              >
                Live Demo
              </a>

              <a
                target="_blank"
                href="https://doctor-queue-system.vercel.app"
                className="hover:underline"
              >
                Live Dashboard
              </a>
            </div>
          </div>
        </div>

        {/* Lambo Showcase */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work5} alt="Lambo Showcase" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">Lambo Showcase</h2>

            <ul className="text-xs text-gray-400 space-y-1">
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

        {/* E-Real State */}
        <div className="group bg-slate-900/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
          <Image src={work6} alt="E-Real State project" className="w-full" />
          <div className="p-5 text-left space-y-4">
            <h2 className="font-bold text-lg">E-Real State</h2>

            <ul className="text-xs text-gray-400 space-y-1">
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

            <div className="flex gap-4 text-xs mt-3 justify-start items-end">
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