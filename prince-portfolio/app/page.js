import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import HciProject from "@/components/sections/HciProject";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HciProject />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
