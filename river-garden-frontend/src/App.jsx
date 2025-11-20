import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className="w-full h-full">
      {/* Fixed Header */}
      <Header />

      {/* Main Sections */}
      <main> 
        
        <Hero />
        
      </main>
    </div>
  );
}
