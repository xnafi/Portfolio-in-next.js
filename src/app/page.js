import About from "@/component/About";
import Contact from "@/component/Contact";
import Experience from "@/component/Experience";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Nav from "@/component/Nav";
import Portfolio from "@/component/Portfolio";
import Services from "@/component/Services";
import Testimonial from "@/component/Testimonial";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
