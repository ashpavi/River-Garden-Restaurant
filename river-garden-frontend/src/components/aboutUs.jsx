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
              <div className="rounded-xl bg-gray-100 shadow-2xl p-3">
                <img
                  src="/images/aboutUs.png"
                  alt="River garden about"
                  className="w-[300px] md:w-[400px] lg:w-[460px] h-[450px] md:h-[550px] lg:h-[600px] object-cover rounded-lg"
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

            {/* Provided copy split into readable paragraphs */}
            <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-[60ch]">
              <p className="mb-4">
                Nestled by the peaceful Walawa River, River Garden Restaurant offers more than a meal — it’s a memorable experience. 
                Ideal for nature lovers and food enthusiasts, our space blends scenic beauty with rich flavors.
              </p>

              <p className="mb-4">
                We serve a diverse range of local and international dishes, freshly prepared for every guest. 
                Whether it’s a relaxed lunch, a romantic dinner, or a fun boat ride, every visit brings something special.
              </p>

              <p className="mb-4">
                Our venue is perfect for private parties, corporate events, day-outs, and family gatherings. 
                Guests are also welcome to bring their own bottle (BYOB).
              </p>

              <p>
                At River Garden, we create warm, memorable moments through great food, nature, and genuine hospitality. 
                Enjoy your time by the river — where every meal comes with a view and a smile.
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
