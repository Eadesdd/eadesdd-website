import Navbar from "./components/Navbar";
import Hero from "./components/ui/aether-flow-hero";
import Services from "./components/Services";

import Process from "./components/ui/multi-orbit-semi-circle";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
