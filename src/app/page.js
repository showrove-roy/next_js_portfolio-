import HeroSection from "./Components/HeroSection/HeroSection";
import Service from "./Components/Service/Service";

export default function page() {
  return (
    <>
     <main className="maxW">
     <HeroSection />
      <Service/>
     </main>
    </>
  );
}
