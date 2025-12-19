import React from "react";
import Button from "./ui/buttons";
import Container from "./ui/container";

export default function AboutUS() {
  return (
    <section id="aboutUs" className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT COLUMN (image + background pattern ONLY) */}
          <div className="relative flex justify-center md:justify-start">

            {/* SINGLE background image (behind photo ONLY) */}
            <div
              className="
                hidden md:block
                absolute
                -left-16
                top-1/2
                -translate-y-1/2
                w-[110%]
                h-[480px]
                opacity-60
                pointer-events-none
                z-0
              "
              style={{
                backgroundImage: "url('/images/offers.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
              aria-hidden="true"
            />

            {/* Photo card */}
            <div className="relative z-10 bg-white p-3 rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
              <img
                src="/images/aboutUs.png"
                alt="Family by the Walawa River — River Garden"
                className="
                  w-[300px]
                  md:w-[400px]
                  lg:w-[460px]
                  h-[420px]
                  md:h-[520px]
                  lg:h-[600px]
                  object-cover
                  rounded-lg
                "
              />
            </div>
          </div>

          {/* RIGHT COLUMN (text ONLY, clean white background) */}
          <div className="px-2 md:px-0">
            <p className="text-md text-gray-700 tracking-widest mb-4">
              - ABOUT US -
            </p>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-serif
                font-semibold
                leading-tight
                mb-6
                max-w-[17ch]
              "
            >
              Experience Nature, Flavor, and Memories by the Walawa River
            </h2>

            <p
              className="
                text-gray-700
                text-base
                md:text-xl
                leading-relaxed
                mb-8
                max-w-[50ch]
              "
            >
              River Garden Restaurant, nestled by the serene Walawa River,
              offers more than dining — it’s an experience. Enjoy fresh local
              and international dishes, scenic views, and peaceful moments.
              Perfect for lunch, romantic dinners, boat rides, or events.
              BYOB is welcome. Create lasting memories with nature, food,
              and warm hospitality.
            </p>

            <Button
              type="primary"
              className="px-10 py-3 rounded-full text-base"
            >
              Learn more
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
