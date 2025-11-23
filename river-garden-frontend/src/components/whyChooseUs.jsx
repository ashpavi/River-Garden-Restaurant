import React from "react";
import Button from "./ui/buttons";
import Container from "./ui/container";



const TextCard = ({ title, desc }) => (
  <div className="flex flex-col items-center text-center p-6">
    <h3 className="font-serif text-xl md:text-2xl mb-3">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base max-w-[320px]">{desc}</p>
    <div className="mt-6">
      <Button type="primary" className="px-5 py-2">
        Learn more
      </Button>
    </div>
  </div>
);

const ImgCard = ({ src, alt }) => (
  <div className="overflow-hidden rounded-md shadow-sm">
    <img src={src} alt={alt} className="w-full h-56 object-cover" />
  </div>
);

export default function WhyChooseUs() {
  return (
    <Container className="py-10">
      <div className="text-center mb-10">
        <p className="text-sm tracking-widest">- WHAT TO EXCEPT -</p>
        <h2 className="text-3xl md:text-4xl font-serif mt-2">Why Choose Us?</h2>
        <p className="text-gray-500 mt-2">Where Quality, Taste, and Service Meet</p>
      </div>

      {/* 3x3 grid: adaptively stacks on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="flex items-center justify-center">
          <TextCard
            title="Beautiful Riverside Ambience"
            desc="Enjoy peaceful dining by the scenic Walawa River, your perfect escape from city life"
          />
        </div>

        <div className="flex items-center justify-center">
          <ImgCard src="/images/frame1.png" alt="Delicious dish" />
        </div>

        <div className="flex items-center justify-center">
          <TextCard
            title="Delicious Food Made with Fresh Ingredients"
            desc="Savor dishes crafted with fresh local produce, blending Sri Lankan tradition with modern flavor"
          />
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center">
          <ImgCard src="/images/frame1.png" alt="Riverside view" />
        </div>

        <div className="flex items-center justify-center">
          <div className="text-center p-6">
            <h3 className="font-serif text-xl md:text-2xl mb-3">Perfect for Every Occasion</h3>
            <p className="text-gray-600 text-sm md:text-base max-w-[400px] mx-auto">
              Perfect for any occasion, from parties to corporate events, with spacious indoor and garden settings
            </p>
            <div className="mt-6">
              <Button type="primary" className="px-5 py-2">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ImgCard src="/images/frame1.png" alt="Indoor dining" />
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-center">
          <TextCard
            title="Boat Rides & Riverside Fun"
            desc="Enhance your visit with a relaxing boat ride on the Walawa River, a one of a kind Ambalantota experience"
          />
        </div>

        <div className="flex items-center justify-center">
          <ImgCard src="/images/frame1.png" alt="Boat" />
        </div>

        <div className="flex items-center justify-center">
          <TextCard
            title="BYOB & Relaxed Atmosphere"
            desc="BYOB and relax in a cozy, welcoming space, where good food meets great company"
          />
        </div>
      </div>
    </Container>
  );
}
