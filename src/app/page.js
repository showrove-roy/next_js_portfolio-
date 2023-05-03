import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import HeroSection from "./Components/HeroSection/HeroSection";
import Project from "./Components/Project/Project";
import Service from "./Components/Service/Service";
import ServiceCategory from "./Components/ServiceCategory/ServiceCategory";

export default function page() {
  return (
    <>
      <main className='maxW'>
        <HeroSection />
        <Service />
        <ServiceCategory />
        <Project />
        <About />
        <Contact />
      </main>
    </>
  );
}
