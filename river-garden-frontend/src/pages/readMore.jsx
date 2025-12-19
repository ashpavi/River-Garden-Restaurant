import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ReadMore() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
            Enjoy exclusive dining offers crafted to give you the best flavors
            and unforgettable experiences by the Walawa River.
          </p>
        </div>

        {/* Offers List */}
        <div className="space-y-16">

          {/* Offer 1 */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
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
                Reserve your table at River Garden on any weekday from 12 pm to
                3 pm and enjoy a special-priced 3-course dinner crafted just for
                you. Perfect for lunch breaks, casual meetups, and relaxed
                afternoons.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Available for a limited time only. Advance reservations
                recommended.
              </p>
            </div>
          </section>

          {/* Offer 2 */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-4">
                Elegant Weekday Dining
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join us on weekdays between 12 pm and 3 pm and indulge in our
                exclusive 3-course dining experience. Carefully curated dishes
                that blend local and international flavors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ideal for business lunches, anniversaries, or a refined dining
                experience.
              </p>
            </div>
            <img
              src="/images/offers.jpg"
              alt="Elegant Dining"
              className="rounded-xl shadow-lg h-80 w-full object-cover"
            />
          </section>

          {/* Offer 3 */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
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
                Book your weekday table and treat yourself to our promotional
                3-course dinner deal. Designed to offer maximum value without
                compromising on quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Perfect for families, groups, and food lovers.
              </p>
            </div>
          </section>

        </div>

        {/* Back */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate("/")}
            className="text-[#ff7a42] font-medium hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
