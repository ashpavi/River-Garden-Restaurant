import React from "react";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";


export default function RestaurantFooter() {
  return (
    <footer className="bg-[#f6f4f1] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        {/* top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: logo + description */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="w-16 h-16 rounded-md bg-white p-2 shadow-sm inline-flex items-center justify-center">
              <img
                src="/images/logo.jpg"
                alt="River Garden logo"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-gray-700 text-base leading-relaxed max-w-xs text-justify">
              River Garden Restaurant offers peaceful riverside dining with fresh local
              dishes, warm hospitality, and stunning Walawa River views for unforgettable moments
            </p>
          </div>

          {/* Navigation */}
          <div className="pt-2 ">
            <h4 className="font-serif text-xl text-gray-900 mb-3">Navigation</h4>
            <div className="h-0.5 w-16 bg-[#ff7a42] rounded mb-4" />
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#menu" className="hover:text-[#ff7a42] transition-colors">Menu</a></li>
              <li><a href="#aboutUs" className="hover:text-[#ff7a42] transition-colors">About us</a></li>
              <li><a href="#offers" className="hover:text-[#ff7a42] transition-colors">Offers & Discounts</a></li>
              <li><a href="#space" className="hover:text-[#ff7a42] transition-colors">Space</a></li>
            </ul>
          </div>

          {/* Links */}
          <div className="pt-2 ">
            <h4 className="font-serif text-xl text-gray-900 mb-3">Links</h4>
            <div className="h-0.5 w-12 bg-[#ff7a42] rounded mb-4" />
            <ul className="space-y-3 text-sm text-gray-700">
              <li><a href="#giftcard" className="hover:text-[#ff7a42] transition-colors">Gift card</a></li>
              <li><a href="#team" className="hover:text-[#ff7a42] transition-colors">Team</a></li>
              <li><a href="#catering" className="hover:text-[#ff7a42] transition-colors">Catering</a></li>
              <li><a href="#contacts" className="hover:text-[#ff7a42] transition-colors">Contacts</a></li>
            </ul>
          </div>

          {/* Contacts Us */}
          <div className="pt-2 lg:-ml-8">
            <h4 className="font-serif text-xl text-gray-900 mb-3">Contacts Us</h4>
            <div className="h-0.5 w-12 bg-[#ff7a42] rounded mb-4" />
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <FiPhone className="w-5 h-5 mt-1 text-gray-700 shrink-0" />
                <a href="tel:+94773456980" className="hover:text-[#ff7a42] transition-colors">+94 77 345 6980</a>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="w-5 h-5 mt-1 text-gray-700 shrink-0" />
                <a href="mailto:info@rivergardenrestaurant.com" className="hover:text-[#ff7a42] transition-colors break-all">
                  info@rivergardenrestaurant.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="w-5 h-5 mt-1 text-gray-700 shrink-0" />
                <span>10.00AM - 10.00PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* small menu links row */}
        <div className="mt-8 pt-6">
          <div className="flex flex-wrap gap-6 text-lg font-serif italic text-gray-700">
            <a href="#appetizers" className="hover:text-[#ff7a42] transition-colors">Appetizers & Starters</a>
            <a href="#main" className="hover:text-[#ff7a42] transition-colors">Main Courses</a>
            <a href="#desserts" className="hover:text-[#ff7a42] transition-colors">Desserts & Beverages</a>
            <a href="#book" className="hover:text-[#ff7a42] transition-colors">Book A Table</a>
          </div>
        </div>

        {/* divider + copyright */}
        <div className="mt-8 border-t border-gray-300 pt-6">
          <div className="flex items-center justify-between">
            <div /> {/* empty left to push copyright right */}
            <p className="text-gray-600 text-sm">All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
