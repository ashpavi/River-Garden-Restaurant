import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function RestaurantFooter() {
  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <div className="text-center">
                <div className="text-orange-500 text-xl font-serif mb-1">🌳</div>
                <div className="text-xs font-semibold tracking-wider">
                  <div>RIVER GARDEN</div>
                  <div className="text-[10px] text-gray-600">RESTAURANT</div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              River Garden Restaurant offers peaceful riverside dining with fresh local dishes, warm hospitality, and stunning Walawa River views for unforgettable moments
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-serif mb-4 pb-2 border-b-2 border-orange-500 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <a href="#menu" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#offers" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Offers & Discounts
                </a>
              </li>
              <li>
                <a href="#space" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Space
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 pb-2 border-b-2 border-orange-500 inline-block">
              Links
            </h3>
            <ul className="space-y-2 mt-4">
              <li>
                <a href="#giftcard" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Gift card
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#catering" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Us */}
          <div>
            <h3 className="text-xl font-serif mb-4 pb-2 border-b-2 border-orange-500 inline-block">
              Contacts Us
            </h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-700 flex-shrink-0 mt-1" />
                <a href="tel:+94773456980" className="text-gray-700 hover:text-orange-500 transition-colors">
                  +94 77 345 6980
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-700 flex-shrink-0 mt-1" />
                <a href="mailto:info@rivergardenrestaurant.com" className="text-gray-700 hover:text-orange-500 transition-colors break-all">
                  info@rivergardenrestaurant.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-700 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  10.00AM- 10.00PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 text-lg font-serif italic text-gray-700">
            <a href="#appetizers" className="hover:text-orange-500 transition-colors">
              Appetizers & Starters
            </a>
            <a href="#main" className="hover:text-orange-500 transition-colors">
              Main Courses
            </a>
            <a href="#desserts" className="hover:text-orange-500 transition-colors">
              Desserts & Beverages
            </a>
            <a href="#book" className="hover:text-orange-500 transition-colors">
              Book A Table
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-right text-gray-600 text-sm">
            All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}