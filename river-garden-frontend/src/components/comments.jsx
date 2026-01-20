import React, { useEffect, useRef, useState, useCallback } from "react";
import Container from "./ui/container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ===============================
// GOOGLE CONFIG
// ===============================
const GOOGLE_PLACE_ID = "ChIJubhcKv275joRhyUNs95gNcQ";

const GOOGLE_API_KEY = "AIzaSyAEAl5_PrAgAaylbT3FOghCZd5hN4mUENs";


// ===============================
// MINIMAL FALLBACK (used only if Google fails)
// ===============================
const FALLBACK_TESTIMONIAL = [
  {
    text:
      "Loved the peaceful riverside atmosphere and the warm hospitality. A perfect place to relax and enjoy great food.",
    name: "River Garden Guest",
    role: "Customer",
    avatar: "/images/profile1.jpg",
    rating: 5,
  },
];

export default function CommentsCarousel({
  autoplay = true,
  interval = 4500,
}) {
  // ===============================
  // STATE
  // ===============================
  const [googleReviews, setGoogleReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const items =
    googleReviews.length > 0 ? googleReviews : loaded ? FALLBACK_TESTIMONIAL : [];

  const total = items.length || 1;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  // ===============================
  // FETCH GOOGLE REVIEWS (FRONTEND)
  // ===============================
  useEffect(() => {
    if (!window.google || !window.google.maps?.places) return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.getDetails(
      {
        placeId: GOOGLE_PLACE_ID,
        fields: ["reviews"],
      },
      (place, status) => {
        setLoaded(true);

        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place?.reviews
        ) {
          const formatted = place.reviews.map((r) => ({
            text: r.text,
            name: r.author_name,
            role: "Google Review",
            avatar: r.profile_photo_url
              ? `${r.profile_photo_url}&key=${GOOGLE_API_KEY}`
              : "/images/profile1.jpg",
            rating: r.rating,
          }));


          setGoogleReviews(formatted);
        }
      }
    );
  }, []);

  // ===============================
  // AUTO PLAY
  // ===============================
  useEffect(() => {
    if (!autoplay || isPaused || total <= 1) return;
    const id = setInterval(() => next(), interval);
    return () => clearInterval(id);
  }, [autoplay, interval, isPaused, index, total]);

  // ===============================
  // NAVIGATION
  // ===============================
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // ===============================
  // TOUCH SWIPE
  // ===============================
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

  // ===============================
  // RENDER GUARD (initial load)
  // ===============================
  if (!items.length) {
    return (
      <section id="comments" className="py-16 pt-32 bg-white">
        <Container>
          <p className="text-center text-gray-500">
            Loading customer reviews...
          </p>
        </Container>
      </section>
    );
  }

  // ===============================
  // RENDER
  // ===============================
  return (
    <section id="comments" className="py-16 pt-32 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-md tracking-widest text-gray-700">- COMMENTS -</p>
          <h2
            style={{
              fontFamily: "Lora",
              fontWeight: "bold",
              fontSize: "50px",
              lineHeight: "100%",
            }}
          >
            What customers say?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our guests are the heart of everything we do. Hear what they have to
            say about their dining experiences.
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
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it, i) => (
              <div key={i} className="w-full shrink-0 px-4">
                <div className="bg-white p-10 rounded-xl border border-orange-200 shadow-sm">
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-4 text-yellow-500 text-sm">
                    {"★".repeat(it.rating)}
                    {"☆".repeat(5 - it.rating)}
                  </div>

                  <p className="text-gray-800 text-lg leading-relaxed mb-6 text-center">
                    {it.text}
                  </p>

                  <div className="flex justify-center items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-lg">
                      {it.name?.charAt(0)}
                    </div>

                    <div className="text-left">
                      <p className="font-medium text-gray-800 text-sm">
                        {it.name}
                      </p>
                      <p className="text-gray-500 text-xs">{it.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows (hide if only one item) */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3"
              >
                <FaChevronLeft className="text-gray-500 text-2xl" />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3"
              >
                <FaChevronRight className="text-gray-500 text-2xl" />
              </button>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
