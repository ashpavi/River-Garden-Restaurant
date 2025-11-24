import React, { useEffect, useRef, useState, useCallback } from "react";
import Container from "./ui/container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const IMAGES = [
  "/images/frame1.png",
  "/images/frame2.png",
  "/images/frame3.png",
  "/images/frame4.png",
  "/images/frame5.jpg",
];

export default function Gallery({
  images = IMAGES,
  autoplay = true,
  autoplayInterval = 3000,
  visibleCount = 2,
}) {
  const total = images.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // autoplay
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), autoplayInterval);
    return () => clearInterval(id);
  }, [autoplay, autoplayInterval, isPaused, total]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  // signed circular distance (shortest path)
  const signedDistance = (i, center) => {
    const half = Math.floor(total / 2);
    let diff = (i - center + total) % total;
    return diff <= half ? diff : diff - total;
  };

  // touch handlers
  function handleTouchStart(e) {
    setIsPaused(true);
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
    touchDeltaX.current = 0;
  }
  function handleTouchMove(e) {
    if (touchStartX.current === null) return;
    const x = e.touches?.[0]?.clientX ?? 0;
    touchDeltaX.current = x - touchStartX.current;
  }
  function handleTouchEnd() {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setTimeout(() => setIsPaused(false), 200);
    const threshold = 40;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
  }

  // layout constants (tweak these to taste)
  const spacing = 58; // horizontal percent distance between centers
  const scaleFalloff = 0.12;
  const centerWidth = "52%";
  const nearWidth = "36%";
  const farWidth = "28%";
  const cardHeightMobile = "h-[240px]";
  const cardHeightDesktop = "md:h-[460px]";

  return (
    <section id="gallery" className="py-[-1] bg-white">
      <Container>
        {/* tightened heading spacing */}
        <div className="text-center mb-14 md:mb-18 pt-8">
          <p className="text-sm tracking-widest text-gray-700">- GALLERY -</p>
          <h2 className="text-3xl md:text-4xl font-serif mt-2 font-semibold">
            Explore Our Beautiful Atmosphere
          </h2>
          <p className="text-gray-500 mt-2 text-base md:text-lg">
            A glimpse of the delicious experiences that await you.
          </p>
        </div>

        {/* Pull carousel up with negative margin so it visually overlaps the heading area neatly */}
        <div
          className="relative flex items-center justify-center -mt-6 md:-m-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* left arrow (vertically centered) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 md:left-6 z-50 p-3 rounded-full bg-white/95 hover:bg-white shadow-lg"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          {/* cards wrapper */}
          <div className="w-full max-w-5xl relative flex items-center justify-center" style={{ height: 520 }}>
            {images.map((src, i) => {
              const dist = signedDistance(i, index);
              const absDist = Math.abs(dist);
              if (absDist > visibleCount) return null;

              // center the card at true center using translate(-50%, -50%), then move horizontally
              const offsetPercent = -dist * spacing; // positive -> right, negative -> left
              const translateY = dist === 0 ? "-4%" : "6%";
              const scale = Math.max(0.75, 1 - absDist * scaleFalloff);
              const zIndex = 100 - absDist * 10;
              const width = absDist === 0 ? centerWidth : absDist === 1 ? nearWidth : farWidth;

              return (
                <div
                  key={i}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translateX(${offsetPercent}%) translateY(${translateY}) scale(${scale})`,
                    width,
                    zIndex,
                    pointerEvents: "auto",
                  }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={src}
                      alt={`slide-${i}`}
                      className={`w-full ${cardHeightMobile} ${cardHeightDesktop} object-cover object-center`}
                      draggable={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 md:right-6 z-50 p-3 rounded-full bg-white/95 hover:bg-white shadow-lg"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* small bottom spacing so next section isn't glued */}
        <div className="h-8 md:h-12" />
      </Container>
    </section>
  );
}
