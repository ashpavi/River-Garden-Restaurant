import React, { useEffect, useRef, useState, useCallback } from "react";
import Container from "./ui/container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    text:
      "Absolutely loved my experience at River Garden Restaurant! The food was delicious, the river view was breathtaking, and the staff made us feel so welcome. A perfect spot to relax and enjoy nature while dining. Can’t wait to come back!",
    name: "Charith N Silva",
    role: "Founder @Wild Cookbook",
    avatar: "/images/profile1.jpg",
  },
  {
    text:
      "A stellar evening — delicious food and attentive service. The riverside setting made our anniversary dinner unforgettable. Highly recommend their set menu and desserts!",
    name: "Maya Fernando",
    role: "Marketing Manager",
    avatar: "/images/profile2.jpg",
  },
  {
    text:
      "Great place for a family meal and relaxed atmosphere. The kids loved the boat ride afterwards. Food portions were generous and flavors balanced.",
    name: "Ruwan Perera",
    role: "Teacher",
    avatar: "/images/profile3.jpg",
  },
];

export default function CommentsCarousel({
  items = TESTIMONIALS,
  autoplay = true,
  interval = 4500,
}) {
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // AUTO PLAY
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const id = setInterval(() => next(), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, isPaused, index]);

  // NEXT + PREV
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // SWIPE
  function handleTouchStart(e) {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchMove(e) {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }
  function handleTouchEnd() {
    if (touchDeltaX.current > 50) prev();
    else if (touchDeltaX.current < -50) next();
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setIsPaused(false);
  }

  return (
    <section id="comments" className="py-16 pt-32 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-md tracking-widest text-gray-700">- COMMENTS -</p>
          <h2 
            style={{
              fontFamily: 'Lora',
              fontWeight: 'bold',
              fontStyle: 'normal',
              fontSize: '50px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            What customers say?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our guests are the heart of everything we do. Hear what they have to say about their dining experiences, from the taste of our dishes to the warmth of our service.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative max-w-4xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider row */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it, i) => (
              <div key={i} className="w-full shrink-0 px-4">
                <div
                  className="bg-white p-10 rounded-xl border border-orange-200 shadow-sm"
                >
                  <p className="text-gray-800 text-lg leading-relaxed mb-6 text-center">
                    {it.text}
                  </p>

                  <div className="flex justify-center items-center gap-3">
                    <img
                      src={it.avatar}
                      alt={it.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-medium text-gray-800 text-sm">{it.name}</p>
                      <p className="text-gray-500 text-xs">{it.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2  p-3 "
          >
            <FaChevronLeft className="text-gray-500 text-2xl" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2  p-3 "
          >
            <FaChevronRight className="text-gray-500 text-2xl" />
          </button>
        </div>
      </Container>
    </section>
  );
}
