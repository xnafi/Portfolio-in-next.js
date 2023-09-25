'use client'
import React from 'react'
import ExperianceCard from './Experiance-Card'
import { ExperianceCardItem } from './ExperianceCardItems';



function Experience() {

  const [Item, setItem] = React.useState(ExperianceCardItem)
  return (
    <section
      id="experiance"
      className="w-100 justify-center h-100 flex flex-col text-center mt-20"
    >
      <div className="mt-10 lg:mt-10">
        <h4 className="text-xs">What Skills I Have</h4>
        <span className="text-2xl font-bold">Experiance</span>
      </div>

      {/* ***************Cards***************** */}

      <div className="lg:mt-20 mt-5 flex flex-row justify-evenly gap-3">
        <div className="inline-flex flex-col bg-[#0F172A] w-screen p-2 lg:p-3 lg:w-[90%] rounded-xl">
          <h2 className="mt-5 mb-8 font-bold">
            Fronted And Backend Development
          </h2>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-20 mb-8">
            {Item.map((current) => {
              return <ExperianceCard key={current.id} {...current} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience