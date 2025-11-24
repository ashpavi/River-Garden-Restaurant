import React from "react";
import Button from "./ui/buttons";
import Container from "./ui/container";


export default function AboutUS() {
  return (
    <section id="aboutUs" className="py-14 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
          {/* LEFT: framed image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* white frame */}
              <div className="rounded-xl bg-gray-300 shadow-2xl  p-3">
                <img
                  src="/images/aboutUs.png"
                  alt="River garden about"
                  className="w-[300px] md:w-[360px] lg:w-[420px] h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
                />
              </div>

              {/* subtle outer border to mimic the Figma look */}
              <div className="absolute -inset-1 rounded-xl pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: text content */}
          <div className="px-4 md:px-0">
            <p className="text-sm text-gray-700 tracking-widest mb-3">- ABOUT US -</p>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-snug mb-4">
              Experience Nature, Flavor, and Memories by the Walawa River
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-[60ch]">
              River Garden Restaurant, nestled by the serene Walawa River,
              offers more than dining — it's an experience. Enjoy fresh local
              and international dishes, scenic views, and peaceful moments.
              Perfect for lunch, romantic dinners, boat rides, or events.{' '}
              <strong>BYOB is welcome.</strong> Create lasting memories with
              nature, food, and warm hospitality.
            </p>

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
