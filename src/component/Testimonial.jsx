import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <section
      className="w-[90%] mx-auto justify-center h-100 flex flex-col text-center lg:mt-20 mt-20 lg:mb-28"
      id="testimonial"
    >
      <div className="mt-10">
        <h4 className="text-xs">Review From Clients</h4>
        <span className="text-2xl font-bold">Testimonial</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-baseline space-y-4 lg:space-y-0 mt-16 lg:mt-28 px-0 lg:px-6">
        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-3">
          <img
            src="https://picsum.photos/640"
            className="rounded-full w-1/2"
            alt=""
          />
          <div>
            <h2 className="font-bold text-xl space-y-3">John Doe</h2>
            <span className="text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              reprehenderit asperiores labore odit, corrupti esse.
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-3">
          <img
            src="https://picsum.photos/640"
            className="rounded-full w-1/2"
            alt=""
          />
          <div>
            <h2 className="font-bold text-xl space-y-3">Adam Lois</h2>
            <span className="text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              reprehenderit asperiores labore odit, corrupti esse.
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-3 ">
          <img
            src="https://picsum.photos/640"
            className="rounded-full w-1/2"
            alt=""
          />
          <div>
            <h2 className="font-bold text-xl space-y-3">William</h2>
            <span className="text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              reprehenderit asperiores labore odit, corrupti esse.
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-3">
          <img
            src="https://picsum.photos/640"
            className="rounded-full w-1/2"
            alt=""
          />
          <div>
            <h2 className="font-bold text-xl space-y-3">Thomas</h2>
            <span className="text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              reprehenderit asperiores labore odit, corrupti esse.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
