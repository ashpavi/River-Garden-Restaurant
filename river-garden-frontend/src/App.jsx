import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import WhyChooseUs from "./components/whyChooseus";
import ScrollToTop from "./components/ui/scrollToTop";
import AboutUS from "./components/aboutUs";
import Catering from "./components/catering";
import Offers from "./components/offers";
import Gallery from "./components/gallery";
import CommentsCarousel from "./components/comments";

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
        <Gallery />
        <Catering />
        <Offers />
        <CommentsCarousel/>

        
      </main>
    </div>
  );
}
