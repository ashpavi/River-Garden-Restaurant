import React, { useEffect, useState } from "react";
import Button from "./ui/buttons";
import Container from "./ui/container";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const IMAGES = [
  "/images/frame1.png",
  "/images/frame2.png",
  "/images/frame3.png",
  "/images/frame4.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100vh] min-h-[560px] w-full overflow-hidden"
    >
      {/* Background carousel */}
      <div className="absolute inset-0">
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            draggable="false"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <Container className="relative z-20 pt-20 h-full flex flex-col justify-center items-center text-white text-center">

        <p className="mb-3 text-md tracking-widest">
            - Welcome to our restaurants -
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-5xl">
            Your Perfect Spot for Food, Fun,
            <br />
            and BYOB by the River
        </h1>

        <p className="mt-6 text-2xl max-w-3xl">
            Enjoy your favorite dishes in our restaurants!
        </p>

        {/* Time & Location */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex gap-6">
            
            <span className="bg-white/10 px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <FaRegClock className="text-[#ff7a42]" />
            10:00AM - 10:00PM
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <FaLocationDot className="text-[#ff7a42]" />
            Ambalantota
            </span>

        </div>
        </div>


        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Button type="primary" className="text-lg px-7 py-3">
            Book Table
          </Button>

          <a
            href="tel:+94762356980"
            className="text-white/90 text-lg font-medium"
          >
            📞 +94 76 235 6980
          </a>
        </div>
      </Container>
    </section>
  )
}
