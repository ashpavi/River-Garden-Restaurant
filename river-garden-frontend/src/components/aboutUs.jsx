import React from "react";
import Button from "./ui/buttons";
import Container from "./ui/container";



export default function AboutUS() {
  return (
    <section id="aboutUs" className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: framed image with decorative background */}
          <div className="flex justify-center md:justify-start relative">
            
            <div
              className="hidden md:block absolute -left-10 top-4 w-44 h-[420px] rounded-lg pointer-events-none"
              style={{
                backgroundImage: `url('/images/offers.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.12,
                transform: "rotate(-2deg)",
              }}
              aria-hidden="true"
            />

            {/* outer white frame & shadow */}
            <div className="relative rounded-xl bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              {/* inner inset white border */}
              <div className="bg-white rounded-lg p-1.5">
                <img
                  src="/images/aboutUs.png"
                  alt="Family by the Walawa River — River Garden"
                  className="block w-[300px] md:w-[400px] lg:w-[460px] h-[420px] md:h-[520px] lg:h-[600px] object-cover rounded-md"
                />
              </div>
            </div>

            {/* subtle outer border (for effect) */}
            <div className="absolute -inset-1 rounded-xl pointer-events-none" />
          </div>

          {/* RIGHT: text content (Figma copy) */}
          <div className="px-2 md:px-0">
            <p className="text-sm text-gray-700 tracking-widest mb-3">- ABOUT US -</p>

            <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-snug mb-4">
              Experience Nature, Flavor, and Memories by the Walawa River
            </h2>

            <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-[60ch]">
              <p className="mb-4">
                River Garden Restaurant, nestled by the serene Walawa River, offers more than dining — it’s an experience. 
                Enjoy fresh local and international dishes, scenic views, and peaceful moments. Perfect for lunch, romantic dinners, boat rides, or events. 
                BYOB is welcome. Create lasting memories with nature, food, and warm hospitality.
              </p>
            </div>

            <div>
              <Button type="primary" className="px-6 py-3">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
