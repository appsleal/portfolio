import Image from "next/image";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import NavbarSection from "./components/navbarSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavbarSection />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div className="container mx-auto px-12 py-4">
        <AboutSection />
      </div>
    </main>
  );
}
