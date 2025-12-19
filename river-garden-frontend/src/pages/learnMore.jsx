import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LearnMore() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#fafafa] py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* SECTION 1 */}
        <section id="ambience" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-5">
              Beautiful Riverside Ambience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nestled along the scenic Walawa River, River Garden offers a calm
              and refreshing dining experience surrounded by nature. The gentle
              flow of the river, cool breeze, and lush greenery create the
              perfect atmosphere for relaxation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're enjoying a quiet family meal or a romantic evening,
              our riverside seating provides an escape from busy city life and
              brings you closer to nature.
            </p>
          </div>
          <img
            src="/images/frame1.png"
            alt="Riverside ambience"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
        </section>

        {/* SECTION 2 */}
        <section id="food" className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/frame1.png"
            alt="Fresh food"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
          <div>
            <h2 className="text-4xl font-serif mb-5">
              Delicious Food Made with Fresh Ingredients
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our kitchen focuses on quality and freshness. Each dish is crafted
              using locally sourced vegetables, meats, and spices to ensure
              authentic flavors and uncompromising taste.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From traditional Sri Lankan favorites to modern fusion dishes,
              every plate reflects our passion for great food and memorable
              dining.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="occasions" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-5">
              Perfect for Every Occasion
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              River Garden is the ideal venue for celebrating life’s special
              moments. Our spacious indoor areas and open garden settings make
              it perfect for birthdays, weddings, corporate gatherings, and
              private parties.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our friendly team ensures every event is well-organized, creating
              unforgettable experiences for you and your guests.
            </p>
          </div>
          <img
            src="/images/frame1.png"
            alt="Events and occasions"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
        </section>

        {/* SECTION 4 */}
        <section id="boating" className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/frame1.png"
            alt="Boat rides"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
          <div>
            <h2 className="text-4xl font-serif mb-5">
              Boat Rides & Riverside Fun
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Enhance your visit with a relaxing boat ride along the Walawa
              River. This unique experience allows you to enjoy breathtaking
              views, fresh air, and moments of calm on the water.
            </p>
            <p className="text-gray-600 leading-relaxed">
              It’s a perfect activity for families, couples, and anyone looking
              to connect with nature in a peaceful setting.
            </p>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="byob" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-5">
              BYOB & Relaxed Atmosphere
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              River Garden welcomes you to bring your own beverages and enjoy
              them responsibly in a comfortable, friendly environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our relaxed atmosphere encourages good conversations, laughter,
              and memorable moments with friends and family.
            </p>
          </div>
          <img
            src="/images/frame1.png"
            alt="Relaxed dining"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
        </section>

        {/* Back button */}
        <div className="text-center">
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
