import Image from "next/image";
import React from "react";

function Testimonial() {
  return (
    <section
      className="w-[90%] mx-auto justify-center h-100 flex flex-col text-center lg:mt-10 mt-10"
      id="testimonial"
    >
      <div>
        <h4 className="text-xs tracking-widest uppercase text-gray-400">
          Review From Clients
        </h4>
        <span className="text-2xl font-bold">Testimonial</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-baseline mt-16 px-0 lg:px-6">
        {/* Testimonial 1 */}
        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-4">
          <Image
            src="https://picsum.photos/640"
            className="rounded-full w-1/2"
            alt="Client testimonial"
            width={640}
            height={640}
          />
          <div>
            <h2 className="font-bold text-lg">Ahmad</h2>
            <span className="text-xs block mt-2 text-gray-300">
              Forhad delivered a highly scalable frontend solution with
              excellent attention to detail. His understanding of React and
              Next.js helped us improve performance and ship features faster.
            </span>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-4">
          <Image
            src="https://picsum.photos/240"
            className="rounded-full w-1/2"
            alt="Client testimonial"
            width={640}
            height={640}
          />
          <div>
            <h2 className="font-bold text-lg">Adam Lois</h2>
            <span className="text-xs block mt-2 text-gray-300">
              Excellent communication and clean code. Forhad quickly understood
              our requirements and built pixel-perfect UI components that fit
              perfectly into our existing design system.
            </span>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-4">
          <Image
            src="https://picsum.photos/740"
            className="rounded-full w-1/2"
            alt="Client testimonial"
            width={640}
            height={640}
          />
          <div>
            <h2 className="font-bold text-lg">William</h2>
            <span className="text-xs block mt-2 text-gray-300">
              We were impressed by Forhad’s ability to handle complex
              dashboards, charts, and forms. He consistently delivered
              production-ready features with great performance optimizations.
            </span>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="flex flex-col justify-center items-center space-y-4 bg-slate-900 rounded-lg p-4">
          <Image
            src="https://picsum.photos/600"
            className="rounded-full w-1/2"
            alt="Client testimonial"
            width={640}
            height={640}
          />
          <div>
            <h2 className="font-bold text-lg">Thomas</h2>
            <span className="text-xs block mt-2 text-gray-300">
              Reliable, proactive, and detail-oriented. Forhad brought strong
              frontend architecture ideas and helped us build a maintainable,
              scalable product using modern tooling.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
