import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import WhyChooseUs from "./components/whyChooseus";

export default function App() {
  return (
    <div className="w-full h-full">
      {/* Fixed Header */}
      <Header />

      {/* Main Sections */}
      <main> 
        
        <Hero />
        <WhyChooseUs />
        
      </main>
    </div>
  );
}
