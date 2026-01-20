import React from "react";
import Container from "./ui/container";
import Button from "./ui/buttons";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  return (
    <section
      id="offers"
      className="py-16 pb-32 bg-[#ff8b5a] bg-opacity-80 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/offers.jpg')] bg-cover bg-center"></div>

      <Container>
        {/* Heading */}
        <div className="relative text-center mb-12">
          <p className="text-md tracking-widest text-gray-700">- OFFERS -</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2">
            Special Offers and Discounts
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Delicious Delights for Everyone
          </p>
        </div>

        {/* Offer Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <OfferCard
            title="Weekday Dinners 1+1=3"
            description="Reserve your table on weekdays from 12 pm to 3 pm and enjoy a special-priced 3-course dinner."
            target="weekday"
          />

          <OfferCard
            title="Elegant Weekday Dining"
            description="Enjoy an exclusive 3-course weekday dining experience — refined taste, great value."
            target="elegant"
          />

          <OfferCard
            title="Promotional Dining Deals"
            description="Book your weekday table and enjoy our promotional 3-course dinner deal."
            target="promo"
          />
        </div>
      </Container>
    </section>
  );
}

/* OFFER CARD */
function OfferCard({ title, description, target }) {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-orange-200 flex flex-col justify-between">
      <div className="absolute inset-0 opacity-20 bg-[url('/images/offers.jpg')] bg-cover bg-center"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-medium italic text-sm">
            Special Offer
          </p>
          <img
            src="/images/hotoffer.png"
            alt="Hot Offer"
            className="w-10 h-10 object-contain"
          />
        </div>

        <h3 className="text-xl font-serif font-semibold mt-4 text-gray-900">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mt-3">
          {description}
        </p>
      </div>

      <div className="mt-6 relative z-10">
        <Button
          type="outline"
          className="w-full justify-center py-2 font-medium bg-white hover:bg-amber-100 rounded-full"
          onClick={() => navigate(`/offers-page#${target}`)}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
