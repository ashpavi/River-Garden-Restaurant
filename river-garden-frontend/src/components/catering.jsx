import React from "react";
import Container from "./ui/container";
import Button from "./ui/buttons";

export default function Catering() {
  return (
    <section id="catering" className="py-14 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: framed image */}
          <div className="flex justify-center md:justify-start">
            <div className="rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] p-3">
              
              <img
                src="/images/catering.jpg"
                alt="Catering preview"
                className="block w-[320px] md:w-[420px] lg:w-[520px] h-[450px] md:h-[680px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT: text and features */}
          <div className="px-2 md:px-6">
            <p className="text-sm text-gray-500 tracking-widest mb-3">- CATERING -</p>

            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Delicious Catering for Any Occasion
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Host your celebrations with us and surprise your guests with fresh, seasonal flavors crafted with care.
              At River Gardens, we bring flavor and joy to every occasion — from birthdays and anniversaries to
              university events and corporate celebrations.
            </p>

            <p className="text-gray-600 mb-6">
              Book our catering for a customized menu, reliable service, and seamless setup so you can enjoy the
              moment with your guests.
            </p>

            {/* feature list using PNG icons (replace src with your PNG filenames later) */}
            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-full bg-[#fff6f1] flex items-center justify-center shadow-sm">
                  
                  <img src="/images/anniversary.png" alt="Anniversary" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Anniversaries</h4>
                  <p className="text-gray-600 text-sm">
                    Mark your special day with a romantic dinner at River Gardens — signature dishes, fine wines,
                    and a cozy atmosphere.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-full bg-[#fff6f1] flex items-center justify-center shadow-sm">
                  
                  <img src="/images/university.png" alt="University Celebrations" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">University Celebrations</h4>
                  <p className="text-gray-600 text-sm">
                    Celebrate graduations, reunions, or university parties with lively seasonal menus and attentive service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-full bg-[#fff6f1] flex items-center justify-center shadow-sm">
                  
                  <img src="/images/birthday.png" alt="Birthdays" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Birthdays</h4>
                  <p className="text-gray-600 text-sm">
                    Make birthdays extra memorable with custom menus, festive presentation, and warm hospitality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Button type="primary" className="ml-40 mt-2 px-7 py-3">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
