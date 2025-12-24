"use client";
import React from "react";
import { ExperienceCardItem } from "./ExperienceCardItems";
import ExperienceCard from "./Experience-Card";

function Experience() {
  const [Item] = React.useState(ExperienceCardItem);

  return (
    <section
      id="technical_expertise"
      className="w-100 justify-center h-100 flex flex-col text-center mt-20"
    >
      {/* Heading */}
      <div className="mt-8 lg:mt-5">
        <h4 className="text-xs">
          Component-Driven • Design Systems • Production-Ready
        </h4>
        <span className="text-2xl font-bold">Technical Expertise</span>
      </div>

      {/* ATS / Recruiter Hidden Text */}
      <p className="sr-only">
        Experienced in component-driven development using React and Next.js,
        building scalable design systems with Tailwind CSS, shadcn/ui, and
        Material UI. Proven production experience delivering high-performance,
        accessible, and maintainable frontend applications in real-world
        environments.
      </p>

      {/* Cards */}
      <div className="lg:mt-10 mt-5 flex flex-row justify-evenly gap-3">
        <div className="inline-flex flex-col bg-[#0F172A] w-screen p-2 lg:p-3 lg:w-[90%] rounded-xl">
          <h2 className="mt-5 mb-8 font-bold">
            Frontend & Supporting Backend Development
          </h2>

          <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-10 mb-8">
            {Item.map((current) => (
              <ExperienceCard key={current.id} {...current} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
