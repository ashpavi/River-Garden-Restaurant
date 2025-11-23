import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import WhyChooseUs from "./components/whyChooseus";
import ScrollToTop from "./components/ui/scrollToTop";
import AboutUS from "./components/aboutUs";
import MenuCarousel from "./components/menuCarousel";
import Catering from "./components/catering";

export default function App() {
  return (
    <div className="w-full h-full">
      {/* Fixed Header */}
      <Header />

      {/* Main Sections */}
      <main> 
        <ScrollToTop />        
        <Hero />
        <WhyChooseUs />
        <AboutUS />
        <MenuCarousel />
        <Catering />

        
      </main>
    </div>
  );
}
