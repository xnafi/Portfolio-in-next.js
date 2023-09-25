import React from "react";
import work1 from "./assets/work1.gif";
import work2 from "./assets/work2.gif";
import work3 from "./assets/work3.gif";
import work4 from "./assets/work4.gif";
import work5 from "./assets/work5.gif";
import Image from "next/image";

function Portfolio() {
  return (
    <section
      className="w-[90%] mx-auto justify-center items-center h-100 flex flex-col text-center lg:mt-40 mt-5"
      id="portfolio"
    >
      <div className="mt-10">
        <h4 className="text-xs">My Recent Work</h4>
        <span className="text-2xl font-bold">Portfolio</span>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center items-baseline space-y-6  mt-24 gap-3">
        <div>
          <Image src={work4} alt="" />
          <div className="flex flex-col space-y-2">
            <h2>Remostarts (intern project)</h2>
          </div>
          <div className=" space-x-3 text-sm">
            <a target="_blank" href="https://remostarts.com">
              Live Link
            </a>
            <a>Private Repo</a>
          </div>
        </div>

        <div>
          <Image src={work5} alt="" />
          <div className="flex flex-col space-y-2">
            <h2>BuyBox Savvy (Contractual project 4th)</h2>
          </div>
          <div className=" space-x-3 text-sm">
            <a target="_blank" href="https://buybox-savvy.netlify.app/">
              Live Link
            </a>
            <a>Private Repo</a>
          </div>
        </div>

        <div>
          <Image src={work1} alt="" />
          <div className="flex flex-col space-y-2">
            <h2>Phone Garage</h2>
          </div>
          <div className=" space-x-3 text-sm">
            <a target="_blank" href="https://phone-garage-fc937.web.app/">
              Live Link
            </a>
            <a
              target="_blank"
              href="https://github.com/xnafi/Phone-garage-client"
            >
              Github Client Rep
            </a>
            <a
              target="_blank"
              href="https://github.com/xnafi/Phone-garage-server"
            >
              Github Server Rep
            </a>
          </div>
        </div>

        <div>
          <Image src={work2} alt="" />
          <div className="flex flex-col space-y-2">
            <h2>Fancy Floss</h2>
          </div>
          <div className=" space-x-3 text-sm">
            <a target="_blank" href="https://fancy-floss.firebaseapp.com/">
              Live Link
            </a>
            <a
              target="_blank"
              href="https://github.com/xnafi/Fancy-Floss-Client"
            >
              Github Client Rep
            </a>
            <a
              target="_blank"
              href="https://github.com/xnafi/Fancy-Floss-Server"
            >
              Github Server Rep
            </a>
          </div>
        </div>

        <div>
          <Image src={work3} alt="" />
          <div className="flex flex-col space-y-2">
            <h2>Pivot World</h2>
          </div>
          <div className=" space-x-3 text-sm">
            <a target="_blank" href="https://pivot-auth-900d6.firebaseapp.com/">
              Live Link
            </a>
            <a
              target="_blank"
              href="https://github.com/xnafi/Pivot-World-Cilent"
            >
              Github Client Rep
            </a>
            <a
              target="_blank"
              href="https://github.com/xnafi/Pivot-World-Server"
            >
              Github Server Rep
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
