import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Experience from "@/components/experience";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
