/* eslint-disable react/no-unescaped-entities */
import React from "react";

function JobExperience() {
  return (
    <section
      className="w-[90%] mx-auto justify-center h-100 flex flex-col text-center"
      id="experience"
    >
      {/* Section Heading */}
      <div className="mt-10">
        <h4 className="text-xs tracking-widest uppercase text-gray-400">
          Professional Journey
        </h4>
        <span className="text-2xl font-bold">Experience</span>
      </div>

      {/* Experience List */}
      <div className="flex flex-col w-full lg:mt-24 mt-16 space-y-14 px-1 lg:px-24">
        {/* Elegant Web Studio */}
        <div className="bg-slate-900/60 rounded-xl p-6 lg:p-8 text-left shadow-md">
          <h2 className="text-lg font-bold">Elegant Web Studio</h2>
          <span className="text-xs lg:text-sm text-gray-400 block mt-1">
            Front-End Developer · Remote · Jan 2025 – Present
          </span>

          <ul className="mt-4 space-y-2 text-xs lg:text-sm text-gray-300 list-disc list-inside">
            <li>
              Spearheaded scalable React & Next.js architectures across multiple
              client applications.
            </li>
            <li>
              Built and maintained a shared component library, reducing
              development time by <span className="font-semibold">30%</span>.
            </li>
            <li>
              Collaborated closely with UI/UX designers to ensure pixel-perfect
              and accessible interfaces.
            </li>
            <li>
              Conducted code reviews and mentored junior developers to improve
              code quality and team efficiency.
            </li>
          </ul>
        </div>

        {/* Al Jaami Technologies */}
        <div className="bg-slate-900/60 rounded-xl p-6 lg:p-8 text-left shadow-md">
          <h2 className="text-lg font-bold">Al Jaami Technologies</h2>
          <span className="text-xs lg:text-sm text-gray-400 block mt-1">
            Front-End Developer (Contract) · Remote · Apr 2023 – Jul 2023
          </span>

          <ul className="mt-4 space-y-2 text-xs lg:text-sm text-gray-300 list-disc list-inside">
            <li>
              Delivered <span className="font-semibold">4+</span> fully
              responsive, SEO-optimized production websites.
            </li>
            <li>
              Refactored legacy codebases, achieving up to
              <span className="font-semibold"> 35% faster load times</span>.
            </li>
            <li>Improved developer workflow using ESLint and Prettier.</li>
            <li>
              Integrated animation libraries to enhance UX and increase user
              session duration.
            </li>
          </ul>
        </div>

        {/* Remostarts */}
        <div className="bg-slate-900/60 rounded-xl p-6 lg:p-8 text-left shadow-md">
          <h2 className="text-lg font-bold">Remostarts</h2>
          <span className="text-xs lg:text-sm text-gray-400 block mt-1">
            Front-End Intern · Remote · Dec 2022 – Mar 2023
          </span>

          <ul className="mt-4 space-y-2 text-xs lg:text-sm text-gray-300 list-disc list-inside">
            <li>Developed dynamic dashboards and role-based admin portals.</li>
            <li>Implemented form validation using React Hook Form and Zod.</li>
            <li>
              Worked within Agile teams and contributed to
              <span className="font-semibold"> 6+</span> successful sprint
              releases.
            </li>
            <li>
              Designed modular layouts to support scalability and rapid feature
              delivery.
            </li>
          </ul>
        </div>
      </div>

      {/* ATS / Recruiter Hidden Text */}
      <p className="sr-only">
        Front-End Developer with over 4 years of professional experience working
        at Elegant Web Studio, Al Jaami Technologies, and Remostarts.
        Specialized in React, Next.js, TypeScript, component-driven development,
        scalable design systems, performance optimization, and production-ready
        web applications.
      </p>
    </section>
  );
}

export default JobExperience;
