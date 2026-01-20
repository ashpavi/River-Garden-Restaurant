import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ReadMore() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div className="min-h-screen bg-[#fffaf6] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="tracking-widest text-gray-600">- OFFERS & DISCOUNTS -</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-4">
            Special Offers at River Garden
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Enjoy exclusive dining offers crafted to give you unforgettable
            experiences by the Walawa River.
          </p>
        </div>

        {/* Offers */}
        <div className="space-y-20">

          {/* Offer 1 */}
          <section
            id="weekday"
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <img
              src="/images/offers.jpg"
              alt="Weekday Offer"
              className="rounded-xl shadow-lg h-80 w-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-serif mb-4">
                Weekday Dinners 1+1=3
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reserve your table on weekdays from 12 pm to 3 pm and enjoy a
                special-priced 3-course dinner — perfect for relaxed afternoons.
              </p>
              <p className="text-gray-600">
                Available for a limited time. Advance reservations recommended.
              </p>
            </div>
          </section>

          {/* Offer 2 */}
          <section
            id="elegant"
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl font-serif mb-4">
                Elegant Weekday Dining
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enjoy a refined 3-course dining experience curated with local
                and international flavors.
              </p>
              <p className="text-gray-600">
                Ideal for business lunches and special moments.
              </p>
            </div>
            <img
              src="/images/offers.jpg"
              alt="Elegant Dining"
              className="rounded-xl shadow-lg h-80 w-full object-cover"
            />
          </section>

          {/* Offer 3 */}
          <section
            id="promo"
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <img
              src="/images/offers.jpg"
              alt="Promotional Offer"
              className="rounded-xl shadow-lg h-80 w-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-serif mb-4">
                Promotional Dining Deals
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Enjoy maximum value with our promotional weekday dining offers,
                perfect for families and groups.
              </p>
              <p className="text-gray-600">
                Great food, great value, great memories.
              </p>
            </div>
          </section>
        </div>

        {/* Back */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate(-1)}
            className="text-[#ff7a42] font-medium hover:underline"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
